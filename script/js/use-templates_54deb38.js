console.log("=============================="),console.log("= /script/js/use-template.js ="),console.log("=============================="),console.log("");var tpl=Handlebars.template(function(e,l,s,t,o){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,e.helpers),o=o||{};var a,n,r="",i="function",c=this.escapeExpression;return r+="<h1>",(n=s.title)?a=n.call(l,{hash:{},data:o}):(n=l&&l.title,a=typeof n===i?n.call(l,{hash:{},data:o}):n),r+=c(a)+'</h1>\n<div class="body">\n    ',(n=s.body)?a=n.call(l,{hash:{},data:o}):(n=l&&l.body,a=typeof n===i?n.call(l,{hash:{},data:o}):n),r+=c(a)+"\n</div>"}),data={title:"use handlebars",body:"It works!"},html=tpl(data);console.log("use handlebars from js: "),console.log(html);var tpl=[function(locals,filters,escape,rethrow){function rethrow(e,l,s,t){var o=l.split("\n"),a=Math.max(t-3,0),n=Math.min(o.length,t+3),r=o.slice(a,n).map(function(e,l){var s=l+a+1;return(s==t?" >> ":"    ")+s+"| "+e}).join("\n");throw e.path=s,e.message=(s||"ejs")+":"+t+"\n"+r+"\n\n"+e.message,e}escape=escape||function(e){return String(e).replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var __stack={lineno:1,input:"<ul>\n<% for(var i=0; i < supplies.length; i++) {%>\n   <li><%= supplies[i] %></li>\n<% } %>\n</ul>",filename:"template/ejs/foo.ejs"};try{var buf=[];with(locals||{})!function(){buf.push("<ul>\n"),__stack.lineno=2;for(var e=0;e<supplies.length;e++)buf.push("\n   <li>",escape((__stack.lineno=3,supplies[e])),"</li>\n"),__stack.lineno=4;buf.push("\n</ul>")}();return buf.join("")}catch(err){rethrow(err,__stack.input,__stack.filename,__stack.lineno)}}][0],data={supplies:["foo","bar"]},html=tpl(data);console.log(""),console.log("use ejs from js: "),console.log(html);var url="/html/jade/foo.html",xhr=new XMLHttpRequest;xhr.open("GET",url,!1),xhr.send(),console.log(""),console.log("use jade file:"),console.log(xhr.responseText);