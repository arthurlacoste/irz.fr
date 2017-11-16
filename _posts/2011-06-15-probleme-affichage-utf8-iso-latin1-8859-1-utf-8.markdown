---
author: art
comments: true
date: 2011-06-15 21:33:00+00:00
layout: post
link: https://irz.fr/probleme-affichage-utf8-iso-latin1-8859-1-utf-8/
slug: probleme-affichage-utf8-iso-latin1-8859-1-utf-8
title: Comprendre son problème d'affichage UTF-8 / ISO-8859-1
wordpress_id: 1438448212
categories:
- Divers
- Tutoriel
post_format:
- Galerie
tags:
- html
- iso
- navigateur
- utf-8
---

La différence entre l'UTF-8 et l'ISO-8859-1 est simple. Le premier permet d'utiliser une ribambelle de caractères lorsque l'autre se limite à 256 caractères. L'UTF-8 permet notamment d'écrire un document en plusieurs langues, ce qui n'est pas négligeable.

De manière générale, je vous conseille d'utiliser l'UTF-8. Pour cela, votre logiciel d'édition permet de choisir le type d'encodage de votre document, c'est une première opération à effectuer. Sur le même site, il vaut mieux que l'ensemble de vos documents et bases de données soient encodées avec la même norme, sinon vous allez être dans l'un des cas suivant :



# La page affiche des caractères comme ceci à la place des accents : "Ã©", "Ã®", ...



Les données sont en UTF-8, et le navigateur affiche de l'ISO-8859-1. Il faut donc inviter votre navigateur à prendre en compte le format adéquat dans votre page. Pour le html, il faut insérer cette balise <meta /> dans votre <head /> :

`<meta http-equiv="Content-type" content="text/html; charset=UTF-8"/>`



# La page affiche des caractères dans ce genre : "�"



Les données ont été enregistrées au format ISO-8859-1 (aussi appelé **Latin-1** ou **ISO/CEI 8859-1**) et le navigateur les affiche en pensant avoir affaire à de l'UTF-8, du coup ça fout carrément le bordel, et c'est normal. Cette balise <meta /> est susceptible de mettre en ordre votre document html :

`<meta http-equiv="content-Type" content="text/html; charset=iso-8859-1" />`
