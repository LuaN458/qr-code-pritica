import styled from "styled-components";
import {primaryColor} from '../../styles/colors';

export const Container = styled.section`
    max-width: 50%;
    height:  40px;
    background-color: #c5b4b4ff;
    margin: 10px  auto;
    box-shadow: 5px 5px 5px black;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    gap: 15px;

    h1 {
      font-size: 15px;
      text-align: center;
      position: relative;
      left: 10px;
    }

    button {
      width: 30px;
      height: 55%;
      align-self: center;
      position: relative;
      right: 10px;
    }
`;
