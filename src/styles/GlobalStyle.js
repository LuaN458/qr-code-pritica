import styled from "styled-components";



const Container = styled.main`
    max-width: 30%;
    height: 500px;
    margin: 100px auto;
    border: 2px darkgreen solid;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px black;
    background-color: #00ccffff;

    h2 {
      position: relative;
      top: -25px;
    }

    p {
      position: relative;
      top: -20px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    button {
      width: 170px;
      height: 65px;
      padding: 5px;
      background-color: #2792adff;
      border: none;
      position: relative;
      top: 40px;
      transition: 500ms ease-in-out all;
      border-radius: 5px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: white;
    }

    button:hover {
      background-color: red;
    }
`;


export default Container;
