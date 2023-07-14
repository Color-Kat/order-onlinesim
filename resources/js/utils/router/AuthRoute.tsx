import React, {ReactNode} from 'react';
import {PrivateRoutes} from "@/utils/router/PrivateRoutes.tsx";
import {Route} from "react-router-dom";


export const AuthRoute: React.FC = ({}) => {
    return (
        <PrivateRoutes auth={true} />
    );
}