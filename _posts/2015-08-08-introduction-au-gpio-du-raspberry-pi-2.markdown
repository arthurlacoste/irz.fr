---
author: art
comments: true
date: 2015-08-08 13:13:34+00:00
layout: post
link: https://irz.fr/introduction-au-gpio-du-raspberry-pi-2/
slug: introduction-au-gpio-du-raspberry-pi-2
title: Introduction au GPIO du Raspberry Pi 2
wordpress_id: 1438449661
categories:
- Développement
- Overgeek
- Tutoriel
---

Il y a quelques semaines, j'ai craqué pour un starter Pack Raspberry Pi 2. N'ayant pas de serveur, je me suis dit que ce serait idéal pour programmer quelques tâches cron et bidouiller un peu.<!-- more -->

En effet, en parlant de bidouille, mn starter pack comprenait un petit kit "Traffic Light", avec 3 led, un assortiment de câbles, résistances, et un bouton poussoir, tout ce qu'il faut pour se lancer dans les prémices de l'électronique.

Il y a déjà plusieurs articles (même en Français) qui évoquent l'utilisation des led sur Raspberry Pi, mais aucun a ma connaissance ne mettent en exergue la version 2, avec le système a 40 broches. Vous me direz "c'est la même chose". Oui et non. Le principe est le même, les algos sont similaires, mais quelques points changent.

Déjà, il y a une pléthore de système de numérotation des broches. J'en ai compté jusqu'à 3 pour la version 40 broches. Nous allons donc passer tou cela en revue, afin de vous évitez quelques fuites de neuronnes.

Le projet de démonstration que nous allons faire repose sur l'utilisation de 2 leds. Le but étant de les faire clignoter tour à tour. Le schéma pour un circuit de led est assez simple :




    
  * GPIO > Résistance > Led > Terre



Détaillons tout cela :


    
  * GPIO : le terme désigne une broche qui va transmettre du courant. On peut choisir si elle est en mode in ou out (entrée ou sortie) et si elle transmet ou non du courant (1 ou 0). Si elle est en out & à 1, le courant est envoyé.

    
  * Résistance : dans notre démonstration, nous allons utiliser une résistance de 75Ω. Elle va permettre de stabiliser la quantité de courant circulant sur le circuit, afin d'éviter la surchauffe de celui-ci.

    
  * Led : c'est elle qui va clignoter ;)

    
  * Terre : notre circuit va se terminer par une broche terre, nommé "ground" sur les schéma de broches.



En plus de cela, nous allons avoir besoin d'une breadboard (littéralement planche à pain) : il s'agit en réalité d'un prototype de circuit électronique. Si vous utilisez le même que moi, elle est connecté ainsi :

