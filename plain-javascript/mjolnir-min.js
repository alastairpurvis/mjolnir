function mjolnirAjax(a){if(!a.url)return void(1==a.debugLog&&console.log("No Url!"));if(!a.type)return void(1==a.debugLog&&console.log("No Default type (GET/POST) given!"));a.method||(a.method=!0),a.debugLog||(a.debugLog=!1);var b=initMjolnir();b.onreadystatechange=function(){4==b.readyState&&200==b.status?(a.success&&a.success(b.responseText,b.readyState),1==a.debugLog&&console.log("SuccessResponse"),1==a.debugLog&&console.log("Response Data:"+b.responseText)):1==a.debugLog&&console.log("FailureResponse --> State:"+b.readyState+"Status:"+b.status)};var c=[],d=a.data;if("string"==typeof d)for(var e=String.prototype.split.call(d,"&"),f=0,g=e.length;f<g;f++){var h=e[f].split("=");c.push(encodeURIComponent(h[0])+"="+encodeURIComponent(h[1]))}else if("object"==typeof d&&!(d instanceof String||FormData&&d instanceof FormData))for(var i in d){var h=d[i];if("[object Array]"==Object.prototype.toString.call(h))for(var f=0,g=h.length;f<g;f++)c.push(encodeURIComponent(i)+"[]="+encodeURIComponent(h[f]));else c.push(encodeURIComponent(i)+"="+encodeURIComponent(h))}c=c.join("&"),"GET"==a.type&&(b.open("GET",a.url+"?"+c,a.method),b.send(),1==a.debugLog&&console.log("GET fired at:"+a.url+"?"+c)),"POST"==a.type&&(b.open("POST",a.url,a.method),b.setRequestHeader("Content-type","application/x-www-form-urlencoded"),b.send(c),1==a.debugLog&&console.log("POST fired at:"+a.url+" || Data:"+c))}function initMjolnir(){var a;return a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}