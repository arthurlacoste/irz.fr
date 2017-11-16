---
title: "Chercher"
permalink: /recherche/
tipue_search_active: true
---

<form action="{{ page.url | relative_url }}">
  <div class="tipue_search_left"><img src="{{ "/assets/tipuesearch/search.png" | relative_url }}" class="tipue_search_icon"></div>
  <div class="tipue_search_right"><input type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required></div>
  <div style="clear: both;"></div>
</form>


<p id="tipue_search_content"></p>

<div id="gif" class="remove">

<span id="giphyme"></span></div>

<script type="text/javascript">
var $GET=[];
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$GET[name]=value;});

function unslug(text) {
  text = text.replace('{{ site.url }}','')
  .replace(/-/g,' ').replace('/','');
  text = decodeURIComponent(text);
  return text;
}

document.addEventListener('DOMContentLoaded', function () {
  var url = $GET['q'] ? unslug($GET['q']) : 'search';
  getGif(url);
});
</script>
