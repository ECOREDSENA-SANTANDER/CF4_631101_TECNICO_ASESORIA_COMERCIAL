<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Herramientas ofimáticas

    .bloque-texto-g.bg1.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t7/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las herramientas ofimáticas son aplicaciones y programas informáticos diseñados para facilitar la creación, organización, procesamiento, almacenamiento y comunicación de información utilizada en actividades administrativas y comerciales. Su aplicación permite automatizar tareas, reducir errores, optimizar tiempos de trabajo y mejorar la presentación de documentos.
          br
          br 
          | En la gestión comercial, estas herramientas facilitan la elaboración de propuestas, cotizaciones, informes, bases de datos de clientes, registros de productos, cálculos de precios y presentaciones. También contribuyen al trabajo colaborativo, permitiendo que diferentes integrantes de una empresa participen en la preparación y revisión de la información.

    .cajon.color-acento-contenido.p-4.mb-4
      p.mb-0 Por ejemplo, un asesor comercial puede utilizar un procesador de texto para redactar una propuesta, una hoja de cálculo para determinar los valores de los productos y una aplicación de presentaciones para sustentar la oferta ante el cliente. Posteriormente, puede almacenar los documentos en una plataforma digital y compartirlos mediante los canales autorizados por la empresa.

    p La selección de las herramientas debe considerar las necesidades de la actividad, la facilidad de uso, la compatibilidad de los archivos, los costos y las condiciones de seguridad de la información.

    separador
    #t_7_1.titulo-segundo.mb-5
      h2 7.1  Clasificación de las herramientas ofimáticas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        img(src='@/assets/curso/temas/t7/img02.png', alt='')

    p Las herramientas ofimáticas pueden clasificarse de acuerdo con las funciones que desarrollan y el tipo de información que permiten gestionar.
    p Entre las principales categorías se encuentran los procesadores de texto, las hojas de cálculo, los gestores de bases de datos, las aplicaciones de presentaciones, las herramientas de comunicación y las plataformas de almacenamiento y colaboración.

    .row.justify-content-center.align-items-start.mb-2
      .col-lg-8.mb-4.mb-lg-0
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 13.
          span Clasificación de las herramientas ofimáticas

        .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.bg2.text-izq Clasificación
                th.bg2.text-izq Función principal
                th.bg2.text-izq Aplicación comercial
            tbody
              tr.bg3
                td Procesadores de texto
                td Crear, editar y dar formato a documentos escritos.
                td Elaboración de propuestas, cartas y contratos.
              tr
                td Hojas de cálculo
                td Organizar datos, realizar operaciones matemáticas y analizar información.
                td Cotizaciones, cálculos de precios y control de ventas.
              tr.bg3
                td Gestores de bases de datos
                td Registrar, organizar, consultar y administrar información estructurada.
                td Gestión de clientes, productos e inventarios.
              tr
                td Herramientas de presentaciones
                td Organizar información mediante diapositivas y recursos gráficos.
                td Sustentación de propuestas comerciales.
              tr.bg3
                td Herramientas de comunicación
                td Facilitar el intercambio de mensajes, documentos y reuniones.
                td Envío de ofertas y reuniones con clientes.
              tr
                td Plataformas de almacenamiento y colaboración
                td Guardar, compartir y editar archivos de manera coordinada.
                td Revisión y actualización de documentos comerciales.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t7/img03.png', alt='' style="width: 100%; aspect-ratio: 2 / 3; object-fit: cover; border-radius: 15px;")

    p Estas categorías pueden complementarse entre sí durante el desarrollo de una actividad comercial. Por ejemplo, la información de precios organizada en una hoja de cálculo puede incorporarse a una propuesta elaborada en un procesador de texto y utilizarse posteriormente en una presentación.

    separador
    #t_7_2.titulo-segundo.mb-5
      h2 7.2  Tipos de herramientas ofimáticas

    p Existen diferentes aplicaciones que permiten desarrollar las actividades relacionadas con la gestión documental y comercial. Algunas forman parte de paquetes ofimáticos instalados en computadores, mientras que otras funcionan mediante plataformas en línea.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 14.
      span Tipos de herramientas ofimáticas
    .row.justify-content-center.align-items-start.mb-2
      .col-lg-8.mb-4.mb-lg-0
        .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.bg2.text-izq.w-25 Tipo
                th.bg2.text-izq Descripción
                th.bg2.text-izq Ejemplos de herramientas
            tbody
              tr.bg3
                td Procesadores de texto
                td Permiten redactar, editar y dar formato a documentos, incorporar tablas y organizar información escrita.
                td Microsoft Word, LibreOffice Writer y Documentos de Google.
              tr
                td Hojas de cálculo
                td Facilitan cálculos, organización de datos, aplicación de fórmulas y elaboración de gráficos.
                td Microsoft Excel, LibreOffice Calc y Hojas de cálculo de Google.
              tr.bg3
                td Gestores de bases de datos
                td Permiten crear y administrar registros estructurados, realizar consultas y organizar información.
                td Microsoft Access y LibreOffice Base.
              tr
                td Presentaciones
                td Facilitan la elaboración de diapositivas con textos, tablas, gráficos y recursos multimedia.
                td Microsoft PowerPoint, LibreOffice Impress y Presentaciones de Google.
              tr.bg3
                td Comunicación y reuniones
                td Permiten intercambiar mensajes, compartir información y desarrollar reuniones virtuales.
                td Microsoft Outlook, Gmail, Microsoft Teams y Google Meet.
              tr
                td Almacenamiento y colaboración
                td Facilitan guardar archivos, compartir documentos y gestionar versiones o permisos de acceso.
                td OneDrive, Google Drive y SharePoint.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t7/img04.png', alt='' style="width: 100%; aspect-ratio: 2 / 3; object-fit: cover; border-radius: 15px;")

    p La utilización de estas herramientas debe responder a las necesidades específicas del proceso comercial. No todas las actividades requieren el uso de todas las aplicaciones; lo importante es seleccionar aquellas que faciliten el desarrollo de la tarea y permitan obtener resultados confiables.









</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
