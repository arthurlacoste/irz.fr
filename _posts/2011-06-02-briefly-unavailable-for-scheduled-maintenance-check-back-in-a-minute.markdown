---
author: art
comments: true
date: 2011-06-02 06:00:30+00:00
layout: post
link: https://irz.fr/briefly-unavailable-for-scheduled-maintenance-check-back-in-a-minute/
slug: briefly-unavailable-for-scheduled-maintenance-check-back-in-a-minute
title: Briefly unavailable for scheduled maintenance. Check back in a minute.
wordpress_id: 1438447664
categories:
- Tutoriel
- Wordpress
post_format:
- Galerie
tags:
- erreur
- wordpress
---

Briefly unavailable for scheduled maintenance. Check back in a minute.

En Français ça donne aussi "Indisponibilité temporaire pour cause de maintenance. Veuillez revenir dans un instant.".

Lorsque Wordpress vous propose cette drôle de petite phrase en Anglais , c'est que le fichier .maintenance situé à la racine du répertoire de votre blog (conçu pour placer votre blog en hibernation pendant une mise à jour) n'a pas été délogé. Il est donc de votre devoir de le supprimer, puis de vérifier que votre mise à jour à été effectuée correctement.

En... ...FTP !


# Comment faire ça mec ?


Bon ok, je t'explique. Normalement si tu as ton propre site WordPress tu dois savoir ce qu'est un FTP. C'est la base. Mais sinon pour vulgariser, c'est juste un logiciel qui va te permettre d'accéder aux fichiers de ton site. Ouais. L'explorateur Windows pour ton site. Et donc tu prends ce truc, du genre [Filezilla](http://filezilla-project.org/download.php?type=client) pour Windows et [Cyberduck](http://cyberduck.ch/) pour Mac OS X (oui, les deux sont multiplateforme mais c'est une question d'habitude, quoique Cyberduck est quand même bien plus stylé). Tu rentres tes identifiants, user, mot de passe, serveur, port (21 en général mec). Et tu vas dans le dossier de ton site WordPress.

Si tu es sous Filezilla, il faut que tu forces l'affichage des fichiers cachés :

[caption id="attachment_1438448671" align="aligncenter" width="493"][![C'est tout simple :Allez dans le menu, au 5ème élément de la liste : Serveur cochez ”Forcer l'affichage des fichiers cachés” !](https://static.irz.fr/2011/06/filezilla-forcer-affichage-fichiers-caches.png)](https://irz.fr/recherche?q=filezilla-forcer-affichage-fichiers-caches) Allez dans le menu, au 5ème élément de la liste : Serveur cochez ”Forcer l'affichage des fichiers cachés” ![/caption]

Tu trouves le fichier .maintenance, et tu le supprime.

N.B. le fichier ".maintenance" est caché par défaut alors selon le FTP que vous utilisez, n'oubliez pas d'afficher les fichiers cachés.
