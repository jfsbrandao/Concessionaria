import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { Tab } from '@chakra-ui/react'

export const Container = styled.div`
    width: 100%;
`

export const Navbar = styled.header`
    //position: fixed;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: white;
    padding: 25px 80px;
    .navigation-bar {
        justify-content: center;
        nav {
            ul {
                display: flex;
                flex-direction: row;
                list-style: none;
                li {
                    font-weight: 500;
                    transition: color 0.3s;
                    margin: 0px 20px;

                    &:hover {
                        color: #1971d4;
                        cursor: pointer;
                    }
                }
                .retailer{
                    font-weight: 500;
                    font-size: 14px;
                    transition: color 0.3s;
                    margin: 0px 20px;

                    &:hover {
                        color: #1971d4;
                        cursor: pointer;
                }
            }
        }
    }
}
`;
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;


export const Navigator = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 1% 0% 8% 0%;
    .Element{
        line-height: 21px;
        padding: 10.343px 40px;
        width: 250px;
    }
    h1{
        font-weight: 600;
        font-size: 1rem;
    }
    p{
        font-size: .82353rem;
        padding-top: 20px;
    }
    h5{
        font-size: 1.23529rem;
        line-height: 26px;
        font-weight: 700;

    }
    
`;



export const Carrossel = styled.div`


        div{
            height: 600px;
            position: relative;
        }


        h1{
            z-index: 2;
            position: absolute;
            top: 15%;
            left: 0;
            right: 0;
            font-size: 70px;
            width: 100%;
            height: 26px;
            padding: 0;
            margin: 0;
            margin-top: 0px;
            margin-left: 10%;
            text-align: start;
            color: white;
            text-shadow: 2px 2px black;
            font-weight: 600;

        }
        
        p{
            z-index: 2;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            font-size: 15px;
            width: 100%;
            height: 26px;
            padding: 0;
            margin: 0;
            margin-top: 0px;
            margin-left: 10%;
            text-align: start;
            color: white; 
            text-shadow: 2px 2px black; 
        }


        .More{
            z-index: 2;
            background-color: #1971d4;
            border: none;
            border-radius: 5px;
            position: absolute;
            top: 60%;
            left: 0;
            right: 0;
            font-size: 14px;
            width: 10%;
            height: 35px;
            padding: 0;
            margin: 0;
            margin-top: 0px;
            margin-left: 10%;
            color: white;
            font-weight: 500;
            transition: color 0.5s;
            &:hover {
                        color: black;
                        cursor: pointer;
                        background-color: white;
                    }
        }


        img{
            margin: auto;
            height: 100%;
            object-fit: cover;   
            object-position: center;
            width: 100%;

            z-index: 1;
            position: absolute;
            top:0;
            right:0;
            bottom:0;
            left:0;
        }
        
`;


export const Imagens = styled.div`
    display: flex;
    height: 600px;
    .div1{
        width: 50%;
        background-color: green;
        display: flex;
        justify-content: center;
        h1{
            font-size: 100px;
            margin: auto auto auto auto;
            color: white;
            font-weight: 500;
        }
    }
    .div2{
        position: relative;
        width: 50%;
    }
    img{
        margin: auto;
        height: 100%;
        object-fit: cover;   
        object-position: center;
        width: 100%;

        z-index: 1;
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
    }
`;


export const Textinho = styled.div`
    position: absolute;
    bottom: 8px;
    left: 16px;
`;
export const LogoSubaru = styled.div`
    img {
        width:160px;
        height:40px;
    }
`;


export const RollUpButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1d252c;
    height: 70px;
    .Button{
        transition: all 0.5s;
        color: black;
        background-color: white;
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: #1971d4;
            cursor: pointer;
            color: white
        }
    }
`


export const FootInformation = styled.div`
    padding: 25px 48px 0;
    background-color: #1d252c;
    height: 300px;
    color: white;
    display: flex;
    flex-direction: column;
`
