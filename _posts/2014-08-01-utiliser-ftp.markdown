---
title: Utiliser un client FTP
date: 2014-08-01 11:23:07 Z
categories:
- Développement
- Liveblog
- Tutoriel
author: art
comments: true
layout: post
redirect_from: utiliser-ftp/
wordpress_id: 1438449439
---

FTP (pour File Transfer Protocol) est le nom d'un des protocoles de transfert de fichier les plus utilisés au monde. Il permet via une application (appelé aussi client) de déposer/récupérer des documents sur un serveur.

Il est très utile, notamment pour vous mettre à jour les fichiers qui composent votre site internet.


## Connexion

1. Pour commencer, il vous faut un client FTP. Je vous conseille de télécharger [Cyberduck](https://cyberduck.io/), c'est un logiciel multiplateforme (il fonctionne aussi bien sous Windows que sous Mac OS X). Une fois que votre logiciel est installé, vous êtes prêt à vous connecter.


2. Pour vous connecter, vous devez tout d'abord cliquer sur le bouton "Nouvelle connexion". Afin de vous identifier, vous avez généralement besoin de 3 choses:

* **Le nom du serveur :** il est l'adresse à laquelle vous devez vous connecter, par exemple ftp.irz.fr, ou alors une IP : 80.14.122.107.

* **Le nom d'utilisateur :** votre nom d'utilisateur, vous l'avez sans doute choisi, admettons que ce soit mon prénom, Arthur.

* **Le mot de passe :** pour accéder à votre serveur, un mot de passe est appréciable, par exemple, il s'agit de jhb16581fv (quelle inspiration !).

Il y a aussi le port qui peut être personnalisé, mais par défaut il s'agit du port 21.

<a href="https://irz.fr/recherche?q=cyberduck-nouvelle-connexion"><img alt="cyberduck-nouvelle-connexion" data-src="https://static.irz.fr/2014/08/cyberduck-nouvelle-connexion-640x508.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2014/08/cyberduck-nouvelle-connexion-640x508.png" /></a>


3. Voilà, vous êtes fin prêt à changer des fichiers ! Il suffit pour cela d'effectuer des glissez déposer pour déposer ou récupérer des documents.


## Choisir un programme par défaut

En général, lorsque vous mettez un site en production, vous avez au préalable mis en place une version de votre site en local, ou sur un serveur de pré-production dans ce cas là, un simple glisser-déposer vous permet de mettre en ligne vos modifications.

Il arrive parfois que vous ayez besoin de modifier un fichier directement sur le serveur (si vous êtes sur votre serveur de pré-prod, ou pour des modifications minimes). Dans ce cas, vous avez dans le menu de Cyberduck le bouton édition.

Toutefois, si le logiciel qui s'ouvre n'est pas votre programme d'édition par défaut, vous pouvez le modifier en allant dans Cyberduck > Préférences > Editeur externe. Sur cette page de configuration, vous avez la possibilité de **paramétrer votre logiciel favori**. Vous pouvez aussi cocher "Toujours utiliser l'éditeur par défaut", si vous souhaitez l'utiliser pour ouvrir tout vos fichier sur le FTP.

<a href="https://irz.fr/recherche?q=cyberduck-editeur-par-defaut"><img alt="cyberduck-editeur-par-defaut" data-src="https://static.irz.fr/2014/08/cyberduck-editeur-par-defaut-640x339.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2014/08/cyberduck-editeur-par-defaut-640x339.png" /></a>
