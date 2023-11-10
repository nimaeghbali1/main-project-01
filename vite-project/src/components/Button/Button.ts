import { Box } from "../../lib";
import { ButtonProps } from "./types";

export const Button1 = (props: ButtonProps)=>{
    const {...restprops } = props
    return Box({
        element:"button",
        attr:{
            class:"text-white bg-[#1C756c] w-[277px] h-[56px] rounded-[50px] text-[22px] shadow-md  shadow-gray-400 active:shadow-md active:shadow-gray-300"
            ,...restprops
        },
        children: props.children
    })
}

export const Button2 = (props: ButtonProps)=>{
    return Box({
        element:"button",
        attr:{
            class:"text-white bg-[#0d9488] w-[50px] h-[50px] rounded-[50px] text-[22px] hover:bg-[#1C756c] focus:bg-[#1C756c] focus:border-solid focus:border-4 focus:border-[#134e4a]"
        },
        children: props.children
    })
}

export const BackButton = ()=>{
    return Box({
        element:"button",
        attr:{
            class:"bg-[#D9D9D9] w-[30px] h-[30px] rounded-[50px]"
        },
        children:Box({
            element:"a",
            attr:{
                href:"/category"
            },
            children: Box({
                element:"div",
                attr:{
                    class:"transparent flex justify-around"
                },
                children:Box({
                    element:"img",
                    attr:{
                        src:"./asset/back.png",
                        class:"w-[10px] h-[15px]"
                    },
    
                })
            })
        })
    })
}

export const plusButton = ()=>{
    return Box({
        element:"button",
        attr:{
            class:"bg-[#353535] w-[30px] h-[30px] rounded-[50px] hover:w-[31px] hover:h-[31px]"
        },
        children: Box({
            element:"div",
            attr:{
                class:"transparent flex justify-around"
            },
            children:Box({
                element:"img",
                attr:{
                    src:"./asset/plus.png",
                    class:"w-[10px] h-[10px]"
                },

            })
        })
    })
}

export const minusButton = ()=>{
    return Box({
        element:"button",
        attr:{
            class:"bg-[#353535] w-[30px] h-[30px] rounded-[50px] hover:w-[31px] hover:h-[31px]"
        },
        children: Box({
            element:"div",
            attr:{
                class:"transparent flex justify-around"
            },
            children:Box({
                element:"div",
                attr:{
                    class:"w-[10px] h-[2.5px] bg-white rounded-xl"
                },
                children:""

            })
        })
    })
}

export const closeButton = ()=>{
    return Box({
        element:"button",
        attr:{
            class:"bg-[#F45353] w-[44px] h-[44px] rounded-[50px] hover:w-[44px] hover:h-[44px]"
        },
        children: Box({
            element:"div",
            attr:{
                class:"transparent flex justify-around"
            },
            children:Box({
                element:"img",
                attr:{
                    src:"./asset/close.png",
                    class:"w-[20px] h-[20px]"
                },

            })
        })
    })
}