/*
HTML Imagemapper 10 AJAX
alta4 Geoinformatik 2006
15.12.2006 - 10.0.24
http://www.alta4.com
*/
fc799=new Array();uU4=new Array();m$4C7="simple";lKm=new Array();HcR72=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");function search(type){cu5();uU4=new Array();var uPAN4=_Ja9();m$4C7=type;uU4=k3G1(type,uPAN4[2]);var W61=s0A$5(uU4);if(p4LY9(PmRM+"_minimized")==true)minimize_popup(PmRM,f9m,G0J,false,null);if(W61.length==0)JUtC(new Array(null));else LB$3(W61)}function nGT($0Cv3){s43e=true;JUtC($0Cv3)}function $D78(){var P$Y0=null;var $0Cv3=new Array();var i8x05=true;for(var item in uU4){P$Y0=bX1r1(uU4[item]);if(P$Y0.length>0&&P$Y0[0]!=null){if(m$4C7=="simple"||i8x05)$0Cv3=$0Cv3.concat(P$Y0);else $0Cv3=n5Q8L(P$Y0,$0Cv3);i8x05=false}}$0Cv3=Co2(CV51($0Cv3));nGT($0Cv3)}function iw3(d6449,type,aPl$,c167){var k5547=new Array();if(type=="STRING"){var c3812=c167.length;var T319=0;var axU5A=0;if(c3812==2)T319=1;else{axU5A=Math.floor(c3812/3);if(c3812%3==1){axU5A--;T319=2}if(c3812%3==2)T319=1}for(var i=0;i<axU5A;i++)k5547.push(c167.substr(i*3,3).toUpperCase());for(var $6P$2=0;$6P$2<T319;$6P$2++)k5547.push(c167.substr((axU5A*3)+$6P$2*2,2).toUpperCase())}else{if(typeof(g_searchChunks[d6449])=="object"){var P5O=g_searchChunks[d6449];if(aPl$==l_lower){k5547.push(P5O[0].toString(10));for(var t69T=1;t69T<P5O.length;t69T++)if(P5O[t69T-1]<c167)k5547.push(P5O[t69T].toString(10))}if(aPl$==l_higher){if(c167>P5O[P5O.length-2])k5547.push(P5O[P5O.length-1].toString(10));else{for(var t69T=0;t69T<P5O.length;t69T++)if(P5O[t69T]>c167)k5547.push(P5O[t69T].toString(10))}}if(aPl$==l_equals){if(c167<=P5O[0])k5547.push(P5O[0].toString(10));else if(c167<=P5O[P5O.length-1]){for(var t69T=1;t69T<P5O.length;t69T++){if(P5O[t69T]>=c167&&P5O[t69T-1]<c167){k5547.push(P5O[t69T].toString(10));break}}}}}}return k5547}function k3G1(CSI,S4_){var HeO=new Array();if(CSI=="simple"){for(var t69T in g_searchFields){var C_t9=g_searchFields[t69T].split("||")[0];var type=g_searchFields[t69T].split("||")[1];switch(type){case "NUMBER":var k5547=iw3(C_t9,type,l_equals,S4_);if(k5547.length==0)k5547=null;HeO.push(new Array(C_t9,type,l_equals,S4_,k5547));break;default:var k5547=iw3(C_t9,type,l_contains,S4_);if(k5547.length==0)k5547=null;HeO.push(new Array(C_t9,type,l_contains,S4_,k5547));break}}}else if(CSI=="advanced"){if(lKm.length>0)uBVo(lKm,HeO)}return HeO}function s0A$5(j71){var h$3e=new Array();for(var item in j71){if(j71[item][4]!=undefined){for(var t69T in j71[item][4]){h$3e.push(new Array(j71[item][0],j71[item][4][t69T]))}}}return h$3e}function _2693(){var O5_Y=_Ja9();var k5547=iw3(O5_Y[0].split("||")[0],O5_Y[0].split("||")[1],O5_Y[1],O5_Y[2]);lKm.push(new Array(O5_Y[0].split("||")[0],O5_Y[0].split("||")[1],O5_Y[1],O5_Y[2],k5547))}function rem_advSearchAtom(id){s43e=false;for(var i=0;i<lKm.length;i++ ){var t69T=lKm[i][0]+"||"+lKm[i][1]+"||"+lKm[i][2]+"||"+lKm[i][3];if(id==t69T)lKm.splice(i,1)}}function LB$3(YW24g){if(YW24g.length>0){var T4n1n=$83(YW24g[YW24g.length-1]);O236(T4n1n,YW24g)}}function $83(item){var c167=item[1];var d6449=item[0].toUpperCase();c167=E7r$$(c167);return g_searchDir+encodeURIComponent(d6449)+"/"+encodeURIComponent(c167)+".txt"}function pdo(YW24g,c167){if(YW24g.length>0){$p_(YW24g[YW24g.length-1][0],YW24g[YW24g.length-1][1],c167);YW24g.length=YW24g.length-1;if(YW24g.length>0)LB$3(YW24g);else $D78()}}function $p_(d6449,O5_Y,c167){d6449=d6449.toUpperCase();if(isNaN(O5_Y))O5_Y=O5_Y.toUpperCase();else O5_Y=O5_Y.toString(10);if(typeof(fc799[d6449])!="object")fc799[d6449]=new Array();if(typeof(fc799[d6449][O5_Y])!="object")fc799[d6449][O5_Y]=new Array();fc799[d6449][O5_Y]=f916(c167)}function f916(c167){if(c167!=""&&c167!="not found"){var O5542=new Array();var rdce=c167.split(";");var N08H=rdce.length;for(var bA51t=0;bA51t<N08H;bA51t++){var L301=rdce[bA51t].split("(");var D3JB=new Array();var iQK9=L301[1].split(",");for(var NY1j=0;NY1j<iQK9.length;NY1j++)D3JB.push(parseFloat(iQK9[NY1j]));if(L301[0]!="")O5542.push(new Array(parseInt(L301[0]),D3JB))}return O5542}else return ""}function bX1r1(_696d){var d6449=_696d[0];var type=_696d[1];var aPl$=_696d[2];var c167=_696d[3];var k5547=_696d[4];if(isNaN(d6449))d6449=d6449.toUpperCase();var $0Cv3=new Array(null);if(k5547!=null){if(typeof(fc799)=="object"){if(type=="STRING"){if(typeof(fc799[d6449])=="object"){if(typeof(fc799[d6449][k5547[0]])=="object"){if(fc799[d6449][k5547[0]]!=""&&fc799[d6449][k5547[0]]!=undefined)$0Cv3=fc799[d6449][k5547[0]];var t8sJ5=k5547[0].length;if($0Cv3[0]!=null&&k5547.length>1){for(var p98=1;p98<k5547.length;p98++){if(fc799[d6449][k5547[p98]]!=""){$0Cv3=Fs0Y5($0Cv3,fc799[d6449][k5547[p98]],t8sJ5);t8sJ5+=k5547[p98].length}else{$0Cv3=new Array(null);break}}}}}}else{if(k5547!=null){var $p1=new Array();for(var item=0;item<k5547.length;item++){if(typeof(fc799[d6449])=="object"){if(fc799[d6449][k5547[item]]!=""){$p1=$p1.concat(fc799[d6449][k5547[item]])}}}$0Cv3=$u5($p1,aPl$,c167)}}}}if($0Cv3[0]!=null)$0Cv3=wGmX($0Cv3);return $0Cv3}function Fs0Y5(_y9,S6h5,t8sJ5){var KYm=new Array();for(var t69T=0;t69T<_y9.length;t69T++){for(var T319=0;T319<S6h5.length;T319++){if(_y9[t69T][0]==S6h5[T319][0]){if(bW5i(_y9[t69T][1],S6h5[T319][1],t8sJ5))KYm.push(_y9[t69T]);break}}}return KYm}function bW5i(_EX,u_8,t8sJ5){for(var t69T=0;t69T<_EX.length;t69T++){for(var T319=0;T319<u_8.length;T319++){if(IALA(_EX[t69T],u_8[T319],t8sJ5))return true}}return false}function IALA(u0C,roaH9,t8sJ5){if(u0C+t8sJ5==roaH9)return true;else return false}function $u5(r$8,aPl$,S4_){var Op7=new Array();if(r$8.length>0){for(var item=0;item<r$8.length;item++ ){if(aPl$==l_higher)if(parseFloat(r$8[item][1])>S4_)Op7.push(r$8[item]);if(aPl$==l_equals)if(parseFloat(r$8[item][1])==S4_)Op7.push(r$8[item]);if(aPl$==l_lower)if(parseFloat(r$8[item][1])<S4_)Op7.push(r$8[item])}}return Op7}function n5Q8L(_y9,S6h5){var KYm=new Array();for(var t69T=0;t69T<_y9.length;t69T++){for(var T319=0;T319<S6h5.length;T319++){if(_y9[t69T]==S6h5[T319]){KYm.push(_y9[t69T]);break}}}return KYm}function wGmX(r$8){var pje8=new Array();for(var i=0;i<r$8.length;i++)pje8.push(r$8[i][0]);return Co2(pje8)}__1="listCon";p41=0;P21=new Array();function create_lists(){if(g_hasLists){var size=new Array(225,350);var D3JB=new Array(g_viewOff[0]+g_viewExt[0]-size[0]-50,g_viewOff[0]+100);if(size[1]+D3JB[1]>g_viewExt[1]-100)size[1]=g_viewExt[1]-D3JB[1]-100;if(!element(__1+"_attlayer")){var JcK4=D8430(__1,"","",D3JB[1],D3JB[0],"none",true,false,true,false,true,"","drag('"+__1+"');","","hider('"+__1+"');","","",l_lists,"clearList();minimize_popup('"+__1+"',"+size[1]+",0,true,'auto');");h14G2.innerHTML+=JcK4;if(!g_showListsAtStart)hider(__1);cVdT(__1,size[1]);_y4n(__1,QFy5P);Y19VB(__1,size[0])}else R0S(__1);if(typeof(P21[g_lists[p41]])!="object")iOA4(g_listsDir+encodeURIComponent(g_lists[p41])+".txt");else U2xE2()}}function clearList(){if(document.all){if(p4LY9(__1+"_minimized"))U2xE2();else element(__1+"_anchor").innerHTML=""}}function addto_lists(){var _64=arguments[0];if(typeof(P21[_64])!="object")P21[_64]=new Array();for(var i=1;i<arguments.length;i++ ){var item=arguments[i].split("||");P21[_64].push(new Array(item))}P21[_64].sort();U2xE2()}function U2xE2(){if(element(__1+"_attlayer")){var JcK4=element(__1+"_anchor");JcK4.innerHTML="";if(!element(__1+"_listSel")){if(g_lists.length>1){var C80$j=Vks4(__1+"_listSel",NfO7(g_lists),g_lists,p41);C80$j.onchange=Yh5E9}else{var C80$j=M0R("p");C80$j.innerHTML=NfO7(g_lists)[0];C80$j.id=__1+"_listSel";C80$j.style.fontWeight="bold";C80$j.style.marginBottom="5px"}qiM(JcK4,C80$j)}if(typeof(P21[g_lists[p41]])!="object")iOA4(g_listsDir+encodeURIComponent(g_lists[p41])+".txt");else{var O2s57="";for(var i=0;i<P21[g_lists[p41]].length;i++ ){(A0B8X(i))?O2s57="key":O2s57="value";var mtwk_=P21[g_lists[p41]][i];var p=M0R("p");p.className=O2s57;for(var item in mtwk_){p.innerHTML+="<a href=\"javascript:showinmap("+mtwk_[item][1]+","+mtwk_[item][2]+",'"+mtwk_[item][3]+"');\">"+mtwk_[item][0]+"<a>"}qiM(JcK4,p)}}}}function Yh5E9(){p41=GMAc6(__1+"_listSel")[0];U2xE2()}function NfO7(n02){var $20R=new Array();for(var t69T=0;t69T<n02.length;t69T++ ){var NOlk=n02[t69T].split("__");$20R.push(NOlk[0]+": "+NOlk[1])}return $20R}function E7r$$(O5_Y){O5_Y=O5_Y.toUpperCase();var D5ud="";for(var i=0;i<O5_Y.length;i++ )D5ud+="&#"+O5_Y.charCodeAt(i)+";";return D5ud}function r$K(UXk){var x="";var i=1,eiT98=UXk,B0301=0;while(eiT98>15){eiT98=Math.floor(eiT98/16);i++}eiT98=UXk;for($6P$2=i;$6P$2>=1;$6P$2--){var index=Math.floor(eiT98/Math.pow(16,$6P$2-1));x=x+HcR72[index];eiT98=eiT98-(Math.floor(eiT98/Math.pow(16,$6P$2-1))*Math.pow(16,$6P$2-1))}return x}function mUQN(x){var st5A0=new Array();var UXk=0,_W0=0;x=x.toUpperCase();for(i=0;i<x.length;i++){for($6P$2=0;$6P$2<=16;$6P$2++){if(x.substring(i,i+1)==HcR72[$6P$2]){_W0=1;st5A0[i]=$6P$2}}}for(i=0;i<x.length;i++)UXk=UXk+st5A0[i]*Math.pow(16,x.length-i-1);return UXk}