---
author: art
date: 2017-11-28 08:29:46+00:00
layout: post
slug: wordpress-jekyll
title: Comment et pourquoi migrer de WordPress à Jekyll
categories:
- Dev
tags:
- blog
lang: fr
header:
  overlay_image: https://static.irz.fr/2017/11/adventure-times.gif
  overlay_filter: 0.5
  caption: "Photo credit: **Adventure Time**"
---


Changer le moteur de IRZ me fait de l'oeil, depuis quelques années maintenant. Parce qu’en y réfléchissant bien, **les articles sont du contenu statique**, et ils devraient par définition être servis de cette manière.


Les performances extraordinaires de mon serveur n'aident pas forcément, avec l'offre mutualisée ultra basique **OVH à 3€/mois**. Le temps de chargement est abominable : 10 secondes pour une page !  Et sans parler des plug-ins qui ralentissent encore le tout.

# Pourquoi changer ?

WordPress, c'est un peu comme un gruyère. Tu auras beau essayer boucher les trous, ça restera un fromage de merde. Je ne peux pas m'en prendre seulement à WordPress ou OVH, c'est une accumulation de petites choses qui font qu'il faut changer le moteur. Et ne pensez pas que je ne porte pas WP dans mon coeur, j'ai déployé de nombreux WP ses dernières années et c'est vraiment simple à prendre en main pour les clients, surtout quand ils veulent pouvoir modifier leurs contenus avec un espace administrateur, toussa.

Mais ce n’est pas mon cas. Alors hop ! C'est pas tout ça, mais y'a 350 articles et 1700 commentaires à mouliner dans cette affaire !

L'avantage de passer du couple Mutualisé-qui-rame, PHP/MySQL & un tas de plugin inutiles à Github Pages + Jekyll, c'est que :

- Github est une architecture qui tourne autour de Git, un outil open source de versionning, c'est-à-dire que le concept de backup est compris dans l'outil, en plus de la possibilité de manière assez simple de venir éditer un article [comme celui-ci par exemple].
- Les pages sont statiques, il n'y a donc pas mieux en termes de vitesse pour les visiteurs.
- Pas besoin de disposer d'un serveur surdimensionné, car les pages sont statiques, et les serveurs aiment bien ça, le contenu statique.
- En plus de ne pas avoir besoin d'un serveur surdimensionné, je suis même passé d'une facture de 43€/an d'hébergement à 0€, car Github Pages c'est gratuit.
- Vous avez une copie entière de votre site sur votre ordi.
- Vous pouvez faire tourner votre site `en local` avant de le lancer en production. Pour chaque version. Par exemple, si vous faites une modif de CSS ou de JS, vous pouvez tester en local la fonctionnalité avant de la balancer à l'arrache en prod. Ce qui devrait toujours être fait, mais c'est vite fait de vouloir patcher un truc directement via le fichier distant en FTP. Ouais, j'ai fais ça pendant mes années de jeunesse.

# Pourquoi Jekyll ?

J'ai testé plusieurs outils avant de choisir Jekyll, tel que [Hexo](https://hexo.io/) (qui lui ressemble beaucoup au niveau de la structure, à part que c'est en Node). Il y a aussi [Hugo](https://gohugo.io/), un moteur réputé pour la vitesse de la génération de ses sites, écrit en Go. Il a la particularité d'être compilé alors la plupart des outils de génération de sites statiques sont développés avec des langages interprétés<span class="ar" /><span class="mar">un langage interprété n'est pas compilé avant d'être exécuté</span>.

J'ai finalement choisi Jekyll, car c'est actuellement le projet le plus actif, et parce qu'il est compatible avec Github Pages, nativement, c'est-à-dire que Github détecte, quand vous créez une branche `gh-pages`, que vous allez générer du contenu statique.

Et dès que vous déployez le site, **si il n'y a pas d'erreurs**, il est mis en ligne automatiquement, c'est-à-dire qu'il n'y a aucun paramétrage nécessaire pour indiquer à Github : "Hey, j'ai foutu un Jekyll sur ce repo, déploie-le moi dude". Il le trouve, et il le lance.

Pour d'autres services, il est possible de les déployer **aussi** sur Github (ou d'autres outils tels que des Gitlabs), mais cela implique soit de passer par un outil de CI (Intégration Continue) qui va détecter les changements du dépôt Git et générer le site statique, ou de compiler soi-même lors de chaque modification.

# Prérequis

