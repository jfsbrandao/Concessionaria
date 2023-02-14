import { Container } from './styles';


export const ListaBotoes = () => {
  return (
    <Container>
      <ul>
          <div className="Div1">
            <h1 className="Textinho">Build & Price</h1>
            <p className="Paragrafinho">
              Build your perfect Subaru with our easy,
              <br /> online tools.
            </p>
            <button className="Botao">&gt;</button>
          </div>
          <div className="Div1">
            <h1 className="Textinho">Special Offers</h1>
            <p className="Paragrafinho">
              Explore the discount and incentive programs
              <br /> available for qualified buyers.
            </p>
            <button className="Botao">&gt;</button>
          </div>
          <div className="Div1">
            <h1 className="Textinho">Local Inventory</h1>
            <p className="Paragrafinho">
              Find the Subaru model with the exact features
              <br /> and colors you're looking for.
            </p>
            <button className="Botao">&gt;</button>
          </div>
          <div className="Div1">
            <h1 className="Textinho">Find a Retailer</h1>
            <p className="Paragrafinho">
              Locate and get directions to a retailer near you
              <br /> with the services you need.
            </p>
            <button className="Botao">&gt;</button>
          </div>
        </ul>
    </Container>
  );
};
