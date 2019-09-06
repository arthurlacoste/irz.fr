---
title: Régler le problème des NaN minutes / heures restantes sur Chromium Ubuntu
date: 2011-09-09 09:50:18 Z
categories:
- Divers
- Tutoriel
- Ubuntu
tags:
- "/etc/default/locale"
- chrome
- chromium
- LC_NUMERIC
- nano
- terminal
- ubuntu
author: art
comments: true
layout: post
redirect_from: nan-minutes-heures-restantes-sur-chromium-ubuntu/
wordpress_id: 1438448384
---

Il y a un petit soucis apparemment dérangeant dans le gestionnaire de téléchargement de Chromium qui ne nous donne pas le temps que va mettre son fichier à se télécharger, mais un NaN, à cause d'un problème lié à l'utilisation des virgules comme séparateur des nombres décimaux. Le problème à été réglé avec [un patch](http://codereview.chromium.org/7004021), mais pour le commun des mortels, vous pouvez effectuer une petite opération qui vous permettra de ne pas attendre que la prochaine version de chrome sorte.

En utilisant par exemple nano sur le terminal (c'est tellement rare de nos jours :p), ouvrez le fichier /etc/default/locale :

    
    sudo nano /etc/default/locale



Une fois dans ce fichier, ajoutez donc cette ligne à la suite :

    
    LC_NUMERIC="POSIX"



Déconnexion, reconnexion.
