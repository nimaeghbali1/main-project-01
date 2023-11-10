import { Button1, TextField } from ".."
import { Box } from "../../lib"
export const Form1 = () => {
    const loginForm = {
        email: "",
        password: ""
    }

    return Box({
        element: "form",
        attr: {
            class: "flex flex-col gap-y-3",
            onSubmit: (e: Event) => {
                e.preventDefault()
                const existUsers = localStorage.getItem("users")
                const parsedExistUsers = existUsers ? JSON.parse(existUsers) : null
                const existUser = parsedExistUsers.find(
                (user: typeof loginForm) => user.email === loginForm.email && user.password === loginForm.password)
                if (existUser){
                    localStorage.setItem("login" , "1")
                    return location.assign("/home")
                }
                else{
                    return alert("username or password is not valid!")
                }
            
            }
        },
        children: [
            TextField({
                label: "Email",
                placeholder: "example: ShoeShop@gmail.com",
                type: "email",
                id: "logedUserEmail",
                value: loginForm.email,
                onkeyup: (e: Event) => {
                    loginForm.email = (e.target as HTMLInputElement).value
                }
            }),
            TextField({
                label: "Password",
                placeholder: "Enter your password",
                type: "password",
                id: "logedUserPassword",
                value: loginForm.password,
                onkeyup: (e: Event) => {
                    loginForm.password = (e.target as HTMLInputElement).value
                }
            }),
            Box({
                element: "a",
                attr: {
                    class: "text-[#0d9488] text-[15px] justify-end flex mt-4 mr-12 font-medium",
                    href: "#"
                },
                children: "Forgot password?"
            }),
            Box({
                element: "div",
                attr: {
                    class: "mt-5 flex justify-around"
                },
                children: Button1({
                    children: "Log in",
                    type: "submit"
                })
            })]
    })
}
export const Form2 = () => {
    const regesterForm = {
        name: "",
        email: "",
        password: "",
        rePassword: ""
    }
    const handleCreateContact = (event: Event) => {
        event.preventDefault()
        if (!regesterForm.name) {
            return alert("enter a name pls")
        }
        if (!regesterForm.email) {
            return alert("email is not valid")
        }
        if (!regesterForm.password ||
            !regesterForm.rePassword ||
            regesterForm.password !== regesterForm.rePassword) {
            return alert("passwords are not equal")
        }
        const existUsers = localStorage.getItem("users")
        const parsedExistUsers = existUsers ? JSON.parse(existUsers) : null
        if (parsedExistUsers) {
            const existUser = parsedExistUsers.find(
                (user: typeof regesterForm) => user.email === regesterForm.email)
            if (existUser) {
                return alert("user already exists! \n try to login")
            }
            parsedExistUsers.push(regesterForm)
            const regesterFormJson = JSON.stringify(parsedExistUsers)
            localStorage.setItem("users", regesterFormJson)
            localStorage.setItem("login" , "1")
            return location.assign("/home")
        }
        else {
            const regesterFormJson = JSON.stringify([regesterForm])
            localStorage.setItem("users", regesterFormJson)
        }
    }
    return Box({
        element: "form",
        attr: {
            class: "flex flex-col gap-y-3 mb-[140px]",
            onSubmit: handleCreateContact
        },
        children: [
            TextField({
                label: "Username",
                placeholder: "Enter your name",
                value: regesterForm.name,
                onkeyup: (e: Event) => {
                    regesterForm.name = (e.target as HTMLInputElement).value
                }
            }),
            TextField({
                label: "Email",
                placeholder: "example: ShoeShop@gmail.com",
                type: "email",
                id: "userEmail",
                value: regesterForm.email,
                onkeyup: (e: Event) => {
                    regesterForm.email = (e.target as HTMLInputElement).value
                }
            }),
            TextField({
                label: "Password",
                placeholder: "Enter a strong password",
                type: "password",
                id: "userPassword",
                value: regesterForm.password,
                onkeyup: (e: Event) => {
                    regesterForm.password = (e.target as HTMLInputElement).value
                }
            }),
            TextField({
                label: "Re-Enter password",
                placeholder: "Re-Enter the password",
                type: "password",
                id: "userRePassword",
                value: regesterForm.rePassword,
                onkeyup: (e: Event) => {
                    regesterForm.rePassword = (e.target as HTMLInputElement).value
                }
            }),
            Box({
                element: "div",
                attr: {
                    class: "mt-10 flex justify-around"
                },
                children: Button1(
                    {
                        children: "Sign in",
                        type: "submit"
                    })
            })]
    })
}