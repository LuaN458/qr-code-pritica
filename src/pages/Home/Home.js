import React from 'react';

import Form from "../../components/Form/Form";
import NavBar from "../../components/Navbar/Navbar";
import Container from "../../styles/GlobalStyle";


export function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Form />
      </Container>
    </>
  );
}
