import { FC, InputHTMLAttributes } from 'react'

import classes from './Input.module.scss'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

const Input: FC<IInput> = (props) => {
	return <input {...props} className={`${classes.input} ${props.className}`} />
}

export default Input
