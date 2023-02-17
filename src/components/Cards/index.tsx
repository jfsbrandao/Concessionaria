import { Container } from './styles';
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text, Heading, Button } from '@chakra-ui/react'



export const Cards = () => {
  return (
    <Container>
      <SimpleGrid columns={3} spacing={'80px'} marginLeft={'80px'} marginRight={'80px'}>

        <div className='Card'>
          <img src='https://s7d1.scene7.com/is/image/scom/208_22_TSPplus_xl?$550w$'></img>
          <h1>Safety for the road ahead.</h1>
          <p>You can trust a Subaru to help protect you and your passengers. Subaru has earned more IIHS <i>TOP SAFETY PICK+</i> awards than any other brand since 2013 as of January 2023.</p>
          <span>See All Accolades</span>
        </div>

        <div className='Card'>
          <img src='https://s7d1.scene7.com/is/image/scom/208_24_IMP_FMA_xl?$550w$'></img>
          <h1>Introducing the all-new 2024 Impreza</h1>
          <p>The 2024 Subaru Impreza is all-new with upgrades and redesigned style, inside and out. There's a newly available 11.6-inch touchscreen, an all-new RS trim with extra power and sport tuning, and more.</p>
          <span>Explore Impreza</span>
        </div>

        <div className='Card'>
          <img src='https://s7d1.scene7.com/is/image/scom/NHTSA_FMA_xl_4096x2160?$550w$'></img>
          <h1>Takata Recall</h1>
          <p>Read more about the Takata airbag recall and how it impacts your Subaru.</p>
          <span>Check Your Vehicle</span>
        </div>

      </SimpleGrid>
    </Container>
  );
};
