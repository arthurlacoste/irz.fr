---
author: art
comments: true
date: 2011-09-02 16:03:44+00:00
layout: post
redirect_from: desole-type-fichier-pas-autorise-pour-raisons-securite/
slug: desole-type-fichier-pas-autorise-pour-raisons-securite
title: Désolé, ce type de fichier n’est pas autorisé pour des raisons de sécurité
wordpress_id: 1438448378
categories:
- Tutoriel
- Wordpress
post_format:
- Galerie
tags:
- $existing_mimes
- add_action
- add_filter
- add_settings_section
- admin_init
- explode
- extension de fichier
- get_option
- mime
- php
- type de fichier
- upload_mimes
- wordpress
---

Qui n’a jamais eu le message : **“Tel fichier n’a pas pu être mis en ligne suite à une erreur - Désolé, ce type de fichier n’est pas autorisé pour des raisons de sécurité.”** ? C’est le message qui s’affiche lorsque vous essayer d’utiliser l’utilitaire d’upload de WordPress en utilisant une extension interdite par défaut par votre CMS préféré.

Il vous est en effet sans doute déjà arrivé de souhaiter télécharger <del>un film</del> un type de fichier un peu spécial sur Wordpress et qui n'était pas supporté par le gestionnaire de fichier de votre blog. Vous vous êtes sans doute rabattu sur une autre solution ou vous cherchiez encore.



Si vous voulez vous simplifiez la vie sans avoir à toucher votre code, j'ai créé le plugin [add more files extensions](https://irz.fr/add-more-files-extensions), qui permet de réaliser (avec une interface) ce que je m'apprête à vous décrire tout au long de cet article.



## Ajouter un type de fichier


En ce qui me concerne, j'ai rencontré le problème avec un fichier sc2replay (replay du jeux vidéo Starcraft 2). La manipulation est assez simple, elle consiste a insérer quelques lignes dans le fichier functions.php, qui se trouve normalement à la racine de votre thème (dans /wp-content/theme/votre-theme/).

Si vous ne connaissez pas le type mime de l'extension de fichier que vous souhaitez ajouter, je vous conseille une petite recherche sur Google.

Attention, gardez ces lignes de codes sous la main car lorsque vous allez changer le thème de votre blog, il faudra insérer de nouveau ces lignes dans le thème que vous utiliserez.

    
    // autorise les mimes contenu dans la fonction mon_nouveau_mime()
    add_filter('upload_mimes', 'mon_nouveau_mime');
    
    // $existing_mimes récupère la liste des mimes existant
    function mon_nouveau_mime ( $existing_mimes = array() ) {
    	$existing_mimes['sc2replay'] = 'application/octet-stream';
    	return $existing_mimes;
    }


Pour enlever un type mime, vous pouvez utiliser unset dans votre fonction :

    
    unset( $existing_mimes['exe'] );




## Intégrer des extensions à la volée


Pour ce qui est de l'intégration à la volée, nous avons besoin d'un peu plus de code. Vous avez deux solutions. La première et de télécharger le plugin Wordpress [Add more files extensions](http://wordpress.org/extend/plugins/add-more-files-extensions/) (que j'ai développé suite à cet article) ou suivre la suite de ce tuto.

Ce que l'on souhaite faire, c'est d'intégrer un champ dans les paramètres wordpress (ici Réglages > Médias > Envoi de fichiers) permettant de personnaliser les extensions autorisées.

Toujours dans le fichier functions.php de votre thème, vous pouvez insérer ces lignes de code pour insérer un champ de paramètre personnalisé 'ext' (vous pourrez par la suite appeler la fonction get_option('ext') pour obtenir le résultat de ce champ.

    
    add_action('admin_init','add_media_field');
    
    function add_media_field() {
    	add_settings_section( 'fichier', __('Envoi de fichiers'), 'display_ext', 'media' );
    	register_setting( 'media', 'ext' );
    }
    
    function display_ext(){
    	echo '<input style="width: 85%;" name="ext" value="'.get_option('ext').'" type="text" id="ext" size="30"></input>';
    	echo __('Entrez les extensions de fichier que vous souhaitez ajouter sans le point (séparé par un espace, ex: "mp3 doc gif")');
    }


Pour résumer ces quelques lignes de code add_action('admin_init','add_media_field') lance la fonction add_media_field() lorsque l'utilisateur est dans la zone wp-admin de Wordpress. La fonction add_media_field() ajoute une section (add_settings_section) 'Envoi de fichiers' et se charge d'afficher sur la bonne page (Réglages > Médias) un section en insérant display_ext(). register_setting( 'media', 'ext' ) se charge d'enregistrer en base l'option 'ext' transmise par le formulaire.

Vous pouvez remplacer la ligne comprenant add_settings_section par celle-ci si vous ne voulez ajouter qu'un champ dans une section existante et pas une section entière :

    
    add_settings_field( 'ext', 'Extension', 'display_ext', 'media', 'default', array( 'label_for' => 'ext' ) );


Ces quelques lignes nous ont permis d'ajouter une option dans l'administration. Maintenant, il faut ajouter systématiquement les types associés à l'option 'ext' pour que l'on puisse utiliser les médias de Wordpress avec les extensions que l'on veut. Pour cela, il nous faut un fichier bien spécial, comprenant un peux plus de 600 extensions de fichiers et leurs types associés. [Téléchargez ce fichier](https://static.irz.fr/2011/09/types-mimes.php_.txt) et mettez le dans le dossier 'inc' de votre thème en le renomant 'types-mimes.php'.

Maintenant, toujours dans le fichier 'functions.php' de votre thème, ajouter ceci :

    
    add_filter('upload_mimes', 'custom_upload_mimes');
    
    function custom_upload_mimes ($existing_mimes = array()) {
        $mimetype = new mimetype();
        $file_types = get_option('ext');
        $variables = explode(' ', $file_types);
    
        foreach($variables as $value) {
            $value = trim($value);
            if(!strstr($value, '/')) {
                $mime = $mimetype->privFindType($value);
            } else {
                $mime = $value;
            }
            $existing_mimes[$value] = $mime;
        }
        return $existing_mimes;
    }
    
    class mimetype {
       function privFindType($ext) {
          $mimetypes = $this->privBuildMimeArray();
    
          if (isset($mimetypes[$ext])) {
             return $mimetypes[$ext];
          } else {
             return 'application/octet-stream';
          }
    
       }
    
    	function privBuildMimeArray() {
    		require_once('inc/types-mimes.php');
    		return $types;
    	}
    }


La fonction custom_upload_mimes() parcourt la liste des extensions et utilise la classe mimetype pour l'associer à un type mime. Si aucun type n'est trouvé, l'extension prend le type mime 'application/octet-stream'.

Si vous avez des questions, je serait heureux d'y répondre.

[[Source](http://stackoverflow.com/questions/5342348/foreach-loop-for-wordpress-upload-mimes)]
