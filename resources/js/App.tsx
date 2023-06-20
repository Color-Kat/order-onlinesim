import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { FavouritesPage } from "@pages/FavouritesPage/FavouritesPage";
import { Layout } from "@modules/Layout";
import {Login} from "@pages/Auth/Login.tsx";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favourites" element={<FavouritesPage/>}/>

                    {/*  Auth  */}
                    <Route path="/login" element={<Login />}/>

                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
