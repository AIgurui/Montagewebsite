import clsx from 'clsx'
import React from 'react'

export function ButtonPrimary({children, className = '', ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx('inline-flex items-center justify-center rounded-xl px-5 py-3 bg-brand-600 text-white font-medium shadow-card hover:bg-brand-700 focus-visible:shadow-focus active:translate-y-[1px] transition', className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonSecondary({children, className = '', ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx('inline-flex items-center justify-center rounded-xl px-5 py-3 border border-neutral-300 text-brand-700 bg-white hover:bg-neutral-50 focus-visible:shadow-focus transition', className)}
      {...props}
    >
      {children}
    </button>
  )
}

