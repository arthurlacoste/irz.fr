---
title: Créer un point d'accès wifi avec Tor sur votre Raspberry Pi
date: 2015-12-05 18:11:13 Z
categories:
- Divers
- Tutoriel
author: tom
comments: true
layout: post
redirect_from: point-acces-wifi-tor-raspberry-pi/
wordpress_id: 1438449694
---

Bonjour ! Dans ce tutoriel je vais vous expliquer comment crée un AP (Point d'Accès Wifi) avec un Raspberry pi en y ajoutant ensuite les services de tor. Je vais utiliser Vim comme éditeur de texte et citer des numéro de lignes pour les fichiers a modifier. Histoire de vous éviter de chercher.<!-- more -->
Vérifiez toujours que la ligne que vous modifiez est la bonne, le numéro que je vous donnerais peut être différents.
Le raspberry que j'utilise et le modele B+ 512MB avec Raspbian Wheezy.
Les manipulations que nous allons voir ensemble sont donc valable avec n'importe quelle ordinateur qui tourne sous Debian. Le Raspberry et un choix intelligent, notamment pour sa faible consommation d'énergie et son faible coût.

Je me connecte en ssh avec la commande :


    
    # ssh pi@192.168.X.X 



Il s'agit de l'adresse ip du pi, tapez nmap pour la connaître.

Allez petit café et petit jo***.. Euh... Une petite clope je veux dire et go !

Apres démarrage du raspi, faites impérativement les mises à jour :


    
    # apt-get update
    # apt-get upgrade



Buvez tranquillement votre café.

Assurez vous d'etre en root. Ensuite nous allons installer les services qui nous seront nécessaire :


    
    # apt-get install vim isc-dhcp-server hostapd iptables





### Mise en place du DHCP



Editez le fichier .conf :


    
    # vim /etc/dhcp/dhcp.conf



Mettez en commentaire les lignes suivantes (logiquement il s'agit des lignes 13 et 14) :


    
    option domain-name "example.org";
    option domain-name-servers ns1.example.org, ns2.example.org;



Activez la ligne 21 :


    
    authoritative;



Cette ligne indique au serveur dhcp qu'il va s'occuper du sous-réseau.

Ensuite, ajoutez les lignes suivantes à la fin du fichier, puis sauvegardez.


    
    subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.10 192.168.1.50;
    option broadcast-address 192.168.1.255;
    option routers 192.168.1.1;
    default-lease-time 600;
    max-lease-time 7200;
    option domain-name " local ";
    option domain-name-servers 8.8.8.8, 8.8.4.4;
    }



Ces lignes sont là pour définir le rank du sous réseau, adresse du routeur, le mask..... Cela va de soit : il ne faut pas mettre l'adresse de son routeur. Sans mon cas l'adresse local de mon réseau et 192.168.0.x donc 192.168.1.x convient très bien. Après rien ne vous empêche d'utiliser 192.168.21.x (si vous êtes fan de Blackjack) ou 192.168.69.x (si vous êtes fan de... enfin bref). Vous créez votre sous-réseau donc mettez ce que vous voulez !

Editez le fichier isc-dhcp-server :


    
    # vim /etc/default/isc-dhcp-server



Changez la ligne "21 INTERFACES=''" en rajoutant votre interface wifi :


    
    INTERFACES='wlan0'





### Configuration des interfaces Wlan0 et eth0





#### Editez le fichier interface



Le but ici va être de configurer wlan0 et eth0 en static. eth0 est connecté au routeur en tant que client dhcp et wlan0 sera l'AP. il est important d'être vigilant, aucun conflit n'est possible entre les 2 !

Voici mon fichier des interfaces, vous pouvez le copier/coller, vérifiez bien que les adresses sont bonnes pour vous aussi (en fonction de votre dhcp.conf et de votre sous réseau actuel).


    
    # vim /etc/network/interfaces
    
    #############################################
    auto lo
    iface lo inet loopback
    
    auto eth0
    iface eth0 inet static
    address 192.168.10.15
    gateway 192.168.0.1
    netmask 255.255.255.0
    network 192.168.0.254
    
    auto wlan0
    #allow-hotplug wlan0
    iface wlan0 inet static
    address 192.168.1.1
    netmask 255.255.255.0
    #wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
    
    ##############################################
    



Vous pouvez sauvegarder et quitter.



#### Config AP



Créez le fichier hostapd.conf :


    
    # vim /etc/hostapd/hostapd.conf



Ajoutez les lignes suivantes (modifiez les lignes ssid et wpa_pass comme bon vous semble !) :


    
    interface=wlan0
    driver=rtl871xdrv
    ssid=onion/framboise
    hw_mode=g
    channel=1
    macaddr_acl=0
    auth_algs=1
    ignore_broadcast_ssid=0
    
    #config wpa2
    wpa=2
    wpa_passphrase=Hack-t3ur.de.films.x
    wpa_key_mgmt=WPA-PSK
    wpa_pairwise=TKIP
    rsn_pairwise=CCMP
    
    #config wpa
    # wpa=1
    # wpa_passphrase=passphrase
    # wpa_key_mgmt=WPA-PSK
    # wpa_pairwise=TKIP
    



Vous pouvez enlever les lignes de conf wpa si vous souhaitez faire un open AP. Sauvegardez et quittez.

Maintenant il faut indiquer à votre systeme où trouver ce fichier de config hosap que l'on vient de créer :


    
    # vim etc/default/hostapd
    



Trouvez et modifiez la ligne suivante (normalement c'est la ligne 10) :


    
    #DAEMON_CONF=''
    



Vous devez enlever le commentaire et indiquer le chemin du fichier hostapd :


    
    DAEMON_CONF= »/etc/hostapd/hostapd.conf »
    



Sauvegardez et quittez.



#### Configuration du NAT




    
    # vim /etc/sysctl.conf



Ajoutez en bas : net.ipv4.ip_forward=1

Sauvegarder et quitter.

ensuite pour activer le NAT rentrez cette commande :


    
    # sh -c " echo 1 > /proc/sys/net/ipv4/ip_forward"





#### Création des regles iptables




    
    # iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
    # iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT
    # iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT
    



Vérification des tables


    
    # iptables -t nat -S



Sauvegarde des tables :


    
    # sh -c " iptables-save > /etc/iptables.ipv4.nat "



retourner sur le fichier interfaces


    
    # vim /etc/network/interfaces



Ajoutez à la fin :


    
    up iptables-restore < /etc/iptables.ipv4.nat





#### Mise à jour d'Hostapd



Vous devez télécharger le dernier driver et l'installer. Pour ceci rendez vous sur [touslesdrivers.com](http://touslesdrivers.com) par exemple et téléchargez celui qui convient, puis installez le (avant, enlevez le fichier hostapd dans /usr/sbin/) :


    
    # unzip 0001-RTL8188C_8192C_USB_linux_v4.0.2_9000.20130911.zip
    # cd 0001-RTL8188C_8192C_USB_linux_v4.0.2_9000.20130911/wpa_supplicant_hostapd/
    # tar -xvf wpa_supplicant_hostapd-0.8_rtw_r7475.20130812.tar.gz
    # cd wpa_supplicant_hostapd-0.8_rtw_r7475.20130812/hostapd/
    # make
    # make install



Vous avez le temps de vous faire un autre petit café pendant ce temps...


    
    # mv hostapd /usr/sbin/
    # chmod 755 /usr/sbin/hostapd





#### Test, visualisation en dynamique des connections sur wlan0




    
    # /usr/sbin/hostapd /etc/hostapd/hostapd.conf



Essayez de vous connecter avec un autre pc ou votre smartphone, vous devriez voir les adresses mac qui tentent de se connecter.



#### Activation des services




    
    # service hostapd start
    # service isc-dhcp-server start



Lancement des services au démarrage :


    
    # update-rc.d hostapd enable
    # update-rc.d isc-dhcp-server enable





#### WPA supplicant



Si vous avez un message du style "wpa_supplicant: /sbin/wpa_supplicant daemon failed to start", vous pouvez le supprimer en désinstallant wpa supplicant de cette manière :


    
    # mv /usr/share/dbus-1/system-services/fi.epitest.hostap.WPASupplicant.service ~/





#### Installation et configuration de Tor




    
    # apt-get install tor



Ensuite modifiez le fichier de config torrc :


    
    # vim /etc/tor/torrc



Descendez tout en bas et ajoutez (pensez à mettre les bonnes adresses) :


    
    Log notice file /var/log/tor/notices.log
    VirtualAddrNetwork 10.192.0.0/10
    AutomapHostsSuffixes .onion,.exit
    AutomapHostsOnResolve 1
    TransPort 9040
    TransListenAddress 192.168.1.1
    DNSPort 53
    DNSListenAddress 192.168.1.1
    



Enregistrez et quittez.

Créez le fichier log :


    
    # touch /var/log/tor/notices.log
    # chown debian-tor /var/log/tor/notices.log
    # chmod 664 /var/log/tor/notices.log



Vous pouvez vérifier avec :


    
    # ls -l /var/log/tor



Démarrage de tor :


    
    # service tor start



Lancement des services au démarrage :


    
    # update-rc.d hostapd enable
    # update-rc.d isc-dhcp-server enable
    # update-rc.d tor enable



Voilà, c'est fini ! faites un reboot et vérifiez si vos services fonctionnent correctement :


    
    # service hostapd status
    # service isc-dhcp-server status
    # service tor status



<a href="https://irz.fr/recherche?q=12077356_1149485491743392_1805889955_n"><img alt="12077356_1149485491743392_1805889955_n" data-src="https://static.irz.fr/2015/12/12077356_1149485491743392_1805889955_n-640x694.jpg" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2015/12/12077356_1149485491743392_1805889955_n-640x694.jpg" /></a>

Vous pouvez maintenant vous connecter a votre AP avec le mot de passe que vous avez défini.
normalement si vous faite un tour sur https://check.torproject.org/ vous devriez avoir le message ' Félicitation vous êtes en train d'utiliser tor '.

J'aurais trouvé utile de restreindre l'accès à certain site comme Facebook... etc (au cas ou un ami se connecte sur cet AP) mais malheureusement je n'ai pas encore trouvé comment faire. Avec iptables ceci ne marche pas. Et oui, on utilise tor ! et je pense que les contrôles parentaux seront aussi inefficaces face a tor..

Sources : [Alexandre Vilain](http://alexandrevilain.ovh/blog/) / [raspberrypi.org](https://www.raspberrypi.org/) / [debian.org](http://debian.org) / [debian-facile.org](http://debian-facile.org) / [adafruit.com](http://adafruit.com) / [superuser.com](http://superuser.com) / [ubuntu-fr.org](http://ubuntu-fr.org)
