import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './Button.module.scss'
import { ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
}

type ButtonProps = {
  className?: string
  theme?: ThemeButton
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
