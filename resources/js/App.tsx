import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { FavouritesPage } from "@pages/FavouritesPage/FavouritesPage";
import { Layout } from "@modules/Layout";
import {Login} from "@pages/Auth/Login.tsx";
import {Register} from "@pages/Auth/Register.tsx";
import {ForgotPassword} from "@pages/Auth/ForgotPassword.tsx";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favourites" element={<FavouritesPage/>}/>

                {/*  Auth  */}
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/forgot-password" element={<ForgotPassword />}/>

            </Routes>
        </Layout>
    );
}

export default App;
