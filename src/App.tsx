import React from "react";
// import { Fetcher } from "./components/Fetcher";
// import { Button } from "./components/Button";
// import { Provider } from "react-redux";
// import { store } from "./store";
import { Home } from "@components/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        // <Provider store={store}>
        //     <Fetcher node={<Button title='Click me ' count={5} />}/>
        // </Provider>   
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>   
    );
};

export default App;