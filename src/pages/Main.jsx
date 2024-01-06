import Blog from "./Blog";
import "./main.css";
import Schedule from "./Schedule";
import Trend from "./Trend";

const Main = () => {
    return (
        <main>
            <Schedule />
            <Trend />
            <Blog />
        </main>
    );
};

export default Main;
