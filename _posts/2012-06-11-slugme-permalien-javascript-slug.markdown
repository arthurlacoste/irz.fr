---
author: art
comments: true
date: 2012-06-11 14:01:33+00:00
layout: post
link: https://irz.fr/slugme-permalien-javascript-slug/
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



# Exemple



La page




    
  * mapage.com/produits/canon



est plus parlante que


    
  * mapage.com/produits.php?cat=5





# A quoi ça sert en fait ?



Lorsque vous saisissez un article, vous avez parfois besoin de générer un slug correspondant à votre titre ou conforme aux règles que vous souhaitez vous imposer. Quoi qu'il en soit, ceci est une petite fonction javascript qui vous permettra de pré-remplir à la volée votre slug pour vérifier qu'il soit en conformité avec vos besoins.



# Démo



Valeur en mode slug : "teste-moi"



[Voir la page de démo](https://static.irz.fr/2012/06/demo-slugme.html)



(vous pouvez faire un clique droit pour voir la source)



# Code source



Voici une version du code source commenté (pour un peu mieux comprendre les actions).


    
    function slugMe (value) {
     var rExps=[
     {re:/[\xC0-\xC6]/g, ch:'A'},
     {re:/[\xE0-\xE6]/g, ch:'a'},
     {re:/[\xC8-\xCB]/g, ch:'E'},
     {re:/[\xE8-\xEB]/g, ch:'e'},
     {re:/[\xCC-\xCF]/g, ch:'I'},
     {re:/[\xEC-\xEF]/g, ch:'i'},
     {re:/[\xD2-\xD6]/g, ch:'O'},
     {re:/[\xF2-\xF6]/g, ch:'o'},
     {re:/[\xD9-\xDC]/g, ch:'U'},
     {re:/[\xF9-\xFC]/g, ch:'u'},
     {re:/[\xC7-\xE7]/g, ch:'c'},
     {re:/[\xD1]/g, ch:'N'},
     {re:/[\xF1]/g, ch:'n'} ];
    
     // converti les caractères accentués en leurs équivalent alpha
     for(var i=0, len=rExps.length; i<len; i++)
      value=value.replace(rExps[i].re, rExps[i].ch);
    
      // 1) met en bas de casse
      // 2) remplace les espace par des tirets
      // 3) enleve tout les caratères non alphanumeriques
      // 4) enlève les doubles tirets
      return value.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')
          .replace(/\-{2,}/g,'-');
    };



Mise en place dans un champ input texte (comme dans la démo) :


    
    <script type="text/javascript">// <![CDATA[
    function slugLive(ine,out){     document.getElementById(out).innerHTML =    slugMe(document.getElementById(ine).value); }
    // ]]></script><input onkeyup="slugLive('slug-this','le-slug');" type="text" id="slug-this"></input> Valeur en mode slug : "<span id="le-slug"></span>"



Inspiration : [Ben Truyman](https://gist.github.com/1211400) & [jquery-slug-plugin](http://code.google.com/p/jquery-slug-plugin/)
