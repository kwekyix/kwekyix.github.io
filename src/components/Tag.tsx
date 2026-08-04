export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-sm border border-border px-[14px] py-1 text-[16px] text-accent uppercase">
      {children}
    </span>
  )
}
