---
author: art
comments: true
date: 2012-06-11 14:01:33+00:00
layout: post
redirect_from: slugme-permalien-javascript-slug/
slug: slugme-permalien-javascript-slug
title: Générer un slug à la volée en javascript
wordpress_id: 1438448476
categories:
- Développement
- Tutoriel
- Web
tags:
- fonction
- javascript
- permalien
- slug
---

Un slug (ou Permalien pour les francophones) est la partie d'une url qui permet d'identifier clairement à quoi correspond celle-ci, en passant à travers le traditionnel identifiant numérique propre à la majorité des bases de données.

# A quoi ça sert en fait ?

La page `mapage.com/produits/canon` est plus parlante (et plus sexy !) que `mapage.com/produits.php?cat=5`.


Lorsque vous saisissez un article, vous avez parfois besoin de générer un slug correspondant à votre titre ou conforme aux règles que vous souhaitez vous imposer. Quoi qu'il en soit, ceci est une petite fonction javascript qui vous permettra de pré-remplir à la volée votre slug pour vérifier qu'il soit en conformité avec vos besoins.



# Démo

[Voir la page de démo](http://arthurlacoste.github.io/js-slug-me/test/browser.htm)


# Code source

Il est disponible sur [Github en téléchargement](https://github.com/arthurlacoste/js-slug-me). Pour les utilisateurs de lignes de commande, vous pouvez utiliser NPM :

```
npm i slugme -S
```

La fonction peut être utilisé ainsi dans le navigateur :

```html
<input value="Être en été est à mi-chemin de noël" id="slug-this" onkeyup="slugLive('slug-this','slugme');" />
Slug : «&nbsp;<span id="slugme"></span>&nbsp;»

<script src="../index.js"></script>

<script type="text/javascript">

const slugLive = function (input,output) {
  const valueIn = document.getElementById(input).value;
  var idOut = document.getElementById(output);
  idOut.innerHTML = slugme(valueIn);
}

slugLive('slug-this','slugme');

</script>

```

Ou directement en tant que package npm :

```js
const slugme = require('slugme');
const result = slugme('Être en été est à mi-chemin de noël');

console.log(result);

//=> etre-en-ete-est-a-mi-chemin-de-noel

```


Inspiration : [Ben Truyman](https://gist.github.com/1211400) & [jquery-slug-plugin](http://code.google.com/p/jquery-slug-plugin/)
