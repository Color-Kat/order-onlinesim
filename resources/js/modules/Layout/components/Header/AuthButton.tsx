import React, {memo, useCallback} from "react";
import {useTSelector} from "@hooks/redux.ts";
import {useLogoutMutation} from "@/store/auth/auth.api.ts";
import {Dropdown} from "@components/Dropdowns";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "@components/Buttons";
import {IUser} from "@/store/auth/auth.slice.ts";

const AvatarButton = memo(({user}: { user: IUser }) => (
    <div className="flex gap-3 items-center">
        <span>{user.name} </span>
        <div
            className="h-10 w-10 bg-indigo-100 text-indigo-900 rounded-full md:flex hidden items-center justify-center">
            {user.name[0].toUpperCase()}
        </div>
    </div>
));

export const AuthButton: React.FC = memo(() => {
    const navigate = useNavigate();

    const {user, isLoading} = useTSelector(state => state.auth);
    const [logout] = useLogoutMutation();

    if (isLoading) return <div></div>;

    if (user) return (
        <>

            <div className="mr-5 md:mr-2.5 lg:mr-5 hover:text-blue-50 cursor-pointer">
                550₽
            </div>

            <Dropdown
                ButtonComponent={() => <AvatarButton user={user}/>}
                header="Управление аккаунтом"
                groups={[
                    [
                        {
                            text: 'Account',
                            onClick: () => navigate('/account')
                        },
                        user.isAdmin && {
                            text: 'Admin Panel',
                            onClick: () => navigate('/admin')
                        },
                        // {
                        //     text: 'Настройки',
                        //     onClick: () => navigate('/settings')
                        // }
                    ],
                    // The last group
                    [{
                        text: 'Log out',
                        onClick: logout
                    }]
                ]}
            />
        </>
    );

    return (
        <Link to="/login">
            <Button className="py-1.5 w-24 md:w-36 md:py-2.5 md:mr-0 sm:mr-5 mr-2.5">Login</Button>
        </Link>
    );
});