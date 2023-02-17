import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
background-color: #f7f8f9;
padding-top: 80px;
padding-bottom: 80px;

    .Card{
        background-color: white;
        height: 550px;
        display: flex;
        flex-direction: column;
        &:hover{
            cursor: pointer;
        }
        img{
            height: 55%;
            object-fit: cover;   
            object-position: center;
        }
        h1{
            font-weight: bold;
            font-size: 20px;
            margin-top: 10%;
            margin-left: 5%;
        }
        p{
            font-size: 13px;
            margin-left: 5%;
            margin-top: 3%;
            margin-right: 5%;
        }
        span{
            color: #1971d4;
            font-weight: bold;
            margin-left: 5%;
            margin-top: 3%;
            transition: color 0.3s;
            &:hover{
                color:black;
            }
        }
    }
`;
