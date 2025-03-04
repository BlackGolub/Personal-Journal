import cn from 'classnames'
import { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef(function Input(
	{ isValid, appearance = 'text', className, ...props },
	ref
) {
	return (
		<input
			ref={ref}
			className={cn(className, {
				[styles['invalid']]: isValid,
				[styles['input-title']]: appearance == 'title',
				[styles['input']]: appearance == 'text',
			})}
			{...props}
		/>
	)
})

export default Input
