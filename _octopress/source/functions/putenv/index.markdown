---
layout: page
title: "JavaScript putenv function"
comments: true
sharing: true
footer: true
sidebar: false
alias:
- /functions/view/putenv:588
- /functions/view/putenv
- /functions/view/588
- /functions/putenv:588
- /functions/588
---
<!-- Generated by Rakefile:build -->
A JavaScript equivalent of PHP's putenv

{% codeblock info/putenv.js lang:js https://raw.github.com/kvz/phpjs/master/functions/info/putenv.js raw on github %}
function putenv (setting) {
  // http://kevin.vanzonneveld.net
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: We are not using $_ENV as in PHP, you could define
  // %        note 1: "$_ENV = this.php_js.ENV;" and get/set accordingly
  // %        note 2: Uses global: php_js to store environment info
  // *     example 1: putenv('LC_ALL=en-US');
  // *     results 1: true
  // BEGIN REDUNDANT
  this.php_js = this.php_js || {};
  this.php_js.ENV = this.php_js.ENV || {};
  // END REDUNDANT
  var pos = setting.indexOf('=');
  this.php_js.ENV[setting.slice(0, pos)] = setting.slice(pos + 1);
  return true;
}
{% endcodeblock %}

 - [view on github](https://github.com/kvz/phpjs/blob/master/functions/info/putenv.js)
 - [edit on github](https://github.com/kvz/phpjs/edit/master/functions/info/putenv.js)


### Other PHP functions in the info extension
{% render_partial _includes/custom/info.html %}
## Legacy comments
These were imported from our old site. Please use disqus below for new comments
<div style="overflow-y: scroll; max-height: 500px;">
{% render_partial functions/putenv/_comments.html %}
</div>
