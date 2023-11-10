import {  Form2, Title } from "../../../components"
import { Box } from "../../../lib"

// export const usersList : Array<any>= []
export const Regester : any = () => {
    return Box({
        element: "div",
        attr: {
            class: "w-full"
        },
        children: Box({
            element: "div",
            children: [Title({
                children: "Create your account"
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
                        children:"If you already have an account"
                    }),Box({
                        element:"a",
                        attr:{
                            class:"text-[#0d9488] text-[15px] font-medium ml-1 border-b-2 border-[#0d9488]",
                            href:"/login"
                        },
                        children:"click here"
                    })
                ]
            }),
            Form2()
        ]
        })
    })
}