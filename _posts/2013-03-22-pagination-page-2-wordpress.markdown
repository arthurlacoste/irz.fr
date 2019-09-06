---
title: Pagination capricieuse sur Wordpress
date: 2013-03-22 12:41:56 Z
categories:
- Overgeek
- Tutoriel
- Wordpress
tags:
- get_query_var
- query_posts
author: art
comments: true
layout: post
redirect_from: pagination-page-2-wordpress/
wordpress_id: 1438448955
---

Parfois, votre thème est un peu capricieux, si bien que vous ne pouvez même pas passer à la page de 2 ("site.com/page/2/") de vos articles depuis la page d'accueil ! Pour rectifier le tir, voici un petit bout de code à placer au début de la page index.php de votre thème :

    
    if (is_home()) {
    	$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    	query_posts("paged=$paged");
    }



Et voilà, vous n'aurez plus de problèmes avec la pagination de vos articles !
