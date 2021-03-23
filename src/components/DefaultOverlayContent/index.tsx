import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string;
  description: string;  
  descriptionLine: string;
  firstButtonContent: string;
  secondButtonContent: string;
}

const DefaultOverlayContent: React.FC<Props> = ({label, description, descriptionLine, firstButtonContent, secondButtonContent}) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}<span>{descriptionLine}</span></h2>
      </Heading>

      <Buttons>
        <button>{firstButtonContent}</button>
        {secondButtonContent && <button className="white">{secondButtonContent}</button>}        
      </Buttons>
    </Container>
  );
}

export default DefaultOverlayContent;