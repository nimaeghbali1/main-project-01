import { ButtonProps } from ".."
import { Box } from "../../lib"

export const Title = (props: ButtonProps) => {
    return Box({
        element: "div",
        attr: {
            class: "flex justify-around w-full"
        },
        children: Box({
            element: "h1",
            attr: {
                class: "text-[#19837B] text-[27px] font-semibold "
            },
            children: props.children
        })
    })
}