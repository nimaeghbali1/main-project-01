import { Box } from "../../lib";
import { TextFieldProps } from "./index";

export const TextField = (props: TextFieldProps = {
    label: "",
    helperText: ""
}) => {
    const { helperText, label, ...restprops } = props
    return Box({
        element: "div",
        attr: {
            class: " items-center w-[300px] m-auto mt-6"
        },
        children: [
            Box({
                element: "label",
                attr: {
                    class: " font-medium text-gray-500"
                },
                children: label
            }),
            Box({
                element: "div",
                attr: {
                    class: "mt-1"
                },
                children: [
                    Box({
                        element: "input",
                        attr: {
                            class: "bg-gray-300 h-[50px] w-full rounded-[20px] shadow-gray-200 shadow-md px-5 font-medium outline-[#1C756c]"
                            , ...restprops
                        }
                    })
                ]
            })
        ]
    })
}
// <h1 class="rounded">