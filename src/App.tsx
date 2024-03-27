import React from "react";
import { Home } from "@components/Home";
import { Routes, Route } from "react-router-dom";
import { Timetable } from "@components/Timetable";
import { Header } from "@components/Header";
import { Container } from 'react-bootstrap';
import { links } from "@type/links";

const App: React.FunctionComponent = () => {
    return (
        <>
            {/* Хедер + Роуты */}
            <Header />

            <Routes>
                {/* {links.map((item, index) => (
                    <Route path={item.link} element={<Home />}/>
                ))} */}
                <Route path="*" element={<Home />} />
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/qr" element={null} />
                <Route path="/help" element={null} />
                <Route path="/todo" element={null} />
            </Routes>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                Контент
                Контент
                Контент
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default App;