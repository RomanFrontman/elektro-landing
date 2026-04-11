import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

type Direction = 'up' | 'left' | 'right' | 'none'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

const getInitialTransform = (dir: Direction): string => {
  switch (dir) {
    case 'left':  return 'translateX(-28px)'
    case 'right': return 'translateX(28px)'
    case 'none':  return 'none'
    default:      return 'translateY(28px)'
  }
}

export const Reveal = ({ children, className = '', delay = 0, direction = 'up' }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = {
    opacity: 0,
    transform: getInitialTransform(direction),
    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
