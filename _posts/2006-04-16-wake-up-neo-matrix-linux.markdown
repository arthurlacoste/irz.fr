---
author: art
comments: true
date: 2006-04-16 22:57:06+00:00
excerpt: Quand j’étais gamin, j’ai pendant longtemps cherché à comprendre l'intérêt
  du hacking sous toutes ces formes.  Des "disclaimers" régissant les règles de chaque
  team aux tutoriaux bien ficelés pour réduire à néant une boite mail, en passant
  par l'installation de chevaux de troie sur les ordinateur des amis, il y avais de
  quoi faire. D'ailleurs c'est comme ça que j'ai appris les rudiments de l'informatique.
layout: post
redirect_from: wake-up-neo-matrix-linux/
slug: wake-up-neo-matrix-linux
title: Faire le "Wake up, Neo" de Matrix sur Linux
wordpress_id: 845
categories:
- Liveblog
tags:
- linux
- matrix
- shell
- wake up
---

<img alt="matrix wake up" data-src="https://static.irz.fr/2010/02/matrix-wake-up.jpg" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2010/02/matrix-wake-up.jpg" />Quand j’étais gamin, j’ai pendant longtemps cherché à comprendre l'intérêt du hacking sous toutes ces formes.  Des "disclaimers" régissant les règles de chaque team aux tutoriaux bien ficelés pour réduire à néant une boite mail, en passant par l'installation de chevaux de troie sur les ordinateur des amis, il y avait de quoi faire. D'ailleurs c'est comme ça que j'ai appris les rudiments de l'informatique.

Le but, c'est quand même de faire quelque chose d'animé, comme dans le film. L'écran se réveille tout seul, et s'anime de ces quelques phrases :



<blockquote>Wake up, Neo
The matrix has you
Follow the white rabbit
Knock, Knock, Neo.</blockquote>



Une image parle bien plus que de longues phrases :

<a href="https://static.irz.fr/2009/02/wakeup.gif"><img alt="No alt" data-src="https://static.irz.fr/2009/02/wakeup.gif" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2009/02/wakeup.gif" /></a>

Ce matin, en attaquant un serveur debian avec putty pour écrire un  script et cherchant de la doc pour faire un joli script bien rodé, une  crise d’imagination m’a foudroyé : reprendre cette vieille idée. Quelques recherches sur internet m'ont permis d'écrire un petit fichier shell :

    
    #!/bin/sh
    # Fichier « Wake up »
    
    # inutile : écriture lente
    function tapelentement {
    	echo
    	for((i=0;i<${#1};i++)) ; do
    		echo -n « ${1:$i:1} »
    	sleep 0.1
    	done
    	sleep $2
    	clear
    	echo
    	sleep $3
    	clear
    }
    
    # juste pour le plaisir : Matrix
    function matrix {
    	clear
    	tapelentement  » Wake up, Neo… » 2 1
    	tapelentement  » The matrix has you » 3 1
    	tapelentement  » Follow the white rabbit. » 2 2
    	tapelentement  » Knock, Knock, Neo. » 4 3
    }
    
    # lance la fonction
    matrix


Je suis pas le seul à avoir eu [cette idée](http://forum.ubuntu-fr.org/viewtopic.php?pid=2258751).
