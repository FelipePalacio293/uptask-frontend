import NewPasswordForm from "@/components/auth/NewPasswordForm"
import NewPasswordToken from "@/components/auth/NewPasswordToken"
import { useState } from "react"

export default function NewPasswordView() {
    const [isValidToken, setIsValidToken] = useState(false)

    return (
        <>
            <h1 className="text-5xl font-black text-white">Restore your password</h1>
            <p className="text-2xl font-light text-white mt-5">
                Enter the code {''}
                <span className=" text-fuchsia-500 font-bold"> to restore your password</span>
            </p>

            {!isValidToken ? <NewPasswordToken /> : <NewPasswordForm />}
        </>
    )
}
