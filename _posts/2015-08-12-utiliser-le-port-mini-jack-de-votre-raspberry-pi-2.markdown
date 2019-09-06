---
title: Utiliser le port mini jack de votre Raspberry Pi 2
date: 2015-08-12 09:17:54 Z
categories:
- Divers
- Overgeek
author: art
comments: true
layout: post
redirect_from: utiliser-le-port-mini-jack-de-votre-raspberry-pi-2/
wordpress_id: 1438449660
---

Pour utiliser le port mini jack du Raspberry Pi 2, il faut faire 2 choses.<!-- more -->

La première :


    
    amixer cset numid=3 1



Le chiffre 1 à la fin signifie que vous souhaitez utiliser le mini jack, 2 l'audio du HDMI.


    
    sudo nano /usr/share/alsa/alsa.conf
    



Changez la ligne “pcm.front cards.pcm.front” par “pcm.front cards.pcm.default”.
