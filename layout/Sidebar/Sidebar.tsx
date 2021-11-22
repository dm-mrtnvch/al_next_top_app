import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import styles from "./Sidebar.module.css"
import {Menu} from "../Menu/Menu";
import Logo from "../logo.svg"
import cn from "classnames"
import {Search} from "../../components";

const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(styles.sidebar)} {...props} >
            <Logo className={styles.logo}/>
            <Search/>
            <Menu/>
        </div>
    );
};

export default Sidebar;