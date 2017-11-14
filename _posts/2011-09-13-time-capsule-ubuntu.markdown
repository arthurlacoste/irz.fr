---
author: art
comments: true
date: 2011-09-13 12:17:28+00:00
layout: post
link: https://irz.fr/time-capsule-ubuntu/
slug: time-capsule-ubuntu
title: Connecter votre Time Capsule à Ubuntu
wordpress_id: 1438448397
categories:
- Tutoriel
- Ubuntu
post_format:
- Galerie
tags:
- cifs
- créer un lanceur
- dhcp
- fstab
- ip
- mac
- mount
- nas
- time capsule
- Time Machine
- umount
---

Une fois n’est pas coutume nous retournons sous Ubuntu aujourd'hui pour tenter de monter une Time Capsule (une sorte de NAS de Apple) à votre OS préféré (ou pas), j'ai nommé Ubuntu.

Ce tutoriel part du principe que votre Time Capsule fonctionne déjà très bien sur votre Mac, en somme, qu'elle est déjà installé.

Dans un premier temps nous allons avoir besoin de fixer l'adresse IP de votre Time Capsule sur votre Mac. Cette étape n'est pas obligatoire mais elle permet de ne pas avoir a changer l'IP de votre Time Machine sur votre installation d'Ubuntu à chaque caprice du DHCP.

Dans Airport Utility, ouvrez votre Time Capsule avec "Manual Setup" en bas à gauche de la fenêtre :
![](https://static.irz.fr/2011/09/hiro-2011-09-13-at-12.56.53.png)

Puis dans l'onglet Internet > TCP/IP, configurez l'IPV4 en manuel.

![](https://static.irz.fr/2011/09/hiro-2011-09-13-at-12.47.28.png)

Validez tout ça et si jamais vous avez un message d'erreur vis à vis des DNS (je n'ai pas capturé cette page), cochez la petite case en bas de la page qui quelques chose comme "On s'en fou c'est parti !".

Nous avons donc besoin de plusieurs informations pour mettre au point la ligne de commande qui va bien sous Ubuntu. Il nous faut donc :



	
  * l'adresse IP de votre Time Capsule (sur mes captures, c'est 192.168.1.38)

	
  * le mot de passe que vous avez défini pour accéder à vos fichiers

	
  * et pour finir, le nom que vous avez donné à votre disque (vous pouvez le voir dans la capture suivante, c'est "Data" chez moi)


![](https://static.irz.fr/2011/09/hiro-2011-09-13-at-12.49.11.png)

Il faut maintenant créer un dossier qui va servir de point de montage à notre Time Capsule :

    
    sudo mkdir /media/TimeCapsule


J'avoue, je manque d'inspiration pour le nom du dossier.

Il y a plusieurs manières de faire, comme par exemple créer un lanceur (clique droit sur le bureau > Créer un lanceur)

![](https://static.irz.fr/2011/09/Capture-Creer-lanceur.png)

Dans le champ commande, tapez un truc du style (ça c'est ma commande perso) :

    
    sudo mount.cifs //192.168.1.38/data/ /media/TimeCapsule -o pass=motdepasse


Biensûr, il faut remplacer l'IP par votre IP, data par votre nom de disque, "/media/TimeCapsule" par le nom du dossier que vous avez créé plus tôt, motdepasse par votre mot de passe.

Ce qui est aussi, voir plus interessant, c'est de monter automatiquement le disque réseau au démarrage de votre ordianteur. Pour cela, il va falloir modifier le fichier fstab :

    
    sudo gedit /etc/fstab


Dans le fichier, ajoutez cette ligne en veillant à bien effectuer les modifications necessaires au bon fonctionnement du montage :

    
    //192.168.1.38/data/ /media/TimeCapsule cifs password=motdepasse,rw,iocharset=utf8,file_mode=0777,dir_mode=0777


Sauvegardez votre fichier. Dans le terminal, démontez puis remontez vos disques :

    
    sudo umount -a
    sudo mount -a


Si vous n'avez pas fait d'erreurs, tout vos disques se montent comme par enchantement.

Bonne chance et à la prochaine !
