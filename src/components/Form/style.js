import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    padding: 5px;
    font-size: 20px;
    align-self: center;
    margin-top: 15px;
  }

  canvas {
    width: 50%;
    height: 50%;
  }
`;
