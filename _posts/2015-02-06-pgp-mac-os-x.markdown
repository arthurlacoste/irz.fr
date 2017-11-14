---
author: art
comments: true
date: 2015-02-06 14:11:44+00:00
layout: post
link: https://irz.fr/pgp-mac-os-x/
slug: pgp-mac-os-x
title: Utiliser PGP sous Mac OS X
wordpress_id: 1438449622
categories:
- Apple
- Tutoriel
tags:
- GPG
- GPGTools
- OS X
- PGP
- Sécurité
---

Quand j’ai décidé de paramétrer mon Mac et plus particulièrement de mettre en place PGP, j’ai été étonné de voir à quel point il était difficile - non pas seulement d’installer le logiciel - mais de comprendre les mécanismes permettant d’utiliser simplement PGP. Il n’y a pas de tutoriel “PGP pour les nuls” sur internet (ni même en librairie !), j’ai donc décidé d’en écrire un. <!-- more -->C’est le plus simple que je puisse faire, et je l’écris pour que n’importe quelle personne, même la première venue, puisse sur son mac :




    
  1. Installer PGP sur Mac OS X

    
  2. Utiliser PGP dans la vie de tout les jours



Dans ce tutoriel, nous désignerons la plupart du temps le texte chiffré par “message” ou “mail”, mais en réalité, toute information que vous souhaitez garder sécurisé peut être chiffré, pour les autres, comme pour vous-même.



## Pourquoi ce tutoriel est le meilleur ?






    
  1. **Il fonctionne avec toutes les applications.** Contrairement aux autres tutoriels concernant PGP, celui-ci ne se soucis pas des logiciels que vous utilisez. Peut importe les outils que vous utilisez actuellement ou utiliserez dans le futur, PGP continuera de fonctionner. Si vous voulez chiffrer des mails, vous pouvez utiliser le logiciel que vous voulez : Mail.app, Thunderbird, Sparrow, Gmail, Airmail… Si vous voulez chiffrer autre chose que des mail, c’est possible aussi ! Vous pouvez écrire et chiffrer des documents Word, ou une formule Excel. Vous pouvez facilement chiffrer une URL sous Safari, Chrome, Firefox. Vous pouvez chiffrer un texte avec Message. Vous pouvez chiffrer une commande sur le terminal. Ça n’a aucune importance.

    
  2. **Il est fait pour les utilisateurs de mac.** Il y a une certaine manière de faire les choses sur Mac. Si vous n’êtes pas familier avec le monde des Mac, vous ne pouvez pas forcément comprendre (c’est normal). Beaucoup de tutoriels que j’ai trouvé pour Mac OS X n’étaient pas fait pour les utilisateurs de Mac. Beaucoup veulent vous faire installer une usine à gaz à la Windows, ou une extension douteuse. ce tuto est fait pour les utilisateurs de mac. Il s’agit de PGP, installé de la manière dont Steve Jobs l’aurait implémenté.

    
  3. **Il est Simple.** Avant tout, cette installation de PGP est simple. Une fois que vous avez compris comment ça marche, vous pourrez tout effectuer de A à Z.



J’ai essayé des dizaines de manière d’installer PGP sur mon Mac. La plupart d’elles étaient mauvaises, et ce pour de nombreuses raisons. A tout les niveaux, ceci est la meilleure solution et ce dans 95% des situations !



## Etape 1 : Installer GPGTools GPG Suite pour OS X



