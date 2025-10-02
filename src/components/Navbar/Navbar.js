import React from "react"
import { Container } from "./styles";
import { AiFillHome, AiFillSun  } from "react-icons/ai";



export default function NavBar() {

  const classN = 'body-bg-dark';

  console.log()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isActive = {
    active: false,
  }

  const checkClass = { name: false };

  const handleClick = (e) => {

    const bodyBg = document.querySelector("body");
    const btn = document.querySelector(".btn-dark");

    if (isActive.active) {
      bodyBg.classList.remove(classN);
      btn.textContent = "☾";
      checkClass.name = false;
    }

    if (!isActive.active) {
      bodyBg.classList.add(classN);
      btn.textContent = "☼";
      checkClass.name = true;
    }

    isActive.active = !isActive.active;

    const classTxt = JSON.stringify(checkClass);

    localStorage.setItem('classObj', classTxt);
  }

  React.useEffect(() => {

    const bodyBg = document.querySelector("body");
    const btn = document.querySelector(".btn-dark");

    if (bodyBg.classList.contains(classN)) {
      btn.textContent = "☼";
    }

    const classObj = localStorage.getItem('classObj');

    const ObjClass = JSON.parse(classObj);

    const { name } = ObjClass;

    if (name) {
      bodyBg.classList.add(classN);
      btn.textContent = "☼";
      isActive.active = !isActive.active;
    } else {
      btn.textContent = "☾";
    }

  }, [isActive]);


  return (
    <Container>
      <h1>
        <AiFillHome />
      </h1>
      <button type="button" onClick={e => handleClick(e)} className='btn-dark'></button>
    </Container>
  );
}
