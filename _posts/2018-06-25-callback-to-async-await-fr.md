---
author: art
date: 2018-08-23 08:29:46+00:00
last_modified_at:
layout: post
slug: callback-to-async-await
title: La manière la plus simple d'utiliser ses fonction callback en async/await
categories:
- dev
---


Les callbacks imbriqués sont diabolique. Et dans cet enfer, une porte au loin semble tous nous éblouir. Oui, je veux parler de async/await.

C’est la manière la plus simple de les gérer tout ce qui rend les callback détestable et permet ainsi de disposer d'une meilleure lisibilité. Mais le problème, c’est que vous avez des dizaines de modules dont tout le code utilise des callback. Et pour ça, il y a une solution.

Node propose une fonction toute faite faisant partie du module `util` : promisify(). L'idée est comme son nom l'indique, de transformer un callback en promise, qui pourra être par la suite utilisé sous sa forme async/await.

Comme [on peut le voir dans la documentation](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original), les callbacks classique commençant par une erreur (la norme d'usage) `(err, value) => ...` fonctionnent totalement avec la fonction `util.promisify()`.

Donc, les fonctions de base ainsi que tout le code que vous avez déjà écrit est compatible, tant que vous avez écrit votre code de manière normé. Vous êtes heureux ?

Nous allons prendre un exemple pour bien comprendre.

Voici l'ouverture d'un fichier sous sa version callback standard :

```js
const fs = require("fs");

// 1 - Callback version

fs.readFile('params.yml', 'utf-8', function read(err, data) {
    if (err) {
        console.log(err);

    }
    console.log(data);
});


```

Le même code, cette fois-ci en utilisant des promesses

```js
"use strict"
const util = require("util");
const fs = require("fs");

// Conversion de la callback en promise
const readFile = util.promisify(fs.readFile);

readFile('params.yml', {encoding: 'utf8'})
  .then((text) => {
      console.log(text);
  })
  // Gestion des erreurs
  .catch((err) => {
      console.log(err);
  });

```

Et finalement la version async/await :

```js
"use strict"
const util = require("util");
const fs = require("fs");
const {to} = require('await-to-js');

// Conversion de la callback en promise
const readFile = util.promisify(fs.readFile);

// declaration en async d'une fonction de premier niveau
(async function() {

  let err, list;

  // utilisation de la promise a la sauce await
  [err, list] = await to(readFile('params.yml', 'utf-8'));

  // Gestion des erreurs
  if (err) {
    console.log('params.yml file not found');
    return false;
  }

  // affichage de notre liste
  console.log(list);
})();


```

Je me suis permis d'ajouter le module `await-to-js` qui permet de rendre plus fluide la gestion des erreurs des async/await, tout en conservant la simplicité de lecture. Car c'est l'un des problème lié a l'utilisation de async/await, de base, la récupération d'erreur se fait via un block try-catch, ce qui alourdi considérablement la lecture.

Bien entendu, si vous souhaitez utiliser async/await sur le long terme, l'usage natif de promise semble plus pertinent que d'utiliser `promisify()` sur des callback. Mais c'est une manière d'exploiter votre ancien code sans avoir à tout réécrire.
