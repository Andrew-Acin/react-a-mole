import { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot'; 

const MoleContainer = ({ score, setScore, paused }) => {
    const [displayMole, setDisplayMole] = useState(false);

    const handleBop = () => {
        setScore(score + 1);
        setDisplayMole(false);
    };

    const displayComponent = displayMole ?
        <Mole setDisplayMole={setDisplayMole} handleBop={handleBop} /> :
        <EmptySlot setDisplayMole={setDisplayMole} paused={paused} />;

    return (
        <div>
            {displayComponent}
        </div>
    );
};

export default MoleContainer;
