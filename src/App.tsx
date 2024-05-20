import React from "react";
import { Header } from "@components/Header";
import { Container } from 'react-bootstrap';
import { Router } from "@components/Router";
import { LoginForm } from "@components/Login";

export const App: React.FunctionComponent = () => {
    return (
        <>
            {/* <LoginForm /> */}
            {/* Хедер + Роуты */}
            <Header /> 

            

            <Container className="py-4" style={{ height: '100vh'}}>
                <Router />
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default App;