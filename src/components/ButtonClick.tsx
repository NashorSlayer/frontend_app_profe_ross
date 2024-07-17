"use client"
import React from "react";

interface ButtonClickProps {
    text: string;
    onClick: () => void;
}

const ButtonClick: React.FC<ButtonClickProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
            w-1/3 
            h-60 flex 
            items-center 
            justify-center
            cursor-pointer 
            dark:text-white 
            light:text-black
            rounded-lg
            bg-slate-500 
            hover:bg-slate-400
            
            "
        >
            {text}
        </button>
    );
}
export default ButtonClick;