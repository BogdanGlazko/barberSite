import Main from "./MainBlock/Main.tsx";
import { useEffect } from 'react';

function App() {


    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <>
            <Main/>
        </>
    )
}

export default App
