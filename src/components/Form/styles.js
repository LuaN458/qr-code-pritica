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
    color: black;
    font-size: 25px;
    height: 40px;
    text-align: center;
    border-radius: 5px;
    outline: none;
  }

  input:focus {
    border-radius: 5px;
    border: 1px solid yellow;
    outline: none;
  }

  .form-buttons button {
    margin: 1px;
  }

  .render-qr-code {
    width: 50%;
    height: 125px;
    position: relative;
    top: 50px;
    display: flex;
    justify-content: center;
  }
`;
