import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface InputWithButtonProps {
    onSubmit: (event: any) => void;
    title?: string;
}


const InputWithButton: React.FC<InputWithButtonProps> = ({ onSubmit, title }) => {

    const [input, setInput] = useState("");
    const { register, formState: { errors } } = useForm();

    const handleSubmit = () => {
        if (!input) return;
        onSubmit(input);
        setInput("");
    }

    return (
        <div className="flex w-full items-center space-x-2">
            <Input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                placeholder="insert area here" />
            <Button
                type="submit"
                onClick={handleSubmit}
            >{title}</Button>
        </div>
    )
};

export default InputWithButton;
