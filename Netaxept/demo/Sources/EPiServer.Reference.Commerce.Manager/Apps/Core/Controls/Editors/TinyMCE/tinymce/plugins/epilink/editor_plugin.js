(function(b,a){b.create("tinymce.plugins.epilink",{init:function(c,d){if(typeof EPi==="undefined"||typeof EPi.ResolveUrlFromUI!=="function"){return;}c.addCommand("mceEPiLink",function(){var v="",f=c.selection,e=f.getNode(),m=c.dom,o=m.getParent(e,"A"),n={},p={},k=f.getRng();if(f.isCollapsed()&&!o){return;}if(o){v=m.getAttrib(o,"href");}if(v.length){p.href=v;p.target=m.getAttrib(o,"target");p.title=m.getAttrib(o,"title");}p.text="none";var j=c.settings.epi_page_context;var q=a.extend({},j,{hideclearbutton:true});var u=EPi.ResolveUrlFromUI("edit/FileManagerBrowser.aspx")+"?"+a.param(q);p.fileManagerBrowserUrl=u;p.parentWindow=window;var l=new Array();var t=a("a",c.getDoc());t.each(function(r){if(((typeof a(this).attr("name")!=="undefined")&&a(this).attr("name").length>0)&&((typeof a(this).attr("href")==="undefined")||(a(this).attr("href").length===0))){l.push(a(this).attr("name"));}});p.anchors=l.sort();p.imageObject=n;var h=function(x){var z,s,w,r,C,A,B;if(x){if(x=="-1"&&o){z=o.innerHTML;m.setOuterHTML(o,z);c.undoManager.add();}else{if(x!==0){w=x.isUpdated;var D={href:x.href,title:x.title,target:x.target?x.target:null};if(o){f.select(o);m.setAttribs(o,D);c.undoManager.add();}else{f.setRng(k);c.getDoc().execCommand("unlink",false,null);c.execCommand("CreateLink",false,"#mce_temp_url#",{skip_undo:1});B=b.grep(m.select("a"),function(E){return m.getAttrib(E,"href")=="#mce_temp_url#";});for(i=0;i<B.length;i++){m.setAttribs(B[i],D);}if(B.length>0){var y=c.dom.createRng();y.selectNodeContents(B[0]);c.selection.setRng(y);}c.undoManager.add();}}}}};var g=EPi.ResolveUrlFromUI("editor/dialogs/HyperlinkProperties.aspx?diablecontentedit=true");g+="&url="+encodeURIComponent(v);EPi.CreateDialog(g,h,null,p,{width:800,height:650,scrollbars:"no"});});c.addButton("epilink",{title:"epilink.desc",cmd:"mceEPiLink","class":"mce_epilink"});c.addShortcut("ctrl+k","epilink.desc","mceEPiLink");c.onNodeChange.add(function(j,h,g,f){var e=j.dom.getParent(g,"a",j.getBody())||(g.tagName==="A"?g:null);if(e&&(e.innerHTML===j.selection.getContent())){j.selection.select(e);}h.setDisabled("epilink",f&&(e===null));h.setActive("epilink",(e!==null)&&!e.name);});},getInfo:function(){return{longname:"Link plugin",author:"EPiServer AB",authorurl:"http://www.episerver.com",infourl:"http://www.episerver.com",version:"1.0"};}});b.PluginManager.add("epilink",b.plugins.epilink);}(tinymce,epiJQuery));