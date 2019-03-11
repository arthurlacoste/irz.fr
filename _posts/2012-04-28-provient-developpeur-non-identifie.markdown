---
author: art
comments: true
date: 2012-04-28 11:01:32+00:00
layout: post
redirect_from: provient-developpeur-non-identifie/
slug: provient-developpeur-non-identifie
title: Résoudre "Votre application" provient d'un développeur non identifié
wordpress_id: 1438448469
categories:
- Apple
- Tutoriel
post_format:
- Galerie
tags:
- Apple
- DP3
- Gatekeeper
- Logiciel
- Mountain Lion
- Sécurité
- winrar mac
---

Depuis la DP3 de Mac OSX Mountain Lion, il est possible que le message : "Cette application **provient d'un développeur non identifié**, vos préférences de sécurité sont définies pour bloquer l'installation venant de développeurs non identifiés." vous incommode lors de l'installation d'un logiciel téléchargé via internet.

<img alt="No alt" data-src="https://static.irz.fr/2012/04/hiro-2012-04-27-à-19.02.06.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2012/04/hiro-2012-04-27-à-19.02.06.png" />

En effet, depuis la DP3 de Mountain Lion, Apple force le passage par le App Store (par défaut) pour des prétextes de sécurité, alors que c'est manifestement une manière de contrôler, à l'instar du iPhone, ce qui est installé sur votre mac. Pour palier ce message inconfortable, il faut aller dans Préférences systèmes > Personnel > Sécurité. En bas de page, cliquez **n'importe où** dans la partie "Autoriser les applications téléchargées de :". Si jamais vous (ou votre chat) n'avez pas accès à l'édition de ces paramètres, cliquez sur le cadenas en bas à gauche de la fenêtre pour y avoir accès. Vous aurez alors besoin de vos identifiants administrateurs.

<img alt="No alt" data-src="https://static.irz.fr/2012/04/hiro-2012-04-27-à-19.14.24.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2012/04/hiro-2012-04-27-à-19.14.24.png" />

Il existe une solution alternative pour permettre l'ouvrir votre application au cas par cas : en faisant "clique droit > ouvrir" lorsque vous êtes dans le finder. Vous aurez alors la possibilité d'ouvrir l'application en bypassant le contrôle de Gatekeeper.

Sous Mac OS Sierra, vous devez ouvrir le terminal (qui se trouve dans Applications > Utilitaires), puis tapez cette ligne de commande :


    
    sudo spctl –master-disable
