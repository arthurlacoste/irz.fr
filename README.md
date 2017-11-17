# irz.fr

La version 5 change de moteur ! Après près de 7 ans sous WordPress, IRZ fait peau neuve en se convertissant à Jekyll, hebergé par Github Pages.

## Déploiement

```
git clone
```
En environnement de test, voici les commandes à lancer :



## Aide à l'écriture

- [Mise en page du texte](https://mmistakes.github.io/minimal-mistakes/markup/markup-html-tags-and-formatting/)

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

- [Pour afficher une galerie d'image](https://mmistakes.github.io/minimal-mistakes/markup-more-images/)
- [Alignement](https://mmistakes.github.io/minimal-mistakes/markup/markup-image-alignment/)

En markdown simple :

```md
![alt]({{ site.url }}{{ site.baseurl }}/assets/images/filename.jpg)
```

Pour forcer une image a être centré :

```md
![wordpress export tool](https://static.irz.fr/2017/11/wordpress-export-tool.gif){: .align-center}
```

Si la propriété `{: .align-center}` n'est pas utilisée, les images utilisant moins de 50% de la largeur du bloc s'aligneront soit à gauche, soit à doite (c'est en random).

Il est aussi possible d'utiliser des balises figures.


Créer une `<figure>` avec un sous-titre.

| Include Parameter | Required     | Description |
| ----              | --------     | ----------- |
| **image_path**    | **Required** | Chemin de l'image:  `/assets/images/filename.jpg`.|
| **alt**           | **Required** | Text alternatif. |
| **caption**       | Optional     | Sous-titre. Markdown autorisé. |
| **class**       | Optional     | Ajoute une class a l'élément  figure . |

```liquid
{% include figure image_path="/unsplash-image-10.jpg" alt="" caption="" class="" %}
```

#### Header

Pour ajouter une image en header ([comme ici]) :

```yaml
excerpt: "This post should [...]"
header:
  overlay_image: /assets/images/unsplash-image-1.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  cta_label: "More Info"
  cta_url: "https://unsplash.com"
```

[En savoir plus sur les overlays](https://mmistakes.github.io/minimal-mistakes/layout/uncategorized/layout-header-overlay-image/).

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

[comme ici]: https://mmistakes.github.io/minimal-mistakes/layout/uncategorized/layout-header-overlay-image/
