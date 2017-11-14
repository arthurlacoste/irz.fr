---
author: art
comments: true
date: 2012-05-03 18:59:58+00:00
layout: post
link: https://irz.fr/copyright-php/
slug: copyright-php
title: N'ayez plus jamais à mettre à jour votre copyright de bas de page
wordpress_id: 1438448475
categories:
- Développement
- PHP
- Tutoriel
tags:
- année
- copyright
- fonction
- php
---

C'est une chose que je constate souvent, en bas de page, à côté du copyright, il y a souvent une année, qui correspond à l'année de création de l'entreprise (style '[annee] © Tartempion production') si c'est l'année courante, ou une formule comprenant deux années, la première étant l'année de création de l’entreprise (ou du site), la seconde étant l'année courante (style '1997-[annee] © Tartempion production').

J'ai pensé à vous en vous concoctant une petite fonction PHP qui fait tout ça à votre place !


    
    function nos_annees($annee) {
    $annee_en_cours = date('Y');
        if($annee!=$annee_en_cours) {
            return $annee . '-' . $annee_en_cours;
        }
        return $annee;
    }
    
    



**Exemple, pour l'année 2007 :** [copyright annee="2007"]

Pour vous en servir, rien de plus simple, voici le code à insérer en bas de page pour faire appel à cette fonction :


    
    < ?php echo nos_annees(1997); ?>  © Tartempion Prod.
    



C'est le genre de petites fonctions qui permet d'avoir un forme de pérennité dans ses pages, en évitant de devoir à mettre à jour ce genre de choses à la main chaque année, et en évitant d'avoir des données erronées qui traînent sur votre site.
