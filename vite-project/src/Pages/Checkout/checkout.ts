import { Title } from "../../components"
import { Box } from "../../lib"

export const blackShoesCard = () => {
    let number = 1
    return Box({
        element: "div",
        attr: {
            class: "flex bg-slate-200 w-[300px] h-[120px] mx-auto rounded-lg border-solid border-[1px] border-[#1C756c]"
        },
        children: [Box({
            element: "img",
            attr: {
                src: "./asset/blackitem.png"
            }
        }),
        Box({
            element: "div",
            attr: {
                class: "px-3 py-1"
            },
            children: [

                Box({
                    element: "h3",
                    attr: {
                        class: "text-[#3E3E3E] text-[16px] font-semibold mt-2 mb-1"
                    },
                    children: "Real Men's Shoes "
                }),
                Box({
                    element: "h5",
                    attr: {
                        class: "text-[14px] font-semibold text-[#047857] "
                    },
                    children: "USD 58$"
                }),
                Box({
                    element: "div",
                    attr: {
                        class: "flex justify-between w-[80px] mt-2"
                    },
                    children: [Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number--
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px] flex justify-center items-center"
                            },
                            children: Box({
                                element: "div",
                                attr: {
                                    class: "bg-white w-[15px] h-[4px] rounded-full"
                                },
                                children: ""
                            })
                        })
                    }),Box({
                        element:"p",
                        children:`${number}`
                    })
                    , Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number++
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/plus.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                    ]
                }),
                Box({
                    element:"div",
                    attr:{
                        class:"w-full flex justify-end ml-[30px]"
                    },
                    children:Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                localStorage.setItem("blackshoes" , "0")
                                location.assign("/checkout")
                            }
                        },
                        children:Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-red-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/close.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                })
            ]
        })
        ]
    })
}

