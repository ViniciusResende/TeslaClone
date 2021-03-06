import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="https://www.tesla.com/about" target="_blank" rel="noreffer">Tesla © 2021</a>
          </li>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Made with ❤️️</a>
          </li>
          <li>
            <a href="#">by Vinícius Alves</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;