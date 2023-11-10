import { BackButton, Button1, Button2, Title } from "../../components"
import { Box } from "../../lib"
export const BlackShoesdeatils = () => {

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
                    src:"./asset/blackitem.png",
                    class:"w-[388px] h-[343.5px] mt-[40px]"
                }
            }),
            Box({
                element: "h3",
                attr: {
                    class: "text-[#3E3E3E] text-[25px] font-semibold mt-2 mb-7"
                },
                children: "Real Men's Shoes "
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
                    children: "USD 98$"
                }),
                Box({
                    element: "div",
                    attr: {
                        class: "flex gap-3"
                    },
                    children: [
                        Button2({ children: "41" }),
                        Button2({ children: "42" }),
                        Button2({ children: "43" })]
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
                        localStorage.setItem("blackshoes" , "1")
                        location.href = "/checkout"
                    }
                })
            })

        ]
    })
}