![breadboard](https://static.irz.fr/2015/08/breadboard-640x359.jpg)

Voici un schéma de la broche :

![gpio-raspberry-pi-2](https://static.irz.fr/2015/08/gpio-raspberry-pi-2.png)

Tout d'abord, ce visuel est à imaginer en mettant votre Raspberry Pi 2 le port Ethernet en bas à gauche.

Comme vous pouvez le voir, il y a plusieurs numérotations. La première et la plus simple, une numérotation de 1 à 40, la numéro 40 étant en bas à droite. La seconde, la numérotation GPIO est celle qui est utilisée par défaut par wiringPi (nous allons en parler un peu plus tard) et qui indique que la pin 40 comporte la numérotation GPIO 29.

J'ai fait le choix de dupliquer le code source du projet en plusieurs langages, dans un premier temps nous allons utiliser un script bash afin de lancer des commandes qui pourraient être directement tapés dans le terminal, et dans un second temps en python, un "vrai" langage qui va permettre de réaliser n'importe quelle opération/projets par la suite.

Nous allons avoir besoin d'utiliser la librairie wiringPi, qui permet de changer simplement l'état de chaque pin.

Pour cela, nous allons mettre à jour apt-get :


    
    sudo apt-get update
    sudo apt-get upgrade



Récupérer le projet Git en question :


    
    git clone git://git.drogon.net/wiringPi



Une fois téléchargé, il vous reste à compiler le tout :


    
    cd wiringPi
    ./build



Une fois ceci effectué, vous pouvez lancer cette commande, qui vous donnera un état de chacune de vos pins.


    
    gpio readall



Voici mon tableau :


    
     +-----+-----+---------+------+---+---Pi 2---+---+------+---------+-----+-----+
     | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
     +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
     |     |     |    3.3v |      |   |  1 || 2  |   |      | 5v      |     |     |
     |   2 |   8 |   SDA.1 |   IN | 1 |  3 || 4  |   |      | 5V      |     |     |
     |   3 |   9 |   SCL.1 |   IN | 1 |  5 || 6  |   |      | 0v      |     |     |
     |   4 |   7 | GPIO. 7 |   IN | 1 |  7 || 8  | 1 | ALT0 | TxD     | 15  | 14  |
     |     |     |      0v |      |   |  9 || 10 | 1 | ALT0 | RxD     | 16  | 15  |
     |  17 |   0 | GPIO. 0 |   IN | 0 | 11 || 12 | 0 | IN   | GPIO. 1 | 1   | 18  |
     |  27 |   2 | GPIO. 2 |   IN | 0 | 13 || 14 |   |      | 0v      |     |     |
     |  22 |   3 | GPIO. 3 |   IN | 0 | 15 || 16 | 0 | IN   | GPIO. 4 | 4   | 23  |
     |     |     |    3.3v |      |   | 17 || 18 | 0 | IN   | GPIO. 5 | 5   | 24  |
     |  10 |  12 |    MOSI | ALT0 | 0 | 19 || 20 |   |      | 0v      |     |     |
     |   9 |  13 |    MISO | ALT0 | 0 | 21 || 22 | 0 | IN   | GPIO. 6 | 6   | 25  |
     |  11 |  14 |    SCLK | ALT0 | 0 | 23 || 24 | 1 | ALT0 | CE0     | 10  | 8   |
     |     |     |      0v |      |   | 25 || 26 | 1 | ALT0 | CE1     | 11  | 7   |
     |   0 |  30 |   SDA.0 |   IN | 1 | 27 || 28 | 1 | IN   | SCL.0   | 31  | 1   |
     |   5 |  21 | GPIO.21 |   IN | 1 | 29 || 30 |   |      | 0v      |     |     |
     |   6 |  22 | GPIO.22 |  OUT | 0 | 31 || 32 | 0 | IN   | GPIO.26 | 26  | 12  |
     |  13 |  23 | GPIO.23 |  OUT | 1 | 33 || 34 |   |      | 0v      |     |     |
     |  19 |  24 | GPIO.24 |   IN | 0 | 35 || 36 | 0 | IN   | GPIO.27 | 27  | 16  |
     |  26 |  25 | GPIO.25 |   IN | 0 | 37 || 38 | 0 | IN   | GPIO.28 | 28  | 20  |
     |     |     |      0v |      |   | 39 || 40 | 0 | IN   | GPIO.29 | 29  | 21  |
     +-----+-----+---------+------+---+----++----+---+------+---------+-----+-----+
     | BCM | wPi |   Name  | Mode | V | Physical | V | Mode | Name    | wPi | BCM |
     +-----+-----+---------+------+---+---Pi 2---+---+------+---------+-----+-----+



Voyons ensemble les différents éléments du tableau :




    
  * Physical : numérotation des pin de 1 à 40 comme nous avons vu dans précédemment.

    
  * V : quand une pin est sur 1, un signal de 3.3v est envoyé

    
  * Mode : Si le courant sort ou entre (out ou in)

    
  * Name : le nom de la pin (0v étant les pin terre/ground)

    
  * wPi : numérotation utilisé dans les commandes gpio

    
  * BCM : une autre numérotation, qui date de la première version de Raspberry Pi



Si l'on regarde un peu le cicuit de notre projet, nous pouvons voir que les pin out correspondent aux GPIO 22 & 23, et au physical 31 & 33 :

Erratum : le cable jaune n'est pas bien positionné, sur la Raspi, il doit se trouver tout en bas à gauche, sur la masse (merci Xhark).

[![schéma_bb](https://static.irz.fr/2015/08/schéma_bb-640x388.png)](https://irz.fr/recherche?q=schema_bb)

Ou en réel :

![cicuit-led](https://static.irz.fr/2015/08/cicuit-led-640x480.jpeg)

Donc pour faire fonctionner notre script, nous allons ouvrir les pin GPIO 23 & 23 :


    
    gpio mode 22 out
    gpio mode 23 out



Si votre circuit est déjà fait, c'est très bien, sinon allez-y ! Pour allumer les deux led tapez les lignes suivante :


    
    gpio write 23 1
    gpio write 22 1



Ensuite nous allons créer un fichier led.sh pour écrire notre script bash :


    
    sudo nano led.sh



Voici le script :


    
    #!/bin/bash
    
    while true
    do
            gpio write 23 1
            gpio write 22 0
            sleep 0.2
            gpio write 23 0
            gpio write 22 1
            sleep 0.2
    done



Il est lancé dans une boucle infinie, et positionne tour à tour une des deux led sur la position 1. gpio write 23 1 lance le courant.

Il se lance via la commande suivante :


    
    sh led.sh



Le même script en python s'écrit ainsi :


    
    import os
    from time import sleep
    
    import RPi.GPIO as GPIO
    
    GPIO.setwarnings(False)
    
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(33, GPIO.OUT)
    GPIO.output(33,True)
    GPIO.setup(31, GPIO.OUT)
    GPIO.output(31,True)
    
    while True:
            GPIO.output(33,True)
            GPIO.output(31,False)
            sleep(0.2);
            GPIO.output(33,False)
            GPIO.output(31,True)
            sleep(0.2);



Il y a quelques différence avec le script bash :




    
  * La définition en "out" des pin est défini directement dans le script.

    
  * La numérotation utilisé n'est pas la même, il s'agit de la Physical. En utilisant la fonction GPIO.setmode(GPIO.BOARD), j'ai demandé au script d'utiliser la numérotation originale de la broche. Il n'est pas possible d'utiliser la numérotation GPIO, mais vous pouvez utiliser la numérotation BCM ce qui donne la 6 et la 13.



Ceci est donc une base, maintenant que vous savez utiliser les led, vous pouvez reliez l'allumage d'une led à un événement :


    
  * led qui clignote si vous avez des visiteurs sur votre site,

    
  * vous alerter de la réception d'un mail

    
  * etc...



J'espère que ce petit tutoriel vous a plu !
