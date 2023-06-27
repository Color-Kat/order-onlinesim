import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "@pages/HomePage/HomePage";
import { FavouritesPage } from "@pages/FavouritesPage/FavouritesPage";
import { Layout } from "@modules/Layout";
import {Login} from "@pages/Auth/Login.tsx";
import {Register} from "@pages/Auth/Register.tsx";
import {ForgotPassword} from "@pages/Auth/ForgotPassword.tsx";
import {PasswordReset} from "@pages/Auth/PasswordReset.tsx";

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
                <Route path="/password-reset" element={<PasswordReset />}/>

            </Routes>
        </Layout>
    );
}

export default App;
