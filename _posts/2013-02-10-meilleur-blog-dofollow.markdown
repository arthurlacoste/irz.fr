---
title: Je suis le meilleur blog dofollow
date: 2013-02-10 12:05:31 Z
categories:
- Overgeek
- Tutoriel
- Wordpress
tags:
- add_filter
- do follow
- php
- str_replace
- wp_rel_nofollow
author: art
comments: true
layout: post
redirect_from: meilleur-blog-dofollow/
wordpress_id: 1438448770
---

C'est important d'**avoir une haute estime de soi** ! Non, je ne suis pas le meilleur des blogs DoFollow de la blogosphère Française, seulement l'un de ses représentants.

Le dofollow pour un lien, c'est tout simplement de ne pas comporter l'attribut **`rel="nofollow"`**.



## Mais pourquoi le Dofollow ?



Le dofollow est **un état esprit** laissant libre aux personnes amenées à commenter sur votre blog de laisser un lien sur votre blog, et qu'il soit référencé ! Car après tout, internet est un échange. En participant aux articles avec un commentaires construit, je pense qu'il est de bonne guerre de vous laisser à vous aussi la possibilité de faire grimper votre référencement.



## Comment mettre son WordPress en Dofollow ?



Par défaut, les commentaires Wordpress sont en nofollow. Il vous faut donc un plugin, ou ajouter quelques lignes de code dans le fichier fonction du thème de votre blog :



    // Fonction Do Follow
    function dofollow($attr) {
        return str_replace('" rel="nofollow', '', $attr);
    }
    add_filter('comment_text', 'dofollow');
    remove_filter('pre_comment_content', 'wp_rel_nofollow', 15);

    function enleve_nofollow($attr){
        return str_ireplace(' nofollow', '', $attr);
    }
    add_filter('get_comment_author_link', 'enleve_nofollow');





## Comment savoir si un blog est en Dofollow ?



Voilà un petit tuto **sous chrome** pour vous expliquer comment savoir si un blog est en dofollow.

Bon déjà allez sur le site sur lequel vous voulez commenter (ou pas). Sur un commentaire avec un lien (généralement le pseudo ou le prénom de la personne qui commente) effectuez un clique droit, puis aller sur "inspecter l'élément". Vous devriez avoir un fenêtre qui apparaît comme sur l'écran ci-dessous :

<img alt="nofollow-reconnaitre-blog-dofollow-rel" data-src="https://static.irz.fr/2013/02/nofollow-reconnaitre-blog-dofollow-rel.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2013/02/nofollow-reconnaitre-blog-dofollow-rel.png" />

Sur la ligne surlignée, si vous disposez le l'attribut **`rel="nofollow"`** comme sur l'exemple, alors ces liens ne sont pas référencés, et par déduction le blog n'est pas en dofollow.



## Un petit conseil pour la fin



Si vous souhaitez utiliser IRZ pour commenter et avoir des lien en dofollow, pas de problème ! Cependant, je n'accepte pas tout les commentaires. Je privilégie les commentaires construits, de plus de 150 caractères (à la louche, une ou deux bonne phrase minimum), et apportant une valeur ajouté à l'article. Déjà, ne commentez pas cet article, tout le monde le fait. Voici ce que je vous conseille de faire :
1 Allez sur la page d’accueil du site ou faites une recherche par mot-clef.
2 Trouvez un article se rapprochant de votre thématique (mais ce n'est pas obligatoire).
3 Lisez l'article !
4 Utilisez votre savoir ou une expérience personnelle pour commenter celui-ci



Si vous suivez ces conseils, il y 99% de chances que je valide votre commentaire. Irz est un site très vaste qui parle de sujets des plus variés. De plus, si aucun sujet ne se rapporte à votre domaine et que vous êtes vraiment inspiré, vous pouvez [proposer un article via notre page de contact](https://irz.fr/contact), en essayant de faire minimum 400 mots. Bien entendu, un lien dofollow vous sera attribué !