export const blueShoesCard = () => {
    let number = 1
    return Box({
        element: "div",
        attr: {
            class: "flex bg-slate-200 w-[300px] h-[120px] mx-auto rounded-lg border-solid border-[1px] border-[#1C756c]"
        },
        children: [Box({
            element: "img",
            attr: {
                src: "./asset/blueitem.png"
            }
        }),
        Box({
            element: "div",
            attr: {
                class: "px-3 py-1"
            },
            children: [

                Box({
                    element: "h3",
                    attr: {
                        class: "text-[#3E3E3E] text-[16px] font-semibold mt-2 mb-1"
                    },
                    children: "Blue Men's Shoes"
                }),
                Box({
                    element: "h5",
                    attr: {
                        class: "text-[14px] font-semibold text-[#047857] "
                    },
                    children: "USD 98$"
                }),
                Box({
                    element: "div",
                    attr: {
                        class: "flex justify-between w-[80px] mt-2"
                    },
                    children: [Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number--
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px] flex justify-center items-center"
                            },
                            children: Box({
                                element: "div",
                                attr: {
                                    class: "bg-white w-[15px] h-[4px] rounded-full"
                                },
                                children: ""
                            })
                        })
                    }),Box({
                        element:"p",
                        children:`${number}`
                    })
                    , Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number++
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/plus.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                    ]
                }),
                Box({
                    element:"div",
                    attr:{
                        class:"w-full flex justify-end ml-[30px]"
                    },
                    children:Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                localStorage.setItem("blueshoes" , "0")
                                location.assign("/checkout")
                            }
                        },
                        children:Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-red-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/close.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                })
            ]
        })
        ]
    })
}
export const redShoesCard = () => {
    let number = 1
    return Box({
        element: "div",
        attr: {
            class: "flex bg-slate-200 w-[300px] h-[120px] mx-auto rounded-lg border-solid border-[1px] border-[#1C756c]"
        },
        children: [Box({
            element: "img",
            attr: {
                src: "./asset/reditem.png"
            }
        }),
        Box({
            element: "div",
            attr: {
                class: "px-3 py-1"
            },
            children: [

                Box({
                    element: "h3",
                    attr: {
                        class: "text-[#3E3E3E] text-[16px] font-semibold mt-2 mb-1"
                    },
                    children: "Lovely Red Shoes"
                }),
                Box({
                    element: "h5",
                    attr: {
                        class: "text-[14px] font-semibold text-[#047857] "
                    },
                    children: "USD 45$"
                }),
                Box({
                    element: "div",
                    attr: {
                        class: "flex justify-between w-[80px] mt-2"
                    },
                    children: [Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number--
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px] flex justify-center items-center"
                            },
                            children: Box({
                                element: "div",
                                attr: {
                                    class: "bg-white w-[15px] h-[4px] rounded-full"
                                },
                                children: ""
                            })
                        })
                    }),Box({
                        element:"p",
                        children:`${number}`
                    })
                    , Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number++
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/plus.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                    ]
                }),
                Box({
                    element:"div",
                    attr:{
                        class:"w-full flex justify-end ml-[30px]"
                    },
                    children:Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                localStorage.setItem("redshoes" , "0")
                                location.assign("/checkout")
                            }
                        },
                        children:Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-red-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/close.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                })
            ]
        })
        ]
    })
}
export const pinkShoesCard = () => {
    let number = 1
    return Box({
        element: "div",
        attr: {
            class: "flex bg-slate-200 w-[300px] h-[120px] mx-auto rounded-lg border-solid border-[1px] border-[#1C756c]"
        },
        children: [Box({
            element: "img",
            attr: {
                src: "./asset/pinkitem.png"
            }
        }),
        Box({
            element: "div",
            attr: {
                class: "px-3 py-1"
            },
            children: [

                Box({
                    element: "h3",
                    attr: {
                        class: "text-[#3E3E3E] text-[16px] font-semibold mt-2 mb-1"
                    },
                    children: "Pink Women's Shoes"
                }),
                Box({
                    element: "h5",
                    attr: {
                        class: "text-[14px] font-semibold text-[#047857] "
                    },
                    children: "USD 90$"
                }),
                Box({
                    element: "div",
                    attr: {
                        class: "flex justify-between w-[80px] mt-2"
                    },
                    children: [Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number--
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px] flex justify-center items-center"
                            },
                            children: Box({
                                element: "div",
                                attr: {
                                    class: "bg-white w-[15px] h-[4px] rounded-full"
                                },
                                children: ""
                            })
                        })
                    }),Box({
                        element:"p",
                        children:`${number}`
                    })
                    , Box({
                        element: "button",
                        attr:{
                            onClick:()=>{
                                number++
                            }
                        },
                        children: Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-slate-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/plus.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                    ]
                }),
                Box({
                    element:"div",
                    attr:{
                        class:"w-full flex justify-end ml-[8px]"
                    },
                    children:Box({
                        element:"button",
                        attr:{
                            onClick:()=>{
                                localStorage.setItem("pinkshoes" , "0")
                                location.assign("/checkout")
                            }
                        },
                        children:Box({
                            element: "div",
                            attr: {
                                class: "rounded-full bg-red-400 p-[3px] h-[22px] w-[22px]"
                            },
                            children: Box({
                                element: "img",
                                attr: {
                                    src: "./asset/close.png",
                                    class: "w-[16px] h-[16px]"
                                }
                            })
                        })
                    })
                })
            ]
        })
        ]
    })
}






export const Checkout: any = () => {
    const addBlack = !!parseInt(localStorage.getItem("blackshoes") as string)
    const addBlue = !!parseInt(localStorage.getItem("blueshoes") as string)
    const addRed = !!parseInt(localStorage.getItem("redshoes") as string)
    const addPink = !!parseInt(localStorage.getItem("pinkshoes") as string)
    
    if (addBlack) {
        return blackShoesCard()
    }
    if (addBlue){
        return blueShoesCard()
    }
    if (addRed){
        return redShoesCard()
    }
    if (addPink){
        return pinkShoesCard()
    }
    else if(!addBlack && !addBlue && !addPink && !addRed){
        return Box({
            element:"div",
            attr:{
                class:"m-auto"
            },
            children:[Title({children:"Your cart is empty!"}),
            Box({
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
}
