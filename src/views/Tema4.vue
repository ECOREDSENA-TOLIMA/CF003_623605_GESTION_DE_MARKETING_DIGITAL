<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Palabras claves #[i (keywords)]

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
        p Palabra clave es la traducción al español del vocablo inglés #[i keyword], que en la programación es definida como un término para promover el intercambio de información entre las páginas #[i web] y los usuarios en internet. Las palabras clave (#[i keywords]) son el principal elemento para iniciar una investigación de los hábitos y comportamiento de los usuarios digitales; son términos individuales (palabras) o compuestos (frases) que el usuario utiliza para encontrar información relevante en la #[i web] a través de un motor de búsqueda, también se utiliza para buscar respuestas a preguntas frecuentes y solucionar problemas. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p En una estrategia de #[i keywords] o palabras clave, debe identificarse qué buscan los usuarios, cómo lo buscan y qué hacen cuando lo encuentran, esto permitirá elegir las palabras claves adecuadas para incorporarlas como parte de la estrategia de #[i marketing] digital. Las palabras clave deben ser clasificadas, organizadas y optimizadas para que luego se incluyan en el sitio #[i web] o aplicación.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Con una correcta selección de las palabras clave, es posible que la empresa pueda posicionarse en internet a través de su sitio #[i web] y aparecer en los primeros resultados de los buscadores. Entre otras ventajas se pueden indicar las siguientes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-4.mb-4.mb-md-0(data-aos="flip-left")
        .titulo-sexto.color-acento-contenido.offset-0
          h5 Figura 5.
          span  #[i Ventajas de palabras clave]

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='En la figura 5 se muestran las funciones principales de las herramientas digitales, como son facilitar la realización de actividades y la interacción de las personas entre otras.')


      .col-10.col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema4/img3.svg', alt='En la figura 5 se muestran las funciones principales de las herramientas digitales, como son facilitar la realización de actividades y la interacción de las personas entre otras.')          
    
    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p Con el fin de ampliar el concepto de palabras clave o #[i keywords] el siguiente video define los elementos que se deben tener presentes con esta herramienta:
    
    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video          
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-bbJONQgamY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    Separador
    .row
      .col-xl-12
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.1 Uso de #[i keywords] en el #[i marketing] digital

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p Como se ha mencionado, las palabras clave son términos simples o compuestos que las personas escriben en un motor de búsqueda cuando quieren encontrar un contenido, producto, marca o información en internet. Por ejemplo, si se quiere encontrar un concesionario que venda carros usados, se puede escribir en el buscador:
    .cajon.color-primario.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img4.svg', alt='Imagen decorativa')
        .col-lg-8
          ul.lista-ul.mb-3
            li.mb-0
              i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
              | Dónde venden vehículos usados cerca de mi casa.
            li.mb-0
              i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
              | Venta de vehículos usados en Colombia.
            li.mb-0
              i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
              | Vehículos usados en Colombia.

          p Cada una de esas frases puede considerarse como palabra clave. Si una persona es la dueña del concesionario que vende vehículos usados, querrá que su negocio sea fácilmente encontrado por sus clientes potenciales; por tanto, deberá incluir en el contenido del sitio #[i web] las palabras o frases que comúnmente usarían las personas para encontrarlos, es aquí, donde se crea la estrategia de palabras clave.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p Entre los tipos de palabras clave hay, se tienen:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla.color-acento-botones.mb-5
          table
            thead
              tr
                th.text-center(style="background-color:#33ECE0;color:#000000;") Palabras claves genéricas
                th.text-center(style="background-color:#33ECE0;color:#000000;") Palabras clave compuestas #[i long tail]
            tbody
              tr
                td 
                  p Son aquellas que tienen un volumen de búsqueda alto, lo cual quiere decir que tienen un volumen de tráfico mucho mayor por ser muy buscadas.
                  p Al ser una palabra muy usada, su competencia también es alta. Posicionar una palabra clave genérica es muy compleja, porque hace parte de las mismas búsquedas que están haciendo todas las personas. 
                  p Su proceso de posicionamiento es más lento y toma mucho más tiempo en el trabajo de implementación.
                td 
                  p Son aquellas que tienen un volumen de búsqueda menor a las genéricas. Por eso, su efectividad es mayor, ya que la dificultad que pueden tener para posicionarse es baja en comparación con las genéricas, además de contener más información. 
                  p En muchos casos la competencia es menor, así que al posicionarnos con este tipo de #[i keywords] podremos ver resultados con mayor facilidad. 
              tr
                td(style="background-color:#E3ECF7;") 
                  p Ejemplos de #[i keywords] genéricas: 
                  ul.lista-ul.mb-3
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Apartamentos.
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Recetas.
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Casas.
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Colegios.
                td(style="background-color:#E3ECF7;") 
                  p Algunos ejemplos de #[i keywords long tail]:  
                  ul.lista-ul.mb-3
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Alquiler de apartamentos en Barranquilla.
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Recetas con caviar.
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Venta de casas en Colombia.
                    li.mb-0
                      i.fas.fa-circle.fa-xs(style="color:#A3BFE4")
                      | Mejores colegios de Bogotá.
    .row.align-items-center.mb-4
      .col-auto.pe-0.desktop(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/tema1/imgtitulo.svg').m-auto
      .col-auto.bg-c8(style="z-index:1;color:#4B6280")
        .p-2
          h3.mb-0 Pasos para encontrar las palabras clave adecuadas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p Para realizar un proceso disciplinado y responsable de encontrar las palabras clave adecuadas para el negocio, se recomienda el siguiente proceso:
    
    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Investigación")
        .row
          .col-md-6.mb-4.mb-md-0
            p Consiste en utilizar el mayor número de herramientas e insumos que nos arrojen palabras y términos clave. Algunas herramientas para encontrar palabras clave son Semrush, Ahrefs y Google Trends.        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img5.jpg', alt='Imagen decorativa')              
      .py-3.py-md-4(titulo="Métricas")
        .row                       
          .col-md-6
            p Estadísticas que muestran cuántas veces ha sido utilizada esa palabra clave, en qué país o región es más utilizada, qué volumen de búsquedas ha tenido en los últimos meses, entre otros datos. Cuanto más baja la calificación o resultado, puede ser más fácil posicionar esa palabra clave. También debe analizarse el costo por clic, de esta forma, predecir una futura inversión en plataformas de anuncios, como Google Ads.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/img6.jpg', alt='Imagen decorativa') 
      .py-3.py-md-4(titulo="Análisis")
        .row
          .col-md-6
            p Deben analizarse los resultados de los datos y comenzar a seleccionar las palabras claves con mejor rendimiento o resultado. Por ejemplo, una palabra clave como “vehículos usados” puede tener una tendencia de búsqueda constante, pero que los picos más altos se ubican en ciertos meses, fechas en las que las personas en Colombia acostumbran vender su vehículo usado.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/img7.jpg', alt='Imagen decorativa')                        

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-12
      p Hay que realizar esta actividad con diferentes palabras o frases clave para seleccionar aquellas que cumplan con estos criterios:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Alto volumen de búsqueda
              p Es preferible que no se seleccionen, porque son genéricas.
              br
              br
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h3 Competencia baja
              p Es decir, que no es genérica y por tanto, puede representar una oportunidad para posicionarla fácilmente con alguna estrategia de inversión en anuncios.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p Estas dos cosas se deben tener en cuenta para la selección adecuada de las #[i keywords]. Asimismo, esta estrategia debe integrarse con la investigación de la audiencia y sus hábitos de búsqueda de contenido; las palabras clave mal escritas no deben ser posicionadas.

    Separador
    .row
      .col-xl-12
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 4.2 Herramientas de selección de #[i keywords]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
      p Existen diversas herramientas para la búsqueda y selección de las palabras clave, algunas son de uso gratuito y otras requieren de suscripción o compra de licencia para su funcionamiento. Las siguientes herramientas agrupan las principales alternativas para la selección de palabras clave: 
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Google Keyword Planner de Adwords (Google Ads)")
        .col-md-12.mb-4.mb-md-0.p-4
          p El buscador de palabras clave de #[i Adwords] es uno de los recursos más utilizados a nivel mundial, se trata de una de las herramientas de Google que usa directamente los datos del propio buscador, ofreciendo volúmenes de búsqueda con gran precisión. 
          p Ofrece ideas relacionadas con la raíz de una palabra, frase o dominio, incluso permite afinar las palabras clave, ampliando la búsqueda con términos relacionados, pudiendo introducir desde el principio varias palabras clave. 
          p El Google Keyword Planner devolverá un listado, así como el número de búsquedas y valores como el coste del clic estimado en Google Ads y la competencia no orgánica de las palabras clave del listado. 
          p En todo momento permite añadir diferentes filtros de métricas, así como seleccionar el país, idioma o la fecha que más se adapte a las necesidades; y debe activarse una campaña de #[i Adwords] para conocer y consultar los datos con mayor precisión.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema4/img10.jpg', alt='Imagen decorativa')
      .row(titulo="Semrush")
        .col-md-12.mb-4.mb-md-0.p-4
          p Esta plataforma de gestión de visibilidad #[i online] que permite gestionar desde #[i marketing] de contenidos a las listas de relacionamiento, también incluye una sección específica de búsqueda de keywords para realizar un estudio de palabras claves.
          p Ofrece una visión general de las palabras clave y después se puede acceder al Keyword Magic Tool, su buscador de términos en los que se muestran las variaciones de palabras clave, así como el volumen de búsqueda, la tendencia, el CPC (costo por clic). 
          p Su amplia base de datos garantiza una extracción de términos importantes, permite incluir o excluir palabras, establecer el número de palabras dentro de la búsqueda –para determinar si nos interesa más términos #[i head tail, middle o long tail]–, establecer un determinado rango de volumen.  Así resulta mucho más sencillo escoger los grupos por volumen de búsquedas. 
          p #[b Nota]: para acceder a esta herramienta se requiere generar la suscripción. 

        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema4/img11.jpg', alt='Imagen decorativa')
      .row(titulo="Ahrefs")
        .col-md-12.mb-4.mb-md-0.p-4
          p Este buscador de palabras clave funciona mediante la propia base de datos de Ahrefs, considerada como una de las bases de consultas de búsquedas más grandes del mundo. Cada mes actualiza su base de datos con más de 7 mil millones de palabras clave para ofrecer listados precisos.
          p Este buscador permite introducir hasta 10.000 palabras clave para visualizar sus volúmenes de búsqueda, ofrece ideas de palabras clave, en las que se divide entre palabras con los mismos términos, sugerencias de búsqueda, consultas añadidas recientemente, palabras formuladas en preguntas. 
          p Desde este buscador se puede elegir entre nueve motores de búsqueda, pudiendo buscar palabras clave para YouTube, Amazon, Bing. Además, su gran variedad de filtros permite filtrar por el volumen de búsquedas, la dificultad para posicionar de las palabras clave, el número de posición.

        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema4/img16.jpg', alt='Imagen decorativa')
      .row(titulo="Keywordtool")
        .col-md-12.mb-4.mb-md-0.p-4
          p En el caso de esta herramienta obtiene las palabras clave de los diferentes motores de búsqueda, pues la mayoría de los datos que ofrece están relacionados con el autocompletado de los motores de búsqueda. 
          p Para su uso, debe incluir una #[i keyword] en el campo de texto el Keywordtool devuelve, no solo los datos para esa palabra en concreto, sino un listado detallado de todas las variaciones asociadas a esa palabra clave. 
          p Esta herramienta ofrece la posibilidad de elegir entre diferentes motores de búsqueda. Asimismo, permite visualizar palabras relacionadas, variaciones y preguntas. A través de sus filtros de la izquierda permite escoger el país, idioma, así como filtrar en función de un determinado término, volumen de búsqueda o tendencia. También permite incluir #[i negative keywords] para excluir de los resultados que muestra.

        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema4/img12.jpg', alt='Imagen decorativa')
      .row(titulo="Ubbersuggest")
        .col-md-12.mb-4.mb-md-0.p-4
          p Es una herramienta sencilla para la búsqueda de palabras clave y que ofrece datos reales y con gran precisión, con la versión gratuita de este buscador de palabras clave se puede realizar hasta tres búsquedas gratuitas de dominios o palabras clave, escoger el país e idioma de la búsqueda. 
          p Al realizar una búsqueda aparecen las diferentes ideas o variaciones de ese término, seguido de su volumen de búsqueda y su CPC estimado, desde sus filtros, con la versión gratuita se pueden filtrar hasta 30 resultados en función del volumen de búsquedas, dificultad. En la parte derecha aparecen los dominios que posicionan por ese término, así como sus visitas estimadas, enlaces o número de veces que se ha compartido esa página. 
          p Esta herramienta también permite analizar el tráfico de la competencia y las palabras clave por las que consigue mayor tráfico. Incluso desde el apartado de explorador SEO permite una función de análisis SEO y análisis de enlaces externos (#[i backlinks]).

        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema4/img13.jpg', alt='Imagen decorativa')
      .row(titulo="Soovle")
        .col-md-12.mb-4.mb-md-0.p-4
          p Este buscador de palabras clave permite conocer las diferentes variaciones de términos clave para los diferentes motores de búsqueda que se pueden visualizar en la imagen. 
          p Sin embargo, entre sus grandes inconvenientes se encuentra el hecho de que no ofrece volumen de búsqueda u otras métricas relacionadas como el CPC, tendencia de búsqueda o competencia. Se podrá seleccionar rápidamente las diferentes sugerencias para el término que incluyas en el buscador.

        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema4/img14.jpg', alt='Imagen decorativa')
      .row(titulo="Autocompletar de Google")
        .col-md-12.mb-4.mb-md-0.p-4
          p El propio motor de búsqueda de Google y su funcionalidad “autocompletar” nos puede ofrecer muchas pistas sobre sugerencias de búsqueda, y de una forma totalmente gratuita.  Las sugerencias que aparecen al realizar una búsqueda específica, se tratan de variaciones, palabras clave concretas –#[i keywords middle o long tail]– y relacionadas con nuestra búsqueda. El proceso es muy simple, tan solo hay que ir introduciendo las palabras y ver qué es lo que nos sugiere Google. Las sugerencias que muestra Google o que incluso llega a completar, se tratan de las búsquedas y consultas realizadas por otros usuarios. Por otro lado, cada vez que se realice una búsqueda en Google, el propio motor de búsqueda proporciona un listado de palabras clave relacionadas con la búsqueda. Este tipo de sugerencias suelen aparecer en la parte inferior de la página, encima de la paginación.
        .col-md-12
          figure
            img(src='@/assets/curso/temas/tema4/img15.jpg', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
