import { Box, BoxProps } from "../../lib"


type LayoutProps = {
    children: BoxProps["children"]
}

export const Layout = (props: LayoutProps) => {
    return Box({
        element: "div",
        attr: {
            class: "max-w-[428px] px-[20px] m-auto"
        },
        children: [Box({
            element: "div",
            attr: {
                class: "w-full flex mb-[42px]"
            },
            children: Box({
                element: "button",
                children: Box({
                    element: "img",
                    attr: {
                        src: "./asset/headerMenu.png",
                        class: "w-[22px] h-[22px]"
                    }
                })
            })
            ,
        }), Box({
            element: "div",
            attr: {
                class: " flex bg-[#F2F2F2] rounded-[37.5px] px-[47px] py-[10px] justify-between fixed w-[388px] bottom-10"
            },
            children: [Box({
                element: "button",
                attr: {
                    class: "bg-transparet rounded-[4px] p-[4px] hover:bg-[#34A19B]",
                    onClick: () => {
                        location.assign("/home")
                    }
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "./asset/home.png",
                        class: "w-[26px] h-[26px]"
                    }
                })
            }), Box({
                element: "button",
                attr: {
                    class: "bg-transparet rounded-[4px] p-[4px] hover:bg-[#34A19B]",
                    onClick: () => {
                        location.assign("/category")
                    }
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "./asset/menu.png",
                        class: "w-[28px] h-[26px]"
                    }
                })
            }), Box({
                element: "button",
                attr: {
                    class: "bg-transparet rounded-[4px] p-[4px] hover:bg-[#34A19B]",
                    onClick: () => {
                        location.assign("/checkout")
                    }
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "./asset/card.png",
                        class: "w-[24px] h-[26px]"
                    }
                })
            }), Box({
                element: "button",
                attr: {
                    class: "bg-transparet rounded-[4px] p-[4px] hover:bg-[#34A19B]",
                    onClick: () => {
                        location.assign("/profile")
                    }
                },
                children: Box({
                    element: "img",
                    attr: {
                        src: "./asset/profile.png",
                        class: "w-[20px] h-[26px]"
                    }
                })
            })]
        }),
        Box({
            element: "div",
            children: props.children
        })]
    })
}
