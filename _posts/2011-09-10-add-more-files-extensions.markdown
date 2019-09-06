---
title: 'Add more files extensions : le remède contre le manque d''extensions de wordpress'
date: 2011-09-10 08:14:18 Z
categories:
- Tutoriel
- Wordpress
tags:
- "$existing_mimes"
- add_action
- add_filter
- add_settings_section
- admin_init
- explode
- extension de fichier
- get_option
- mime
- Open source
- php
- plugin
- type de fichier
- upload_mimes
- wordpress
author: art
comments: true
layout: post
redirect_from: add-more-files-extensions/
wordpress_id: 1438448387
post_format:
- Galerie
---

Ce plugin fait suite a cet article concernant l'[ajout de types mime, ou des extensions de fichiers à la volée](https://irz.fr/ajouter-un-type-mime).

Qui n'a jamais eu le message : "**Tel fichier n’a pas pu être mis en ligne suite à une erreur - Désolé, ce type de fichier n’est pas autorisé pour des raisons de sécurité.**" ? C'est le message qui s'affiche lorsque vous essayer d'utiliser l'utilitaire d'upload de Wordpress en utilisant une extension interdite par défaut par votre CMS préféré.

C'est clairement une fonctionnalité manquante dans les médias de Wordpress : l'upload de fichiers, sans limite d'extensions, n'est pas permise par défaut. Pour des raisons de sécurité sans doute, la liste des extensions supporté la bibliothèque de Wordpress est fortement limité.

En voici la liste : jpg, jpeg, jpe, gif, png, bmp, tif, tiff, ico, asf, asx, wax, wmv, wmx, avi, divx, flv, mov, qt, mpeg, mpg, mpe, mp4, m4v, ogv, mkv, txt, asc, c, cc, h, csv, tsv, ics, rtx, css, htm, html, mp3, m4a, m4b, ra, ram, wav, ogg, oga, mid, midi, wma, mka, rtf, js, pdf, swf, class, tar, zip, gz, gzip, rar, 7z, exe, doc, pot, pps, ppt, wri, xla, xls, xlt, xlw, mdb, mpp, docx, docm, dotx, dotm, xlsx, xlsm, xlsb, xltx, xltm, xlam, pptx, pptm, ppsx, ppsm, potx, potm, ppam, sldx, sldm, onetoc, onetoc2, onetmp, onepkg, odt, odp, ods, odg, odc, odb, odf, wp, wpd.

La solution a tout vos problèmes ? Add more files extensions !

C'est tout simple : un champ dans la page _Réglages > Médias > Envoi de fichiers_ va apparaître dès que vous aurez installé le plugin, vous allez pouvoir insérer (séparé par un espace) les extensions supplémentaires que vous souhaitez autoriser.

<a href="https://static.irz.fr/2011/09/screenshot-1.png"><img alt="No alt" data-src="https://static.irz.fr/2011/09/screenshot-1.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2011/09/screenshot-1.png" /></a>

Certifié valide Wordpress 3.2.1.

**[Télécharger Add more files extensions](https://github.com/arthurlacoste/add-more-files-extensions)**

Pour ce qui est détails technique, [j'ai écrit un tutoriel](https://irz.fr/ajouter-un-type-mime) pour mettre ça en place en natif (dans votre thème Wordpress).
