import styled from "styled-components";

const Container = styled.main`
    max-width: 25%;
    height: 550px;
    margin: 100px auto;
    border: 2px #000000ff solid;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 5px black;
    background-color: #888a8bff;

    h2 {
      position: relative;
      top: -35px;
    }

    p {
      position: relative;
      top: -20px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    input {
      position: relative;
      top: 25px;
      border-radius: 15px;
    }

    button {
      width: 170px;
      height: 65px;
      padding: 5px;
      background-color: #215866ff;
      border: none;
      position: relative;
      top: 70px;
      transition: 500ms ease-in-out all;
      border-radius: 5px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: white;
    }

    button:hover {
      background-color: #f1a707ff;
      transform: scale(1.1);
    }
`;


export default Container;
