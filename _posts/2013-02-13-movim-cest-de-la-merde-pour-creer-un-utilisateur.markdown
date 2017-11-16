---
author: art
comments: true
date: 2013-02-13 12:49:34+00:00
layout: post
redirect_from: movim-cest-de-la-merde-pour-creer-un-utilisateur/
slug: movim-cest-de-la-merde-pour-creer-un-utilisateur
title: Movim, c'est de la merde pour créer un utilisateur
wordpress_id: 1438448799
categories:
- Liveblog
- Web
tags:
- réseau social
- réseaux sociaux
---

Vous savez que j'aime ce qui est intuitif & ergonomique.

Ben Movim c'est pas encore ça. Niveau ergonomie, ça va, mais en ce qui concerne l'intuitivité j'ai déjà vu mieux. Lors de la création d'un utilisateur, Movim affiche une page chelou avec des messages "Erreur à la connexion au serveur XMPP" lorsque l'on sélectionne un site... C'est pas très beau. Sans compter le fait de devoir scroller 30 secondes pour arriver à la suite du formulaire...

[![movim-creation-utilisateur-xmpp](https://static.irz.fr/2013/02/movim-creation-utilisateur-xmpp.png)](https://irz.fr/recherche?q=movim-creation-utilisateur-xmpp)

L'autre jour j'ai essayé d'installer Movim, puis [j'ai bloqué à la création d'un utilisateur](https://irz.fr/movim-cest-de-la-merde-pour-creer-un-utilisateur). C'est vrai qu'à part les install de WordPress et des projets de dev perso, j'ai plus trop l'habitude de sortir des sentiers battus.

Je ne suis même pas arrivé à me connecter à l'interface d'administration (dispo à l'adresse "site/admin" normalement). Pourtant je me souviens bien de l'identifiant que j'avais entré. Ça à dû buger (ou alors je suis de mauvaise fois et j'ai oublié mes id/mdp). Bref je supprime tout le ftp, je remet une autre version (ou la même je sais plus), et là j'ai le droit à un joli site/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/admin/ ! Avec le fameux message de Chrome "Cette page Web présente une boucle de redirection.". Bref.

Du coup je voulais virer mon install sur la base MySQL, mais je me suis retrouvé avec un problème pour retrouver les bases SQL : elles ne sont pas préfixées ! Alors autant si la base ne contenait que Movim j'aurais tout viré tranquillement, autant la, NON !
