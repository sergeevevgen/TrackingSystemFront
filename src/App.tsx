import React from "react";
import { Header } from "@components/Header";
import { Container } from 'react-bootstrap';
import { Router } from "@components/Router";

export const App: React.FunctionComponent = () => {
    return (
        <>
            {/* Хедер + Роуты */}
            <Header /> 

            

            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Router />
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default App;