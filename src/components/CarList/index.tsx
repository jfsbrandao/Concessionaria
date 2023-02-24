import React from "react";
import { Item } from "react-bootstrap/lib/Breadcrumb";
import { Car } from "../../models/Car";
import { Container } from "./styles";

interface CarListProps {
  cars: Car[];
}

export const CarList = ({ cars }: CarListProps) => {
  return (
    <Container>
      {...cars.map((car) => (
        <div>
          <li>
            <img src={car.img} />
          </li>
          <h5>{car.name}</h5>
          <p>
            Starting at <strong>{car.price}</strong>
          </p>
        </div>
      ))}
    </Container>
  );
};
