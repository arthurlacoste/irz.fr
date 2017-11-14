---
author: art
comments: true
date: 2011-05-24 15:34:13+00:00
layout: post
link: https://irz.fr/memo-mamp-resoudre-error-could-not-connect-to-mysql-server/
slug: memo-mamp-resoudre-error-could-not-connect-to-mysql-server
title: 'Mémo MAMP : Résoudre "Error: Could not connect to MySQL server!"'
wordpress_id: 149
categories:
- Développement
- Tutoriel
tags:
- Apache
- erreur
- mac
- mamp
- mamp mysql ne démarre pas
- mysql
- php
---

En installant Mac OS X Lion (entre autres, car le problème se pose aussi avec Leopard, Snow leopard ou bien Mountain Lion), il est possible que le MySQL de votre version de MAMP ne fonctionne plus. Parfois on n'a pas envie de comprendre le pourquoi comment et origine du problème ! A celui-ci, allez dans le terminal Mac OS, et tapez les incantations magique suivantes :


    
    ps aux | grep mysql
    lsof -i
    killall -9 mysqld



Et voila, redémarrez MAMP, tout fonctionnera comme par enchantement (j'ai aussi lancé un # sudo chmod -Rfv 777 /Applications/MAMP pour écarter tout problème de permission, mais ce n'est pas utile, en fait...).

Bon je remet les mains dans le camboui.

[Source](http://forum.mamp.info/viewtopic.php?p=742#p742)
