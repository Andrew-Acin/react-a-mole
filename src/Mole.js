import { useEffect } from "react";
import moleImg from "./assets/mole.png";

function Mole({ setDisplayMole, handleBop }) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            setDisplayMole(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, [setDisplayMole]);

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={moleImg}
                onClick={handleBop} />
        </div>
    );
}

export default Mole;
