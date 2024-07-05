import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import { Alert, Snackbar } from "@mui/material";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
`;
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Button = styled.div`
  font-size: 1.5rem;
  width:36px;
  padding: 1px 3px 1px 2px;
  position: sticky;
  z-index:100;
  bottom: 3%;
  left: 96%;
  background-color: red;
  border-radius:100%;
  display: flex;
  transition: all 0.5s ease;
  cursor:pointer;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [open, setOpen] = React.useState({
    status: false,
    type: "error",
    message: "something went wrong!"
  });

  return (
    <>
      <Snackbar
        open={open.status}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        severity={open.type}
      >
        <Alert severity={open.type} variant="filled" sx={{ width: "100%" }}>
          {open.message}
        </Alert>
      </Snackbar>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Navbar />
          <Body>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact open={open} setOpen={setOpen} />
            </Wrapper>
            <Footer />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
            {
              darkMode ? <Button onClick={()=>setDarkMode(false)}>🌛</Button> : <Button onClick={()=>setDarkMode(true)}>☀️</Button>
            }
          </Body>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
