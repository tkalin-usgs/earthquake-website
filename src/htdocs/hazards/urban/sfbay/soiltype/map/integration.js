/*
HTML Imagemapper 10 AJAX
alta4 Geoinformatik 2006
15.12.2006 - 10.0.24
http://www.alta4.com
*/
function startUp(){cx6Hk();config_IM();setTimeout("waw3F()",250)}function waw3F(){document.getElementsByTagName("body")[0].innerHTML+="<p class='startUpMessage' id='loadingTxt' style='position:absolute; top:"+g_viewOff[1]+round(g_viewExt[1]/2)+"px; left:"+g_viewOff[0]+"px; width:"+g_viewExt[0]+"px; text-align:center; '>"+g_startUpMessage+"</p>";H7Ro8();_9P3h();Vl37t();x993();o46();Yg21();setTimeout("iwq0r('nnt5()')",250)}function iwq0r(d9132){var Ji5=true;for(var item in eAU){if(!eAU[item].complete){Ji5=false;break}}(Ji5)?setTimeout(d9132,1):setTimeout("iwq0r('"+d9132+"')",500)}function nnt5(){I0228();_m7();ini_ovMap();ini_legend();m13e();create_lists();_JDAa();o30t();I6o();t4h();F22D6();x57();kw5P4();c01();a5Y();v04i$();update_ovMapCrosshair();U8O0d();if(g_postToMapGallery)s2p();try{g_searchFields=g_defaultSearchField.concat(g_searchFields)}catch(st5A0){}delete_obj('loadingTxt');o5Qn()}function __q(){delete_obj(g_areaCon);delete_obj(g_areaLay);hide_popup(P1aO);clear(element(vd1))}function AL8g(S0j,k35L){Cb919(S0j);I0228();_9P3h();Vl37t();clear(element(NBFRy));_m7();t4h();F22D6();o30t();update_ovMapCrosshair();b080();_JDAa();a5Y();I6o();U8O0d();o5Qn()}function TJ0D6(){H304=true;delete_obj(g_areaCon);delete_obj(g_areaLay);hide_popup(P1aO);clear(element(vd1));Q2P()}function tGicV(R8I){}function TA1p$(){H304=false;F22D6();U8O0d();update_ovMapCrosshair();o5Qn()}function e11(){}ys4Xq=new Array();function _3_86(JR9){ys4Xq.push(JR9)}function o6X(){if(ys4Xq.length>0){var y_X=ys4Xq[0];ys4Xq.shift();return y_X}else{return false}}function o5Qn(){var fjRR=o6X();if(fjRR)setTimeout(fjRR,5)}h14G2=null;J7c65=null;function cx6Hk(){h14G2=document.getElementsByTagName("body")[0];J7c65=document.getElementsByTagName("head")[0]}function cK0(t8sJ5,size,id,x78,H$2,parent){var R9Fxk=M0R("div");R9Fxk.setAttribute("id",id);svSsR(R9Fxk,t8sJ5,size,null);if(x78!=null){for(var item in x78)R9Fxk.setAttribute(item,x78[item])}if(H$2!=null){for(var item in H$2)R9Fxk.style[item]=H$2[item]}qiM(parent,R9Fxk)}function clear(QS52){if(QS52)QS52.innerHTML=""}function element(id){return document.getElementById(id)}function delete_obj(id){if(element(id)){var QS52=element(id);var parent=QS52.parentNode;var vFT1=parent.removeChild(QS52)}}function svSsR(QS52,t8sJ5,size,r3Ng){if(typeof(QS52)=="object"){var _cUI=QS52.style;if(t8sJ5!=null){_cUI.position="absolute";if(!isNaN(t8sJ5[0]))_cUI.left=t8sJ5[0]+"px";if(!isNaN(t8sJ5[1]))_cUI.top=t8sJ5[1]+"px"}if(size!=null){if(!isNaN(size[0]))_cUI.width=size[0]+"px";if(!isNaN(size[1]))_cUI.height=size[1]+"px"}if(r3Ng!=null)_cUI.visibility=r3Ng}}function M0R(element){return document.createElement(element)}function hide(id){if(element(id))element(id).style.visibility="hidden"}function r3Ng(id){if(element(id))element(id).style.visibility="visible"}function nS97(QS52,c167){qiM(QS52,document.createTextNode(c167))}function qiM(uB2,CSI){if(uB2&&CSI)uB2.appendChild(CSI)}function Qg0f3(QS52){if(document.all)QS52.style.cursor="hand";else QS52.style.cursor="pointer"}function A0B8X(K0Q){var $963=K0Q;if(K0Q>100)$963=$963-Math.floor($963/100)*100;if(($963%2)==0)return true;else return false}function Co2(rRh_){if(isNaN(rRh_[0]))rRh_.sort();else rRh_.sort(gM9s4);var Op7=new Array();Op7.push(rRh_[0]);for(var item=1;item<rRh_.length;item++){if(rRh_[item]!=Op7[Op7.length-1])Op7.push(rRh_[item])}return Op7}function uBVo(input,B2O){for(var item in input)B2O[item]=input[item]}function gM9s4(a,b){return a-b}function round(gP69){return Math.round(gP69)}function ps83x(i){var c3812=i.length;if(i.substring((c3812-2),c3812)=="px"){i=i.substring(0,(c3812-2));i=parseInt(i,10)}return i}function tDW(){var V88w$=new Date();return V88w$.getTime()}function av6(){return true}function e9rT0(){return false}a81q();function a81q(){wRJN=new Array()}function U67(_$1J,value){if(typeof(value)=="object"){wRJN[_$1J]=new Array();for(var item in value){wRJN[_$1J][item]=value[item]}}else wRJN[_$1J]=value}function p4LY9(_$1J){if(typeof(wRJN[_$1J])!="undefined")return wRJN[_$1J];else return false}function print_item(id,n2I,coords){switch(id){case "map":var ph5=new Array("map",r70);U67("printItem",ph5);open_printWindow();break;case "dB":var r70="<table class=\"dashBoardPrintTable\"><tr>";var o70=1;for(var t69T in gwF){r70+="<td>"+em9l7(gwF[t69T][0],false)+"</td>";if(o70==3){r70+="</tr><tr>";o70=1}o70++}r70+="</tr></table>";var ph5=new Array("dB",r70);U67("printItem",ph5);open_printWindow();break;case "dD":var ph5=new Array("dD",element(PmRM+"_resultCon").innerHTML);U67("printItem",ph5);open_printWindow();break;default:var r0m=ir9(id);var in454=em9l7(id,false);var x77=_j6NI(coords);var ph5=new Array(id,in454,coords);U67("printItem",ph5);_3_86("open_printWindow()");move(x77[0],x77[1],'to');break}}function open_printWindow(){var width=700;var y6R3e=window.open("print.html","HTMLImagemapperPrintDialog","top=50,left=50,height=650,width="+width+",resizable=yes,scrollbars=yes,menubar=yes");if(y6R3e&&y6R3e.focus)y6R3e.focus()}$347k=8;sTR=9;o7nP8=10;kIJ=12;S1v=8;QFy5P=11;d8J0t=13;VE4M=3;y601=2;IV1=6;h77=4;$7_=3;P5734=5;wJvd=5;C_878=5;c961=6;i2di=5;wKi=6;QG2=7;function a5Y(){if(g_hasCopyrightInfo){if(!element("copyrightInfo")){var p=M0R("p");p.style.position="absolute";p.style.top=(g_viewOff[1]+g_viewExt[1]-100)+"px";p.style.left=g_viewOff[0]+"px";p.style.width=g_viewExt[0]-20+"px";p.style.textAlign="center";p.id="copyrightInfo";p.className="copyright";qiM(h14G2,p)}if(element("copyrightInfo")){var p=element("copyrightInfo");p.innerHTML=g_copyrightInfo[r8s6()];p.style.zIndex=$7_}}}function i$1(id,c167,action){var r70="<div onmousedown='"+action+"'>";r70+='<table class="buttonTable" id="'+id+'_knob" cellpadding="0" cellspacing="0">';r70+='  <tr>';r70+='    <td><img src="design/button_lo.gif" width="1" height="1" alt=""></td>';r70+='    <td style="background:url(design/button_lo.gif) repeat-x; " ></td>';r70+='    <td><img src="design/button_ro.gif" width="2" height="1" alt=""></td>';r70+='  </tr>';r70+='  <tr>';r70+='    <td style="background:url(design/button_lo.gif) repeat-y; " width="1"></td>';r70+='    <td height="17" class="knob">'+c167+'</td>';r70+='    <td style="background:url(design/button_r.gif) repeat-y; " width="2"></td>';r70+='  </tr>';r70+='  <tr>';r70+='    <td><img src="design/button_lu.gif" width="1" height="2" alt=""></td>';r70+='    <td style="background:url(design/button_u.gif) repeat-x; " height="2" ></td>';r70+='    <td><img src="design/button_ru.gif" width="2" height="2" alt=""></td>';r70+='  </tr>';r70+='</table>';r70+='</div>';return r70}function v04i$(){if((typeof(g_mapViewDirs)=="object")&&(g_mapViewDirs.length>=1)){var TOV9=0;if(element("infoBar"))TOV9=ps83x(element("infoBar").style.height);var position=new Array(g_viewOff[0],g_viewOff[1]+TOV9);cK0(position,new Array(g_viewExt[0],40),"changeViewCon",null,null,h14G2);var r70="<table style='float:right;' cellpadding='0' cellspacing='0' border='0'><tr>";for(var i=0;i<g_mapViewDirs.length;i++){var m95_=i$1("change_view"+i,g_mapViewDirs[i][0],'reload_tiles("'+g_mapViewDirs[i][1]+'");');r70+="<td>"+m95_+"</td>"}r70+="</tr></table>";element("changeViewCon").innerHTML=r70;for(var i=0;i<g_mapViewDirs.length;i++){Qg0f3(element("change_view"+i+"_knob"))}}}function _JDAa(){if(g_logoSize[1]>=80)var Gx5=g_logoSize[1];else var Gx5=80;Gx5+=10;if(g_hasInfoBar){if(!element("infoBar")){cK0(g_viewOff,new Array(g_viewExt[0],Gx5),"infoBar",null,null,h14G2);y69();RUCl();kOx()}$71(element("infoBar"),0.6);element("infoBar").className="infoBar";element("infoBar").style.zIndex=h77}}function y69(){if(g_hasInfoBar&g_hasTitle){var iK49=M0R("div");iK49.id="titleCon";qiM(element("infoBar"),iK49);element("titleCon").innerHTML=g_title;element("titleCon").className="title";var style=element("titleCon").style;style.position="absolute";style.top="5px";style.right="5px"}}function RUCl(){if(g_hasInfoBar&&g_hasComments){var Y3R=M0R("div");Y3R.id="authorInfoCon";Y3R.innerHTML=g_comments;qiM(element("infoBar"),Y3R);var style=element("authorInfoCon").style;element("authorInfoCon").className="comments";style.position="absolute";style.bottom="5px";style.right="5px"}}function kOx(){if(g_hasInfoBar&g_hasLogo){var TDT=M0R("div");TDT.id="logoCon";qiM(h14G2,TDT);var style=element("logoCon").style;style.position="absolute";style.top=(g_viewOff[1]+5)+"px";style.left=(g_viewOff[0]+5)+"px";style.zIndex=h77+1;var eAW=$9$(g_logoPath,g_logoSize,"logo",null,"");qiM(element("logoCon"),eAW)}}Iy6Qt=0;function x57(){var w392l=40;var _4y=new Array(40,40);var frame=M0R("img");frame.src=g_designDir+"frame.gif";frame.id="bottomFrame";frame.width=g_viewExt[0];frame.height=w392l;frame.style.position="absolute";frame.style.top=g_viewExt[1]+g_viewOff[1]-w392l+"px";frame.style.left=g_viewOff[0]+"px";frame.style.zIndex=P5734;qiM(h14G2,frame);var Sc57q=M0R("img");Sc57q.src=g_designDir+"frameCorner.gif";Sc57q.id="bottomFrameCorner";Sc57q.width=_4y[0];Sc57q.height=_4y[1];Sc57q.style.position="absolute";Sc57q.style.top=g_viewExt[1]+g_viewOff[1]-_4y[1]+"px";Sc57q.style.left=g_viewOff[0]+"px";Sc57q.style.zIndex=wJvd;if(g_hasZoomBar&(g_zoomFactors.length>1)){qiM(h14G2,Sc57q);Iy6Qt+=40}var t8sJ5=35;var GRxXB=M0R("div");GRxXB.id="frameKnobsCon";GRxXB.style.zIndex=C_878;GRxXB.style.verticalAlign="bottom";GRxXB.style.position="absolute";GRxXB.style.left=g_viewOff[0]+Iy6Qt+5+"px";GRxXB.style.top=g_viewOff[1]+g_viewExt[1]-t8sJ5+"px";GRxXB.style.width=g_viewExt[0]-Iy6Qt-10+"px";GRxXB.style.height=t8sJ5-2+"px";GRxXB.style.overflow="hidden";qiM(h14G2,GRxXB)}function kw5P4(){var L666_="<table cellpadding='0' cellspacing='0' border='0'><tr>";if(g_hasSearch){L666_+="<td><input type='text' id='frameSearchInput' size=15 /><a href=\"javascript:search('simple');\"><img id='simpleSearch' src='"+g_designDir+"search.gif' /></a></td><td>"+i$1("search",l_advancedSearch,"toggle_search();")+"</td>";Iy6Qt+=250}if(g_hasOvMap){L666_+="<td>"+i$1("ovMap",l_ovMap,"toggle_ovMap();")+"</td>";Iy6Qt+=120}if(g_hasLegend){L666_+="<td>"+i$1("legend",l_legend,"toggle_legend();")+"</td>";Iy6Qt+=70}if(g_hasLists){L666_+="<td>"+i$1("lists",l_lists,"toggle_lists();")+"</td>";Iy6Qt+=90}if(g_hasPrintKnob){L666_+="<td>"+i$1("print",l_print,"print_item(\"map\",0,\"\");")+"</td>";Iy6Qt+=90}element("frameKnobsCon").innerHTML+=L666_+"<td id='rwInfoCon' class='rwConStyle' ></td></tr></table>";if(element("search_knob"))Qg0f3(element("search_knob"));if(element("ovMap_knob"))Qg0f3(element("ovMap_knob"));if(element("legend_knob"))Qg0f3(element("legend_knob"));if(element("lists_knob"))Qg0f3(element("lists_knob"));if(element("print_knob"))Qg0f3(element("print_knob"))}function toggle_search(){if(m$4C7=="simple"){m$4C7="advanced";create_dD()}else{m$4C7="advanced";if(element(PmRM+"_attlayer")&&element(PmRM+"_attlayer").style.visibility=="visible"){setSimple();hider(PmRM)}else create_dD()}}function toggle_ovMap(){if(element("ovMap_attlayer")&&element("ovMap_attlayer").style.visibility=="visible"){delete_crosshair();hider('ovMap')}else{ini_ovMap();update_ovMapCrosshair()}}function toggle_lists(){if(element(__1+"_attlayer")&&element(__1+"_attlayer").style.visibility=="visible")hider(__1);else create_lists()}function toggle_legend(){if(element("legend_attlayer")&&element("legend_attlayer").style.visibility=="visible")hider("legend");else ini_legend()}function urlHandler(){var d3259=window.location.search;if(d3259!=''){var DK09k=new RegExp("#","");d3259=d3259.replace(DK09k,"");d3259=d3259.substring(1,d3259.length);if(d3259.indexOf("&")!=-1){var $06=d3259.split("&");var p759=new Array();for(var i=0;i<Hn1U.length;i++){p759[i]=Hn1U[i].split("=");IE5O(p759[i])}}else{var p759=new Array();p759[0]=d3259.split("=");IE5O(p759[0])}}}function IE5O(kLR7b){if(kLR7b[0]=="center"){var h5Q$D=kLR7b[1].split("_");W5j74(h5Q$D[0],h5Q$D[1],h5Q$D[2],false)}if(kLR7b[0]=="centerRW"){var h5Q$D=kLR7b[1].split("_");W5j74(h5Q$D[0],h5Q$D[1],h5Q$D[2],true)}if(kLR7b[0]=="showinmap"){var h5Q$D=kLR7b[1].split("_");var L2Jdq="showinmap("+h5Q$D[0]+","+h5Q$D[1]+",'"+h5Q$D[2]+"')";_3_86(L2Jdq)}}function posCalc(){GR10=new Array(g_viewExt[0]-250,80);k_UA2=new Array((g_viewOff[0]+g_viewExt[0]-225),round(g_viewOff[1]+g_viewExt[1]-475));Kp84p=new Array(g_viewOff[0]+g_viewExt[0]-300,g_viewOff[0]+100);e5v2=new Array(round((g_viewExt[0]/2)-(g_dDWidth/2)),g_viewExt[1]-100);D46=new Array(g_viewOff[0]+g_viewExt[0]-450,g_viewOff[1]+150);if(g_viewPosType=="%"){var u23x=new Array();if(document.all)u23x=new Array(document.body.clientWidth,document.body.clientHeight);else u23x=new Array(window.innerWidth,window.innerHeight);g_viewOff=new Array(round(g_viewOff[0]/100*u23x[0]),round(g_viewOff[1]/100*u23x[1]));g_viewExt=new Array(round(g_viewExt[0]/100*u23x[0]),round(g_viewExt[1]/100*u23x[1]))}W5j74(0,round((g_baseMapExt[0]*g_zoomFactors[0])/2),round((g_baseMapExt[1]*g_zoomFactors[0])/2),false)}function W5j74(n2I,x,y,a_Bg){var vr2q$=n2I;var foundIt=true;set_zoomLevel(parseInt(vr2q$));if(a_Bg){var L$5yv=EL5(new Array(x,y));x=L$5yv[0];y=L$5yv[1]}if(x<0||x>(g_baseMapExt[0]*g_zoomFactors[vr2q$]))foundIt=false;if(y<0||y>(g_baseMapExt[1]*g_zoomFactors[vr2q$]))foundIt=false;if(!foundIt){vr2q$=0;x=round((g_baseMapExt[0]*g_zoomFactors[0])/2);y=round((g_baseMapExt[1]*g_zoomFactors[0])/2)}var Dvh64=new Array(parseInt(x)-g_viewExt[0]/2,parseInt(y)-g_viewExt[1]/2);g_picUL=new Array(Math.floor(Dvh64[0]/g_tSize[0]),Math.floor(Dvh64[1]/g_tSize[1]));g_iniPxDelta=new Array(g_tSize[0]-round(Dvh64[0]-(g_picUL[0]*g_tSize[0])),g_tSize[1]-round(Dvh64[1]-(g_picUL[1]*g_tSize[1])))}function calc_g_viewExt(){if(document.all){if(document.documentElement&&document.documentElement.clientHeight)g_viewExt=new Array(document.documentElement.clientWidth,document.documentElement.clientHeight);else if(document.body)g_viewExt=new Array(document.body.clientWidth,document.body.clientHeight)}else g_viewExt=new Array(window.innerWidth,window.innerHeight)}function s2p(){var T4n1n="http://www.alta4.com/scripts/im_examplesCounter.php?site="+location.href;T4n1n+="&author="+encodeURIComponent(g_mapGalleryAuthor);T4n1n+="&title="+encodeURIComponent(g_mapGalleryTitle);T4n1n+="&comment="+encodeURIComponent(g_mapGalleryComment);T4n1n+="&copyright="+encodeURIComponent(g_mapGalleryCopyright);T4n1n+="&email="+encodeURIComponent(g_mapGalleryEmail);T4n1n+="&industryId="+encodeURIComponent(g_mapGalleryIndustryId);T4n1n+="&industryText="+encodeURIComponent(g_mapGalleryIndustryText);T4n1n+="&UL_X="+g_rwUL[0];T4n1n+="&UL_Y="+g_rwUL[1];T4n1n+="&LR_X="+g_rwLR[0];T4n1n+="&LR_Y="+g_rwLR[1];T4n1n+="&coordSys="+encodeURIComponent(g_coordSys);var N4i=g_zoomFactors[0];for(var i=1;i<g_zoomFactors.length;i++)N4i+=";"+g_zoomFactors[i];T4n1n+="&zoomFactors="+N4i;var FFk1a=M0R("script");FFk1a.setAttribute("type","text/javascript");FFk1a.setAttribute("src",T4n1n);FFk1a.setAttribute("id",T4n1n);qiM(document.getElementsByTagName("head")[0],FFk1a)}