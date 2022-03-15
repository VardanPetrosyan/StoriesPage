import {Component, useCallback, useEffect, useMemo, useState} from "react";
import Header from "./components/Header";
import Pages from "./pages"
import './assets/css/App.css';

function App() {
    return (
        <>
            <Header/>
            <main className="page-wrapper">
                <Pages />
            </main>
        </>
    )
}
export default App;
