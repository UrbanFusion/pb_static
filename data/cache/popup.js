var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;function PopupWin (data) {if (data.city == '' || data.city.indexOf('����') > -1) {return false;} else {jQuery(document).click(function(){if (!getCookiePopup("popWin")){setCookiePopup("popWin", "true");var site = jQuery('body').attr('id'), page = jQuery('body').attr('class');var urls = {'forum' : {'index': ['A', 'G', 'I'],'forumdisplay': ['A', 'G', 'I', 'J']},'portal': {'index': ['A', 'B', 'I']},'others': ['A', 'I']};var url = '';var url_pre = 'http://e.cn.miaozhen.com/r.gif?%5Ek=1000552%5Ep=3xVu';var url_suf = '0%5Eo=http://bbs.pcbeta.com/ie9.html';if (site == 'nv_forum') {if (page == 'pg_index') {url = urls['forum']['index'];} else if (page == 'pg_forumdisplay') {url = urls['forum']['forumdisplay'];} else {url = urls['others'];}} else if (site == 'nv_portal') {if (page == 'pg_index') {url = urls['portal']['index'];} else {url = urls['others'];}} else {url = urls['others'];}if (!is_chrome) {window.open(url_pre+url[Math.ceil(Math.random()*(url.length))-1]+url_suf);window.focus();}}});}}function setCookiePopup(name,value){var Days = 1;var exp = new Date();exp.setTime(exp.getTime() + Days*24*60*60*1000);document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();}function getCookiePopup(name){var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if (arr=document.cookie.match(reg)) {return unescape(arr[2]);} else {return null;}}