import {BrowserRouter, Routes, Route} from "react-router-dom";

import {HomePage} from "@pages/HomePage/HomePage";
import {Layout} from "@modules/Layout";
import {Login} from "@pages/Auth/Login.tsx";
import {Register} from "@pages/Auth/Register.tsx";
import {ForgotPassword} from "@pages/Auth/ForgotPassword.tsx";
import {PasswordReset} from "@pages/Auth/PasswordReset.tsx";

import {AdminRoute, AuthRoute, NotAuthRoute} from "@components/Router";
import {AdminPage} from "@pages/Admin/AdminPage.tsx";
import {TestPage} from "@pages/TestPage/TestPage.tsx";
import {Page404} from "@pages/Errors/Page404/Page404.tsx";
import {SnapScrollPage} from "@pages/SnapScrollPage/SnapScrollPage.tsx";

import './i18n.ts';
import {FAQPage} from "@pages/FAQPage/FAQPage.tsx";
import {useTranslation} from "react-i18next";
import {Policy} from "@pages/Documents/Policy.tsx";
import {Terms} from "@pages/Documents/Terms.tsx";
import {AdminCountries} from "@pages/Admin/AdminCountries.tsx";
import {AdminServices} from "@pages/Admin/AdminServices.tsx";
import {FinancePage} from "@pages/FinancePage/FinancePage.tsx";

function App() {
    // For load language
    const {t,} = useTranslation();

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage/>}/>

                <Route path="/faq" element={<FAQPage/>}/>
                <Route path="/policy" element={<Policy/>}/>
                <Route path="/terms" element={<Terms/>}/>

                <Route path="/test" element={<TestPage/>}/>
                {/*<Route path="/snap-scroll" element={<SnapScrollPage/>}/>*/}

                {/*  Auth routes*/}
                <Route element={<AuthRoute />}>
                    <Route path="/finance" element={<FinancePage />}/>

                </Route>

                {/*  Login / Register  */}
                <Route element={<NotAuthRoute/>}>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Route>

                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/password-reset" element={<PasswordReset/>}/>

                {/*  Admin Page  */}
                <Route element={<AdminRoute/>}>
                    <Route path="/admin" element={<AdminPage/>}>
                        <Route index element={null}/>
                        <Route path="countries" element={<AdminCountries/>}/>
                        <Route path="services" element={<AdminServices/>}/>
                    </Route>
                </Route>

                <Route path="*" element={<Page404/>}/>

            </Routes>
        </Layout>
    );
}

export default App;
