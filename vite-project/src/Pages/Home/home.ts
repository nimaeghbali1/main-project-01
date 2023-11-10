import { Button1, Title } from "../../components"
import { Box } from "../../lib"

export const Home = () => {
    return Box({
        element: "div",
        attr: {
            class: "w-full"
        },
        children: [
            Box({
                element: "div",
                children: [Title({
                    children: "Happy shopping"
                }),
                Box({
                    element: "h4",
                    attr: {
                        class: "text-[#696969] text-[16px] font-normal flex justify-around mt-[4px]"
                    },
                    children: "Discount 50% OFF"
                })]
            }),
            Box({
                element:"img",
                attr:{
                    src:"./asset/blueshoes.png",
                    class:"w-[388px] h-[343.5px] mt-[40px]"
                }
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex justify-around mt-[20px]"
                },
                children: Button1({
                    children: "Order now",
                })
            })
            , Box({
                element: "div",
                attr: {class:"flex mt-8 mb-8"},
                children: [
                    Box({
                        element: "h3",
                        attr: {
                            class: "font-bold text-[27px] text-[#3E3E3E]"
                        },
                        children: "Best"

                    }),
                    Box({
                        element: "h3",
                        attr: {
                            class: "font-bold text-[27px] text-[#1F9189] ml-2"
                        },
                        children: "Collection"

                    })
                ]
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex justify-between mt-[40px] mb-[110px]"
                },
                children: [Box({
                    element:"a",
                    attr:{
                        href:"/blackshoesdetails",
                        target:" _blank5"
                    },
                    children:Box({
                        element: "div",
                        attr: {
                            class: ""
                        },
                        children: Box({
                            element: "button",
                            children: [Box({
                                element: "img",
                                attr: {
                                    src: "./asset/blackitem.png"
                                }
                            }),
                            Box({
                                element:"h5",
                                attr:{
                                    class:"text-[15px] font-medium text-[#3E3E3E] flex  mt-2"
                                },
                                children:"Real Men's Shoes"
                            }),
                            Box({
                                element:"h5",
                                attr:{
                                    class:"text-[14px] font-semibold text-[#047857] flex"
                                },
                                children:"USD 58$"
                            })

                            ]
                        }),
                    })
                }),Box({
                    element:"a",
                    attr:{
                        href:"/redshoesdetails",
                        target:"_blank6"
                    },
                    children:Box({
                        element: "div",
                        attr: {
                            class: ""
                        },
                        children: Box({
                            element: "button",
                            children: [Box({
                                element: "img",
                                attr: {
                                    src: "./asset/reditem.png"
                                }
                            }),
                            Box({
                                element:"h5",
                                attr:{
                                    class:"text-[15px] font-medium text-[#3E3E3E] flex  mt-2"
                                },
                                children:"Lovely Red Shoes"
                            }),
                            Box({
                                element:"h5",
                                attr:{
                                    class:"text-[14px] font-semibold text-[#047857] flex"
                                },
                                children:"USD 45$"
                            })

                            ]
                        }),
                    })
                })
                ]
            })
        ]
    })
}