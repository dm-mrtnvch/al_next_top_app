import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode
    appearance: "primary" | "ghost"
    arrow?: "right" | "down" | "none"

}
