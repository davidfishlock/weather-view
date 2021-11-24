import classNames from 'classnames'
import React from 'react'
import { strings } from '../../../constants/strings'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Spinner: React.FC<Props> = ({ size = 'md', className }) => {
  return (
    <div
      role="status"
      aria-label={strings.LOADING}
      className={classNames([
        'border-t-4 animate-spin rounded-full border-blue-500',
        { 'h-10': size === 'sm' },
        { 'w-10': size === 'sm' },
        { 'h-16': size === 'md' },
        { 'w-16': size === 'md' },
        { 'h-24': size === 'lg' },
        { 'w-24': size === 'lg' },
        className,
      ])}
    ></div>
  )
}

export default Spinner
