<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-left") La propuesta comercial constituye una herramienta estratégica para establecer relaciones efectivas con los clientes, comunicar el valor de los productos o servicios y generar oportunidades de negocio. Su elaboración requiere identificar las necesidades y expectativas del cliente, comprender sus intereses y formular soluciones que respondan a sus requerimientos. Una propuesta bien estructurada no solo presenta las características y beneficios de la oferta, sino que también establece condiciones claras, destaca ventajas competitivas y facilita la toma de decisiones, contribuyendo a la construcción de relaciones comerciales basadas en la confianza, la transparencia y el beneficio mutuo.

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente formativo desarrolla los aspectos fundamentales para la elaboración y presentación de propuestas comerciales de productos o servicios, considerando la identificación de necesidades, la descripción de la oferta, la definición de beneficios, el alcance, los plazos de entrega y las condiciones de pago. Asimismo, incorpora técnicas de negociación, estrategias de comunicación y herramientas para sustentar las propuestas de manera clara, persuasiva y profesional; estos conocimientos permiten fortalecer las competencias comerciales necesarias para formular ofertas pertinentes y competitivas, orientadas a la satisfacción del cliente, la generación de acuerdos favorables y el cumplimiento de los objetivos organizacionales.
          br
       
    
    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
