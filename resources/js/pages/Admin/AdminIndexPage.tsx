import React from 'react';

interface AdminIndexPageProps {

}

export const AdminIndexPage: React.FC<AdminIndexPageProps> = ({}) => {
    return (
        <div className="text-center mt-20 text-5xl font-bold text-gray-700 tracking-tight">
            Hello, admin
        </div>
    );
}