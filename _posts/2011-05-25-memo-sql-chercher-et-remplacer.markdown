---
author: art
comments: true
date: 2011-05-25 16:17:13+00:00
layout: post
link: https://irz.fr/memo-sql-chercher-et-remplacer/
slug: memo-sql-chercher-et-remplacer
title: 'Mémo SQL : chercher et remplacer'
wordpress_id: 161
categories:
- Tutoriel
- Wordpress
---

Dans le contexte du changement de certaines données dans une base de données Wordpress, et pour ne pas a avoir a modifier l'url manuellement pour l'ensemble des articles, j'ai déniché cette petite fonction replace() SQL dont je n'avais pas souvenir d'avoir rencontré.


<blockquote>
update `wp_posts`  set post_content = replace(post_content, 'http://url/', 'http://nouvelle-url/');
</blockquote>


wp_posts est votre table, post_content est le champ concerné par l'édition.


<blockquote>
REPLACE ( string_expression , string_pattern , string_replacement )

**string_expression**
Il s'agit du champ concerné par la recherche.

**string_pattern**
Il s'agit de la sous-chaîne à rechercher. string_pattern peut être de type binaire ou caractère. string_pattern ne peut pas être une chaîne vide ('').

**string_remplacement**
Il s'agit de l'expression de chaîne de remplacement. string_replacement peut être de type binaire ou caractère. Peut être une chaîne vide
</blockquote>
