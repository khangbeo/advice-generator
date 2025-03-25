import { useState, useEffect } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Icon from "./components/Icon";

const baseUrl = "https://api.adviceslip.com/advice";
function App() {
    const [advice, setAdvice] = useState({});

    const fetchAdvice = async () => {
        const res = await fetch(baseUrl);
        const data = await res.json();
        setAdvice(data.slip);
    };

    const handleClick = () => {
        fetchAdvice();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
            <h1 className="text-4xl font-bold text-white tracking-wider">
                Advice Generator
            </h1>
            <Card>
                <h2 className="text-small font-bold text-emerald-400 tracking-widest">
                    Advice #{advice.id}
                </h2>
                <p className="text-white text-center text-2xl font-bold mx-6">
                    {advice.advice}
                </p>

                <Icon
                    name="patternDividerDesktop"
                    style="hidden md:block mb-10"
                />
                <Icon
                    name="patternDividerMobile"
                    style="block md:hidden mb-10"
                />

                <div className="absolute -bottom-9">
                    <Button onClick={handleClick}>
                        <Icon name="dice" />
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default App;
