export default {
  global: {
    componenteFormativo: 'Comunidades virtuales para el <em>marketing</em>',
    descripcionCurso:
      'Una comunidad virtual es un espacio digital que congrega diferentes públicos con propósitos diversos, tales como el aprendizaje, los negocios, la comunicación, el entretenimiento, entre otros. Para este programa, es importante identificar las interacciones y los tipos de personas que hacen parte de estas comunidades para proponer estrategias que apoyen su fortalecimiento y su dinamización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunidades virtuales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de comunidades virtuales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plataformas para la creación de comunidades virtuales',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recolección de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de investigación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de recolección de información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas para la recolección de información',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Insights</em> y medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Usos del <em>insight</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Variables para definir <em>insights</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Herramientas digitales para <em>insight</em> de <em>marketing</em>',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Clasificación de herramientas digitales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Uso de las herramientas digitales en los <em>insights</em>',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Palabras claves (<em>keywords</em>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Uso de keywords en el <em>marketing</em> digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herramientas de selección de <em>keywords</em>',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_623605.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Comunidades virtuales',
      referencia:
        'Angular UNIVA. (2018). <em>Redes sociales, la comunidad virtual</em>. (2018). [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zM_p8MvLOyM ',
    },
    {
      tema: '2. Recolección de información',
      referencia:
        'Rock Content. (2018). <em>Investigación de marketing y de mercado: ¿cuál es la mejor estrategia para mi negocio?</em>',
      tipo: 'Página <em>web</em>',
      link:
        'https://rockcontent.com/es/blog/investigacion-de-marketing-y-de-mercados/ ',
    },
    {
      tema: '3. <em>Insights</em> y medios digitales',
      referencia:
        'Rodríguez-Caro, O. J., Montoya-Restrepo, L. A., y Montoya-Restrepo, I. A. (2022). Reconocimiento del valor <em>storytelling</em> y la co-creación en la construcción de microsegmentos a través de la estrategia de <em>marketing</em> digital. <em>I + D Revista de Investigaciones</em>, 17(2). ',
      tipo: 'Documento en línea',
      link:
        'https://www.researchgate.net/publication/363757487_Reconocimiento_del_valor_Storytelling_y_la_Co-creacion_en_la_construccion_de_microsegmentos_a_traves_de_la_Estrategia_de_Marketing_Digital ',
    },
    {
      tema: '3. <em>Insights</em> y medios digitales',
      referencia:
        'Program S. A. (2019). Branding en la era digital | PragmaTalk. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/vjf-XE6S0eU?si=UXrjm4M5cV8F6ZZ9',
    },
    {
      tema: '4. Palabras claves (<em>keywords</em>)',
      referencia:
        '<em>Rock Content</em>. (2021). <em>¿Qué es una keyword y cómo influye en el SEO?</em> ',
      tipo: 'Página <em>web</em>',
      link: 'https://rockcontent.com/es/blog/keywords/ ',
    },
  ],
  glosario: [
    {
      termino: 'Comunidad <em>online</em>',
      significado:
        'conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'también llamada “página de <em>fans</em>”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una fan page no tiene límite de <em>fans</em> y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: '<em>Feed</em>',
      significado:
        'también conocido como RSS (<em>Really Simple Syndication</em>), es el formato en el que se comparte el contenido de los <em>blogs</em>.',
    },
    {
      termino: 'Influenciador',
      significado:
        'en social media es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas. ',
    },
    {
      termino: 'Infografía ',
      significado:
        'imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información. ',
    },
    {
      termino: 'KPI ',
      significado:
        'siglas de <em>Key Performance Indicator</em>; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media <em>marketing</em>. ',
    },
    {
      termino: '<em>Marketing</em> de contenidos ',
      significado:
        'estrategias de <em>marketing</em> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <em>blog</em> y del social media <em>marketing</em>. ',
    },
    {
      termino: 'Metadatos ',
      significado:
        'código que se estructura al inicio de un sitio <em>web</em> para clasificar el tipo de información que describe a su vez otro elemento del cual se puede obtener información detallada de sus características. ',
    },
    {
      termino: 'Reputación <em>online</em>',
      significado:
        'conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales. ',
    },
    {
      termino: '<em>Retargeting</em> ',
      significado:
        'una nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posibles si, y solo si, los usuarios admiten voluntariamente que aceptan cookies cuando navegan en determinado sitio. ',
    },
    {
      termino: 'Segmentar ',
      significado:
        'en redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo. ',
    },
    {
      termino: '<em>Storytelling</em> ',
      significado:
        'técnica de <em>marketing</em> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual. ',
    },
    {
      termino: 'Viral ',
      significado:
        'un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de <em>marketing</em> es “viralizar” sus contenidos. ',
    },
    {
      termino: '<em>Webinars</em>',
      significado:
        'también llamados <em>webminars</em>, son eventos o conferencias que tienen lugar en el medio <em>online</em>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales. ',
    },
    {
      termino: '<em>Youtubers</em> ',
      significado:
        'personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <em>youtuber</em> gana dinero por los anuncios de los videos o por mostrar productos patrocinados. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Báez, J., y Pérez, T. (2007). <em>Investigación cualitativa</em>. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Báez, J., y Pérez, T. (2014). <em>El método cualitativo de investigación desde la perspectiva de marketing: el caso de las universidades públicas de Madrid</em>',
      link: 'https://eprints.ucm.es/id/eprint/29615/1/T35974.pdf ',
    },
    {
      referencia:
        'Baym, N. (2002). Dimensiones intergrupales de internet. <em>Comunicación Intergrupal: múltiples perspectivas</em>, 213-238.',
      link: '',
    },
    {
      referencia:
        'Cabero, A., J. (2006). Comunidades virtuales para el aprendizaje. Su utilización en la enseñanza. Edutec. <em>Revista Electrónica de Tecnología Educativa</em>, (20), a053.',
      link: 'https://www.edutec.es/revista/index.php/edutec-e/article/view/510',
    },
    {
      referencia:
        'Fandos Garrido, M., y González Soto, A. P. (2009). <em>Estrategias de aprendizaje ante las nuevas posibilidades educativas de las TIC.</em>',
      link:
        'https://laverdaderamagnitud.files.wordpress.com/2009/08/metodologia-educativa-tic.pdf',
    },
    {
      referencia:
        'Hagel, III y Armstrong, A. G. (1997). Ganancia neta. <em>McKinsey Quarterly</em>, (1), 140-153.',
      link: '',
    },
    {
      referencia:
        'Jesús, S. (2022). <em>Qué es un insight en marketing: ejemplos prácticos</em>. Economia3.',
      link: 'https://economia3.com/que-es-insight',
    },
    {
      referencia:
        'Jiménez López, O., y Martínez, R. (2002). Comunidades virtuales: un modelo de aprendizaje para la nueva economía. <em>Formación XXI</em>, 3, 29-31.',
      link: '',
    },
    {
      referencia:
        'Jonassen, D. H., Carr, C. y Yueh, H. P. (1998). Las computadoras como herramientas mentales para involucrar a los estudiantes en el pensamiento crítico. <em>TechTrends</em>, 43(2), 24-32.',
      link: '',
    },
    {
      referencia: 'Lévi, P. (1999). <em>¿Qué es lo virtual?</em> P. Levi.',
      link: '',
    },
    {
      referencia:
        'Mercer. (2001). <em>Comunidades. Palabras y mentes. Cómo usamos el lenguaje para pensar juntos.</em> Paidós.',
      link: '',
    },
    {
      referencia:
        'Pazos, M., Pérez, A., y Salinas J. (2002). <em>Comunidades virtuales: de las listas de discusión a las comunidades de aprendizaje.</em>',
      link:
        'http://ardilladigital.com/DOCUMENTOS/TECNOLOGIA%20EDUCATIVA/TICs/T7%20APLICACIONES%20TICS-ED/CVIRTUALES01.pdf',
    },
    {
      referencia:
        'Ruiz de Querol, R. R. (2007). <em>La sociedad de la información.</em> UOC.',
      link: '',
    },
    {
      referencia:
        'Salinas, I., J. M. (2003). Acceso a la información y aprendizaje informal en Internet. <em>Comunicar: Revista Científica Iberoamericana de Comunicación y Educación.</em>',
      link: '',
    },
    {
      referencia:
        'Sallán, J. G. (2006). <em>Las comunidades virtuales de aprendizaje</em>, Educar, 37,41-64.',
      link: 'https://raco.cat/index.php/Educar/article/view/58020',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paolo Andrés Cantillo Largo',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Centro de Industria y la Información  ',
        },
        {
          nombre: 'María Alejandra Tovar Bernal  ',
          cargo: 'Experta Temática  ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Adriana López',
          cargo: 'Diseñadora Instruccional ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrección de Estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
