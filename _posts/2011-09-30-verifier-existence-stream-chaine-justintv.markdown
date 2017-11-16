---
author: art
comments: true
date: 2011-09-30 13:14:47+00:00
layout: post
redirect_from: verifier-existence-stream-chaine-justintv/
slug: verifier-existence-stream-chaine-justintv
title: Vérifier l'existence d'un stream en cours sur une chaîne justin.tv
wordpress_id: 1438448411
categories:
- Développement
- PHP
- Tutoriel
tags:
- cast
- file_get_contents
- justintv
- live
- MissClickTV
- php
- stream
- streaming
- strpos
---

Pour les besoins d'un développement en cours, j'ai commencé à me plonger dans l'API du site JustinTV.

Voilà la portion de code qui va bien vous aider. Je vais me passer de commentaires, la code parle de lui-même :


    
{% highlight python %}

function is_streaming($stream)
{
  $link = 'http://api.justin.tv/api/stream/list.json?channel=' . $stream;
  $data = file_get_contents($link);
  $existe = strpos($data, 'name');
  if($existe) {
    return true;
  }
  return false;
}

$chaine = 'missclicktv';
if(is_streaming($chaine))
{
  echo $chaine . ' est en train de streamer !';
} else {
  echo 'Rien en cours, allez sur le Youtube de ' . $chaine . ' !';
}

{% endhighlight %}



Il suffit donc d'utiliser la fonction is_streaming() qui retourne true si l'utilisateur stream actuellement. Si le stream n'est pas en cours, vous pouvez dirigez l'utilisateur vers la chaîne YouTube (ou autre) correspondante.

Enjoy !
