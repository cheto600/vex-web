import { useEffect, useState, type CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  style?: CSSProperties
  initialDelay?: number
  charDelay?: number
  charDuration?: number
}

export default function AnimatedHeading({
  text,
  className = '',
  style,
  initialDelay = 200,
  charDelay = 30,
  charDuration = 500,
}: AnimatedHeadingProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), initialDelay)
    return () => clearTimeout(t)
  }, [initialDelay])

  const lines = text.split('\n')

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length
        return (
          <span key={lineIndex} className="block">
            {line.split('').map((char, charIndex) => {
              const delay =
                lineIndex * lineLength * charDelay + charIndex * charDelay
              return (
                <span
                  key={charIndex}
                  style={{
                    display: 'inline-block',
                    opacity: animate ? 1 : 0,
                    transform: animate
                      ? 'translateX(0)'
                      : 'translateX(-18px)',
                    transition: `opacity ${charDuration}ms ease, transform ${charDuration}ms ease`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
  )
}
