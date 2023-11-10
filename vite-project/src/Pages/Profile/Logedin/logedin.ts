import { Title } from "../../../components"
import { Box } from "../../../lib"

export const LoggedIn: any = () => {
    return Box({
        element: "div",
        attr: {
            class: "mx-auto mt-10"
        },
        children: [Box({
            element: "div",
            children: [Box({
                element: "button",
                attr: {
                    class: "text-white bg-[#1C756c] w-[100px] h-[25px] rounded-[50px] text-[12px] shadow-md  shadow-gray-400 active:shadow-md active:shadow-gray-300 mb-[50px]",
                    onClick:()=>{
                        localStorage.setItem("login" , "0")
                        location.assign("/home")
                    }
                },
                children: "Log out"
            }),]
        }), Title({
            children: "you are already logged in !"
        }), Box({
            element: "div",
            attr: {
                class: "flex justify-around"
            },
            children:
                Box({
                    element: "a",
                    attr: {
                        class: "text-[#0d9488] text-[15px] flex mt-8 border-b-2 border-[#0d9488] font-medium",
                        href: "/home"
                    },
                    children: "Let's get back to home"
                })
        })
        ]
    })
}