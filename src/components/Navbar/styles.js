import styled from "styled-components";


export const Container = styled.section`
    max-width: 50%;
    height: 40px;
    background-color: #c5b4b4ff;
    margin: 10px  auto;
    box-shadow: 5px 5px 5px black;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    gap: 15px;

    h1 {
      font-size: 30px;
      text-align: center;
      position: relative;
      bottom: 15px;
      left: 8px;
    }

    button {
      width: 30px;
      height: 85%;
      align-items: center;
      position: relative;
      right: 10px;
      border-radius: 5px;
      border: none;
      background-color: #70787aff;
      color: white;
      font-size: 20px;
      margin-top: 3px;
      padding-bottom: 4px;
      cursor: pointer;
    }
`;
