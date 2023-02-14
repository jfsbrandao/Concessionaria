import styled from 'styled-components';

export const Imagens = styled.div`
    display: flex;
    height: 600px;
    .testiculo{
        margin: auto;
    }
    .div1{
        width: 50%;
        background-color: #1d252c;
        display: flex;
        padding: 75px 75px 180px;
        flex-direction: column;
        height: 800px;
        position: relative;
        h1{
            font-size: 10px;
            color: #90959A;
            font-weight: 500;
            margin-top: 0px;
            margin-left: 0px;
            font-size: .82353rem;
        }
        .Tituluzaum{
            font-size: 3.82353rem;
            color: white;
            font-weight: bold;
            margin-bottom: 20px;
        }
        p{
            color: white;
        }
        .Linkzin{
            color: #1971d4;
            margin-top: 20px;
            font-weight: bold;
            transition: color 0.3s;
            &:hover{
                color:white;
                cursor: pointer;
            }
        }
        .Slide{
            color: white;
            display: flex;
            flex-direction: row;
            justify-content: baseline;
            position: absolute;
            bottom: 50px;
            span{
                font-size: 48px;
                font-weight: 500;
            }
            p{
                bottom: 0px;
            }
        }
    }
    .div2{
        position: relative;
        width: 50%;
        height: 800px;
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
