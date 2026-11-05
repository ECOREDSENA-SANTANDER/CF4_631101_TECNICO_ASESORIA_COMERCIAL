export default {
  global: {
    Name: 'Propuesta comercial de un producto o servicio',
    Description:
      'Una propuesta comercial es un documento que presenta al cliente información detallada sobre un producto o servicio, incluyendo sus beneficios, alcance, plazos de entrega y condiciones de pago. <br><br>En este componente se abordan sus principales aspectos que debe tener este documento: identificación de necesidades, descripción del producto o servicio, condiciones comerciales y formas de presentación. Asimismo, se incluyen técnicas de negociación y herramientas para comunicar y sustentar eficazmente la propuesta ante el cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Las necesidades y los deseos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atributos del producto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de productos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características del producto',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Empaque',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Etiqueta',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Envase',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Embalaje',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Portafolio de productos',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Ciclo de vida del producto',
            hash: 't_2_9',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El surtido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estructura y clasificación del surtido',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Dimensiones del surtido',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características del surtido',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cualidades del surtido',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'El lineal',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Implantación del surtido',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Atributos del servicio al cliente',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características del servicio al cliente',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de servicio al cliente',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Gestión de solicitudes, quejas y reclamaciones',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Servicio posventa',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de la negociación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Etapas de la negociación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de negociación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Aplicabilidad de la negociación comercial',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elementos de la propuesta comercial',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Elaboración de la propuesta comercial',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Presentación y sustentación de la propuesta comercial',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas ofimáticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Clasificación de las herramientas ofimáticas',
            hash: 't_7_1',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Atributos del producto',
      significado:
        'Propiedades tangibles e intangibles que caracterizan un producto y permiten diferenciarlo de otras alternativas comerciales.',
    },
    {
      termino: 'Beneficio comercial',
      significado:
        'Ventaja que obtiene el cliente al adquirir un producto o servicio que satisface sus necesidades.',
    },
    {
      termino: 'Ciclo de vida del producto',
      significado:
        'Etapas de introducción, crecimiento, madurez y declive que caracterizan la evolución comercial de un producto.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona u organización que adquiere productos o servicios para satisfacer necesidades o requerimientos específicos.',
    },
    {
      termino: 'Condiciones comerciales',
      significado:
        'Acuerdos que establecen precios, formas de pago, plazos de entrega, garantías y responsabilidades de una transacción.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Materiales y procedimientos utilizados para proteger y agrupar productos durante su almacenamiento, manipulación y transporte.',
    },
    {
      termino: 'Herramientas ofimáticas',
      significado:
        'Aplicaciones informáticas que facilitan la elaboración, organización, procesamiento y comunicación de documentos e información comercial.',
    },
    {
      termino: 'Necesidad del cliente',
      significado:
        'Requerimiento o carencia que motiva la búsqueda de productos o servicios capaces de proporcionar satisfacción.',
    },
    {
      termino: 'Negociación comercial',
      significado:
        'Proceso de comunicación entre las partes para establecer acuerdos sobre productos, precios y condiciones comerciales.',
    },
    {
      termino: 'Portafolio de productos',
      significado:
        'Conjunto organizado de bienes o servicios que una empresa ofrece para atender diferentes segmentos del mercado.',
    },
    {
      termino: 'Propuesta comercial',
      significado:
        'Documento estructurado que presenta productos o servicios, beneficios, precios y condiciones para responder a necesidades del cliente.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'Conjunto de actividades orientadas a atender requerimientos, resolver inquietudes y fortalecer la satisfacción del consumidor.',
    },
    {
      termino: 'Servicio posventa',
      significado:
        'Atención proporcionada después de la compra para gestionar garantías, solicitudes y necesidades de acompañamiento del cliente.',
    },
    {
      termino: 'Surtido',
      significado:
        'Conjunto de productos, marcas y referencias disponibles en un establecimiento para satisfacer las preferencias del consumidor.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Beneficios adicionales que diferencian una oferta comercial y contribuyen a incrementar su utilidad para el cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amador Araujo, Lourdes, L., Pineda Ayala, E. y Kotler, P. (2017). Fundamentos De Marketing. Decimotercera ed. México: Pearson Prentice Hall. Print. Área: Administración.',
    },
    {
      referencia:
        'Ávila M., F. (2008). Tácticas para la Negociación Internacional. (2.ª ed.). ISBN: 9682480841. México D.F., México: Trillas, pp. 29, 195-196.',
    },
    {
      referencia:
        'Díez de Castro, E.C, Landa Bercebal, F.J., Navarro García, A. (2006). Merchandising. Teoría y práctica. Pirámide, Madrid.',
    },
    {
      referencia:
        'Muñiz G., R. (2008). Marketing en el siglo XXI. (2.ª ed.). ISBN: 8445410911. España: Centro de estudios Financieros.',
    },
    {
      referencia:
        'Palomares, B. (2009). Merchandising. Teoría, práctica y estrategia. ESIC, Madrid.',
    },
    {
      referencia:
        'Parra, J. B., Santiago, E., Murillo, M. y Atonal, C. (2010). Estrategia para negociaciones exitosas. e-Gnosis, 8.',
    },
    {
      referencia:
        'Solís Buendía, L. (2015). Importancia del surtido en la estrategia minorista: un análisis empírico en el contexto de tiendas de ropa.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paolo Andrés Cantillo Largo',
          cargo: 'Experto temático',
          centro: 'Centro de comercio - Regional Antioquia',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
}
