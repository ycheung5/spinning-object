import React, { useEffect, useRef, useState } from "react";

const SpinningCube = ({
                          aRotation,
                          bRotation ,
                          cRotation,
                          hidden,
                      }) => {
    const asciiRef = useRef(null);
    const [A, setA] = useState(1);
    const [B, setB] = useState(1);
    const [C, setC] = useState(1);
    const width = 100;
    const height = 100;
    const distance = 100;

    useEffect(() => {
        let animationFrameId;

        const asciiFrame = () => {
            const numCols = width;
            const numRows = height;
            const totalCells = numCols * numRows;

            const K1 = 40;
            const zBuffer = new Array(totalCells).fill(0);
            const buffer = new Array(totalCells).fill(" ");

            // Precompute sines and cosines of A, B, and C
            const cA = Math.cos(A),
                sA = Math.sin(A),
                cB = Math.cos(B),
                sB = Math.sin(B),
                cC = Math.cos(C),
                sC = Math.sin(C);

            const calculateX = (i, j, k) => {
                return (
                    j * sA * sB * cC -
                    k * cA * sB * cC +
                    j * cA * sC +
                    k * sA * sC +
                    i * cB * cC
                );
            };

            const calculateY = (i, j, k) => {
                return (
                    j * cA * cC +
                    k * sA * cC -
                    j * sA * sB * sC +
                    k * cA * sB * sC -
                    i * cB * sC
                );
            };

            const calculateZ = (i, j, k) => {
                return k * cA * cB - j * sA * cB + i * sB;
            };

            const calculateForSurface = (cubeX, cubeY, cubeZ, ch) => {
                const x = calculateX(cubeX, cubeY, cubeZ);
                const y = calculateY(cubeX, cubeY, cubeZ);
                const z = calculateZ(cubeX, cubeY, cubeZ) + distance;

                const ooz = 1 / z;

                const xp = Math.round(numCols / 2 + K1 * ooz * x * 2);
                const yp = Math.round(numRows / 2 + K1 * ooz * y);

                const idx = xp + yp * numCols;

                if (idx >= 0 && idx < totalCells) {
                    if (ooz > zBuffer[idx]) {
                        zBuffer[idx] = ooz;
                        buffer[idx] = ch;
                    }
                }
            };

            // Clear the buffer and zBuffer
            buffer.fill(" ");
            zBuffer.fill(0);

            // Render a single cube
            const cubeSize = 20; // Size of the cube
            const increment = 0.1;

            for (let cubeX = -cubeSize; cubeX < cubeSize; cubeX += increment) {
                for (let cubeY = -cubeSize; cubeY < cubeSize; cubeY += increment) {
                    calculateForSurface(cubeX, cubeY, -cubeSize, "@");
                    calculateForSurface(cubeSize, cubeY, cubeX, "$");
                    calculateForSurface(-cubeSize, cubeY, -cubeX, "~");
                    calculateForSurface(-cubeX, cubeY, cubeSize, "#");
                    calculateForSurface(cubeX, -cubeSize, -cubeY, ";");
                    calculateForSurface(cubeX, cubeSize, cubeY, "+");
                }
            }

            // Build the output string
            let output = "";
            for (let i = 0; i < totalCells; i++) {
                output += buffer[i];
                if ((i + 1) % numCols === 0) {
                    output += "\n";
                }
            }

            // Update the ASCII art in the DOM
            if (asciiRef.current) {
                asciiRef.current.innerText = output;
            }

            // Update rotation angles
            setA((prevA) => prevA + aRotation);
            setB((prevB) => prevB + bRotation);
            setC((prevC) => prevC + cRotation);

            // Request the next frame
            animationFrameId = requestAnimationFrame(asciiFrame);
        };

        // Start the animation
        animationFrameId = requestAnimationFrame(asciiFrame);

        // Cleanup function
        return () => cancelAnimationFrame(animationFrameId);
    }, [A, B, C, width, height, distance, aRotation, bRotation, cRotation]);

    return (
        <pre ref={asciiRef} className={"font-light text-sm text-pretty"} hidden={hidden}></pre>
    );
};

export default SpinningCube;
