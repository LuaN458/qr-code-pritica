import styled from "styled-components";


const Container = styled.main`
    max-width: 50%;
    height: 500px;
    margin: 100px auto;
    border: 2px red solid;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #m {
      background-color: blue;
    }
`;


export default Container;
