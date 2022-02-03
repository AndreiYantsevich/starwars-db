import React from 'react';
import './App.css';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/ui/navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
