import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import { useState, useEffect } from "react";
import Header from "./pages/Header";
import Banner from "./pages/Banner";
import BackToTopBtn from "./components/BackToTopBtn";
import Main from "./pages/Main";
import "./App.css";

const App = () => {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.screenY);
        });
        return () => {
            window.removeEventListener("scroll", () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);
    
    return (
        <>
            <Header scroll={scroll} />
            <Banner />
            <Main />
            <BackToTopBtn scroll={scroll} />
        </>
    );
};

export default App;
