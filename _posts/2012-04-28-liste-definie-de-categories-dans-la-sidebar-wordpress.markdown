---
author: art
comments: true
date: 2012-04-28 20:07:43+00:00
layout: post
link: https://irz.fr/liste-definie-de-categories-dans-la-sidebar-wordpress/
slug: liste-definie-de-categories-dans-la-sidebar-wordpress
title: Afficher une liste définie de catégories dans la sidebar de votre blog WordPress
wordpress_id: 1438448473
categories:
- Tutoriel
- Wordpress
post_format:
- Galerie
tags:
- Array
- catégories
- Exec-PHP
- php
- sidebar
- widget
- wordpress
- wp_list_categories
---

Suite à des demandes récurrentes, voici comment faire pour afficher non pas toutes les catégories (j'en ai une liste longue comme le bras et il est possible d'explorer tout ça dans la page [Archives](http://irz.fr/archives/)), mais une liste définie de catégories à afficher en barre latérale.

Perso, j'utilise [Exec-PHP](http://bluesome.net/post/2005/08/18/50/) et ajoute directement le code dans un nouveau Widget type Texte (Apparence > Widgets).

    
    
     1,
    	'number'             => 10,
    	'orderby'            => 'count',
    	'order'              => 'DESC',
    );
    
    wp_list_categories( $args ); ?>
    



Voici la liste des variables utilisées :



	
  * **show_count** : à 1, affiche le nombre d'articles de chaque catégorie

	
  * **number** : nombre de catégories à afficher

	
  * **orderby** : par quel champ trier ? Le choix est entre :

    * ID

    * name (valeur par défaut)

    * slug

    * count

    * term_group


	
  * **order** : DESC indique qu'on commence par le plus gros chiffre, normal




Le résultat final ressemblera à ceci :

	
  * [Tutoriel](http://irz.fr/category/tutoriel/) (29)

	
  * [Photo](http://irz.fr/category/photo/) (19)

	
  * [Apple](http://irz.fr/category/apple/) (19)

	
  * [Video](http://irz.fr/category/video/) (18)

	
  * [Dessins](http://irz.fr/category/dessins/) (17)

	
  * [3615MyLife](http://irz.fr/category/3615mylife/) (17)

	
  * [Parcours](http://irz.fr/category/parcours/) (16)

	
  * [Web](http://irz.fr/category/web/) (16)

	
  * [Logiciels](http://irz.fr/category/logiciels/) (12)

	
  * [Wordpress](http://irz.fr/wordpress) (11)


Pour plus de détails à propos des paramètres que prend en compte le tableau de [wp_list_categories](http://codex.wordpress.org/Template_Tags/wp_list_categories), un petit tour sur le Codex vous fera le plus grand bien.
