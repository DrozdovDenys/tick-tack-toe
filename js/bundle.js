(()=>{"use strict";var e,n=document.getElementById("area"),t=document.getElementById("winner"),r=document.getElementById("curPlyr"),o=document.getElementById("btn-reset"),i=document.getElementById("btn-clear"),l=document.getElementsByClassName("cell"),c=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],a={x:0,o:0,d:0},d=[],s=function(){r.innerHTML=(e=Math.floor(10*Math.random())%2?"x":"o").toUpperCase()};s();for(var u=function(){for(var e=0;e<l.length;e++)l[e].innerHTML="";f(d,"white"),g();for(var n=0;n<l.length;n++)l[n].addEventListener("click",m),l[n].style.cursor="pointer";t.textContent="The winner is..."},f=function(e,n){e.forEach((function(e){l[e-1].style.backgroundColor=n}));for(var t=0;t<l.length;t++)l[t].style.cursor="not-allowed",l[t].removeEventListener("click",m)},g=function(){document.getElementById("sX").innerHTML=a.x,document.getElementById("sO").innerHTML=a.o,document.getElementById("sD").innerHTML=a.d},m=function(n){var o=[];n.target.innerHTML?alert("The cell is full. Choose anoter cell!"):n.target.innerHTML=e;for(var i=0;i<l.length;i++)l[i].innerHTML===e&&o.push(parseInt(l[i].getAttribute("pos")));if(function(e){for(var n=0;n<c.length;n++){for(var t=!0,r=0;r<c[n].length;r++){var o=c[n][r];-1===e.indexOf(o)&&(t=!1)}if(t)return f(d=c[n],"green"),!0}return!1}(o))a[e]+=1,t.innerText="The winner is ".concat(e);else{var s=!0;for(var u in l)""===l[u].innerHTML&&(s=!1);s&&(a.d+=1,t.innerText="The draw. Try again!")}e="x"===e?"o":"x",r.innerHTML=e.toUpperCase()},v=1;v<=9;v++)n.innerHTML+="<div class = 'cell' pos = ".concat(v,"></div>");for(var T=0;T<l.length;T++)l[T].addEventListener("click",m);o.addEventListener("click",u),i.addEventListener("click",(function(){a.x=0,a.o=0,a.d=0,u(),s()}))})();