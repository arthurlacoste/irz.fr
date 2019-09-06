---
title: N'afficher certaines zones que si vous êtes administrateur
date: 2014-07-29 23:06:47 Z
categories:
- Liveblog
- Tutoriel
- Wordpress
author: art
comments: true
layout: post
redirect_from: admin-afficher-zone/
wordpress_id: 1438449440
---

Vous voulez profiter de votre sidebar pour y ajouter quelques liens spécifiques, qui ne vous profiterons qu'a vous, administrateur ? Alors n'utilisez pas la fonction "faux ami" is_admin(), qui détecte si vous êtes sur une page d'administration (dans le dossier wp-admin/, tout simplement).

En réalité, il faut utiliser la fonction current_user_can(), qui elle vous permet de connaître les droits de l'utilisateur courant, pour tel ou tel capacités. La fonction renvoi true si l'utilisateur dispose du droit, false si ce n'est pas le cas.

Exemple :

    
    
    
    



A la place de "espace privé", vous allez pouvoir bien entendu mettre tout ce que vous voulez.


  

Vous pouvez utiliser cette fonction n'importe ou dans le thème de votre site et pas seulement dans votre sidebar.



