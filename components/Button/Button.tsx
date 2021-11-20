import {ButtonProps} from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css"
import ArrowIcon from "./arrow.svg"


const Button = ({children, appearance, arrow = "none", className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance === "primary",
            [styles.ghost]: appearance === "ghost"
        })}>
            {children}
            {arrow !== "none" && <span className={cn(styles.arrow, {
                [styles.down]: arrow === "down",
                [styles.right]: arrow === "right"
            })}>
            <ArrowIcon />
            </span>}
        </button>
    );
};

export default Button;