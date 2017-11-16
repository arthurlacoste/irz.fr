---
author: art
comments: true
date: 2013-01-06 07:00:28+00:00
layout: post
redirect_from: supprimer-menu-header-twenty-twelve-wordpress/
slug: supprimer-menu-header-twenty-twelve-wordpress
title: Comment supprimer le menu au dessus de l'image de header du thème Twenty Twelve
  de WordPress
wordpress_id: 1438448578
categories:
- Overgeek
- Tutoriel
- Wordpress
tags:
- éditeur de thème
- header.php
- Twenty Twelve
---

Etant en train de travailler sur un site WordPress avec le nouveau thème de base Twenty Twelve (que je tiens à acclamer au passage !), il arrive parfois que l'on souhaite un site simplisme, sans page "a propos", ni "contact". J'ai dit : **pas de page**.

Petite explication du pourquoi du comment avant de vous montrer l'astuce. Le seul lien de ce menu, c'est la page d'accueil. Or le bandeau header dirige déjà vers la page d'accueil. Cela ajoute donc une barre disgracieuse et anti-ergonomique, car surchargeant la mise en page du site pour rien.

Sur votre menu d'administration de WordPress, allez dans Apparence, Éditeur  Dans la colonne de gauche, sélectionnez **En-tête** (header.php) comme sur la catpure ci dessous :

[![modification-fichier-header-theme-twenty-twelve](https://static.irz.fr/2013/01/modification-fichier-header-theme-twenty-twelve-1024x763.png)](https://static.irz.fr/2013/01/modification-fichier-header-theme-twenty-twelve.png)

Dans la page, vous aller avoir un bout de texte qui commence par "<nav id" et qui fini par "</nav>". Comme dans la capture plus haut, vous pouvez mettre ce texte en commentaire (en mettant "<? /*" avant et "*/ ?>" après. Ou alors vous appuyez sur la touche suppr de votre clavier.

C'est le moyen le plus simple, mais le moins maintenable, en effet, si le thème est mis à jour, votre "rustine" va disparaître. Le meilleur moyen est de [réaliser un thème enfant](http://wpchannel.com/creer-themes-enfants-child-themes-wordpress/), ce qui va permettre de garder toutes les caractéristiques de votre thème et de le personnaliser), et d'ajouter (merci [Julio](http://www.boiteaweb.fr/)) une fonction php approprié pour filtrer le contenu indésirable :

    
    add_filter( 'wp_nav_menu_args', 'wp_nav_menu_args_cb' );
    function wp_nav_menu_args_cb( $args ) {
    	$args['fallback_cb'] = '__return_null';
    	return $args;
    }


Avouez, ça fait du bien.
