'use client';

import { Box, Heading } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import ProjectCard from './ProjectCard';
import image1 from '../assets/images/project1.jpg';
import image2 from '../assets/images/project2.jpg';
import image3 from '../assets/images/project3.jpg';
import image4 from '../assets/images/project4.jpg';

const projects = [
  {
    title: 'React Space',
    description:
      'Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️',
    image: image1,
    link: 'https://react.dev',
  },
  {
    title: 'React Infinite Scroll',
    description:
      'A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️',
    image: image2,
    link: 'https://react.dev',
  },
  {
    title: 'Photo Gallery',
    description:
      'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income',
    image: image3,
    link: 'https://react.dev',
  },
  {
    title: 'Event planner',
    description:
      'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps',
    image: image4,
    link: 'https://react.dev',
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection id='projects' backgroundColor='#14532d'>
      <Heading as='h2' size='2xl' marginBottom={4}>
        Featured Projects
      </Heading>
      <Box
        display='grid'
        gridTemplateColumns='repeat(2,minmax(0,1fr))'
        gridGap={8}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
