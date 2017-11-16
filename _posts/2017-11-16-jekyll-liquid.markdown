---
author: art
date: 2017-06-02 08:29:46+00:00
layout: post
slug: jekyll-liquid
title: "Introduction à Liquid le moteur de template de Jekyll"
categories:
- Web
- Jekyll
toc: true
---

Voici la liste des fonctionnalités les plus utiles de Liquid, le langage de templating utilisé par [Jekyll](http://jekyllrb.com/). Il a été créé à l'origine par Shopify, [en Ruby](https://github.com/Shopify/liquid). Mais étant donné la popularité et l'efficacité de ce moteur de templating, il en existe d'autres implémentations, en [Javascript par example](https://github.com/harttle/liquidjs).

L'un des aspects qui ont popularisé l'utilisation de Liquid, c'est **l'interdiction de Github d'utiliser des  plug-ins Jekyll écrits en Ruby** sur Github Pages. Et au lieu d'utiliser des gems en Ruby, tout un tas de développeurs s'est mis à concocter des "plugins" en utilisant Liquid.

Il faut savoir qu'il y a plusieurs versions de Liquid, avec quelques variations, notamment entre la version originale de Shopify et celle utilisée par jekyll.

## Qu'est-ce qu'un langage de templating ?

Les graphistes et développeurs sont parfois amenés à utiliser un langage de templating poru construire des pages contenant du contenu statique, qui est la même sur de multiples pages, ou du contenu dynamique, qui change - lui - d'une page à l'autre.

Un langage de template permet d'utiliser à de multiples endroits des éléments statiques qui définiront l'architecture d'une page web, en reprenant les données de votre site. Les éléments statiques sont écris en HTML, et la partie dynamique en Liquid.

Les éléments Liquid d'un fichier sont exécutés et compilés en html, pour être servis ensuite de manière statique par le serveur.


## Introduction

Le code Liquid peut être subdivisé en variables, tags et filtres.

### Variables

L'affichage d'une variable se fait avec des doubles accolades. Un exemple simple de variable :

``` liquid
{% raw %}Hello {{page.author}}{% endraw %}
```

Résultat:

``` liquid
Hello {{page.author}}
```

Dans ce cas, Liquid génère le contenu d'une variable appelée `user.name`, et la variable contient le texte `Arthur`.

### Tags

Les tags sont représentés par des accolades avec un signe pourcent : `{% raw %}{%{% endraw %}` et `{% raw %}%}{% endraw %}`. Ils permettent d'insuffler une logique algorithmique.

Les tags ne produisent aucun texte visible : vous pouvez mofifier des variables, créer des conditions, cette partie du code ne sera jamais affiché sur votre page finale.

```liquid
{% raw %}{% if page %}
  Bonjour {{ page.author }} !
{% endif %}{% endraw %}
```

Rendu :

```
{% if page %}Bonjour {{ page.author }} !{% endif %}
```

Les tags peuvent être catégorisés en 3 types :

- [Conditions](#conditions)
- [Iteration](#iteration)
- Assignation de variable

Vous pouvez en lire davantage dans les sections respectives.

### Filtres

Les filtres modifient le resultat d'une variable. Ils sont utilisés dans une variables et séparés par un `|`.

Filtrer les variables :

``` liquid
{% raw %}Le mot 'anticonstitutionnellement'
comprend {{ 'anticonstitutionnellement' | size }} lettres !
Nous sommes en {{ 'now' | date: "%Y" }}.{% endraw %}
```

Résultat :

```
Le mot 'anticonstitutionnellement' comprend {{ 'anticonstitutionnellement' | size }} lettres !
Nous sommes en {{ 'now' | date: "%Y" }}.
```

Il est possible de multiplier les filtres, ils sont alors appliqués de gauche à droite.

``` liquid
{% raw %}{{ "oublié un mot !" | capitalize | prepend: "J'ai " }}{% endraw %}
```

Résultat :

```
{{ "oublié un mot !" | capitalize | prepend: "J'ai " }}
```

## Tags

### Commentaires

Pour ne pas afficher du contenu temporairement, la balise `comment`est parfaite, de plus, le code Liquid ne sera pas executé.

``` liquid
{% raw %}Nous avons fait 1 million d'euros {% comment %} de perte {% endcomment %} cette année.{% endraw %}
```

Résultat :

``` liquid
Nous avons fait 1 million d'euros {% comment %} de perte {% endcomment %} cette année.
```


Si la modification est permanente, autant enlever vraiment le texte.

## Conditions

### If

Il est possible d'effectuer de simples conditions  tel que if/unless, elsif (et pas elseif !) et else.

``` liquid
{% raw %}{% if page.author == "Hugo" %}
    Hello {{ page.author }} !
{% elsif page.author == "art" %}
    Bonjour maître !
{% else %}
    Who are you?
{% endif %}{% endraw %}
```

Resultat :

```
{% if page.author == "Hugo" %}
    Hello {{ page.author }} !
{% elsif page.author == "art" %}
    Bonjour maître !
{% else %}
    Who are you?
{% endif %}
```

### Unless

C'est le contraire de if, il s'execute si la condition n'est pas respecté.

``` liquid
{% raw %}{% unless user.name == "Medor" and user.race == "humain" %}
    Bonjour non-humain non-Medor
{% endunless %}{% endraw %}
```

Resultat

```
Bonjour non-humain non-Medor
```

Avec des tableaux :

``` liquid
{% raw %}# array: [1,2,3]
{% if array contains 2 %}
    array includes 2
{% endif %}{% endraw %}
```


### Case

L'équivalent d'un switch case est aussi possible, pour gérer un nombre important de conditions d'une même variable. `case` initialise la condition, et `when` compare les valeures :

``` liquid
{% raw %}{% case condition %}
    {% when 1 %}
        hit 1
    {% when 2 or 3 %}
        hit 2 or 3
    {% else %}
        don't hit
{% endcase %}{% endraw %}
```

### La boucle for

La boucle d'une collection de tableaux :

``` liquid
{% raw %}{% for item in array %}
    {{ item }}
{% endfor %}{% endraw %}
```

Une boucle itérative simple :

``` liquid
{% raw %}{% for i in (1..10) %}
    {{ i }}
{% endfor %}{% endraw %}
```

There are helper variables for special occasions:

- `forloop.length` -- longueur de la boucle
- `forloop.index` -- index de l'itération courante
- `forloop.index0` -- index de l'itération courante (base zero)
- `forloop.rindex` -- combien d'éléments reste-il ?
- `forloop.rindex0` -- combien d'éléments reste-il ? (base zero)
- `forloop.first` -- est-ce la première itération ?
- `forloop.last` -- est-ce la dernière itération ?


Il est possible de délimiter le périmètre d'action de la boucle avec :

- `limit` pour le nombre d'élement à traiter
- `offest`  pour sélectionner la position de début

``` liquid
{% raw %}# array: [1,2,3,4,5,6]
{% for item in array limit:2 offset:2 %}
    {{ item }}
{% endfor %}{% endraw %}
```

Vous pouvez aussi inverser la boucle :

``` liquid
{% raw %}{% for item in array reversed %}
...{% endraw %}
```

### Raw

Désactiver les tags  :

``` liquid
{% raw %}{% raw %}
    Si j'utilise des {{ tag }} ici, ils ne seront pas interprétés.
{% end{% endraw %}{% raw %}raw %}{% endraw %}
```

Résultat :

``` liquid
{% raw %}Si j'utilise des {{ tag }} ici, ils ne seront pas interprétés.{% endraw %}
```


### Variable

#### Assign

Il est possible de créer une nouvelle variable avec `assign`.


```liquid
{% raw %}{% assign ma_variable = false %}
{% if ma_variable != true %}
  Ceci est valide
{% endif %}{% endraw %}
```

Resultat :

```
Ceci est valide
```

Pour déclarer une chaine, il faut ajouter des guillemets à la variable :

```liquid
{% raw %}{% assign foo = "bar" %}
{{ foo }}{% endraw %}
```

```
{% assign foo = "bar" %}{{ foo }}
```

### Capture

Il est aussi possible de combiner plusieurs chaines dans une variables ainsi :

``` liquid
{% raw %}{% assign name = "Arthur" %}
{% assign surname = "Lacoste" %}
{% capture full-name %}{{ name }} {{ surname }}{% endcapture %}
{{ full-name }}{% endraw %}
```

Resultat :

```
{% assign name = "Arthur" %} {% assign surname = "Lacoste" %}{% capture full-name %}{{ name }} {{ surname }}{% endcapture %}{{ full-name }}
```

Il est ainsi possible de créer des chaînes complexes.

### Increment

Pour ajouter 1 à une variable numérique :

```liquid
{% raw %}
{% increment my_counter %}
{% increment my_counter %}
{% increment my_counter %}
{% endraw %}
```

Résultat :

```
{% increment my_counter %}
{% increment my_counter %}
{% increment my_counter %}
```

## Filtres

Voici une liste des filtres les plus communs :

- `where` -- sélectionne des éléments depuis un tableau pour certaines valeurs : `{% raw %}{{ site.posts | where:"category","foo" }}{% endraw %}`
- `group_by` -- groupe les éléments depuis un tableau : `{% raw %}{{ site.posts | group_by:"category" }}{% endraw %}`
- `markdownify` -- convertir le markdown en HTML
- `jsonify` -- convertir des données en JSON: `{% raw %}{{ site.data.dinosaurs | jsonify }}{% endraw %}`
- `date` -- reformater une date
- `capitalize` -- mettre la première lettre en capitale
- `downcase` -- mettre la phrase en bas de casse
- `upcase` -- mettre la phrase entière en capitale
- `first` -- récupérer le premier élément d'un tableau
- `last` -- récupérer le dernier élément d'un tableau
- `join` -- joindre les éléments d'un tableau avec certains caractères entre eux
- `sort` -- trier les éléments d'un tableau : `{% raw %}{{ site.posts | sort: 'author' }}{% endraw %}`
- `size` -- retourne la taille d'un tableau ou d'une chaîne
- `strip_newlines` -- enlève tous les retours à la ligne (`\n`) d'une chaîne
- `replace` -- remplace toutes les occurences : `{% raw %}{{ 'foofoo' | replace:'foo','bar' }}{% endraw %}`
- `replace_first` -- remplacer la première occurrence: `{% raw %}{{ 'barbar' | replace_first:'bar','foo' }}{% endraw %}`
- `remove` -- supprimer chaque occurence : `{% raw %}{{ 'foobarfoobar' | remove:'foo' }}{% endraw %}`
- `remove_first` -- supprimer la première occurrence: `{% raw %}{{ 'barbar' | remove_first:'bar' }}{% endraw %}`
- `truncate` -- tronquer la chaîne de x caractères
- `truncatewords` -- tronquer la chaîne de x mots
- `prepend` -- ajouter au début d'une chaîne : `{% raw %}{{ 'bar' | prepend:'foo' }}{% endraw %}`
- `append` -- ajouter à la fin d'une chaîne : `{% raw %}{{ 'foo' | append:'bar' }}{% endraw %}`
- `minus`, `plus`, `times`, `divided_by`, `modulo` -- travailler avec les chiffres : `{% raw %}{{ 4 | plus:2 }}{% endraw %}`
- `split` -- diviser une chaîne selon un motif : `{% raw %}{{ "a~b" | split:~ }}{% endraw %}`

### Example

Voici un exemple très utile permettant en utiliant  `where` de filtrer un élément de `_data` :  

``` liquid
{% raw %}
{% assign currentItem = site.data.foo | where:"slug","bar" %}
{{ newArray[0].name }}
{% endraw %}
```


### Permaliens

Les permaliens sont conçu selon le template :

```
/:categories/:year/:month/:day/:title.html
```

Voici les variables disponibles :

- `year` -- année selon le nom du fichier
- `short_year` -- en version 2 chiffres
- `month` -- mois selon le nom du fichier
- `i_month` -- pareil mais sans les zéros de début
- `day` -- jour selon le nom du fichier
- `i_day` -- pareil mais sans les zéros de début
- `title` -- titre selon le nom du fichier
- `categories`-- catégorie du billet

## Erreurs récurrentes

Sur Windows vous pouvez avoir cette erreur en lançant vos commandes :

```
Liquid Exception: incompatible character encodings: UTF-8 and IBM437 in index.html
```

C'est que vous devez définir le code-page d'abord :

```
chcp 65001
```
