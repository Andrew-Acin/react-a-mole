import { useEffect } from "react";
import moleImg from "./assets/mole.png";

function Mole({ setDisplayMole, handleBop, paused }) {
    useEffect(() => {
        if (paused) return
        
        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            setDisplayMole(false);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, [paused, setDisplayMole]);

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={moleImg}
                onClick={handleBop} />
        </div>
    );
}

export default Mole;
