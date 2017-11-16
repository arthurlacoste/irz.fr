# irz.fr

La version 5 change de moteur ! Après près de 7 ans sous WordPress, IRZ fait peau neuve en se convertissant à Jekyll, hebergé par Github Pages.

## Aide à l'écriture

### Videos

Pour ajouter des vidéos en header :

```yaml
header:
  video:
    id: 5eSoBBapXCg
    provider: youtube
```

Il est aussi possible d'inclure une video dans le coeur de l'article. Pour cela :

```liquid
{% include video id="li7qFeHI5KM" provider="youtube" %}
```

### Images

L'habituel tag en Markdown fonctionne, mais il est aussi possible d'utiliser des
balises figures.

### Navigation et TDM

#### Navigation

Un menu personnalisé peut être défini, il fait référence a une entrée dans le
fichier `_data/navigation.yml`. Il s'affiche a gauche. Dans l'article/page :

```yaml
sidebar:
  nav: "about"
```

Dans  `navigation.yml` :

```yaml
about:
  - title: A propos
    url: /a-propos
    children:
      - title: "Introduction"
        url: "/a-propos/introduction/"
  - title: "Qui suis-je"
    url: /qui-suis-je/
    children:
      - title: "Introduction"
        url: /qui-suis-je/
      - title: "Me contacter"
        url: /contact/

```

#### Table des matières

La table des matières est géneré automatiquement, sur le côté droit. Elle utilise les titres
en Markdown. Elle peut s'activer en utilisant :

```yaml
toc: true
```

## Licence

[Licence Creative
Commons BY-NC-SA](https://irz.fr/a-propos)
