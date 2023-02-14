import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 200px;
    display: flex;
    height: 750px;
    padding: 100px 200px 100px 200px;
    background-color: white;
    .div1{
        width: 50%;
        background-color: red;
        display: flex;
        padding: 75px 75px 180px;
        float: left;
        position: relative;

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

    }
    .div2{
        width: 50%;
        background-color: #1d252c;
        display: flex;
        padding: 75px 75px 180px;
        float: left;
        display: flex;
        flex-direction: column;

        img{
            height: 150px;
            margin-left: auto;
            margin-right: auto; 
        }
        h1{
            text-align: center;
            color: white;
            font-weight: bold;
            font-size: 30px;
            margin-top: 10px;
        }
        span{
            text-align: center;
            color: white;
            margin-top: 10px;    
        }
        a{
            color:#3a8eee;
            font-weight: bold;
        }
        .Botao{
            background-color: #1971d4;
            text-align: center;
            border-radius: 5px;
            position: relative;
            font-size: 14px;
            width: 60%;
            padding: 15px 0px 15px 0px;
            font-weight: 500;
            color: white;
            margin-left: auto;
            margin-right: auto;
            transition: all 0.5s;
            margin-top: 5%;
            &:hover {
                        color: black;
                        cursor: pointer;
                        background-color: white;
                    }   
        }
    }
`;
