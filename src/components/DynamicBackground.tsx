"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

// Простая функция для объединения классов
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

type BackgroundType = "particles" | "gradient" | "waves" | "grid"

interface DynamicBackgroundProps {
  className?: string
  type?: BackgroundType
  color1?: string
  color2?: string
  color3?: string
  showControls?: boolean
}

export function DynamicBackground({
  className,
  type = "particles",
  color1 = "rgba(132, 0, 50, 0.5)",  // #840032 (бордовый)
  color2 = "rgba(229, 149, 0, 0.5)", // #e59500 (оранжевый)
  color3 = "rgba(0, 38, 66, 0.5)",   // #002642 (темно-синий)
  showControls = false
}: DynamicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentType, setCurrentType] = useState<BackgroundType>(type)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Particles animation
  useEffect(() => {
    if (currentType !== "particles" || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }> = []

    const colors = [color1, color2, color3]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        connectParticles(particle, index)
      })
    }

    const connectParticles = (particle: (typeof particles)[0], index: number) => {
      const connectionDistance = 150

      for (let i = index + 1; i < particles.length; i++) {
        const dx = particle.x - particles[i].x
        const dy = particle.y - particles[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance) {
          const opacity = 1 - distance / connectionDistance
          ctx.beginPath()
          ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.2})`
          ctx.lineWidth = 1
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particles[i].x, particles[i].y)
          ctx.stroke()
        }
      }
    }

    const animate = () => {
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentType, color1, color2, color3])

  // Gradient animation
  useEffect(() => {
    if (currentType !== "gradient" || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let gradientAngle = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGradient = () => {
      gradientAngle += 0.002
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.max(canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(
        centerX + Math.cos(gradientAngle) * radius,
        centerY + Math.sin(gradientAngle) * radius,
        centerX + Math.cos(gradientAngle + Math.PI) * radius,
        centerY + Math.sin(gradientAngle + Math.PI) * radius,
      )

      gradient.addColorStop(0, color1)
      gradient.addColorStop(0.5, color2)
      gradient.addColorStop(1, color3)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const animate = () => {
      drawGradient()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentType, color1, color2, color3])

  // Waves animation
  useEffect(() => {
    if (currentType !== "waves" || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      const colors = [color1, color2, color3]
      const waveCount = 3

      for (let i = 0; i < waveCount; i++) {
        const amplitude = 50 - i * 10
        const frequency = 0.01 + i * 0.005
        const speed = 0.05 + i * 0.02
        const yOffset = canvas.height * 0.5 + i * 50

        ctx.beginPath()
        ctx.moveTo(0, yOffset)

        for (let x = 0; x < canvas.width; x++) {
          const y = yOffset + Math.sin(x * frequency + time * speed) * amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, colors[i])
        gradient.addColorStop(1, colors[(i + 1) % colors.length])

        ctx.fillStyle = gradient
        ctx.globalAlpha = 0.6
        ctx.fill()
      }
    }

    const animate = () => {
      drawWaves()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentType, color1, color2, color3])

  // Grid animation
  useEffect(() => {
    if (currentType !== "grid" || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      const gridSize = 30
      const lineWidth = 1

      ctx.lineWidth = lineWidth

      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const offset = Math.sin(time + x * 0.01) * 5

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)

        const gradient = ctx.createLinearGradient(x, 0, x, canvas.height)
        gradient.addColorStop(0, color1)
        gradient.addColorStop(0.5, color2)
        gradient.addColorStop(1, color3)

        ctx.strokeStyle = gradient
        ctx.globalAlpha = 0.2 + Math.abs(offset) / 10
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const offset = Math.cos(time + y * 0.01) * 5

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)

        const gradient = ctx.createLinearGradient(0, y, canvas.width, y)
        gradient.addColorStop(0, color3)
        gradient.addColorStop(0.5, color1)
        gradient.addColorStop(1, color2)

        ctx.strokeStyle = gradient
        ctx.globalAlpha = 0.2 + Math.abs(offset) / 10
        ctx.stroke()
      }
    }

    const animate = () => {
      drawGrid()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentType, color1, color2, color3])

  // Простое выпадающее меню для переключения типа фона
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const selectBackgroundType = (type: BackgroundType) => {
    setCurrentType(type)
    setIsMenuOpen(false)
  }

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      
      {showControls && (
        <div className="absolute right-4 top-4 z-10">
          <div className="relative">
            <button 
              onClick={toggleMenu}
              className="flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-sm rounded-md shadow-sm text-gray-700 hover:bg-white/90 transition-colors"
            >
              <span>Фон</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg overflow-hidden z-20">
                <div className="py-1">
                  <button 
                    onClick={() => selectBackgroundType("particles")}
                    className={`block w-full text-left px-4 py-2 text-sm ${currentType === "particles" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    Частицы
                  </button>
                  <button 
                    onClick={() => selectBackgroundType("gradient")}
                    className={`block w-full text-left px-4 py-2 text-sm ${currentType === "gradient" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    Градиент
                  </button>
                  <button 
                    onClick={() => selectBackgroundType("waves")}
                    className={`block w-full text-left px-4 py-2 text-sm ${currentType === "waves" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    Волны
                  </button>
                  <button 
                    onClick={() => selectBackgroundType("grid")}
                    className={`block w-full text-left px-4 py-2 text-sm ${currentType === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    Сетка
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 