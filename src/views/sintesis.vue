<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El componente formativo comunidades virtuales para el #[i marketing] abarca diversos aspectos esenciales en el ámbito del #[i marketing] digital. Se explorarán la creación y gestión de comunidades virtuales, analizando tipos específicos y las plataformas más adecuadas. Se centrará en la importancia de la recolección de información, abordando tipos de investigación, técnicas de recolección y herramientas especializadas. La unidad dedicada a #[i insights] y medios digitales ofrecerá información clara para aplicar #[i insights] en estrategias de #[i marketing]. Finalmente, se destacará el papel fundamental de las palabras clave en el #[i marketing] digital, explorando su uso estratégico y las herramientas disponibles para su selección
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente comunidades virtuales para el marketing se muestran las plataformas de creación de comunidades virtuales, la recolección de información con variedad de métodos y herramientas, así como la aplicación efectiva de insights y keywords en estrategias de marketing.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
