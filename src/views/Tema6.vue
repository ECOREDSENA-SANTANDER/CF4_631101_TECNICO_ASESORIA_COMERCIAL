<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Propuesta comercial

    .bloque-texto-g.bloque-texto-g--inverso.bg4.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-right')
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t6/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La propuesta comercial es un documento estructurado mediante el cual una empresa o un asesor presenta a un cliente una oferta de productos o servicios diseñada para responder a sus necesidades y requerimientos. Contiene información sobre las características de la solución ofrecida, sus beneficios, alcance, cantidades, precios, condiciones de pago, plazos de entrega, garantías y demás aspectos necesarios para facilitar la evaluación y decisión de compra.
            br
            br
            | Su elaboración requiere conocer las necesidades del cliente, comprender sus expectativas y seleccionar alternativas que aporten valor. Por esta razón, una propuesta comercial no debe limitarse a presentar productos y precios, sino explicar cómo la oferta contribuye a resolver una necesidad específica y cuáles son las condiciones bajo las cuales la empresa puede cumplir los compromisos establecidos. 

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-5.mb-3.col-11.col-md-10
        img(src='@/assets/curso/temas/t6/img02.png', alt='')
      .col-lg-7   
        .row
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t6/img03.svg', alt='')
          .col-lg-10
            p Por ejemplo, cuando una institución educativa solicita una propuesta para adquirir 20 computadores, el proveedor debe presentar las especificaciones técnicas de los equipos, cantidades, precios unitarios y totales, disponibilidad, tiempos de entrega, garantías y posibles servicios adicionales, como instalación y soporte técnico. Esta información permite al cliente comparar alternativas y determinar cuál responde mejor a sus necesidades y presupuesto.
        p Una propuesta comercial bien elaborada facilita la comunicación entre el comprador y el proveedor, contribuye a generar confianza, reduce posibles malentendidos y proporciona una base para desarrollar la negociación.

    separador
    #t_6_1.titulo-segundo.mb-5
      h2 6.1  Elementos de la propuesta comercial

    p La estructura de una propuesta comercial puede variar según el tipo de producto o servicio, las características del cliente y la complejidad de la operación. Sin embargo, existen elementos fundamentales que permiten presentar una oferta completa, organizada y comprensible.

    .row.justify-content-center.align-items-center.mb-4(data-aos='fade-right')
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 11.
          span Elementos de una propuesta comercial

        .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-0
          table
            thead
              tr
                th.bg2.text-izq.w-25 Elemento
                th.bg2.text-izq Descripción
            tbody
              tr
                td Identificación del proveedor
                td Nombre de la empresa, datos de contacto y responsable de presentar la propuesta.
              tr
                td Identificación del cliente
                td Nombre de la persona u organización a la que se dirige la oferta.
              tr
                td Necesidad identificada
                td Descripción del requerimiento que busca satisfacer el cliente.
              tr
                td Objetivo de la propuesta
                td Explicación del propósito de la oferta comercial.
              tr
                td Descripción del producto o servicio
                td Características, especificaciones, cantidades y condiciones de la solución ofrecida.
              tr
                td Beneficios y valor agregado
                td Ventajas que recibirá el cliente y elementos diferenciadores frente a otras alternativas.
              tr
                td Alcance de la oferta
                td Actividades, productos o servicios incluidos y, cuando corresponda, exclusiones.
              tr
                td Precio y condiciones económicas
                td Valores unitarios y totales, impuestos, descuentos y otros costos aplicables.
              tr
                td Plazos y condiciones de entrega
                td Fechas, lugar de entrega y responsabilidades relacionadas con el suministro.
              tr
                td Formas de pago
                td Medios de pago, anticipos, plazos y demás condiciones acordadas.
              tr
                td Garantías y servicios adicionales
                td Condiciones de garantía, instalación, mantenimiento o soporte técnico, según corresponda.
              tr
                td Vigencia de la propuesta
                td Periodo durante el cual se mantienen las condiciones comerciales ofrecidas.
              tr
                td Aceptación
                td Procedimiento para confirmar la aceptación de la oferta y formalizar la operación.

    p La inclusión de estos elementos permite que el cliente disponga de información suficiente para evaluar la propuesta y comprender las condiciones de adquisición. Es importante que los datos sean precisos, verificables y coherentes con la capacidad de cumplimiento de la empresa.

    separador
    #t_6_2.titulo-segundo.mb-4(data-aos='fade-right')
      h2 6.2  Elaboración de la propuesta comercial

    p.mb-4 La elaboración de una propuesta comercial requiere desarrollar una secuencia de actividades que permita transformar las necesidades del cliente en una oferta concreta, viable y competitiva.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t7/ico.svg', alt='')
      h3.mb-1.mx-3 Etapas para elaborar una propuesta comercial

    SlyderF(columnas="col-lg-6 col-xl-4 ").mb-4(data-aos='fade-right')
      .tarjeta.bg5.p-3
        .row.justify-content-center.mb-3
          .col-8.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t6/1.svg' alt='')
        h4.text-center Identificación de las necesidades del cliente
        p.text-center.mb-0 Consiste en recopilar información sobre los requerimientos, expectativas, presupuesto y condiciones de compra. Para ello, pueden utilizarse entrevistas, reuniones comerciales, formularios o solicitudes de cotización.

      .tarjeta.bg5.p-3
        .row.justify-content-center.mb-3
          .col-8.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t6/2.svg' alt='')
        h4.text-center Selección del producto o servicio
        p.text-center.mb-0 Se identifican las alternativas disponibles que responden a las necesidades del cliente, considerando características, beneficios, disponibilidad y posibilidades de suministro.

      .tarjeta.bg5.p-3
        .row.justify-content-center.mb-3
          .col-8.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t6/3.svg' alt='')
        h4.text-center Definición del alcance y las condiciones comerciales
        p.text-center.mb-0 Se establecen los productos o servicios incluidos, cantidades, precios, impuestos, plazos de entrega, formas de pago y responsabilidades correspondientes.

      .tarjeta.bg5.p-3
        .row.justify-content-center.mb-3
          .col-8.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t6/4.svg' alt='')
        h4.text-center Identificación de beneficios y valor agregado
        p.text-center.mb-0 Se explican las ventajas de la oferta y los elementos que pueden diferenciarla de otras alternativas, como acompañamiento técnico, calidad, garantía o servicios complementarios.

      .tarjeta.bg5.p-3
        .row.justify-content-center.mb-3
          .col-8.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t6/5.svg' alt='')
        h4.text-center Elaboración del documento comercial
        p.text-center.mb-0 Se organiza la información mediante una estructura clara, utilizando tablas, descripciones, cálculos y recursos gráficos que faciliten su comprensión.

      .tarjeta.bg5.p-3
        .row.justify-content-center.mb-3
          .col-8.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t6/6.svg' alt='')
        h4.text-center Revisión y validación
        p.text-center.mb-0 Antes de enviar la propuesta, se verifica la exactitud de los precios, cantidades, especificaciones, condiciones de entrega, vigencia y demás compromisos.

      .tarjeta.bg5.p-3
        .row.justify-content-center.mb-3
          .col-8.col-md-4.col-lg-6
            img(src='@/assets/curso/temas/t6/7.svg' alt='')
        h4.text-center Presentación y seguimiento
        p.text-center.mb-0 La propuesta se entrega al cliente mediante el canal acordado y se realiza seguimiento para aclarar inquietudes, recibir observaciones y continuar el proceso comercial.
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t7/ico.svg', alt='')
      h3.mb-1.mx-3 Ejemplo práctico de elaboración de una propuesta comercial

    p Una institución educativa requiere adquirir 20 computadores para dotar una sala de formación. El proveedor identifica que los equipos deben contar con determinadas especificaciones técnicas, garantía y soporte.
    p A partir de esta información, prepara una propuesta que incluye las siguientes condiciones económicas ilustrativas.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 12.
      span Propuesta económica ilustrativa para el suministro e instalación de equipos de cómputo
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7.mb-3 
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg2.text-izq Concepto
                th.bg2.text-izq Cantidad
                th.bg2.text-izq Valor unitario
                th.bg2.text-izq Valor total
            tbody
              tr
                td.text-izq Computadores de escritorio
                td 20
                td $2.500.000
                td $50.000.000
              tr
                td.text-izq Instalación y configuración
                td 1 servicio
                td $1.500.000
                td $1.500.000
              tr
                td.text-izq Total, ilustrativo
                td
                td
                td $51.500.000
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t6/img04.png' alt='')

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-5.mb-3.col-11.col-md-10
        img(src='@/assets/curso/temas/t6/img05.png', alt='')
      .col-lg-7   
        .row
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t6/img06.svg', alt='')
          .col-lg-10
            p Valores hipotéticos expresados en pesos colombianos. No constituyen una cotización real ni especifican el tratamiento de impuestos. La propuesta también establece las especificaciones de los equipos, la fecha de entrega, las condiciones de pago, las garantías aplicables y la vigencia de la oferta.
        p Este ejemplo permite comprender que la propuesta comercial integra información técnica, económica y operativa, con el propósito de facilitar la evaluación de la oferta y proporcionar una base para la negociación.

    separador
    #t_6_3.titulo-segundo.mb-4
      h2 6.3  Presentación y sustentación de la propuesta comercial

    p La presentación de la propuesta comercial consiste en comunicar al cliente las características, beneficios y condiciones de la oferta de manera clara, organizada y profesional. Su propósito es facilitar la comprensión de la solución ofrecida y proporcionar argumentos que respalden la decisión de compra.
    p La sustentación complementa la presentación, porque permite explicar las razones por las cuales la propuesta responde a las necesidades identificadas, resolver inquietudes y justificar sus condiciones comerciales.
    p Para desarrollar una presentación efectiva se recomienda considerar los siguientes aspectos:

    .row.mb-3(data-aos='fade-right')
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/8.svg', alt='')
          .tarjeta.bg3
            .p-4
              h4.text-center Conocimiento del cliente
              p.mb-0.text-center Adaptar la información a sus necesidades, expectativas y nivel de conocimiento sobre el producto o servicio.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/9.svg', alt='')
          .tarjeta.bg3
            .p-4
              h4.text-center Claridad de la información
              p.mb-0.text-center Explicar las características y beneficios mediante un lenguaje comprensible, evitando información innecesaria o excesivamente técnica.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/10.svg', alt='')
          .tarjeta.bg3
            .p-4
              h4.text-center Argumentación comercial
              p.mb-0.text-center Relacionar los beneficios de la oferta con las necesidades identificadas, destacando los elementos que aportan valor.
    .row.mb-3
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/11.svg', alt='')
          .tarjeta.bg3
            .p-4
              h4.text-center Organización de la presentación
              p.mb-0.text-center Desarrollar una secuencia que incluya la necesidad del cliente, la solución propuesta, sus beneficios, las condiciones comerciales y los pasos para formalizar la compra.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/12.svg', alt='')
          .tarjeta.bg3
            .p-4
              h4.text-center Atención de inquietudes
              p.mb-0.text-center Responder preguntas relacionadas con precios, especificaciones, disponibilidad, garantías y condiciones de entrega, utilizando información verificable.

      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/13.svg', alt='')
          .tarjeta.bg3
            .p-4
              h4.text-center Cierre y seguimiento
              p.mb-0.text-center Confirmar los aspectos acordados, identificar las decisiones pendientes y establecer los pasos necesarios para continuar el proceso comercial.

    .row.justify-content-center.align-items-center.mb-4.bg4.g-0
      .col-lg-6.p-0
        img.w-100.h-100.d-block.object-fit-cover(src='@/assets/curso/temas/t6/img07.svg', alt='')
      .col-lg-6.p-4
        p.mb-0 En el entorno productivo de la confección, la documentación técnica constituye uno de los pilares que sostienen la organización y la calidad de los procesos. Dentro de esta documentación, la ficha técnica ocupa un lugar central, ya que concentra en un solo instrumento la información necesaria para que cada etapa de la cadena productiva se ejecute con precisión y coherencia. Comprender su definición, sus tipos y las características que debe reunir permite al diseñador no solo elaborarla correctamente, sino también interpretarla y aplicarla con criterio en diferentes contextos del sector


    img(src='@/assets/curso/temas/t6/podcast.svg', alt='')
    .row.justify-content-center.g-0(data-aos="fade-right")
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-botones.mb-2.p-3(
            texto="Pódcast: Cómo construir una propuesta comercial que genere valor"
            :audio="require_src('@/assets/curso/temas/t6/podcast.svg')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.mb-0 Le invitamos a explorar el pódcast, un recurso educativo para fortalecer sus conocimientos sobre la elaboración de propuestas comerciales efectivas, la comunicación de beneficios y las relaciones con los clientes.























































</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
