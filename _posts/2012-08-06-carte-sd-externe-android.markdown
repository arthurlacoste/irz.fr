---
title: Trouver le chemin de sa carte SD sous Android
date: 2012-08-06 09:30:13 Z
categories:
- Android
- Google
- Tutoriel
tags:
- Carte SD
- cm10
- cm7
- cm9
- cyanogenmod
- ics
- jb
- rom
author: art
comments: true
layout: post
redirect_from: carte-sd-externe-android/
wordpress_id: 1438448486
---

La ROM de Cyanogen nous fait perdre les pédales quand il s'agit de retrouver sa carte SD externe. En effet, le lieu du montage de ce disque est différent de celui des ROM officielles de Google.

Dans un premier temps, voyons ou se trouve le disque interne:


    
    /mnt/sdcard/



Vous êtes déjà perdus ? En effet, le terme sdcard désigne la carte interne de votre dispositif (téléphone, tablette, etc) Android. Cela peut être une micro SD, une SD

le chemin habituel pour trouver votre carte externe est le suivant :

    
    /storage/extSdCard



Ou alors (pour les versions plus anciennes d'android) :

    
    /mnt/sdcard/external_SD





## Et sur CyanogenMod ?


Sur CyanogenMod voici le chemin :



	
  * CyanogenMod 7 : **/mnt/emmc**

	
  * CyanogenMod 9 : **/mnt/emmc**

	
  * CyanogenMod 10 : **/mnt/extSdCard**

	
  * CyanogenMod 10.1 : **/mnt/extSdCard**


