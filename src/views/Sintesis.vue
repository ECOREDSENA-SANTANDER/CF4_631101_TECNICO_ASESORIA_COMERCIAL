<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La síntesis del componente integra los conceptos fundamentales relacionados con la identificación de necesidades del cliente, las características de los productos, la gestión del surtido, el servicio al cliente, la negociación y la elaboración de propuestas comerciales. Mediante un mapa conceptual, se establecen las relaciones entre estos elementos y el uso de herramientas ofimáticas, destacando su importancia para estructurar ofertas comerciales pertinentes, competitivas y orientadas a la satisfacción del cliente.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se establecen las relaciones entre estos elementos y la aplicación de herramientas ofimáticas, destacando su importancia para estructurar ofertas comerciales pertinentes, competitivas y orientadas a la satisfacción del cliente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
