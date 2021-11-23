import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError, UseFormSetError} from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    error?: FieldError
}