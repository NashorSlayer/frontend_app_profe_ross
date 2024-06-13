import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"


interface AlertMessageDestructiveProps {
    text: string
    ErrorMsg: string
}


const AlertDestructive: React.FC<AlertMessageDestructiveProps> = ({ text, ErrorMsg }) => {
    return (
        <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{ErrorMsg}</AlertTitle>
            <AlertDescription>
                {text}
            </AlertDescription>
        </Alert>
    )
}

export default AlertDestructive;
