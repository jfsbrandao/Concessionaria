import { useState } from "react";
import subaruLogo from "./assets/SOA_Primary_HOR_600x150.webp";
import {
  Navbar,
  LogoSubaru,
  Container,
  Carrossel,
  Navigator,
  Imagens,
} from "./styles";
import { FaSearch, FaYoutube } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import { CarList } from "./components/CarList";
import { ListaBotoes } from "./components/ListaBotoes";
import { DoubleBlock } from "./components/DoubleBlock"
import { normies, suvs, performance } from "./constants/cars";
import { Certificado } from "./components/Certificado";

const debug = () => {
  console.log("Teste");
};
const debug1 = () => {
  console.log("Teste1");
};
const debug2 = () => {
  console.log("Teste2");
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/*------------------------------------------------------------------------------------------------------------*/
function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container>
      <Navbar>
        <LogoSubaru>
          <img src={subaruLogo} />
        </LogoSubaru>

        <div className="navigation-bar">
          <nav>
            <ul>
              <li>Vehicles</li>
              <li>Build & Price</li>
              <li>Shopping Tools</li>
              <li>Our Commitment</li>
              <li>Owners</li>
            </ul>
          </nav>
        </div>

        <div className="navigation-bar">
          <nav>
            <ul>
              <li className="retailer">Find a Retailer</li>
              <span>|</span>
              <li className="retailer">
                <FaSearch />
              </li>
            </ul>
          </nav>
        </div>
      </Navbar>

      {/* -------------------------------------- Inicio do carroceu ---------------------------------------------------- */}
      <Carrossel>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          draggable={false}
        >
          <div>
            <h1 id="text">
              Love is now <br /> bigger than ever.
            </h1>
            <p>Introducing the widebody concept for Subaru BRZ</p>
            <img src="src\assets\1.jpeg" />
            <button className="More">
              <span>Explore the Ascent</span>
            </button>
          </div>

          <div>
            <h1 id="text">
              <span>The past</span> <br /> comes to the future.
            </h1>
            <p>Top Gear subaru series: The WRX STI</p>
            <img src="src\assets\2.jpeg" />
            <button className="More">Explore the Power</button>
          </div>

          <div>
            <h1 id="text">
              When Japanese style <br /> conquered the world.
            </h1>
            <p>Widebody is the new custom meta. Find it here.</p>
            <img src="src\assets\3.jpeg" />
            <button className="More">Explore the wide</button>
          </div>
        </Carousel>
      </Carrossel>

      {/* --------------------------- Inicio das tabs ---------------------------------*/}

      <Navigator>
        <Tabs align="center" colorScheme={"blackAlpha"} size={"lg"}>
          <TabList>
            <Tab>
              <div className="Element">
                <h1>SUVs</h1>
              </div>
            </Tab>

            <Tab>
              <div className="Element">
                <h1>Cars</h1>
              </div>
            </Tab>

            <Tab>
              <div className="Element">
                <h1>Performance</h1>
              </div>
            </Tab>
          </TabList>

          <TabPanels animation="reverse">
            <TabPanel>
              <CarList cars={suvs} />
            </TabPanel>

            <TabPanel>
              <CarList cars={normies} />
            </TabPanel>
            <TabPanel>
              <CarList cars={performance} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Navigator>

      {/*------------------------------------- Botoes grandes azuis ------------------------------------------*/}

      <ListaBotoes/>

      {/*---------------------------- Imagens --------------------------*/}

      <DoubleBlock/>

      {/*-------------------------------- Certificado --------------------------------*/}

      <Certificado/>
      
    </Container>
  );
}

export default App;
