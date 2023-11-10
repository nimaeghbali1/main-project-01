import { Form1, Title } from "../../../components"
import { Box } from "../../../lib"

export const Login : any= () => {
    return Box({
        element: "div",
        attr: {
            class: "w-full"
        },
        children: Box({
            element: "div",
            children: [Title({
                children: "Log into your account"
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex justify-center mt-5"
                },
                children:[
                    Box({
                        element:"p",
                        attr:{
                            class:"text-[#3E3E3E] text-[15px] font-normal"
                        },
                        children:"Don't you have an account?"
                    }),Box({
                        element:"a",
                        attr:{
                            class:"text-[#0d9488] text-[15px] font-medium ml-1 border-b-2 border-[#0d9488]",
                            href:"/regester"
                        },
                        children:"click here"
                    })
                ]
            }),
            Form1()
        ]
        })
    })
}