---
title: Pensée sur un programme d'intelligence artificielle (#1)
date: 2011-06-19 06:00:47 Z
categories:
- Logiciels
tags:
- IA
author: art
comments: true
layout: post
redirect_from: intelligence-artificielle/
wordpress_id: 1438447744
---

Aujourd'hui, j'ai décidé de déterrer un article datant du **3 février 2009** qui était sagement entreposé dans un vieux blog hors-ligne sur le sujet de l'intelligence artificielle, alors un peu d'indulgence...



Inutile de vous dire que j'ai toujours ruminé cette idée dans ma tête et que c'est sans doute pour avoir les compétences suffisantes à l'élaboration d'un logiciel d'intelligence artificielle que je me suis spécialisé dans le domaine du développement en informatique (Bien que le choix d'un BTS en Informatique de gestion n'ai pas été judicieux, finalement..).

Comme Wikipédia nous le dit, l'intelligence artificielle, ceci couvre pas mal de chose : la robotique, la reconnaissance de caractères, l'interface vocale, la traduction automatique... Je sait ce que je veut faire : un programme en ligne de commande, qui va avoir d'une part un algorithme d'apprentissage automatique, et de l'autre être capable d'exécuter des actions et de communiquer en langage naturel en se rapprochant au maximum de l'intelligence artificielle lourde, ou le programme pourrait aller jusqu'à "éprouver l'impression d'une réelle conscience de soi", de « vrais sentiments » (quoi qu’on puisse mettre derrière ces mots), et « une compréhension de ses propres raisonnements ».

Je voit bien mon programme, (nommons-le tout de suite : Eva) et ses capacités. Sur un ordinateur quelconque, il serait installé avec une distribution de linux (genre debian). L'idée est de proposer au serveur une interface semblable à une conversation textuelle entre l'utilisateur et Eva.

Les domaines d'applications sont les suivants :



	
  * Adaptation de "commandes" unix en français ("installe moi bzip2" au lieu de "# apt-get install bzip2")

	
  * Discussion et prise de conscience

	
  * Connection de Eva en tant que client msn/skype/facebook chat (avec un "objectif de conversation", par exemple obtenir une/des information)

	
  * Avoir un style dans son écriture

	
  * Parler d'un sujet ("Evoque moi les origines des echecs" va parler des echecs, mais seulement de son histoire)

	
  * Une interface pour d'autres applications et modules écris pour Eva.

	
  * une capacité à écrire des algorithmes (type scripts, fichiers C basiques)

	
  * une personnalité (des choix, des questions, l'impatience ?)

	
  * un module d'apprentissage (en continu sur internet)

	
  * une capacité à se remettre en question (se recompiler ?)


Il sera important de pouvoir répondre à ce type de question :

	
  * "Peut-on manger demain avec un ami décédé l'année dernière et pourquoi ?"

	
  * "Que représente pour moi le frère de mon père ?"

	
  * "X pèse 50 kg, Y pèse 70 kg, Z pèse 60 kg. Qui est le plus lourd ?"



Basée sur une base de donnée MySQL reprenant les mots de la langue française, il serait en mesure d'évaluer une faute d'orthographe. J'aurai tendance à vouloir développer le logiciel en Qt (C++), mais Qt reste un environnement de développement graphique, donc pas vraiment adapté. A creuser.

Enfin, voila, je viens de faire le tour du propriétaire. Vous avez compris, ce n'est pas une mince affaire. Je vais commencer par un module "simple" de restitution d'information. Genre faire une phrase pour dire la météo.
