import React from 'react';
import {TagProps} from "./Tag.props";
import styles from "./Tag.module.css"
import cn from "classnames"

export const Tag = ({children, size = "s", color = "ghost", href, className, ...props}: TagProps) => {
    return (
        <div
            className={cn(styles.tag, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.ghost]: color === "ghost",
                [styles.red]: color === "red",
                [styles.grey]: color === "grey",
                [styles.green]: color === "green",
                [styles.primary]: color === "primary"
            })}>
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
            {children}
        </div>
    );
};
