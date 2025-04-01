import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = LinkProps & {
  className?: string
  children: React.ReactNode
  theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [
        className,
        cls[theme],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
