/*
React Before
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
*/
//React v18.0.0
import { createRoot } from 'react-dom/client';
import {App} from "./App";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);