import { Button } from "react-bootstrap";
import React, { useState } from "react";

export function AddButton(): JSX.Element {
    function changeCounter(): void {
        setCounter(counter + 1);
    }
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <Button onClick={changeCounter}>Add 1</Button>
            <div>
                <span>{counter}</span>
            </div>
        </div>
    );
}
