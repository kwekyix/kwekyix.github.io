import type { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="relative z-1 mx-auto w-full max-w-[1100px] px-9 max-tabsm:px-5 max-phone:px-4">
      {children}
    </div>
  )
}
