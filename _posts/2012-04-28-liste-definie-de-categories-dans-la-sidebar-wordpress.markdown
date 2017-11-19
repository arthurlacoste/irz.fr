---
author: art
comments: true
date: 2012-04-28 20:07:43+00:00
layout: post
redirect_from: liste-definie-de-categories-dans-la-sidebar-wordpress/
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

Suite à des demandes récurrentes, voici comment faire pour afficher non pas toutes les catégories (j'en ai une liste longue comme le bras et il est possible d'explorer tout ça dans la page [Archives](https://irz.fr/archives)), mais une liste définie de catégories à afficher en barre latérale.

Perso, j'utilise [Exec-PHP](http://bluesome.net/post/2005/08/18/50/) et ajoute directement le code dans un nouveau Widget type Texte (Apparence > Widgets).


```php
$args = array (
  'number'             => 10,
  'orderby'            => 'count',
  'order'              => 'DESC',
);

wp_list_categories( $args );
```



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


  * [Tutoriel](https://irz.fr/) (29)


  * [Photo](https://irz.fr/) (19)


  * [Apple](https://irz.fr/) (19)


  * [Video](https://irz.fr/) (18)


  * [Dessins](https://irz.fr/) (17)


  * [3615MyLife](https://irz.fr/) (17)


  * [Parcours](https://irz.fr/) (16)


  * [Web](https://irz.fr/) (16)


  * [Logiciels](https://irz.fr/) (12)


  * [Wordpress](http://irz.fr/wordpress) (11)


Pour plus de détails à propos des paramètres que prend en compte le tableau de [wp_list_categories](http://codex.wordpress.org/Template_Tags/wp_list_categories), un petit tour sur le Codex vous fera le plus grand bien.
