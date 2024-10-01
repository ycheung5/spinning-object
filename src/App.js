import React, {useState} from 'react';
import DynamicSpinningDonut from "./components/DynamicSpinningObject";
import AdjustSpinningObjectForm from "./components/AdjustSpinningObjectForm";

const App = () => {
    const [screenWidth, setScreenWidth] = useState(100);
    const [screenHeight, setScreenHeight] = useState(40);
    const [aRotation, setARotation] = useState(0.05);
    const [bRotation, setBRotation] = useState(0.05);


    return (
        <div className={"w-screen h-screen flex justify-center items-center overflow-hidden"} data-theme={"luxury"}>
            <AdjustSpinningObjectForm
                screenWidth={screenWidth}
                screenHeight={screenHeight}
                aRotation={aRotation}
                bRotation={bRotation}
                setScreenWidth={setScreenWidth}
                setScreenHeight={setScreenHeight}
                setARotation={setARotation}
                setBRotation={setBRotation}
            />
            <DynamicSpinningDonut
                width={screenWidth}
                height={screenHeight}
                aRotation={aRotation}
                bRotation={bRotation}
            />
        </div>
    );
};

export default App;