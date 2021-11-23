import React, {ForwardedRef, forwardRef} from 'react';
import {TextareaProps} from "./Textarea.props";
import cn from "classnames"
import styles from "./Textarea.module.css"

const Textarea = forwardRef(({className, error, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
    return (
       <div className={cn(className, styles.textareaWrapper)}>
           <textarea className={cn(styles.textarea, {
               [styles.error]:error
           })} ref={ref}/>
           {error && <span className={styles.errorMessage}>{error.message}</span>}
       </div>

    );
});

export default Textarea;