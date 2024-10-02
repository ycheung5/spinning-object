import React, { useEffect, useRef, useState } from "react";

const SpinningDonut = ({ width, height, aRotation, bRotation, hidden }) => {
    const asciiRef = useRef(null);
    const [A, setA] = useState(1);
    const [B, setB] = useState(1);

    useEffect(() => {
        let animationFrameId;

        const asciiFrame = () => {
            const numCols = width; // Dynamic width (number of columns)
            const numRows = height; // Dynamic height (number of rows)
            const totalCells = numCols * numRows; // Total number of cells in the grid

            const b = [];
            const z = [];

            // Initialize arrays b[] (for characters) and z[] (for depth)
            for (let k = 0; k < totalCells; k++) {
                b[k] = k % numCols === numCols - 1 ? "\n" : " ";
                z[k] = 0;
            }

            let newA = A + aRotation;
            let newB = B + bRotation;

            const cA = Math.cos(newA), sA = Math.sin(newA),
                cB = Math.cos(newB), sB = Math.sin(newB);

            for (let j = 0; j < 6.28; j += 0.07) {
                const ct = Math.cos(j), st = Math.sin(j);
                for (let i = 0; i < 6.28; i += 0.02) {
                    const sp = Math.sin(i), cp = Math.cos(i),
                        h = ct + 2, // R1 + R2*cos(theta)
                        D = 1 / (sp * h * sA + st * cA + 5),
                        t = sp * h * cA - st * sA;

                    const x = 0 | (numCols / 2 + (numCols / 4) * D * (cp * h * cB - t * sB)),
                        y = 0 | (numRows / 2 + (numRows / 4) * D * (cp * h * sB + t * cB)),
                        o = x + numCols * y,
                        N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));

                    if (y < numRows && y >= 0 && x >= 0 && x < numCols && D > z[o]) {
                        z[o] = D;
                        b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
                    }
                }
            }

            let output = "";
            for (let i = 0; i < totalCells; i++) {
                output += b[i];
                if ((i + 1) % numCols === 0) {
                    output += "\n";
                }
            }

            if (asciiRef.current) {
                asciiRef.current.innerText = output;
            }
            setA(newA);
            setB(newB);

            animationFrameId = requestAnimationFrame(asciiFrame);
        };

        // Start animation
        animationFrameId = requestAnimationFrame(asciiFrame);

        // Cleanup interval on component unmount
        return () => cancelAnimationFrame(animationFrameId);
    }, [A, B, width, height, aRotation, bRotation]);

    return <pre ref={asciiRef} className={"font-light text-sm text-pretty"} hidden={hidden}></pre>;
};

export default SpinningDonut;
