(function(e){function a(a){for(var i,o,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"9e668363","chunk-0206bfa0":"1abcba1d","chunk-110f1f0b":"4a841c89","chunk-13a6037e":"8d8d32e2","chunk-179248a2":"4452e0f0","chunk-18f95272":"e131fc10","chunk-2a9fce91":"9672ca70","chunk-2c06842c":"2dc25859","chunk-2d0c5615":"d8b597aa","chunk-2d0e96ec":"0dc68c45","chunk-2d208d90":"698fc497","chunk-2d21d0e2":"55344cb1","chunk-2d22c123":"46223cb5","chunk-2e80bb9a":"9586e31b","chunk-319206de":"c6ab3f15","chunk-36769079":"98d5f4c4","chunk-4cdd78c0":"7bdec7f0","chunk-515a8379":"68d09060","chunk-53ccb27e":"df92d73b","chunk-55d286b8":"0527916a","chunk-59974754":"a69cf03c","chunk-5d1ce150":"263d3a30","chunk-60cbc06b":"91e5a404","chunk-623f2040":"dbd90fa5","chunk-659152b8":"91e58b05","chunk-6a43ec24":"a3da7ae8","chunk-6e1e538a":"8b635dd4","chunk-6e613899":"cf0542d3","chunk-766a929b":"6282fb34","chunk-7794bb60":"3b1999de","chunk-c796899c":"872fc59f","chunk-e8a7823a":"128df0ba","chunk-fde47172":"90158bee",comple:"4abc94e4",creditos:"49bc43dd",glosario:"dc54b882",intro:"00dd10e7",referencias:"b9259242",sintesis:"e872d882",tema1:"3a500831",tema2:"7c3e433d",tema3:"8dcfcd9a",tema4:"5961ed09"}[e]+".js"}function s(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"26246671","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"f3a189b9","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"a4a9ab68","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"1f457347",creditos:"066770fd",glosario:"8f6aa7b7",intro:"31d6cfe0",referencias:"cf151eaa",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+i,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===i||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===i||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=i,delete o[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)a.push(i[2]);else{var t=new Promise((function(a,n){i=r[e]=[a,n]}));a.push(i[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=i,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)s.d(n,i,function(a){return e[a]}.bind(null,i));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),d=Object(s["a"])(c,o,r,!1,null,null,null),l=d.exports,u=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Comunidades virtuales para el <em>marketing</em>",descripcionCurso:"Una comunidad virtual es un espacio digital que congrega diferentes públicos con propósitos diversos, tales como el aprendizaje, los negocios, la comunicación, el entretenimiento, entre otros. Para este programa, es importante identificar las interacciones y los tipos de personas que hacen parte de estas comunidades para proponer estrategias que apoyen su fortalecimiento y su dinamización.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Comunidades virtuales",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Tipos de comunidades virtuales",hash:"t_1_1"},{numero:"1.2",titulo:"Plataformas para la creación de comunidades virtuales",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Recolección de información",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Tipos de investigación",hash:"t_2_1"},{numero:"2.2",titulo:"Técnicas de recolección de información",hash:"t_2_2"},{numero:"2.3",titulo:"Herramientas para la recolección de información",hash:"t_2_3"}]},{nombreRuta:"tema3",numero:"3",titulo:"<em>Insights</em> y medios digitales",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Usos del <em>insight</em>",hash:"t_3_1"},{numero:"3.2",titulo:"Variables para definir <em>insights</em>",hash:"t_3_2"},{numero:"3.3",titulo:"Herramientas digitales para <em>insight</em> de <em>marketing</em>",hash:"t_3_3"},{numero:"3.4",titulo:"Clasificación de herramientas digitales",hash:"t_3_4"},{numero:"3.5",titulo:"Uso de las herramientas digitales en los <em>insights</em>",hash:"t_3_5"}]},{nombreRuta:"tema4",numero:"4",titulo:"Palabras claves (<em>keywords</em>)",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Uso de keywords en el <em>marketing</em> digital",hash:"t_4_1"},{numero:"4.2",titulo:"Herramientas de selección de <em>keywords</em>",hash:"t_4_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_03_623605.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1. Comunidades virtuales",referencia:"Angular UNIVA. (2018). <em>Redes sociales, la comunidad virtual</em>. (2018). [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=zM_p8MvLOyM "},{tema:"2. Recolección de información",referencia:"Rock Content. (2018). <em>Investigación de marketing y de mercado: ¿cuál es la mejor estrategia para mi negocio?</em>",tipo:"Página <em>web</em>",link:"https://rockcontent.com/es/blog/investigacion-de-marketing-y-de-mercados/ "},{tema:"3. <em>Insights</em> y medios digitales",referencia:"Rodríguez-Caro, O. J., Montoya-Restrepo, L. A., y Montoya-Restrepo, I. A. (2022). Reconocimiento del valor <em>storytelling</em> y la co-creación en la construcción de microsegmentos a través de la estrategia de <em>marketing</em> digital. <em>I + D Revista de Investigaciones</em>, 17(2). ",tipo:"Documento en línea",link:"https://www.researchgate.net/publication/363757487_Reconocimiento_del_valor_Storytelling_y_la_Co-creacion_en_la_construccion_de_microsegmentos_a_traves_de_la_Estrategia_de_Marketing_Digital "},{tema:"3. <em>Insights</em> y medios digitales",referencia:"Program S. A. (2019). Branding en la era digital | PragmaTalk. [Video]. YouTube.",tipo:"Video",link:"https://youtu.be/vjf-XE6S0eU?si=UXrjm4M5cV8F6ZZ9"},{tema:"4. Palabras claves (<em>keywords</em>)",referencia:"<em>Rock Content</em>. (2021). <em>¿Qué es una keyword y cómo influye en el SEO?</em> ",tipo:"Página <em>web</em>",link:"https://rockcontent.com/es/blog/keywords/ "}],glosario:[{termino:"Comunidad <em>online</em>",significado:"conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática."},{termino:"<em>Fanpage</em>",significado:"también llamada “página de <em>fans</em>”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una fan page no tiene límite de <em>fans</em> y es posible tener acceso a la información estadística de la página."},{termino:"<em>Feed</em>",significado:"también conocido como RSS (<em>Really Simple Syndication</em>), es el formato en el que se comparte el contenido de los <em>blogs</em>."},{termino:"Influenciador",significado:"en social media es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas. "},{termino:"Infografía ",significado:"imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información. "},{termino:"KPI ",significado:"siglas de <em>Key Performance Indicator</em>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media <em>marketing</em>. "},{termino:"<em>Marketing</em> de contenidos ",significado:"estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <em>blog</em> y del social media <em>marketing</em>. "},{termino:"Metadatos ",significado:"código que se estructura al inicio de un sitio <em>web</em> para clasificar el tipo de información que describe a su vez otro elemento del cual se puede obtener información detallada de sus características. "},{termino:"Reputación <em>online</em>",significado:"conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales. "},{termino:"<em>Retargeting</em> ",significado:"una nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posibles si, y solo si, los usuarios admiten voluntariamente que aceptan cookies cuando navegan en determinado sitio. "},{termino:"Segmentar ",significado:"en redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo. "},{termino:"<em>Storytelling</em> ",significado:"técnica de <em>marketing</em> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual. "},{termino:"Viral ",significado:"un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de <em>marketing</em> es “viralizar” sus contenidos. "},{termino:"<em>Webinars</em>",significado:"también llamados <em>webminars</em>, son eventos o conferencias que tienen lugar en el medio <em>online</em>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales. "},{termino:"<em>Youtubers</em> ",significado:"personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <em>youtuber</em> gana dinero por los anuncios de los videos o por mostrar productos patrocinados. "}],referencias:[{referencia:"Báez, J., y Pérez, T. (2007). <em>Investigación cualitativa</em>. ESIC Editorial.",link:""},{referencia:"Báez, J., y Pérez, T. (2014). <em>El método cualitativo de investigación desde la perspectiva de marketing: el caso de las universidades públicas de Madrid</em>",link:"https://eprints.ucm.es/id/eprint/29615/1/T35974.pdf "},{referencia:"Baym, N. (2002). Dimensiones intergrupales de internet. <em>Comunicación Intergrupal: múltiples perspectivas</em>, 213-238.",link:""},{referencia:"Cabero, A., J. (2006). Comunidades virtuales para el aprendizaje. Su utilización en la enseñanza. Edutec. <em>Revista Electrónica de Tecnología Educativa</em>, (20), a053.",link:"https://www.edutec.es/revista/index.php/edutec-e/article/view/510"},{referencia:"Fandos Garrido, M., y González Soto, A. P. (2009). <em>Estrategias de aprendizaje ante las nuevas posibilidades educativas de las TIC.</em>",link:"https://laverdaderamagnitud.files.wordpress.com/2009/08/metodologia-educativa-tic.pdf"},{referencia:"Hagel, III y Armstrong, A. G. (1997). Ganancia neta. <em>McKinsey Quarterly</em>, (1), 140-153.",link:""},{referencia:"Jesús, S. (2022). <em>Qué es un insight en marketing: ejemplos prácticos</em>. Economia3.",link:"https://economia3.com/que-es-insight"},{referencia:"Jiménez López, O., y Martínez, R. (2002). Comunidades virtuales: un modelo de aprendizaje para la nueva economía. <em>Formación XXI</em>, 3, 29-31.",link:""},{referencia:"Jonassen, D. H., Carr, C. y Yueh, H. P. (1998). Las computadoras como herramientas mentales para involucrar a los estudiantes en el pensamiento crítico. <em>TechTrends</em>, 43(2), 24-32.",link:""},{referencia:"Lévi, P. (1999). <em>¿Qué es lo virtual?</em> P. Levi.",link:""},{referencia:"Mercer. (2001). <em>Comunidades. Palabras y mentes. Cómo usamos el lenguaje para pensar juntos.</em> Paidós.",link:""},{referencia:"Pazos, M., Pérez, A., y Salinas J. (2002). <em>Comunidades virtuales: de las listas de discusión a las comunidades de aprendizaje.</em>",link:"http://ardilladigital.com/DOCUMENTOS/TECNOLOGIA%20EDUCATIVA/TICs/T7%20APLICACIONES%20TICS-ED/CVIRTUALES01.pdf"},{referencia:"Ruiz de Querol, R. R. (2007). <em>La sociedad de la información.</em> UOC.",link:""},{referencia:"Salinas, I., J. M. (2003). Acceso a la información y aprendizaje informal en Internet. <em>Comunicar: Revista Científica Iberoamericana de Comunicación y Educación.</em>",link:""},{referencia:"Sallán, J. G. (2006). <em>Las comunidades virtuales de aprendizaje</em>, Educar, 37,41-64.",link:"https://raco.cat/index.php/Educar/article/view/58020"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de Línea de Producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Paolo Andrés Cantillo Largo",cargo:"Experto Temático",centro:"Regional Antioquia - Centro de Industria y la Información  "},{nombre:"María Alejandra Tovar Bernal  ",cargo:"Experta Temática  ",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Adriana López",cargo:"Diseñadora Instruccional ",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Asesor Metodológico",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo de Desarrollo Curricular",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrección de Estilo",centro:"Regional Distrito Capital – Centro de Diseño y Metrología"},{nombre:"Juan Gilberto Giraldo Cortes",cargo:"Diseñador Instruccional",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Viviana Esperanza Herrera Quiñonez",cargo:"Asesora Metodológica",centro:"Regional Tolima – Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Oscar Iván Uribe Ortiz",cargo:"Diseñador Web",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Veimar Celis Meléndez",cargo:"Desarrollador Fullstack",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard e Ilustración",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Animador y Producción Audiovisual",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Animador y Producción Audiovisual",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador y Producción Audiovisual",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Veimar Celis Meléndez",cargo:"Actividad Didáctica",centro:"Regional Tolima – Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Javier Mauricio Oviedo",cargo:"Validación y Vinculación en Plataforma LMS",centro:"Regional Tolima – Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de Contenidos Accesibles",centro:"Regional Tolima – Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});i["a"].prototype.$config=v;var k=n("9224");i["a"].prototype.$package=k,new i["a"]({router:b,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.6a36f98b.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.2c299cd1.png"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.413379eb.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.ea5b24bd.png"}});
//# sourceMappingURL=app.53ab9e8d.js.map