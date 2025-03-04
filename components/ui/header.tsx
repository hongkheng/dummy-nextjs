import { cn } from "@/lib/utils"

function Header({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className={cn(className)}>
      {children}
    </header>
  )
}

export { Header }
