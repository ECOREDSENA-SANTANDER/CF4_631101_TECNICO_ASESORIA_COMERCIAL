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

    .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")  
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

    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-left")  
      .col-lg-8.mb-3.mb-lg-0
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
              tr
                td Procesadores de texto
                td Crear, editar y dar formato a documentos escritos.
                td Elaboración de propuestas, cartas y contratos.
              tr
                td Hojas de cálculo
                td Organizar datos, realizar operaciones matemáticas y analizar información.
                td Cotizaciones, cálculos de precios y control de ventas.
              tr
                td Gestores de bases de datos
                td Registrar, organizar, consultar y administrar información estructurada.
                td Gestión de clientes, productos e inventarios.
              tr
                td Herramientas de presentaciones
                td Organizar información mediante diapositivas y recursos gráficos.
                td Sustentación de propuestas comerciales.
              tr
                td Herramientas de comunicación
                td Facilitar el intercambio de mensajes, documentos y reuniones.
                td Envío de ofertas y reuniones con clientes.
              tr
                td Plataformas de almacenamiento y colaboración
                td Guardar, compartir y editar archivos de manera coordinada.
                td Revisión y actualización de documentos comerciales.
      .col-lg-4.col-9
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
    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-left")  
      .col-lg-8.mb-4.mb-lg-0
        .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-3
          table
            thead
              tr
                th.bg2.text-izq.w-25 Tipo
                th.bg2.text-izq Descripción
                th.bg2.text-izq Ejemplos de herramientas
            tbody
              tr
                td Procesadores de texto
                td Permiten redactar, editar y dar formato a documentos, incorporar tablas y organizar información escrita.
                td Microsoft Word, LibreOffice Writer y Documentos de Google.
              tr
                td Hojas de cálculo
                td Facilitan cálculos, organización de datos, aplicación de fórmulas y elaboración de gráficos.
                td Microsoft Excel, LibreOffice Calc y Hojas de cálculo de Google.
              tr
                td Gestores de bases de datos
                td Permiten crear y administrar registros estructurados, realizar consultas y organizar información.
                td Microsoft Access y LibreOffice Base.
              tr
                td Presentaciones
                td Facilitan la elaboración de diapositivas con textos, tablas, gráficos y recursos multimedia.
                td Microsoft PowerPoint, LibreOffice Impress y Presentaciones de Google.
              tr
                td Comunicación y reuniones
                td Permiten intercambiar mensajes, compartir información y desarrollar reuniones virtuales.
                td Microsoft Outlook, Gmail, Microsoft Teams y Google Meet.
              tr
                td Almacenamiento y colaboración
                td Facilitan guardar archivos, compartir documentos y gestionar versiones o permisos de acceso.
                td OneDrive, Google Drive y SharePoint.
      .col-lg-4.col-9
        figure
          img(src='@/assets/curso/temas/t7/img04.png', alt='' style="width: 100%; aspect-ratio: 2 / 3; object-fit: cover; border-radius: 15px;")

    p La utilización de estas herramientas debe responder a las necesidades específicas del proceso comercial. No todas las actividades requieren el uso de todas las aplicaciones; lo importante es seleccionar aquellas que faciliten el desarrollo de la tarea y permitan obtener resultados confiables.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t7/ico.svg', alt='')
      h3.mb-0.mx-3 Aplicación de las herramientas ofimáticas en una propuesta comercial

    p Para elaborar una propuesta de suministro de computadores, el asesor puede desarrollar el siguiente procedimiento:

    .fondo01.mb-4.p-lg-5.p-4(data-aos="fade-left")  
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-3.p-4.col-10.d-none.d-lg-block
          img(src='@/assets/curso/temas/t7/img05.svg', alt='')
        .col-lg-8
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg3.p-3
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/1.svg' alt='')
              p.text-center.mb-0 Utilizar Excel o Hojas de cálculo de Google para organizar las referencias, cantidades, precios unitarios, descuentos y valores totales.
            .tarjeta.bg3.p-3
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/2.svg' alt='')
              p.text-center Emplear Word o Documentos de Google para estructurar la propuesta, describir los equipos, explicar sus beneficios y establecer las condiciones comerciales.

            .tarjeta.bg3.p-3
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/3.svg' alt='')
              p.text-center Preparar una presentación mediante PowerPoint o Presentaciones de Google para sustentar la oferta ante el cliente.

            .tarjeta.bg3.p-3
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/4.svg' alt='')
              p.text-center Almacenar los documentos en OneDrive o Google Drive, aplicando los permisos de acceso correspondientes.

            .tarjeta.bg3.p-3
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/5.svg' alt='')
              p.text-center Compartir la propuesta mediante correo electrónico y, cuando sea necesario, programar una reunión virtual para resolver inquietudes.
    p Este procedimiento permite integrar diferentes herramientas y mantener organizada la información durante las etapas de elaboración, presentación y seguimiento de la propuesta.
    
    separador
    #t_7_3.titulo-segundo.mb-5
      h2 7.3  Buenas prácticas en el uso de herramientas ofimáticas

    p Además de conocer las funciones de las herramientas, es importante aplicar criterios que contribuyan a garantizar la calidad, seguridad y confiabilidad de los documentos comerciales.
    
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 15.
      span Buenas prácticas para la gestión de documentos comerciales
    .row.justify-content-center.align-items-start.mb-0
      .col-lg-8.mb-4.mb-lg-0
        .tabla-a.color-acento-contenido(data-aos="zoom-in-left").mb-1
          table
            thead
              tr
                th.bg2.text-izq.w-25 Buena práctica
                th.bg2.text-izq Descripción
            tbody
              tr
                td Organización de archivos
                td Utilizar nombres claros, fechas y carpetas que faciliten la identificación de las propuestas y sus versiones.
              tr
                td Verificación de información
                td Revisar fórmulas, cantidades, precios y condiciones comerciales antes de compartir los documentos.
              tr
                td Presentación profesional
                td Mantener uniformidad en títulos, tablas, tipografías y formatos para facilitar la comprensión de la información.
              tr
                td Protección de datos
                td Administrar de manera segura la información de clientes, precios y acuerdos comerciales, utilizando mecanismos de protección adecuados.
              tr
                td Control de versiones
                td Identificar las versiones actualizadas para evitar el envío de propuestas con información desactualizada.
              tr
                td Compatibilidad de formatos
                td Seleccionar formatos accesibles para el cliente y utilizar PDF cuando se requiera conservar la presentación del documento final.
              tr
                td Uso responsable de herramientas digitales
                td Verificar los contenidos generados mediante herramientas automatizadas o inteligencia artificial y evitar compartir información confidencial en servicios no autorizados.
              
      .col-lg-4(data-aos="fade-left").d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t7/img06.png', alt='' style="width: 94%; aspect-ratio: 2 / 3; object-fit: cover; border-radius: 15px;")
      .col-lg-12 
        figcaption  caption Nota. La aplicación de estas prácticas contribuye a reducir errores, optimizar los procesos de trabajo y fortalecer la imagen profesional de la empresa.
























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
