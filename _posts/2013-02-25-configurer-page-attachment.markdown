---
author: art
comments: true
date: 2013-02-25 12:58:24+00:00
layout: post
redirect_from: configurer-page-attachment/
slug: configurer-page-attachment
title: 'Configurer une page d''image attachée à votre thème '
wordpress_id: 1438448855
categories:
- Overgeek
- Tutoriel
- Wordpress
tags:
- attachment
- wp_get_attachment_image_src
---

Aujourd'hui nous allons voir ensemble comment mettre en place une page de fichiers images attachés personnalisée. Tout d'abord, sachez que vous pouvez trouver (si votre thème le prévoit) ce modèle sous le nom **attachment.php**. Si vous n'en disposez pas, dupliquer et renommez le fichier single.php, il constitue une bonne base de travail pour disposer d'une structure de page similaire à votre thème.<!-- more -->

Il est aussi possible de reprendre la structure de la page sans colonne, toujours en fonction de votre thème, pour que votre image prenne le plus d'espace possible. Parce que j'imagine que c'est un peu le but de l'opération. Voici ce que vous pouvez insérer afin de disposer d'une image prenant toute la largeur de votre page :

    
    
    <div class="entry-attachment">
    id ) ) : $att_image = wp_get_attachment_image_src( $post->id, 'large'); ?>
    	<p class="attachment">
    		<a href="<?php echo wp_get_attachment_url($post->id); ?>" rel="attachment" title="<?php the_title(); ?>">
    		<img src="<?php echo $att_image[0];?>" alt="<?php $post->post_excerpt; ?>" class="attachment-medium" width="100%"></img></a>
    	</p>
    </div>
    



Dans le code, ce qui nous intéresse est donc le second paramètre de la fonction **wp_get_attachment_image_src()**. Par défaut, Wordpress génère un résultat en "médium", c'est à dire grosso modo et par défaut) 300px de largeur, ce qui est rarement suffisant pour remplir la largeur de votre container d'article (qui est plutôt supérieur à 700 pixels). Pour gérer la largeur de votre image, vous pouvez soit envoyer un tableau avec les dimensions array(500,300), soit mettre un mot clef qui définira la largeur selon votre gré :



	
  * 'thumbnail' : 150px x 150px max (par défaut)

	
  * 'medium' : 300px x 300px max (par défaut)

	
  * 'large' : 640px x 640px max (par défaut)

	
  * 'full' : taille originale de l'image



Vous pouvez cependant modifier ces valeurs en allant **Réglages > Médias** dans votre espace d'administration de WordPress, pour que le mot clef que vous prenez colle à votre page, et histoire d'optimiser tout ça, parce que charger une image de 200 pixels de large quand on en a que 700, c'est mal.

Donc en ce qui nous concerne, si vous souhaitez prendre toute la largeur de votre page, on va commencer par prendre des mesures. Prenez un post ou vous avez une image pleine page. Ou alors - si vous n'en avez pas - vous mettez une image avec un code du style :


    
    <img src="https://www.google.fr/images/srpr/logo3w.png" alt="" width="100%"></img>


Aller donc sur votre article sous chrome, et faites un clique droit > [inspecter l'élément](http://irz.fr/?s=inspecter+l%27élément). Ensuite placez-vous sur l'image en question et faites de nouveau clique droit > [inspecter l'élément](http://irz.fr/?s=inspecter+l%27élément), vous devriez avoir une petite fenêtre vous indiquant la taille que prend réellement l'image sur le site (cadre jaune).

<img alt="attachment-largeur" data-src="https://static.irz.fr/2013/02/attachment-largeur.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2013/02/attachment-largeur.png" />

Vous n'avez plus qu'à aller dans Réglages > Médias, puis dans Grande taille, mettez le premier chiffre dans "Largeur maximale", et 2000 dans le second, histoire de couvrir la tailles des images en mode portrait.


