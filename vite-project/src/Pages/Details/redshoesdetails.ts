import { BackButton, Button1, Button2, Title } from "../../components"
import { Box } from "../../lib"

export const RedShoesdeatils = () => {
    return Box({
        element: "div",
        attr: {
            class: "w-full"
        },
        children: [
            Box({
                element: "div",
                attr: {
                    class: "flex items-center"
                },
                children: [
                    BackButton(),
                    Title({
                        children: "Detail's Product"
                    })
                ]
            }),
            Box({
                element:"img",
                attr:{
                    src:"./asset/reditem.png",
                    class:"w-[388px] h-[343.5px] mt-[40px]"
                }
            }),
            Box({
                element: "h3",
                attr: {
                    class: "text-[#3E3E3E] text-[25px] font-semibold mt-2 mb-7"
                },
                children: "Lovely Red Shoes"
            })
            ,
            Box({
                element: "p",
                attr: {
                    class: "text-[15px] font-normal text-justify mb-[40px]"
                },
                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex gap-20 items-center"
                },
                children: [Box({
                    element: "p",
                    attr: {
                        class: "text-[30px] font-semibold text-[#047857]"
                    },
                    children: "USD 45$"
                }),
                Box({
                    element: "div",
                    attr: {
                        class: "flex gap-3"
                    },
                    children: [
                        Button2({ children: "38" }),
                        Button2({ children: "39" }),
                        Button2({ children: "40" })]
                })
                ]
            }),
            Box({
                element:"div",
                attr:{
                    class:"flex justify-around mt-[52px] mb-[120px]"
                },
                children:Button1({
                    children:"Add to cart",
                    onClick: ()=>{
                        localStorage.setItem("redshoes" , "1")
                        location.href = "/checkout"
                    }
                })
            })

        ]
    })
}