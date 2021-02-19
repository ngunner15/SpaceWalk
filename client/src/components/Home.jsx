import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Mars from '../images/mars.svg';
import Saturn from '../images/saturn.svg';
import Uranus from '../images/uranus.svg';
import Spaceshuttle from '../images/spaceshuttle.svg';

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222629;
`;

const Homepage = styled.div`
  display: grid;
  border: 2px solid #474b4f;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const Intro = styled.div`
  display: flex;
  border: 1px solid #474b4f;
  border-radius: 50px;
  color: #61892f;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.2rem;
    font-size: 2.2rem;
  }

  p {
    color: #fff;
    margin: 1.5rem 0;
    font-size: 4rem;
  }
`;

const Button = styled(motion.button)`
  padding: 0.8rem 3rem;
  color: #fff;
  font-size: 1.5rem;
  border: 1.5px solid #86c232;
  border-radius: 50px;
  background-color: #86c232;
  outline: none;
  cursor: pointer;
`;

const PlanetImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  animation: rotation 2s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const ShuttleImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  animation: blinker 1.5s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

// container holding all images
const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;

  ${PlanetImage}: nth-child(1) {
    top: 100px;
    left: 200px;
  }

  ${PlanetImage}: nth-child(2) {
    top: 400px;
    left: 100px;
  }

  ${PlanetImage}: nth-child(3) {
    bottom: 100px;
    left: 400px;
  }

  ${ShuttleImage}: nth-child(4) {
    top: 300px;
    left: 380px;
  }
`;

export default function Home() {
  const fade = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <StyledSection>
      <Homepage>
        <Intro>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            SpaceWalk
          </motion.h1>
          <motion.p
            variants={fade}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1.5 }}
          >
            JOURNEY TO THE OUTERSPACE
          </motion.p>
          <Button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Explore Here
          </Button>
        </Intro>
        <Images>
          <PlanetImage src={Mars} alt='Mars' />
          <PlanetImage src={Saturn} alt='Saturn' />
          <PlanetImage src={Uranus} alt='Uranus' />
          <ShuttleImage src={Spaceshuttle} alt='spaceship' />
        </Images>
      </Homepage>
    </StyledSection>
  );
}
