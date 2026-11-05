<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aplicación de la propuesta comercial y negociación con el cliente',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer la apropiación de los conocimientos relacionados con la formulación de propuestas comerciales, la gestión del portafolio y el proceso de negociación con el cliente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa desea presentar una propuesta comercial ajustada a un cliente específico. ¿Qué información debe priorizar antes de estructurarla?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Las necesidades, expectativas y características del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de empleados de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ubicación de todos los proveedores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El historial contable de la competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento fortalece la propuesta de valor de un producto o servicio frente a otras alternativas del mercado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de documentos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los beneficios diferenciales que responden a necesidades del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tamaño de la bodega de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La antigüedad de los equipos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 3,
          texto:
            'Al describir un producto dentro de una propuesta comercial, ¿qué aspecto facilita que el cliente comprenda su utilidad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las funciones y beneficios asociados a sus necesidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de reuniones del equipo comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los procedimientos administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estructura jerárquica de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el propósito del empaque dentro de la presentación comercial de un producto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la estrategia de servicio al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger el producto y contribuir a su presentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir las condiciones de negociación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el número de vendedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 5,
          texto:
            '¿Qué información de la etiqueta contribuye a una decisión de compra informada?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Datos relevantes sobre características, uso o condiciones del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Información exclusiva sobre la nómina de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La distribución de cargos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cronograma interno del área comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 6,
          texto:
            'Una empresa ofrece instalación y soporte posterior a la compra. ¿A qué nivel del producto corresponden principalmente estos beneficios?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producto básico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producto aumentado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producto genérico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producto no comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 7,
          texto:
            '¿Qué acción contribuye a mantener la calidad percibida de un producto o servicio?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cumplir de manera consistente las condiciones y beneficios ofrecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Modificar las características sin informar al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la atención posterior a la venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los mecanismos de seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 8,
          texto:
            'Ante una solicitud de información de un cliente, ¿qué práctica fortalece el servicio al cliente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Responder con claridad, oportunidad y orientación pertinente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Remitir siempre la consulta sin revisarla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente las solicitudes internas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar registrar las necesidades expresadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 9,
          texto:
            '¿Qué resultado puede generar una adecuada gestión del servicio al cliente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mayor satisfacción y fortalecimiento de la relación comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación automática de la competencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción obligatoria del portafolio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustitución de la propuesta comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 10,
          texto:
            'Una empresa incorpora nuevas referencias para atender diferentes segmentos. ¿Qué aspecto del surtido está fortaleciendo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La variedad de opciones disponibles para los clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La estructura salarial del área comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número de procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación física de los proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 11,
          texto:
            '¿Qué criterio resulta pertinente para organizar productos en categorías dentro de un surtido?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Características, usos o necesidades que atienden.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Antigüedad de los vendedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de reuniones comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Orden alfabético de los proveedores únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 12,
          texto:
            'Si una línea de productos incorpora más referencias dentro de la misma categoría, ¿qué dimensión del surtido aumenta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Profundidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ubicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rotación administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cobertura institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 13,
          texto:
            '¿Qué decisión favorece la gestión eficiente del portafolio de productos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener referencias alineadas con las necesidades y demanda de los clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Conservar todos los productos sin analizar su desempeño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar información sobre preferencias de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir el surtido sin considerar el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 14,
          texto:
            'Antes de iniciar una negociación comercial, ¿qué acción permite una mejor preparación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir objetivos, información relevante y posibles alternativas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Improvisar las condiciones durante la reunión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar establecer límites de negociación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentar la oferta sin conocer al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 15,
          texto:
            'Durante una negociación, el cliente plantea una objeción sobre el precio. ¿Cuál es una respuesta comercial adecuada?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Explicar el valor y los beneficios de la oferta con argumentos pertinentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Finalizar inmediatamente la conversación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar la objeción y cambiar de tema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar todas las condiciones sin analizarlas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 16,
          texto:
            '¿Qué práctica facilita la construcción de acuerdos en una negociación?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar intereses de las partes y explorar alternativas de beneficio mutuo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mantener una posición rígida en todos los aspectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar formular preguntas durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ocultar las condiciones esenciales de la propuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 17,
          texto:
            'Al cerrar una negociación, ¿qué acción contribuye a evitar interpretaciones diferentes entre las partes?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Precisar y registrar los acuerdos, compromisos y condiciones definidas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dejar pendientes los aspectos esenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar verbalmente lo acordado después del cierre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar confirmar fechas y responsabilidades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 18,
          texto:
            '¿Qué recurso ofimático es más apropiado para estructurar una propuesta comercial con texto, tablas e información organizada?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un procesador de texto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un reproductor multimedia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una herramienta de diagnóstico de red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 19,
          texto:
            '¿Para qué puede utilizarse una hoja de cálculo al preparar una propuesta comercial?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar cálculos de precios, descuentos y condiciones económicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir el contacto con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fabricar físicamente el producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar el transporte de mercancías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
        {
          id: 20,
          texto:
            '¿Qué característica debe tener la presentación de una propuesta comercial para facilitar su socialización con el cliente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Información clara, organizada y coherente con las necesidades identificadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contenido extenso sin jerarquía ni estructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Datos técnicos sin relación con la oferta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Información interna que no aporta a la decisión comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La respuesta evidencia apropiación de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la revisión de los conceptos relacionados con la propuesta comercial de un producto o servicio, la gestión del portafolio y la negociación comercial.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y evidencia apropiación de los conceptos relacionados con la propuesta comercial, la gestión del portafolio y la negociación comercial.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente el componente formativo Propuesta comercial de un producto o servicio e intentar la actividad didáctica.s',
    },
  }),
}
</script>
