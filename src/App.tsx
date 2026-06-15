import './App.css'
import {Outlet, ScrollRestoration} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <ScrollRestoration/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
