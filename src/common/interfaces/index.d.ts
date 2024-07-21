import { DefaultMantineColor } from '@mantine/core';
import { Technologies } from '../../pages/Experience/constants';

interface IProject {
  title: string;
  link: string;
  video?: string;
  image: string;
  color: DefaultMantineColor;
  date: string;
  company: string;
  description: string;
  technologies: {
    name: Technologies;
    color: DefaultMantineColor;
  }[];
}