- [Npm](https://nodejs.org/en/) (il est compris avec NodeJS)
- [Jekyll](https://jekyllrb.com/docs/installation/)
- Un compte [GitHub](https://github.com)
- Du temps
- Beaucoup de café

# Initialisation de Jekyll

La [documentation](https://jekyllrb.com/docs/quickstart/) est très claire, après avoir installé Jekyll, vous devez exécuter les lignes suivantes :

```shell
# Créer un nouveau site dans le dossier ./site
jekyll new site

# Entrer dans le dossier
cd site

# Prévisualiser le site
bundle exec jekyll serve
```

# Export/Import

Bon, que faut-il faire  ?

- **Articles :** de WordPress à Jekyll, via un utilitaire d'import, qui va rendre les données compatibles.
- **Commentaires :** Il y a plusieurs solutions, j'ai choisi Staticman.
- **Images :** Je vais récupérer le dossier de wordpress, puis passer de `https://irz.fr/wp-content/uploads/` à `static.irz.fr`.

En premier lieu, il faut aller sur WordPress, puis dans *outils > Exporter* :

![wordpress export tool](https://static.irz.fr/2017/11/wordpress-export-tool.gif){: .align-center}

En faisant ceci, vous allez disposer d'un fichier XML qui comprendra toutes les données textuelles de votre site, c'est-à-dire que vous allez devoir gérer séparément les fichiers que vous avez téléchargé sur WP<span class="ar" /><span class="mar">images, vidéos porno, et tout ce que vous avez chopé sur 2bCalvi</span>.

Ensuite, nous allons utiliser [cet outil maison](https://github.com/arthurlacoste/wordpress2jekyll), qui permet de convertir l'ensemble des articles et commentaires :


```
npm i wordpress2jekyll -g
```

Puis utilisez la commande suivante pour exporter votre fichier xml :

```terminal
wp2jekyll chemin/vers/monfichier.xml dossier/destination/
```

## Les articles

Dans votre dossier de destination, un dossier `_posts` a dû apparaître. Il vous suffit a priori de déposer ce dossier dans votre projet Jekyll pour que l'ensemble des articles soient pris en comptes. Il en est de même pour les pages.

Attention, en ce qui concerne les articles, il est important de garder une structure de nom de fichier comportant Année-mois-date-slug, ceci fait parti intégrante du fonctionnement interne de Jekyll.


## Les commentaires

J'avais un blocage à propos de mes commentaires, mais il y a plusieurs solutions.

 **[Disqus] :**

- Totalement propriétaire et donc on perd la main sur une partie de son contenu
- Une vraie usine à gaz
- Pas trop recommandé pour le référencement (beaucoup de jus perdu)
- L'outil d'import est très simple à prendre en main

**[Discourse] :**

- Déjà déployé, c'est vraiment simple (chez [Digitalocean] via une image Docker en quelques minutes)
- Très ergonomique (par exemple [Korben] en héberge une instance si vous voulez voir à quoi ça ressemble)
- Par contre c'est plus un forum qu'un outil de commentaire, ce n'est pas "intégré" à votre site

**[Staticman] :**

- Il est possible au choix de créer son propre serveur ou d'utiliser celui du développeur
- Totalement intégré à la logique Git/Statique (chaque commentaire est un fichier, précompilé avec le reste de la page pour générer un fichier HTML)
- Par contre le système de notifications n'est pas très au point

J'ai décidé d'utiliser Staticman, mais il faudra vérifier si votre thème est compatible avec lui, ou l'implémenter à la main. En ce qui me concerne, je suis parti du thème Minimal Mistakes que j'ai ensuite [un peu modifié à ma sauce](https://github.com/arthurlacoste/irz.fr/tree/gh-pages). Si vous utilisez Staticman, l'outil que je vous ai présenté vous a pondu un dossier `comments`, qu'il faudra glisser dans le dossier `_data` de votre projet.

## Images & autres médias

Pour ce qui est des images, j'ai utilisé le dossier `wp-content/uploads` de WordPress, et j'ai ajouté un nouveau sous-domaine `static.irz.fr` qui renvoie vers ce dossier. Vous pouvez faire autrement, mais je vous déconseille de mettre vos images dans le même dépôt que votre site, surtout si vous avez plusieurs Gigas de média comme moi. Éventuellement un dépôt annexe.

![remplacer des liens d'images vers plein de fichiers, c'est facile](https://static.irz.fr/2017/11/replace-static-images.gif){: .align-center}

Ainsi les images contenues dans mes articles sont renommées en conséquence.

Pour me simplifier la vie au maximum, j'ai mis en place une API toute simple en PHP (car le serveur qui héberge mes médias comporte seulement le support de php) qui me permet d'uploader directement un fichier en ligne de commande, et qui me renvoie l'URL du fichier pour l'insérer dans mon article en cours d'écriture :

```php
<?php

if(hash('sha256',$_POST['pwd'])=='sha256password') {

  if (isset($_FILES['f'])) {

    $baseurl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] &&
    !in_array(strtolower($_SERVER['HTTPS']),array('off','no'))) ? 'https' : 'http';
    $baseurl .= '://'.$_SERVER['HTTP_HOST'];
    $today = date("/Y/m/");
    $path = $_SERVER['DOCUMENT_ROOT'] . $today;
    $folder = $_SERVER['DOCUMENT_ROOT'] . $today . $_FILES['f']['name'];

    if ( ! is_dir($path)) {
      mkdir($path);
    }

    if(move_uploaded_file($_FILES['f']['tmp_name'], $folder)) {
      print_r($baseurl . $today . $_FILES['f']['name']);
    }
  }
} else {
  print_r('Wrong Password');
}
?>
```

Et je l'utilise comme ceci :

```shell
curl -F "pwd=monmotdepasse" -F "f=@/my/file.png" https://static.irz.fr
```

# Tests

Je vous recommande d'utiliser un fichier `packages.json`, communément utilisé dans les packages NPM pour gérer vos commandes. Cela permet de raccourcir et sauvegarder vos commandes.

Après avoir [installé NPM](https://nodejs.org/en/), initialisez dans votre dossier un fichier `packages.json` :

```shell
npm init
```

Puis ajoutez les lignes suivantes :

Comme ceci :

```json
  "scripts": {
    "uglify": "uglifyjs mes/scripts.js assets/js/_main.js -c -m -o assets/js/main.min.js",
    "start": "bundle exec jekyll serve --limit_posts 15 --verbose true --watch"
  }
```

Ainsi, les scripts se lanceront via la commande suivante : `npm run monscript`. Exemple pour lancer la commande uglify :

```bash
npm run uglify
```

## Jekyll Serve

J'ai choisi d'utiliser cette commande pour mes tests et lorsque j'écris un nouvel article (pour un rendu proche du temps réel).

```terminal
bundle exec jekyll serve --limit_posts 15 --verbose true --watch
```

- **bundle exec jekyll :** lance jekyll
- **serve :** génère un serveur à l'adresse `http://localhost:4000`
- **--limit_posts 15 :** limite la génération aux 15 derniers articles, soit une dizaine de secondes en ce qui me concerne
- **--verbose true :** parce que j'aime bien voir ce qu'il se passe
- **--watch :** indique à Jekyll de reconstruire le site lors de modifications de vos fichiers (attention, le fichier `_config.yml` est ignoré, il faudra relancer à la main dans ce cas là)


# Déploiement

Pour le déploiement Il suffit de disposer d'un compte Github, puis de créer un dépôt. Après avoir mis l'ensemble de vos fichiers sur GitHub (avec GitHub Destktop, même si votre connaissance de Git est faible, c'est très intuitif), allez dans "Settings" sur votre dépôt GitHub en ligne, et allez dans la section `GitHub Pages`. Sélectionnez la branche master, ainsi votre site sera en ligne sous quelques secondes.

Dans la même section, vous pouvez aussi utiliser votre propre domaine personnalisé, et utiliser les adresses suivantes en `type A` dans votre gestionnaire DNS :
- 192.30.252.153
- 192.30.252.154

## HTTPS

Si vous utilisez le domaine de Github, vous restez par défaut en HTTPS, mais si vous souhaitez utiliser votre propre domaine, vous devrez passer par un serveur de distribution de contenu qui vous ajoutera cette fonctionnalité. Pour ma part, j'utilise Cloudflare qui me permet de forcer l'utilisation du site en SSL.


  [comme celui-ci par exemple]: https://github.com/arthurlacoste/irz.fr/edit/gh-pages/{{page.path}}
  [grunt-jekyll]: https://github.com/dannygarcia/grunt-jekyll
  [^1]: Un langage interprété n'est pas compilé avant d'être exécuté
  [Disqus]: https://disqus.com
  [Digitalocean]: https://www.digitalocean.com
  [Discourse]: https://www.discourse.org
  [Korben]: https://tech.korben.info
  [Staticman]: https://staticman.net
