import React from "react";
import "./App.css";
import { AddButton } from "./AddButton";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <AddButton></AddButton>
        </div>
    );
}

export default App;
