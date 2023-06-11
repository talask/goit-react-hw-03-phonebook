import styled from 'styled-components';

export const Button = styled.button`
    outline: none;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 10px;
    width: 150px;
    
    background: lightblue;
    border: 1px solid lightblue;
    border-radius: 5px;

    &:hover {
        background: blue;
        color: white;
    }
`;

export const DivMyForm = styled.div`
    /* display: flex;
    flex-direction: column; */
    border: 1px solid lightgrey;
    width: 300px;
    padding: 15px;
`;

export const Label = styled.label`
     margin-bottom: 5px;
`;
       
   
