import React from "react"
import { Container } from "./styles";

export default function NavBar() {

  const classN = 'body-bg-dark';

  const isActive = {
    active: false,
  }

  const handleClick = (e) => {

    const bodyBg = document.querySelector("body");
    const btn = document.querySelector(".btn-dark");

    if (bodyBg.classList.contains(`.${classN}`)) {
      bodyBg.classList.remove(classN);
    }
    if (isActive.active) {
      bodyBg.classList.remove(classN);
      btn.textContent = "Escurecer";
    }

    if (!isActive.active) {
      bodyBg.classList.add(classN);
      btn.textContent = "Clarear";
    }

    isActive.active = !isActive.active;
  }

  React.useEffect(() => {
    const bodyBg = document.querySelector("body");
    const btn = document.querySelector(".btn-dark");

    if(bodyBg.classList.contains(classN)) {
      btn.textContent = "Clarear";
    }

    btn.textContent = "Escurecer";
  }, []);

  return (
    <Container>
      <h1>
        HOME
      </h1>

      <button type="button" onClick={e => handleClick(e)} className='btn-dark'></button>

    </Container>
  );
}
