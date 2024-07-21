import { IProject } from '../../../common/interfaces';

export enum Technologies {
  REACT = 'Reactjs',
  NEST = 'Nestjs',
  DOCKER = 'Docker',
  REACT_QUERY = 'react-query',
  MANTINE = 'MantineUI',
  JAVASCRIPT = 'Javascript',
  CSS3 = 'CSS3',
  HTML5 = 'HTML5',
  AWS = 'AWS',
  TYPEORM = 'TypeORM',
  POSTGRESQL = 'POSTGRESQL',
  MSSQL = 'MSSQL',
  MONGODB = 'MONGODB',
  JEST = 'Jest',
  BIOME = 'Biome',
  MICROSERVICES = 'Microservices',
}

export const PROJECTS_DATA: IProject[] = [
  {
    company: 'Freelancer',
    color: 'blue',
    image: '',
    link: '',
    title: 'Trabajos Independientes de Desarrollo',
    date: 'Enero 2022 - Noviembre 2022',
    description:
      'Desarrollo de software backend y frontend, análisis técnico y abstracción de requerimientos solicitados por el cliente. Gestión de reuniones con clientes, análisis de proyecto, desarrollo de diagramas ER y desarrollo de software en Nest y React.',
    technologies: [
      {
        name: Technologies.REACT,
        color: 'blue',
      },
      {
        name: Technologies.NEST,
        color: 'orange',
      },
      {
        name: Technologies.DOCKER,
        color: 'blue',
      },
    ],
  },
  {
    company: 'Adviters',
    color: 'green',
    image: '',
    link: '',
    date: 'Noviembre 2022 - Presente',
    title: 'Desarrollador de Software en Adviters',
    description:
      'Desarrollo de software Backend y Frontend para proyectos internos de la empresa. Uso de tecnologías como React, Nestjs, Docker, TypeORM, MSSQL, MongoDB y Postgresql. Colaboración con el equipo para resolver problemas y desarrollar soluciones escalables y mantenibles. ',
    technologies: [
      {
        name: Technologies.REACT,
        color: 'blue',
      },
      {
        name: Technologies.NEST,
        color: 'orange',
      },
      {
        name: Technologies.DOCKER,
        color: 'cyan',
      },
      { name: Technologies.POSTGRESQL, color: 'indigo' },
      { name: Technologies.TYPEORM, color: 'lime' },
      { name: Technologies.MONGODB, color: 'grape' },
    ],
  },
  {
    company: 'Adviters',
    color: 'indigo',
    image: '',
    link: '',
    title: 'Profesor de Bootcamp Adviters',
    date: 'Enero 2024',
    description:
      'Organización e impartición de clases de Javascript, HTML5 y CSS3 para un bootcamp de Dynamics 365. Gestión de tareas y material.',
    technologies: [
      {
        color: 'cyan',
        name: Technologies.CSS3,
      },
      {
        color: 'yellow',
        name: Technologies.JAVASCRIPT,
      },
      {
        color: 'red',
        name: Technologies.HTML5,
      },
    ],
  },

  {
    company: 'Banco Comafi',
    color: 'green',
    image: '',
    link: '',
    date: 'Agosto 2023 - Presente',
    title: 'Desarrollador de Software en Banco Comafi',
    description:
      'Participación en el desarrollo de sistemas internos para la gestión de tarjetas prepagas y fondos comunes de inversión. Uso de tecnologías como Nestjs, Reactjs, AWS, Docker, Jest, Biome y Microservicios. Colaboración con el equipo para resolver problemas y desarrollar soluciones escalables y mantenibles.',
    technologies: [
      {
        name: Technologies.REACT,
        color: 'blue',
      },
      {
        name: Technologies.NEST,
        color: 'orange',
      },
      {
        color: 'red',
        name: Technologies.AWS,
      },
      {
        name: Technologies.DOCKER,
        color: 'blue',
      },
      {
        name: Technologies.JEST,
        color: 'green',
      },
      {
        name: Technologies.BIOME,
        color: 'pink',
      },
      {
        name: Technologies.MICROSERVICES,
        color: 'teal',
      },
    ],
  },
];
