<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Las necesidades y los deseos
        
        
      .bloque-texto-g.bloque-texto-g--inverso.bg4.p-3.p-sm-4.p-md-5.mb-3(data-aos='fade-right')
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las necesidades y los deseos son conceptos fundamentales para comprender el comportamiento del consumidor y formular propuestas comerciales que respondan a sus expectativas. Aunque se encuentran relacionados, presentan diferencias que deben identificarse durante el proceso de venta.

            br
            br
            | Las necesidades son estados de carencia o requerimientos que experimentan las personas y que generan la búsqueda de alternativas para alcanzar bienestar, seguridad, comodidad o satisfacción. Estas pueden ser físicas, sociales, emocionales o relacionadas con el desarrollo personal. Las necesidades no son creadas por la publicidad ni por las estrategias de mercadeo; sin embargo, las empresas pueden identificar nuevas formas de satisfacerlas mediante productos y servicios.

      p Los deseos representan las formas específicas en que una persona prefiere satisfacer una necesidad. Están influenciados por factores culturales, sociales, económicos, personales y por las experiencias del consumidor. Por esta razón, una misma necesidad puede dar lugar a diferentes deseos.

      .fondo02.p-4.mb-3(data-aos='fade-right')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3.col-md-8
            img(src='@/assets/curso/temas/t1/img02.png', alt='') 
          .col-lg-6
            p.text-white.mb-0 Por ejemplo, una persona necesita alimentarse, pero puede desear una hamburguesa de determinada marca, un almuerzo saludable o una comida preparada en casa. De igual manera, una familia puede necesitar vivienda, pero desear un apartamento con determinadas características, ubicación y servicios.

      p Desde la perspectiva comercial, esta diferencia permite comprender que el cliente no siempre busca únicamente un producto, sino una solución que responda a sus necesidades y preferencias. Por tanto, antes de elaborar una propuesta comercial, es importante identificar qué necesita el cliente, qué desea obtener y cuáles son los factores que influyen en su decisión de compra.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t7/ico.svg', alt='')
        h3.mb-1.mx-3 Jerarquía de las necesidades de Maslow

      p La teoría de Abraham Maslow organiza las necesidades humanas en cinco niveles que permiten comprender algunas de las motivaciones que orientan el comportamiento de las personas.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1.
        span Las necesidades humanas en niveles

      .row.justify-content-center.align-items-start.mb-2(data-aos="fade-left")
        .col-lg-8.mb-4.mb-lg-0
          .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-3
            table
              thead
                tr
                  th.bg2.text-izq.w-25 Nivel
                  th.bg2.text-izq Explicación
                  th.bg2.text-izq Ejemplo comercial
              tbody
                tr
                  td Fisiológicas
                  td Necesidades básicas relacionadas con la supervivencia.
                  td Alimentos, agua y descanso.
                tr
                  td Seguridad
                  td Búsqueda de protección, estabilidad y bienestar.
                  td Seguros, sistemas de seguridad y vivienda.
                tr
                  td Sociales o de afiliación
                  td Necesidad de pertenencia, afecto e interacción.
                  td Servicios recreativos y actividades grupales.
                tr
                  td Reconocimiento o estima
                  td Búsqueda de valoración, respeto y confianza personal.
                  td Servicios de formación y productos asociados al reconocimiento.
                tr
                  td Autorrealización
                  td Interés por desarrollar capacidades y alcanzar metas personales.
                  td Programas educativos, emprendimiento y desarrollo profesional.
        .col-lg-4.col-9.col-md-7
          figure
            img(src='@/assets/curso/temas/t1/img03.png', alt='' style="width: 100%; aspect-ratio: 4 / 4.3; object-fit: cover; border-radius: 15px;")

      p(data-aos='fade-right') Esta clasificación constituye una herramienta de análisis de las motivaciones del consumidor. No obstante, las necesidades no siempre se satisfacen en un orden rígido, pues pueden presentarse simultáneamente y variar según las circunstancias de cada persona.




























  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
