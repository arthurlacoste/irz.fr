---
author: art
comments: true
date: 2013-02-08 15:02:10+00:00
layout: post
link: https://irz.fr/exclure-une-categorie-de-la-page-daccueil-de-votre-blog/
slug: exclure-une-categorie-de-la-page-daccueil-de-votre-blog
title: Exclure une catégorie de la page d'accueil de votre blog
wordpress_id: 1438448767
categories:
- Overgeek
- Tutoriel
- Wordpress
tags:
- is_home
- query_posts
- WP_Query
---

La solution est indiqué dans le [codex de Wordpress](http://codex.wordpress.org/Template_Tags/query_posts), mais pour les non anglophones, je vais vous traduire ça, parce que je suis un mec sympa. Pour exclure une catégorie de la page d'accueil, il suffit, dans le fichier index.php situé à la racine de votre thème d'ajouter ces quelques lignes de code **a placer juste après les balises "<?"** :

    
    if (is_home()) {
    	query_posts("cat=-5");
    }


Pour trouver l'ID (5 dans l'exemple) de votre catégorie, aller sur la page de modification de votre catégorie Articles > Catégories, puis cliquer pour Modifier l'une de vos catégories. Votre URL devrait ressembler à ça, et l'id correspond à ce qui est en gras : "edit-tags.php?action=edit&taxonomy=category&tag_ID=**5**&post_type=post".

Si vous vous voulez exclure plusieurs catégories, il suffit d'ajouter une virgule et hop :

    
    if (is_home()) {
    	query_posts("cat=-5,-6");
    }



Vous pouvez aussi dans le même genre, exclure une catégorie d’une boucle WordPress, en enlever des catégories en les spécifiant dans la fonction wp_query :

    
    WP_Query( array( 'cat' => -5));



Et pour plusieurs catégories :

    
    WP_Query( array( 'cat' => array( -5, -6 )));



