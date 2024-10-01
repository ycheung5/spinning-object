import React from 'react';
const AdjustSpinningObjectForm = ({screenWidth,
                                      screenHeight,
                                      aRotation,
                                      bRotation,
                                      setScreenWidth,
                                      setScreenHeight,
                                      setARotation,
                                      setBRotation}) =>
{

    const setWidthHandler = (event) => {
        setScreenWidth(event.target.value);
    }

    const setHeightHandler = (event) => {
        setScreenHeight(event.target.value);
    }
    const setARotationHandler = (event) => {
        event.preventDefault();
        if (event.target.id === 'a-rotation-plus') {
            const newA = aRotation + 0.01;
            if (newA > 1) return;
            setARotation(newA);
        }
        else {
            const newA = aRotation - 0.01;
            if (newA < 0) return;
            setARotation(newA);
        }
    }
    const setBRotationHandler = (event) => {
        event.preventDefault();
        if (event.target.id === 'b-rotation-plus') {
            const newB = bRotation + 0.01;
            if (newB < 0 || newB > 1) return;
            setBRotation(newB);
        }
        else {
            const newB = bRotation - 0.01;
            if (newB < 0 || newB > 1) return;
            setBRotation(newB);
        }
    }

    return (
        <div className={"absolute top-2 left-2 z-50 bg-base-300 rounded-md shadow-lg p-4"}>
            <form className={"form"}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Width</span>
                    </div>
                    <input
                        type={"number"}
                        placeholder={"Width"}
                        className={"input-sm w-full max-w-xs"}
                        onChange={setWidthHandler}
                        value={screenWidth}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Height</span>
                    </div>
                    <input
                        type={"number"}
                        placeholder={"Height"}
                        className={"input-sm w-full max-w-xs"}
                        onChange={setHeightHandler}
                        value={screenHeight}
                    />
                </label>
                <div className={"mt-4"}>
                    <p>Rotation Speed (X-axis):</p>
                    <div className={"form-control w-full max-w-xs flex flex-row"}>
                        <button id={"a-rotation-plus"} className={"btn w-1/2"} onClick={setARotationHandler}>+</button>
                        <button id={"a-rotation-minus"} className={"btn w-1/2"} onClick={setARotationHandler}>-</button>
                    </div>
                </div>
                <div className={"mt-4"}>
                    <p>Rotation Speed (Y-axis):</p>
                    <div className={"form-control w-full max-w-xs flex flex-row"}>
                        <button id={"b-rotation-plus"} className={"btn w-1/2"} onClick={setBRotationHandler}>+</button>
                        <button id={"b-rotation-minus"} className={"btn w-1/2"} onClick={setBRotationHandler}>-</button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default AdjustSpinningObjectForm;