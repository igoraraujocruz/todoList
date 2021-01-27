import styled from 'styled-components';

export const TodoFormStyle = styled.div`
    text-align: center;
    margin: 20px 0;

    input {
        width: 250px;
        height: 30px;
        border: none;
        font-size: 25px;
    }

    button {
        border: none;
        color: #fff;
        width: 50px;
        height: 30px;
        background-color: #2196f3;
        opacity: 0.8;
        transition: 0.7s;
        padding: 8px 0 0;

        &:hover {
        opacity: 1;
        }
    }

    
`;