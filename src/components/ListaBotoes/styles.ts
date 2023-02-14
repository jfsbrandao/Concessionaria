import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  //background-color: #1971d4;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    .Div1 {
      background-color: white;
      width: 25%;
      color: black;
      transition: color;
      transition: background-color 0.5s;
      border-bottom: 1px solid #caccca;
      border-top: 1px solid #caccca;
      border-left: 0.5px solid #caccca;
      border-right: 0.5px solid #caccca;
      &:hover {
        color: white;
        background-color: #1971d4;
        cursor: pointer;
      }
      .Botao {
        border: 1px solid black;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-top: auto;
        margin-top: 40px;
        margin-left: 55px;
        position: static;
        transition: margin-top 0.5s;
      }
    }
    .Textinho {
      //color: white;
      font-weight: 500;
      font-size: 2.35294rem;
      position: absolute;
      margin-top: 230px;
      margin-left: 60px;
      transition: margin-top 0.5s;
      //transition: color 0.5s;
    }
    .Paragrafinho {
      margin-top: 300px;
      color: white;
      font-weight: 500;
      margin-left: 60px;
      transition: margin-top 0.5s;
    }

    .Div1:hover > .Botao {
      margin-top: 70px;
      border-color: white;
    }

    .Div1:hover > .Paragrafinho {
      margin-top: 270px;
    }


    .Div1:hover > .Textinho {
      margin-top: 200px;
    }


  }
`;
