import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./page/home.jsx";
import { ThemeProvider } from './Components/ThemeContext/themeContext.jsx';

export default function App() {
return(
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
)}
