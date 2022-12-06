import { ButtonHTMLAttributes, FC } from 'react'

import classes from './Button.module.scss'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
	// eslint-disable-next-line react/button-has-type
	<button type={props.type || 'button'} className={classes.button} {...props}>
		{props.value}
	</button>
)

export default Button
