import React from 'react';
const AdjustSpinningObjectForm = ({
                                      screenWidth,
                                      screenHeight,
                                      aRotation,
                                      bRotation,
                                      cRotation,
                                      shape,
                                      setScreenWidth,
                                      setScreenHeight,
                                      setARotation,
                                      setBRotation,
                                      setCRotation,
                                      setShape,
                                  }) =>
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
            if (newB > 1) return;
            setBRotation(newB);
        }
        else {
            const newB = bRotation - 0.01;
            if (newB < 0) return;
            setBRotation(newB);
        }
    }

    const setCRotationHandler = (event) => {
        event.preventDefault();
        if (event.target.id === 'b-rotation-plus') {
            const newC = cRotation + 0.01;
            if (newC > 1) return;
            setCRotation(newC);
        }
        else {
            const newC = cRotation - 0.01;
            if (newC < 0) return;
            setCRotation(newC);
        }
    }


    return (
        <div className={"absolute top-2 left-2 z-50 bg-base-300 rounded-md shadow-lg p-4"}>
            <form id={"donut-control"} className={"w-80"} hidden={shape !== "donut"}>
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

            <form id={"cube-form"} className={"w-80"} hidden={shape !== "cube"}>
                <div className={"mt-2"}>
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
                <div className={"mt-4"}>
                    <p>Rotation Speed (Z-axis):</p>
                    <div className={"form-control w-full max-w-xs flex flex-row"}>
                        <button id={"c-rotation-plus"} className={"btn w-1/2"} onClick={setCRotationHandler}>+</button>
                        <button id={"c-rotation-minus"} className={"btn w-1/2"} onClick={setCRotationHandler}>-</button>
                    </div>
                </div>
            </form>

            <div id={"shape-control"} className={"mt-2"}>
                <p>Shape:</p>
                <button className={"btn w-1/2"} onClick={() => setShape("donut")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"/>
                    </svg>
                </button>
                <button className={"btn w-1/2"} onClick={() => setShape("cube")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AdjustSpinningObjectForm;