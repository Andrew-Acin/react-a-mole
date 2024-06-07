import { useEffect } from "react";
import moleHillImg from "./assets/molehill.png";

function EmptySlot({ setDisplayMole, paused }) {
    useEffect(() => {
        if (paused) return

        let randSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(() => {
            setDisplayMole(true);
        }, randSeconds);
        return () => clearTimeout(timer);
    }, [paused, setDisplayMole]);

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={moleHillImg} />
        </div>
    );
}

export default EmptySlot;
