import React from 'react';

import { ModelSection, ModelsWrapper } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            {
              name: 'Model S',
              description: "Order Online for ",
              descriptionLine: "Touchless Delivery",
              firstButtonContent: "Custom Order",
              secondButtonContent: "Existing Inventory"
            },
            {
              name: 'Model Y',
              description: "Order Online for ",
              descriptionLine: "Touchless Delivery",
              firstButtonContent: "Custom Order",
              secondButtonContent: "Existing Inventory"
            },
            {
              name: 'Model 3',
              description: "Order Online for ",
              descriptionLine: "Touchless Delivery",
              firstButtonContent: "Custom Order",
              secondButtonContent: "Existing Inventory"
            },
            {
              name: 'Model X',
              description: "Order Online for ",
              descriptionLine: "Touchless Delivery",
              firstButtonContent: "Custom Order",
              secondButtonContent: "Existing Inventory"
            },
            {
              name: 'Lowest Cost Solar Panels in America',
              description: "Money-back guarantee",
              descriptionLine: "",
              firstButtonContent: "Order Now",
              secondButtonContent: "Learn More"
            },
            {
              name: 'Solar for New Roofs',
              description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
              descriptionLine: "",
              firstButtonContent: "Order Now",
              secondButtonContent: "Learn More"
            },
            {
              name: 'Acessories',
              description: "",
              descriptionLine: "",
              firstButtonContent: "Shop Now",
              secondButtonContent: ""
            },            
          ].map(item => (
            <ModelSection 
            key={item.name}
            className="colored"
            modelName={item.name}
            overlayNode={
              <DefaultOverlayContent
                label={item.name}
                description={item.description}
                descriptionLine={item.descriptionLine}
                firstButtonContent={item.firstButtonContent}
                secondButtonContent={item.secondButtonContent}
              />
            }
          />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}

export default Page;