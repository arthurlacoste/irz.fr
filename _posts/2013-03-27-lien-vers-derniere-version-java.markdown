---
title: Faire un lien vers la dernière version de Java depuis son site
date: 2013-03-27 15:56:31 Z
categories:
- Développement
- Overgeek
- PHP
- Tutoriel
tags:
- file_get_contents
- php
- strtolower
author: art
comments: true
layout: post
redirect_from: lien-vers-derniere-version-java/
wordpress_id: 1438448958
---

Dans le boulot que je fais (je bosse dans la dématérialisation des marchés publics), certains modules de notre service en ligne utilisent Java. Oui je sais c'est pas top, mais on a pas encore trouvé mieux pour gérer les certificats de chiffrement. Bref. Vous savez (et si vous ne le savez pas je vous le rappelle), Google aime bien les pages dynamiques, dont le contenu change régulièrement, et lorsque c'est le cas, vous prenez quelques places dans les résultats de votre moteur de recherche favori...

Pourquoi je vous dit ça ? Tout simplement parce que si votre boite utilise Java, cela pourrait être du plus bel effet de faire télécharger la dernière version en date directement depuis **votre site internet**. Dans les faits, vous souhaiterez sans doute maîtriser la version que vous souhaitez faire télécharger et tester votre application avec la dernière version de Java, mais passons cette éventualité.

Le but est donc, en php, d'obtenir avec une expression régulière en s'inspirant de [cette page](http://www.java.com/fr/download/manual.jsp), pour obtenir l'info de la dernière version (numéro de la dernière version) et le lien vers l’exécutable hors ligne. Par exemple, la dernière version actuellement est : [java]. Le lien vers la dernière version à été généré dynamiquement grâce à un petit bout de code que je vais vous présenter tout de suite :


    
    function get_last_java_version() {
        $page = file_get_contents('http://www.java.com/fr/download/manual.jsp');
    
        // expressions régulières
        $ptn = '/Windows Hors ligne" href="([^"]+)">/';
        $ptn_ver = '/<strong>Recommandé (.+) <\/strong>/';
    
        preg_match($ptn, $page, $lien);
        preg_match($ptn_ver, $page, $ver);
    
        $j['lien'] = $lien[1];
        $j['ver'] = $ver[1];
    
        return 'Java '
        . strtolower($j['ver']) . '';
    }
    echo get_last_java_version();
    



Cette petite fonction vous permettra donc de proposer systématiquement à vos visiteurs la dernière version de la plateforme phare d'Oracle.

Sinon vous pouvez directement aller sur mon outil qui propose d'installer la [dernière version de Java](http://java.irz.fr).
