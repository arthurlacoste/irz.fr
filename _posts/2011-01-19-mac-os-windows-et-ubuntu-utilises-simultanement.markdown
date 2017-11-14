---
author: art
comments: true
date: 2011-01-19 18:20:19+00:00
layout: post
link: https://irz.fr/mac-os-windows-et-ubuntu-utilises-simultanement/
slug: mac-os-windows-et-ubuntu-utilises-simultanement
title: Mac OS, Windows et Ubuntu utilisés simultanément
wordpress_id: 97
categories:
- Apple
- Logiciels
- Tutoriel
- Ubuntu
- Windows
---

Pour le commun des mortels, j'avoue que c'est d'une utilité plus que moyenne. A moins d'utiliser des logiciels qui sont sur chacune de ces systèmes d'exploitation, il n'y a même aucune utilité. Cependant, les développeurs (autant les développeurs web que ceux d'applications lourdes et multiplateformes) apprécierons d'avoir un rendu sur les plates-formes les plus utilisées.

Voici une petite illustration de ce que je dis sous la forme d'un screencast.

[embed]http://www.dailymotion.com/video/xghwau_utiliser-windows-mac-os-et-ubuntu-simultanement_tech[/embed]

Je reprendrais pour compléter la vidéo sans la paraphraser les solutions employées pour reproduire un contexte propice à l'utilisation des ces systèmes d'exploitations simultanés.

Tout d'abord, le point qui va sans doute porter à la plupart d'entre vous le plus de problèmes, c'est l'émulation de Mac OS X. En effet, à l'heure qu'il est, l'OS d'Apple est très mal émulé et ne supporte pas très bien d'être utilisé dans une machine virtuelle, et pas davantage au sein d'un hackintosh, comprenez une installation barbare sur n'importe quelle machine non mac, qui entraine des complications, notamment au niveau de la prise en charge des drivers (son, ethernet, ...) et autres problèmes (mise en veille impossible, ..).

La meilleure solution reste celle d'émuler **depuis un mac** (votre machine principale est un mac) ubuntu et Windows. Pour émuler, 3 logiciels sont disponibles : Parallels Desktop, VMWare Fusion, et VirtualBox. Les deux premiers sont payants, et le dernier et gratuit.

Personnellement, j'ai une préférence pour VMWare avec la possibilité de lancer des applications Windows de manière transparente (comme dans la vidéo).

Pour Ubuntu, j'ai privilégié la solution de me connecter en ssh à un réel ordinateur sous ubuntu server, ce qui à l'avantage que c'est un ordinateur à part qui peut effectuer des traitements, même une fois votre ordinateur principal éteint.


