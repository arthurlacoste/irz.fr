---
title: 'Calculer un âge automatiquement pour le mettre dans une page wordpress '
date: 2010-03-26 20:42:41 Z
categories:
- Tutoriel
- Wordpress
tags:
- âge
- Exec-PHP
- html
- php
- wordpress
author: art
comments: true
layout: post
redirect_from: calculer-un-age-automatiquement-pour-le-mettre-dans-une-page-wordpress/
wordpress_id: 1438447530
---

J'ai **18** ans.

C'est le genre de **phrase dynamique** que vous allez pouvoir insérer dans votre blog après avoir lu cet article.


# Le shortcode à la sauce WordPress


La méthode la plus propre est d'ajouter ces lignes de codes dans le fichier de fonction php de votre thème WordPress :



```php    
function monage($atts) {
	$date_naissance = $atts['annee'];
	$arr = explode('/',$date_naissance);
	$age = date('Y',time() - strtotime($arr[2].'-'.$arr[1].'-'.$arr[0])) - 1970;
	return $age;
}
add_shortcode('diff','monage');
```    



En ajoutant le shortcode suivant dans votre article/page `[diff annee="21/12/1988"]` (et en changeant votre année de naissance), vous allez avoir votre âge apparaître.



# Méthode barbare semi barbu


Finalement, c'est assez simple, même pour quelqu'un qui ne programme pas du tout, qui ne touche pas au code. Non pas que je veuille vous faire mettre les doigts dans le camboui, je vais quand même vous expliquer la manipulation. Il faut tout d'abord [installer Exec-Php](http://wordpress.org/extend/plugins/exec-php/), un plugin Wordpress qui permet d'insérer du code PHP dans n'importe quel article ou page du site.

Comme il est dit sur la [page d'installation du plugin](http://wordpress.org/extend/plugins/exec-php/installation/) :

1. Téléchargez le plugin Exec-PHP et ouvrir l'archive
2. copier en le contenu dans le dossier /plugin/ de votre site
3. Activez le plugin dans le menu 'plugin' de l'interface d'administration
4. Configurer les préférences si besoin est

Pour ceux que ca intéresse, voici **le code** du calcul de l'âge :



21/12/1988 étant à remplacer par sa propre date de naissance au format JJ/MM/AAAA, pour éviter les mauvaises surprises. Ensuite il y a le code d'affichage :



Biensûr, ce code n'affichera que l'âge, c'est à dire `[age annee="21/12/1988"]`, et rien d'autre. A vous de construire la phrase dans laquelle il ira introduire. A **mettre n'importe où** dans l'article, l'affichage de votre âge dynamique sera notamment du plus bel effet sur votre page A propos.

Seul petit bémol, vous serez obligés de mettre votre éditeur en mode HTML, car le mode visuel vous foutra en l'air le script.
