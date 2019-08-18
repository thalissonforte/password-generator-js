/*!
 * Password Encrypter by Thalisson Forte
 * Copyright 2018-2019
 */
 
function criptNewPass(){var e=document.getElementById("inout").value,t=new Date,n=t.getTime().toString(),i=n.substring(11,12),o=t.toString().substring(2,6),r=t.toString().substring(6,8);e.length<6&&(e+=n.substring(9,11),e+=o+r,e+=n.substring(11,13)),10<e.length&&(e=e.substring(0,10));for(var g=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/ /g,i)).replace(/a/g,"4")).replace(/e/g,"3")).replace(/i/g,"1")).replace(/o/g,"0")).replace(/u/g,"00")).toLowerCase().split(""),s=0;s<e.length;s++)s%2==0&&(g[s]=g[s].toUpperCase());e=g.join(""),document.getElementById("inout").value=e}$(function(){$("#inout").click(function(){$(this).select(),document.execCommand("copy")})});