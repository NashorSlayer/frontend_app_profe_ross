// components/Card.tsx
import React from 'react';

const Card: React.FC = () => {
    return (
        <div className="w-1/3 h-60 flex items-center justify-center cursor-pointer">
            <div
                className="relative flex flex-col items-center justify-center p-4 
                  overflow-hidden font-semibold shadow-lg text-white 
                  transition-all duration-150 ease-in-out 
                  rounded-lg bg-gray-800 hover:bg-gray-700 
                  dark:bg-gray-700 dark:hover:bg-gray-600"
            >
                <div className="w-24 h-24 bg-gray-600 rounded-full mb-4"></div>
                <span className="relative text-lg">Perfil</span>
            </div>
        </div>
    );
};

export default Card;