Cette étape est simple. Allez sur [le site de GPGTools](https://gpgtools.org/) et téléchargez GPG Suite for OS X. Une fois téléchargé, montez la DMG et lancer l’application “Install”.

![GPG Suite DMG](https://static.irz.fr/2015/02/GPG-Suite-dmg.png)
![GPGTools-install-1](https://static.irz.fr/2015/02/GPGTools-install-1.png)

Pendant l’installation, vous pouvez utiliser tout les paramètres par défaut, excepté un. Dans “Type d’installation”, allez dans “Personnaliser”…

![GPGTools-install-1](https://static.irz.fr/2015/02/GPGTools-install-2.png)

Et décochez l’option GPGMail :

![GPGTools-install-1](https://static.irz.fr/2015/02/GPGTools-install-3.png)

Ensuite, cliquez sur “Installer”.



## Etape 2 : Créez vos propres clés PGP



Lorsque l’installation est terminée, vous pouvez trouver une application appelée “GPG Keychain Access” dans votre dossier Applications. Une petite fenêtre vous demandera immédiatement d’accéder à vos contacts. Cliquez sur Ok.




### Pourquoi parler d'une paire de clefs ?


Lors de la création de clef, on parle toujours d’une paire de clef : en effet, peut importe l’outil que vous utilisez, le principe de PGP est de vous fournir 2 clefs.

**La clef publique**, que vous partagerez à vos contacts afin qu'ils puissent chiffrer leurs messages à votre intention.

**La clef privée**, que vous gardez pour vous, et qui vous permet de déchiffrer les messages de vos correspondants.



Une seconde fenêtre vous permettra ensuite de créer une nouvelle paire de clef. Tapez votre nom et votre adresse mail, puis cochez la case “Téléverser clé publique”.

![créer nouvelle clef petit](https://static.irz.fr/2015/02/creer-nouvelle-clef-petit.png)

Cliquez sur “Options avancées”. Vérifiez que la longueur de votre clef est bien d’un minimum de 4096, et réduisez la date d’expiration à 2 ans. Votre fenêtre devrait ressembler à ça :
![créer nouvelle clef grand](https://static.irz.fr/2015/02/creer-nouvelle-clef-grand.png)



### Quelques mots à propos de votre passphrase



La passphrase est aussi appelé “phrase secrète” dans l’outil. Tout le processus de chiffrement est basé sur cette phrase secrète. Donc tout d’abord : n’utilisez jamais une passphrase que d’autres personnes connaissent ! Sélectionnez une phrase que vous êtes le seul à connaître, et que personne ne pourrait deviner. Une fois que votre passphrase est sélectionné, ne la donnez jamais à quelqu’un d’autre.

Autre chose, n’utilisez pas un mot de passe, mais une phrase complète de préférence. Par exemple, “SUPInfo07” pourrait être remplacé par “J’ai été diplomé de SUP Info en 2007, c’est cool hein ?”. Plus votre passphrase est longue, plus votre clef est sécurisée.

Dernièrement, soyez bien sûr que votre passphrase est un élément dont vous puissiez vous souvenir. Plus la phrase est longue, plus vous allez l’oublier facilement. Et il ne faut pas, sinon vous ne pourrez plus déchiffrer la moindre de vos correspondances. Soyez sûr que vous aller vous souvenir de votre phrase secrète !



### Retour à l’étape 2…



Une fois que vous avez fait le choixs de votre phrase secrète, entrez la deux fois. Une fois que tout est bon, cliquez sur “Générer clef”.

Une phrase indiquant “Nous devons générer une grande quantité d’octets aléatoires. …”. Attendez quelques instants que la génération se termine :

![création d'une clef](https://static.irz.fr/2015/02/creation-clef.png)

Et voilà ! Votre clef PGP est prête à être utilisé !

![liste des clefs](https://static.irz.fr/2015/02/liste-clefs.png)



## Etape 3 : définissez PGP dans les raccourcis clavier



Maintenant, vous allez paramétrer 4 raccourcis claviers sous OS X.

Ouvrez les préférences Système, sélectionnez l’onglet “raccourcis”. Sur la partie gauche, sélectionnez le menu “Services”. Ensuite, descendez jusqu’à la sous-section “Texte”, vous verrez plusieurs raccourcis commençant par “OpenPGP :”.

![raccourci clavier 1](https://static.irz.fr/2015/02/raccourci-clavier-1.png)

Décochez l’ensemble des cases, et supprimez les raccourcis claviers.

![raccourci clavier 2](https://static.irz.fr/2015/02/raccourci-clavier-2.png)

Nous allons maintenant mettre en place quatre raccourcis :




    
  * Activez “OpenPGP: Déchiffrer” et définissez le raccourci suivant : ⌃⌥⌘- (control option command moins)

    
  * Activez “OpenPGP: Chiffrer” et définissez le raccourci suivant : ⌃⌥⌘= (control option command egal)

    
  * Activez “OpenPGP: Signez” et définissez le raccourci suivant : ⌃⌥⌘[ (control option command crochet ouvert)

    
  * Activez “OpenPGP: Vérifiez” et définissez le raccourci suivant : ⌃⌥⌘] (control option command crochet fermé)



Bien entendu, ces choix de raccourcis ne sont qu’une proposition que vous pouvez personnaliser comme bon vous semble. Cependant, en fonction des raccourcis que vous choisissez, il ce peut que ceux-ci entrent en collisions avec d’autres (des paramètres système, ou propre aux applications).

Vos raccourcis clavier devraient donc ressembler à cela :

![raccourci clavier 3](https://static.irz.fr/2015/02/raccourci-clavier-3.png)

C’est tout ! Vous avez maintenant terminé de paramétrer PGP avec OpenPGP sur OS X ! Maintenant, nous allons voir comment nous servir de tout ça.



### Comment envoyer un mail chiffré



Vous pouvez tout chiffrer avec PGP, mais la plupart du temps, vous voudrez chiffrer un mail. Nous allons donc passer quelques minutes pour nous pencher la-dessus. Ces étapes peuvent être transposées pour tout type de chiffrement, sur toutes les applications de votre ordinateur.




### Chiffrer vos documents


Il est possible de chiffrer des documents pour vous-même. Pour cela, il suffit de sélectionner votre propre clef publique au moment de chiffrer le texte, puis d’enregistrer le texte chiffré.



Pour sécuriser un mail avec PGP, vous devez signer et chiffrer le corps de votre message. Vous pouvez seulement signer, ou seulement chiffrer, mais effectuer les 2 opérations permet de tirer parti de manière optimale du potentiel de PGP. Par ailleurs, quand vous recevez un mail sécurisé avec PGP, vous devrez le déchiffrer, puis le vérifier. C’est la manipulation miroir du chiffrement et de la signature.

Commencez par écrire un mail :
![ecrire mail](https://static.irz.fr/2015/02/ecrire-mail-1.png)



#### La signature



Ensuite, sélectionnez tout le corps de votre message, puis taper ⌃⌥⌘[ pour signer votre mail :

![ecrire mail signer](https://static.irz.fr/2015/02/ecrire-mail-2-signer.png)



#### Le chiffrement





##### Chercher sur le serveur de clef



Ensuite, recherchons la clef publique de votre correspondant. Ouvrez l’application GPG Keychain Access. taper sur cmd+F et écrivez l’adresse mail de votre correspondant. Ceci va lancer la recherche de la clef de votre ami sur le serveur de clef :

![Recherche d'une clef](https://static.irz.fr/2015/02/recherche-clef.png)

Si votre ami dispose de plus d’une clef, sélectionnez la plus récente :

![Liste des clefs trouvées](https://static.irz.fr/2015/02/clef-trouve.png)

Vous allez recevoir une confirmation vous indiquant que la clef de votre contact à bien été téléchargé. Cliquez ensuite sur “Fermer”.

![Clef trouvées sur le serveur](https://static.irz.fr/2015/02/clef-importe.png)

Vous devriez maintenant voir la clef de votre ami dans la liste :

![Liste des clefs importées](https://static.irz.fr/2015/02/liste-clef-importe.png)



##### Importer une clef qui n’est pas sur un serveur via sa version “texte”



Il arrive que parfois, votre contact n’ai pas installé sa clef sur un serveur de clef. Il peut donc vous fournir la clef publique en texte brut. Il suffit d’enregistrer cette clef dans un fichier texte (j’utilise personnellement TextWrangler, mais n’importe quel bloc-notes fera l’affaire), de préférence sous l’extension “.asc”.

**Petite astuce :** il est aussi possible d’exporter une clef privée préalablement sauvegardé, lire plus loin le chapitre “Exporter vos clefs”.

![clef publique textwrangler](https://static.irz.fr/2015/02/clef-publique-textwrangler.png)
Une clef publique commence toujours par “—–BEGIN PGP PUBLIC KEY BLOCK—– et fini par “—–END PGP PUBLIC KEY BLOCK—–”. L’apparence d’une clef privée est très similaire, elle commence par “—–BEGIN PGP PRIVATE KEY BLOCK—–” et se termine par “—–END PGP PRIVATE KEY BLOCK—–”.

Ouvrez l’application GPG Keychain Access, puis cliquez sur “Importer” en haut à gauche de l’interface. Cliquez sur “Ouvrir” :
![GPGTools importer clef](https://static.irz.fr/2015/02/GPGTools-importer-clef.png)

Vous devriez apercevoir votre nouvelle clef dans la liste :

![Liste des clefs importées](https://static.irz.fr/2015/02/liste-clef-importe.png)

Vous devriez maintenant voir la clef de votre ami dans la liste :

![Liste des clefs importées](https://static.irz.fr/2015/02/liste-clef-importe.png)

**Petite astuce :** pour faciliter les sauvegardes et utilisations de PGP sur plusieurs ordinateurs, je dispose de l'ensemble des clefs publiques de mes contacts dans un dossier sur Dropbox. Si j'ai le moindre problème, un simple glisser-déposer vous permettra de ré-importer l'ensemble de vos contacts.



##### Chiffrer



Vous pouvez maintenant quitter GPG Keychain Access et revenir sur l’écran d’écriture de votre mail.

Sélectionnez tout le corps de votre message, puis tapez sur ⌃⌥⌘= pour le chiffrer. Une fenêtre va s’ouvrir pour vous demander de choisir un destinataire. Sélectionnez la ligne correspondant au contact que vous venez d’ajouter, puis cliquez sur “OK”.

![Choisir les destinataires](https://static.irz.fr/2015/02/choisir-destinataires.png)
![Message chiffré](https://static.irz.fr/2015/02/message-chiffre.png)

Votre message est maintenant entièrement chiffré, vous pouvez l’envoyer en toute sécurité !

Comme vous l’avez compris, vous n’avez qu’a récupérer la clef publique de votre contact, et ce une seule fois. Dès que vous l’aurez fait, le contact sera toujours accessible depuis le menu de sélection de destinataire.



## Etape 4 : Comment recevoir un mail chiffré



Avec le message sécurisé que vous avez envoyé, le destinataire voudra sans doute le déchiffrer ! Dans le contexte de ce tutoriel, nous allons à présent nous passer pour le destinataire.

J’ai donc reçu un message :
![message reçu](https://static.irz.fr/2015/02/message-recu-1.png)

Copiez le corps du message, comprenant les “—–BEGIN PGP MESSAGE—–” et “—–END PGP MESSAGE—–”. Copiez tout ce texte dans votre éditeur de texte favori (j’utilise TextWrangler en ce qui me concerne) :
![message reçu copié dans textwrangler](https://static.irz.fr/2015/02/message-recu-2-textwrangler.png)

Sélectionnez tout le texte, puis tapez sur ⌃⌥⌘- pour déchiffrer le message. Vous serez immédiatement invité à entrer votre passphrase. Entrez la, puis cliquez sur “OK” :
![message reçu déchiffrer](https://static.irz.fr/2015/02/message-recu-3-dechiffrer.png)

Vous verrez tout de suite votre message déchiffré :
![message reçu à vérifier](https://static.irz.fr/2015/02/message-recu-4-a-verifier.png)

Maintenant, vous pouvez vérifier le message. Sélectionnez le texte, puis tapez sur ⌃⌥⌘]. Vous verrez un message de confirmation :
![message reçu verifié](https://static.irz.fr/2015/02/message-recu-5-verifie.png)

Appuyez sur “OK”.



## Exporter vos clefs



Vos clefs sont relativement importantes, elles ne doivent pas tomber entre toutes les mains (surtout la clef privée). Cependant, si vous chiffrez des documents personnels (que vous chiffrez pour vous-même), vous devez impérativement pouvoir disposer de votre clef !

Pour cela, il est important de pouvoir exporter votre jeux de clefs dans un fichier, que vous pourrez stocker sur une clef USB, dans un coffre fort, ou sur votre Dropbox, par exemple.

La manipulation est assez simple.


Commencez par ouvrir l’application GPG Keychain Access, puis cliquez sur “Exporter” en haut à gauche de la fenêtre. Une boite de dialogue va s’ouvrir, vous permettant de choisir le nom du fichier. Cochez la case “Ajouter la clé secrète au fichier d’export” afin d’intégrer les 2 clefs dans votre fichier, puis cliquez sur “Enregistrer”.

![Exporter une paire de clefs](https://static.irz.fr/2015/02/exporter-paire-clef.png)

Une fois votre document enregistré, vous pouvez le stocker ou bon vous semble.

Pour voir vos clefs, il vous suffit d'ouvrir ce fichier avec un éditeur de texte :

![clef publique textwrangler](https://static.irz.fr/2015/02/clef-publique-textwrangler.png)




## Qu’est ce que chiffrer, déchiffrer, signer et vérifier signifient ?



Maintenant que vous savez comment signer et chiffrer des messages, parlons un peu des différents termes utilisés jusque là.

**Chiffrer** signifie prendre votre clef privée et la clef publique du destinataire, et brouiller le message. Le message brouillé est à l’abri des regards indiscrets. L’expéditeur doit toujours chiffrer.

**Déchiffrer** signifie prendre un message chiffré combinée avec la clé secrète et la clé publique de l’expéditeur, et il déchiffre. Le destinataire déchiffre toujours.

Ces deux termes peuvent être considérés comme opposés.

**Signer** un message permet au destinataire de prouver votre identité. Elle permet aussi de prouver que le message n’a pas été modifié en vérifiant son intégrité. Il s’agit toujours de l’expéditeur qui signe un message.

**Vérifier** un message est la manière d’analyser un message signé, et ce afin de déterminer si la signature est valide.

Signer et vérifier peuvent être aussi considérés comme opposés.



## Dans quel cas dois-je signer ? Dans quel cas dois-je chiffrer ?



Il n’est pas nécessaire de chiffrer ou signer l’ensemble de vos conversations. Mais alors : quand devons nous signer ? Quand devons-nous chiffrer ? Et quand devons-nous nous abstenir de toute action superflue ?

Il y a trois choix rationnels que vous pouvez effectuer lorsque vous envoyez un message :
1. **Ne rien faire.** Si le contenu est publique (si il n’y a rien de confidentiel) et si le destinataire ne se préoccupe pas de savoir si c’est un imposteur qui envoi le message, alors ne faites rien. Envoyez le message comme vous avez toujours envoyé vos messages : en texte clair.
2. **Signer mais ne pas chiffrer.** Si le contenu du message est publique mais que le destinataire a besoin d’une preuve de votre identité et que vous n’êtes pas un imposteur, vous pouvez signer sans chiffrer. Vous pouvez suivre la suite du tutoriel, en passant la partie permettant de chiffrer.
3. **Signer et chiffrer.** Si le contenu du mail est totalement confidentiel, signer et chiffrer. Peut importe que votre destinataire ai besoin d’une preuve de votre identité : signez toujours avant de chiffrer.

Dans 90% des mail que j’envois, je ne fais rien, car ce n’est pas nécessaire. Dans 10% des cas, je signe et chiffre. Chaque fois qu’il y a des informations confidentielles - Business plan, numéro de carte de crédit, RIB, numéro de sécurité sociale, stratégies marketing - je signe et je chiffre. Je définis les informations confidentielles au sens large, car je préfère signer et chiffrer “pour rien” plutôt que de craindre une fuite d’information sensible. J’utilise très rarement la troisième option, signer sans chiffrer, mais l’usage de PGP peut être très différente d’une profession/situation à une autre.



## Pourquoi ne pas utiliser les pièces jointes PGP MIME ? Pourquoi ne pas utiliser le plugin PGP de Mail.app ?



Quelques geeks du PGP préfèrent envoyer les messages PGP en tant que pièce jointe (alias PGP MIME type), au lieu d’utiliser le texte du mail (alias PGP INLINE).

Cependant, certains débutant en PGP veulent savoir pourquoi je déconseille d’utiliser un plugin intégré à leurs client mail (comme le Mail.app PGP plugin).

Voilà pourquoi :




    
  * Les pièces jointes m’emmerdent.

    
  * Les gens qui utilisent les extensions de chiffrement n’ont aucune idée du fonctionnement de leurs programme, ce qui leurs procure une fausse sensation de sécurité

    
  * le texte brut peut être copié n’importe où (terminal, Facebook, iMessage, etc.), ce n’est pas le cas des pièces jointes.

    
  * La majorité des personnes m’ayant écrit un mail test en utilisant une pièce jointe MIME et ayant utilisé l’extension PGP de Mail.app m’ont envoyé des messages indéchiffrable, car ils n’avaient aucune idée de ce qu’ils faisaient et de la manière dont ceci fonctionnait.

    
  * Quand une extension génère une pièce jointe et l’envoi avant mêm que vous ayez pu voir de quoi il s’agissait, vous n’avez aucune idée de ce qui à été envoyé.

    
  * Beaucoup d’applications n’intègrent pas PGP nativement, vous avez donc besoin d’utiliser le texte brut !





## Essayez, envoyez-moi un mail !



Envoyez-moi un mail [via la formulaire de contact.](http://irz.fr/contact/) Envoyez-moi un message signé et [chiffré avec ma clef,](http://irz.fr/pgp/) je vous répondrais.

Cet document est inspiré de l'article de Jerzy J. Gangi [“The best PGP tutorial for Mac OS X, ever”](http://notes.jerzygangi.com/the-best-pgp-tutorial-for-mac-os-x-ever/).
