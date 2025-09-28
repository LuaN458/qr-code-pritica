import React from "react"
import { Container } from "./styles";



export default function NavBar() {

  const classN = 'body-bg-dark';
   const [stateBtn, setStateBtn] = React.useState(false);

  const isActive = {
    active: false,
  }

  const handleClick = (e) => {
    const bodyBg = document.querySelector("body");

    if(bodyBg.classList.contains(`.${classN}`)) {
      bodyBg.classList.remove(classN);
    }
    if (isActive.active) bodyBg.classList.remove(classN);

    if (!isActive.active) bodyBg.classList.add(classN);

    isActive.active = !isActive.active;

    setStateBtn(isActive.active);
  }

  return (
    <Container>
      <h1>
        HOME
      </h1>

      <button type="button" onClick={e => handleClick(e)} className='btn-dark'>{stateBtn ? "Clarear" : "Escurecer"}</button>

    </Container>
  );
}
