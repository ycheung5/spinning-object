import React, {useState} from 'react';
import SpinningDonut from "./components/SpinningDonut";
import AdjustSpinningObjectForm from "./components/AdjustSpinningObjectForm";
import SpiningCude from "./components/SpiningCude";

const App = () => {
    const [screenWidth, setScreenWidth] = useState(120);
    const [screenHeight, setScreenHeight] = useState(40);
    const [aRotation, setARotation] = useState(0.05);
    const [bRotation, setBRotation] = useState(0.05);
    const [cRotation, setCRotation] = useState(0.05);
    const [shape, setShape] = useState('donut');


    return (
        <div className={"w-screen h-screen flex justify-center items-center overflow-hidden"} data-theme={"luxury"}>
            <AdjustSpinningObjectForm
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                aRotation={aRotation}
                bRotation={bRotation}
                cRotation={cRotation}
                shape={shape}
                setScreenWidth={setScreenWidth}
                setScreenHeight={setScreenHeight}
                setARotation={setARotation}
                setBRotation={setBRotation}
                setCRotation={setCRotation}
                setShape={setShape}
            />
            <SpinningDonut
                width={screenWidth}
                height={screenHeight}
                aRotation={aRotation}
                bRotation={bRotation}
                hidden={shape !== 'donut'}
            />
            <SpiningCude
                aRotation={aRotation}
                bRotation={bRotation}
                cRotation={cRotation}
                hidden={shape !== 'cube'}
            />
        </div>
    );
};

export default App;