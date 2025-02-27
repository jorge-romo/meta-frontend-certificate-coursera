import { Heading, Image, Text, Box, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaImage } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, link }) => {
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    if (typeof image === 'string') {
      setImageSrc(image);
    } else if (image instanceof Promise) {
      image.then((src) => {
        setImageSrc(src);
      });
    }
  }, [image]);

  return (
    <Box backgroundColor='white' textColor='black' rounded='3xl'>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          rounded='3xl'
          loading='lazy'
          width='100%'
          height='300px'
          objectFit='cover'
        />
      ) : (
        <Box
          backgroundColor='gray.200'
          rounded='3xl'
          display='flex'
          alignItems='center'
          justifyContent='center'
          width='100%'
          height='300px'
        >
          <FaImage size='5rem' />
        </Box>
      )}
      <Box padding={3}>
        <Heading color='black' marginBottom={3} size='md'>
          {title}
        </Heading>
        <Text as='p' color='gray.500' marginBottom={3}>
          {description}
        </Text>
        {!!link && (
          <Link
            href={link}
            color='black'
            target='_blank'
            rel='noopener noreferrer'
          >
            See more <FaArrowRight />
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default ProjectCard;
