import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    padding: 5px;
    font-size: 20px;
    width: 350px;
    border: 1px solid black;
    color: red;
    font-size: 20px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    outline: none;
  }

  input:focus {
    border-radius: 5px;
    border: 1px solid red;
    outline: none;
  }

  canvas {
    width: 50%;
    height: 50%;
    position: relative;
    top: 20px;
  }
`;
