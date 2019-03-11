---
author: art
comments: true
date: 2012-05-01 08:00:15+00:00
layout: post
redirect_from: google-gmail-adresses-mails-domaine/
slug: google-gmail-adresses-mails-domaine
title: Laissez Google gérer les adresses mails de votre domaine
wordpress_id: 63
categories:
- Google
- Tutoriel
post_format:
- Galerie
tags:
- gmail
- google
---

La gestion des adresses mails de votre nom de domaine par votre hébergeur est souvent complexe et laborieuse, surtout qu'elle offre souvent un service de piètre qualité et de quantité limité. Lorsque le domaine vous appartient, libre a vous de choisir un autre service pour la gestion de votre "serveur de messagerie".

Que ce que je viens d'évoquer vous passionne ou qu'il vous rebute, tout un chacun trouvera de quoi piocher à son niveau ce qu'il souhaite dans le présent tutoriel.


### Créer un espace Google Apps


<img alt="No alt" data-src="https://static.irz.fr/2010/12/hiro-2010-12-27-%C3%A0-13.47.22-1024x680.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2010/12/hiro-2010-12-27-%C3%A0-13.47.22-1024x680.png" />

Dans [Google Apps](http://google.com/a/), en bas de page, dans la catégorie **Versions disponibles**, sélectionnez [Google Apps](http://www.google.com/apps/intl/fr/group/index.html). En cliquant ensuite sur premiers pas, vous allez pouvoir créer un compte Google Apps, sous réserve que vous ayez votre propre nom de domaine, bien entendu.
<img alt="No alt" data-src="https://static.irz.fr/2011/01/hiro-2010-12-27-à-21.56.15.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2011/01/hiro-2010-12-27-à-21.56.15.png" />
Une fois votre compte créé, vous pouvez y accédez via l'adresse http://google.com/a/votre-domaine.com.

En vous connectant, vous allez nez à nez avec une page qui ressemble à ça :

<img alt="No alt" data-src="https://static.irz.fr/2010/12/png-1024x716." src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2010/12/png-1024x716." />

Un peu plus bas, dans la rubrique "Paramètres du service", aller dans E-mail.
<img alt="No alt" data-src="https://static.irz.fr/2011/01/cerberus-2010-12-28-à-01.32.06.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2011/01/cerberus-2010-12-28-à-01.32.06.png" />

Il vous faut configurer les enregistrements MX de Google sur votre hébergeur : c'est ainsi que sera fait le lien entre votre nom de domaine, et la gestion de la réception et envoi de mails par Google. Il y a quelques ligne à remplir. Pour cela, il vous faut aller dans la rubrique "Zone DNS" de votre hébergeur. Si vous ne disposez pas de MX 10, 20 et 30 vous pouvez remplacer ceux-ci par d'autres d'ordre de grandeur similaires. Une image vaut mieux que de long discours :
<img alt="No alt" data-src="https://static.irz.fr/2011/01/mx-google.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2011/01/mx-google.png" />

Veillez cependant à retirer le MX par défaut de votre hébergeur, en laissant seulement ceux de Google.

Une fois cette procédure effectué, en revenant sur votre tableau de bord, vous devriez voir ce message apparaître :
<a href="https://static.irz.fr/2011/01/cerberus-2010-12-28-à-01.45.39.png"><img alt="No alt" data-src="https://static.irz.fr/2011/01/cerberus-2010-12-28-à-01.45.39.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2011/01/cerberus-2010-12-28-à-01.45.39.png" /></a>

Ceci signifie que vous avez bien fait votre travail. Après quelques heures de patience, votre mail sera alors fonctionnel.

Lorsque la mention _Mise à jour_ disparaitra, c'est que tout sera ok.

<img alt="No alt" data-src="https://static.irz.fr/2011/01/cerberus-2010-12-28-à-10.20.03.png" src="https://static.irz.fr/thumb.php?size=<100&crop=0&src=https://static.irz.fr/2011/01/cerberus-2010-12-28-à-10.20.03.png" />
