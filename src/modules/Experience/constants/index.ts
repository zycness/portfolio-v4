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
}

export const PROJECTS_DATA: IProject[] = [
  {
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
    color: 'blue',
    image: '',
    link: '',
    title: 'Trabajos Independientes de Desarrollo',
    date: 'Enero 2023 - Presente',
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
    color: 'green',
    image: '',
    link: '',
    date: 'Nov 2022 - Presente',
    title: 'Desarrollador de Software en Adviters',
    description:
      'Desarrollo de software backend y frontend, trabajo en equipo, análisis técnico y abstracción de requerimientos solicitados por el cliente. Gestión de reuniones con clientes, análisis de proyecto, desarrollo de diagramas ER y desarrollo de software en Nest y React.',
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
      { name: Technologies.POSTGRESQL, color: 'indigo' },
      { name: Technologies.TYPEORM, color: 'dark' },
      { name: Technologies.MSSQL, color: 'dark' },
      { name: Technologies.MONGODB, color: 'dark' },
    ],
  },
];
