import styled from 'styled-components';

export const Container = styled.div`
.colored:nth-child(1) {
  background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/ba3606ef-ce2d-41e4-90aa-bb13d767bb1a/bvlatuR/std/1000x1576/ms-homepage-mobile');
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 600px){
    background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop');
  }
}
.colored:nth-child(2) {
  background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/3304be3b-dd0a-4128-9c26-eb61c0b98d61/bvlatuR/std/800x2100/Mobile-ModelY');
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 600px){
    background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY');
  }
}
.colored:nth-child(3) {
  background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/ba75b57e-95a8-48e0-86b1-5b8392a5d7ab/bvlatuR/std/800x2100/m3-homepage-mobile');
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 600px){
    background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/409621ec-fca7-41fd-87e5-66e1caf40f5c/bvlatuR/std/2880x2400/m3-homepage-desktop');
  }
}
.colored:nth-child(4) {
  background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/07184d11-038b-4660-876e-86c9afd485f6/bvlatuR/std/1000x1576/mx-homepage-mobile');
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 600px){
    background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/58df46a8-26c5-401f-9325-388b2990dcc3/bvlatuR/std/3296x1798/mx-homepage-desktop');
  }
}
.colored:nth-child(5) {
  background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/4a2dfc25-8931-4aae-aa41-96563261d221/bvlatuR/std/800x2100/Mobile-SolarPanels');
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 600px){
    background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels');
  }
}
.colored:nth-child(6) {
  background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/f68100af-aabb-42b8-8186-67907284b7dd/bvlatuR/std/800x1700/solar-roof-hero-mobile');
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 600px){
    background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/27ae57a3-3a1d-480c-b557-cd9caf51b96e/bvlatuR/std/2880x1620/solar-roof-hero-desktop');
  }
}
.colored:nth-child(7) {
  background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories');
  @media(max-width: 600px){
    background-size: 822.84px 685.71px;
  }
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 600px){
    background-image: url('http://tesla-cdn.thron.com/delivery/public/image/tesla/69095129-86c5-4f6c-a77a-740ceac04e82/bvlatuR/std/800x2100/Mobile-Accessories');
  }
}
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #fff;
`;
