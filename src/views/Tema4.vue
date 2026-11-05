<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Servicio al cliente

    .bloque-texto-g.bloque-texto-g--inverso.bg4.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-right')
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El servicio al cliente comprende el conjunto de actividades, procesos y acciones que desarrolla una empresa para atender las necesidades, inquietudes y expectativas de sus clientes antes, durante y después de la adquisición de un producto o servicio. Su propósito es proporcionar información, orientación, acompañamiento y soluciones oportunas que contribuyan a generar experiencias satisfactorias y relaciones comerciales duraderas.
            br
            br
            | Un servicio al cliente efectivo no se limita a responder preguntas o resolver inconvenientes. También implica comprender las necesidades del consumidor, ofrecer información confiable, cumplir los compromisos adquiridos y mantener una comunicación respetuosa y oportuna.
            br
            |Estas acciones fortalecen la confianza, contribuyen a la satisfacción del cliente y pueden influir en su decisión de volver a comprar o recomendar la empresa.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
      p.mb-0 Por ejemplo, cuando una persona adquiere un computador, el servicio al cliente comienza desde la asesoría para seleccionar el equipo adecuado, continúa durante el proceso de compra y puede extenderse mediante la instalación, la orientación sobre su funcionamiento, la atención de garantías y el soporte técnico.
    p Por esta razón, el servicio al cliente constituye un elemento diferenciador que agrega valor a la propuesta comercial y contribuye al posicionamiento competitivo de las organizaciones.

    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1  Atributos del servicio al cliente

    p Los atributos del servicio al cliente son las cualidades y principios que orientan el comportamiento del personal responsable de atender a los consumidores. Estos atributos permiten establecer relaciones basadas en el respeto, la confianza, la responsabilidad y el compromiso con la satisfacción de las necesidades del cliente.
    p Entre los principales atributos se encuentran:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos='fade-right')
      .row.justify-content-center(titulo="Actitud de servicio")
        .col-lg-5.mb-4.mb-md-0
          p Es la disposición para atender las necesidades del cliente con interés, responsabilidad y compromiso. Implica ofrecer orientación, identificar alternativas y contribuir a la solución de inquietudes durante el proceso comercial.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t4/img02.png', alt='')
      .row.justify-content-center(titulo="Actitud positiva")
        .col-lg-5.mb-4.mb-md-0
          p Consiste en mantener una conducta constructiva y profesional frente a las diferentes situaciones que pueden presentarse durante la atención. Permite afrontar dificultades sin trasladar al cliente tensiones o inconvenientes internos de la empresa.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t4/img03.png', alt='')

      .row.justify-content-center(titulo="Ética y transparencia")
        .col-lg-5.mb-4.mb-md-0
          p Comprende actuar con honestidad, respeto y responsabilidad, proporcionando información verdadera sobre los productos, precios, garantías y condiciones comerciales. También implica evitar promesas que la empresa no pueda cumplir y proteger adecuadamente la información del cliente.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t4/img04.png', alt='')

      .row.justify-content-center(titulo="Empatía")
        .col-lg-5.mb-4.mb-md-0
          p Es la capacidad de comprender las necesidades, expectativas y circunstancias del cliente para ofrecer respuestas pertinentes. No significa aceptar todas sus solicitudes, sino reconocer su situación y atenderla de manera respetuosa.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t4/img05.png', alt='')

      .row.justify-content-center(titulo="Compromiso con el servicio")
        .col-lg-5.mb-4.mb-md-0
          p Se refiere a la responsabilidad de brindar una atención adecuada y contribuir al cumplimiento de los compromisos adquiridos. Incluye disposición para resolver inquietudes y orientar al cliente cuando requiere apoyo.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t4/img06.png', alt='')

      .row.justify-content-center(titulo="Continuidad")
        .col-lg-5.mb-4.mb-md-0
          p Consiste en mantener la calidad y coherencia de la atención durante las diferentes etapas de la relación comercial. El cliente debe recibir un acompañamiento adecuado desde el primer contacto hasta el seguimiento posterior a la compra.
        .col-lg-6.col-md-8
          figure
            img(src='@/assets/curso/temas/t4/img07.png', alt='')

    p Es importante precisar que la satisfacción del cliente no constituye propiamente una actitud del personal, sino un resultado de la experiencia de servicio. Por ello, debe evaluarse mediante indicadores que permitan establecer en qué medida la atención respondió a sus expectativas.

    separador
    #t_4_2.titulo-segundo.mb-5(data-aos='fade-right')
      h2 4.2  Características del servicio al cliente

    p Las características del servicio corresponden a las condiciones que debe reunir la atención para responder adecuadamente a los requerimientos del consumidor. Estas permiten evaluar la calidad del servicio e identificar oportunidades de mejora.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6.
          span Características del servicio al cliente
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg2.text-izq.w-25 Característica
                th.bg2.text-izq Descripción
                th.bg2.text-izq Ejemplo comercial
            tbody
              tr
                td.text-izq Disponibilidad
                td.text-izq Capacidad de ofrecer atención en los horarios y condiciones establecidos por la empresa.
                td.text-izq Una tienda dispone de asesoría durante su jornada comercial.
              tr
                td.text-izq Accesibilidad
                td.text-izq Facilidad con la que el cliente puede comunicarse con la empresa y utilizar sus canales de atención.
                td.text-izq La empresa dispone de teléfono, correo electrónico y chat.
              tr
                td.text-izq Cortesía
                td.text-izq Trato respetuoso, amable y profesional durante la interacción con el cliente.
                td.text-izq El asesor responde una reclamación con respeto y disposición.
              tr
                td.text-izq Agilidad
                td.text-izq Capacidad de atender solicitudes en tiempos razonables y sin procedimientos innecesarios.
                td.text-izq Una consulta sobre disponibilidad se responde oportunamente.
              tr
                td.text-izq Competencia
                td.text-izq Conocimientos y habilidades del personal para proporcionar información y soluciones adecuadas.
                td.text-izq El asesor explica las especificaciones técnicas de un computador.
              tr
                td.text-izq Confiabilidad
                td.text-izq Capacidad de cumplir correctamente los compromisos y proporcionar información precisa.
                td.text-izq El pedido se entrega en la fecha y condiciones acordadas.
              tr
                td.text-izq Comunicación clara
                td.text-izq Transmisión de información comprensible, completa y coherente.
                td.text-izq Se explican las condiciones de pago y garantía antes de la compra.
              tr
                td.text-izq Capacidad de respuesta
                td.text-izq Disposición y habilidad para atender situaciones imprevistas o resolver inconvenientes.
                td.text-izq La empresa gestiona una solución ante un producto defectuoso.

    p Estas características deben gestionarse de manera conjunta. Por ejemplo, una empresa puede ofrecer atención rápida, pero si proporciona información incorrecta o incumple los compromisos, la experiencia del cliente puede resultar insatisfactoria.

    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3  Tipos de servicio al cliente

    p El servicio al cliente puede desarrollarse mediante diferentes canales y modalidades de atención, seleccionados de acuerdo con las características del consumidor, los recursos de la empresa y la naturaleza de los productos o servicios comercializados.
    p La elección de los canales debe facilitar la comunicación, garantizar el acceso a la información y permitir que las solicitudes sean atendidas oportunamente.

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7.
          span Principales canales de atención
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg2.text-izq.w-25 Canal
                th.bg2.text-izq Descripción
                th.bg2.text-izq Aplicación comercial
            tbody
              tr
                td.text-izq Presencial
                td.text-izq Atención directa entre el cliente y el personal de la empresa en un establecimiento físico.
                td.text-izq Asesoría en un punto de venta.
              tr
                td.text-izq Telefónico
                td.text-izq Comunicación mediante llamadas para brindar información y resolver solicitudes.
                td.text-izq Consulta sobre precios, pedidos y garantías.
              tr
                td.text-izq Correo electrónico
                td.text-izq Intercambio de información escrita y documentos comerciales.
                td.text-izq Envío de cotizaciones y propuestas comerciales.
              tr
                td.text-izq Chat y mensajería instantánea
                td.text-izq Atención mediante plataformas digitales de comunicación.
                td.text-izq Confirmación de disponibilidad o seguimiento de pedidos.
              tr
                td.text-izq Redes sociales
                td.text-izq Interacción mediante canales sociales institucionales.
                td.text-izq Orientación sobre productos y recepción de consultas.
              tr
                td.text-izq Autoservicio digital
                td.text-izq Acceso a herramientas que permiten al cliente realizar determinadas gestiones sin intervención directa de un asesor.
                td.text-izq Consulta de pedidos, preguntas frecuentes y seguimiento de entregas.
              tr
                td.text-izq Videollamada
                td.text-izq Atención personalizada mediante comunicación audiovisual en tiempo real.
                td.text-izq Presentación y sustentación de propuestas comerciales.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t7/ico.svg', alt='')
      h3.mb-1.mx-3 Atención multicanal y omnicanal

    p Además de los canales individuales, las empresas pueden implementar estrategias que integren diferentes medios de comunicación.

    .row.mb-4(data-aos='fade-right')
      .col-lg-6.mb-3
        .tarjeta.bg3
          .p-4.text-center
            h4 Atención multicanal
            p Consiste en ofrecer diversos canales para que el cliente pueda comunicarse con la empresa. Sin embargo, estos pueden funcionar de manera independiente.

      .col-lg-6.mb-3      
        .tarjeta.bg4
          .p-4.text-center
            h4 Atención omnicanal
            p Busca integrar los diferentes canales para proporcionar una experiencia continua y coherente, conservando la información y el contexto de las interacciones cuando los sistemas lo permiten.

    .cajon.color-acento-contenido.p-4.mb-4(data-aos='fade-right')
      p.mb-0 Por ejemplo, un cliente solicita información sobre un producto mediante el sitio web, recibe asesoría por mensajería instantánea y posteriormente realiza la compra en el establecimiento físico. 

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-5.mb-3.col-11.col-md-10
        img(src='@/assets/curso/temas/t4/img08.png', alt='')
      .col-lg-7   
        .row
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t4/img09.svg', alt='')
          .col-lg-10
            p En una estrategia omnicanal, la empresa procura mantener la continuidad de la atención sin exigir que el cliente repita innecesariamente la información.
        p La selección de los canales debe considerar las preferencias del público objetivo, la capacidad operativa y la protección de los datos personales.

    separador
    #t_4_4.titulo-segundo.mb-5
      h2 4.4  Gestión de solicitudes, quejas y reclamaciones

    p La gestión de solicitudes, quejas y reclamaciones comprende las actividades mediante las cuales una empresa recibe, registra, analiza y responde las inquietudes o inconformidades de sus clientes.
    p Su adecuada administración permite identificar fallas en los productos, procesos o servicios, establecer acciones correctivas y fortalecer la confianza del consumidor.
    p Es importante diferenciar los principales tipos de solicitudes:

    .row.mb-4(data-aos='fade-right')
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t4/1.svg', alt='')
          h4.text-center Petición o solicitud
          p.mb-0 Requerimiento de información, orientación o gestión relacionada con un producto o servicio.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t4/2.svg', alt='')
          h4.text-center Queja
          p.mb-0 Manifestación de inconformidad frente a la atención recibida o al comportamiento del personal.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t4/3.svg', alt='')
          h4.text-center Reclamo
          p.mb-0 Manifestación de insatisfacción relacionada con un producto, servicio o incumplimiento de condiciones comerciales.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t4/3.svg', alt='')
          h4.text-center Sugerencia
          p.mb-0 Propuesta del cliente para mejorar los productos, procesos o servicios de la empresa.

    p Para gestionar adecuadamente estas situaciones, se recomienda seguir un procedimiento que incluya la recepción de la solicitud, el registro de la información, el análisis de la situación, la definición de una respuesta, la comunicación al cliente y la verificación del cierre del caso.

    .fondo02.p-4.mb-3(data-aos='fade-right')
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3.col-md-8
            img(src='@/assets/curso/temas/t4/img09.png', alt='') 
          .col-lg-6
            p.text-white.mb-0 Por ejemplo, si un cliente recibe un producto diferente al solicitado, la empresa debe verificar el pedido, identificar la causa del error y gestionar la solución correspondiente de acuerdo con las condiciones comerciales y los derechos del consumidor.
    
    p La atención de reclamaciones debe realizarse dentro de los plazos legales aplicables y de los compromisos establecidos por la organización.

    separador
    #t_4_5.titulo-segundo.mb-5
      h2 4.5  Servicio posventa
    
    p El servicio posventa comprende las actividades de acompañamiento y atención que desarrolla una empresa después de concretar una venta, con el propósito de facilitar el uso del producto, atender solicitudes y mantener una relación comercial satisfactoria.
    p Estas actividades pueden incluir orientación sobre el funcionamiento del producto, asistencia técnica, atención de garantías, mantenimiento, seguimiento a entregas y evaluación de la satisfacción del cliente.

    .fondo03.p-4.mb-3(data-aos='fade-right')
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3
            p.text-white.mb-0 Por ejemplo, una empresa que comercializa equipos del hogar puede ofrecer instalación, capacitación básica y soporte técnico posterior a la entrega. Estos servicios contribuyen a que el cliente aproveche adecuadamente el producto adquirido.
          .col-lg-6.col-md-8
            img(src='@/assets/curso/temas/t4/img10.png', alt='') 
          
    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-5.mb-3.col-11.col-md-10
        img(src='@/assets/curso/temas/t4/img11.png', alt='')
      .col-lg-7   
        .row
          .col-lg-2.mb-3.col-4.col-md-3
            img(src='@/assets/curso/temas/t4/img12.svg', alt='')
          .col-lg-10
            p El servicio posventa también permite identificar oportunidades de mejora, conocer nuevas necesidades y fortalecer las relaciones comerciales.
        p No obstante, debe distinguirse entre los servicios adicionales ofrecidos voluntariamente por la empresa y las obligaciones legales relacionadas con garantías y protección del consumidor.



































































































































</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
