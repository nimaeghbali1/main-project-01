import { Box } from "../../lib"

export const Category = () => {
    return Box({
        element: "div",
        attr: {
            class: "w-full"
        },
        children: [
            Box({
                element: "div",
                attr: {
                    class: ""
                },
                children: Box({
                    element: "div",
                    attr: {
                        class: "flex justify-between bg-[#F2F2F2] w-full h-[55px] rounded-[50px] items-center px-[10px]"
                    },
                    children: [
                        Box({
                            element: "button",
                            attr: {
                                class: "flex items-center gap-1"
                            },
                            children: [
                                Box({
                                    element: "img",
                                    attr: {
                                        src: "./asset/filter.png"
                                    }
                                }),
                                Box({
                                    element: "h1",
                                    attr: {
                                        class: "text-[18px] font-medium hover:text-[#34A19B] active:text-[#B7D9D8]"
                                    },
                                    children: "Filter"
                                })
                            ]
                        }),
                        Box({
                            element: "button",
                            attr: {
                                class: "flex items-center gap-1"
                            },
                            children:
                                Box({
                                    element: "h1",
                                    attr: {
                                        class: "text-[18px] font-medium hover:text-[#34A19B] active:text-[#B7D9D8]"
                                    },
                                    children: "Man"
                                })
                        }),
                        Box({
                            element: "button",
                            attr: {
                                class: "flex items-center gap-1"
                            },
                            children:
                                Box({
                                    element: "h1",
                                    attr: {
                                        class: "text-[18px] font-medium hover:text-[#34A19B] active:text-[#B7D9D8]"
                                    },
                                    children: "Woman"
                                })
                        }),
                        Box({
                            element: "button",
                            attr: {
                                class: "flex items-center gap-1"
                            },
                            children:
                                Box({
                                    element: "h1",
                                    attr: {
                                        class: "text-[18px] font-medium hover:text-[#34A19B] active:text-[#B7D9D8]"
                                    },
                                    children: "Kids"
                                })
                        }),
                        Box({
                            element: "button",
                            attr: {
                                class: "flex items-center gap-1"
                            },
                            children:
                                Box({
                                    element: "h1",
                                    attr: {
                                        class: "text-[18px] font-medium hover:text-[#34A19B] active:text-[#B7D9D8]"
                                    },
                                    children: "Shoes"
                                })
                        }),
                    ]
                })
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex justify-between mt-[40px]"
                },
                children: [Box({
                    element:"a",
                    attr:{
                        href:"/blackshoesdetails",
                        target:" _blank1"
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
                        target:" _blank2"
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
            }),
            Box({
                element: "div",
                attr: {
                    class: "flex justify-between mt-[20px]"
                },
                children: [
                    Box({
                        element:"a",
                        attr:{
                            href:"pinkshoesdetails",
                            target:" _blank3"
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
                                        src: "./asset/pinkitem.png"
                                    }
                                }),
                                Box({
                                    element:"h5",
                                    attr:{
                                        class:"text-[15px] font-medium text-[#3E3E3E] flex  mt-2"
                                    },
                                    children:"Pink Women's Shoes"
                                }),
                                Box({
                                    element:"h5",
                                    attr:{
                                        class:"text-[14px] font-semibold text-[#047857] flex"
                                    },
                                    children:"USD 90$"
                                })
    
                                ]
                            }),
                        })
                    })
                    ,Box({
                        element:"a",
                        attr:{
                            href:"/blueshoesdetails",
                            target:" _blank4"
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
                                        src: "./asset/blueitem.png"
                                    }
                                }),
                                Box({
                                    element:"h5",
                                    attr:{
                                        class:"text-[15px] font-medium text-[#3E3E3E] flex  mt-2"
                                    },
                                    children:"Blue Men's Shoes"
                                }),
                                Box({
                                    element:"h5",
                                    attr:{
                                        class:"text-[14px] font-semibold text-[#047857] flex"
                                    },
                                    children:"USD 98$"
                                })
    
                                ]
                            }),
                        })
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