'use client'

import React, { useEffect, useRef } from 'react'

interface NodeItem {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  pulse: number
}

export function EcosystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Generate nodes
    const nodeCount = Math.min(Math.floor(width / 24), 60)
    const nodes: NodeItem[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.6 ? '#00F0FF' : Math.random() > 0.3 ? '#7000FF' : '#FFB800',
      pulse: Math.random() * Math.PI * 2,
    }))

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      ctx.clearRect(0, 0, width, height)

      // Draw faint radial ambient glow around mouse cursor
      const glow = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 450)
      glow.addColorStop(0, 'rgba(0, 240, 255, 0.08)')
      glow.addColorStop(0.5, 'rgba(112, 0, 255, 0.04)')
      glow.addColorStop(1, 'rgba(6, 8, 18, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      // Update & Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!n) continue

        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.02

        if (n.x < 0) n.x = width
        if (n.x > width) n.x = 0
        if (n.y < 0) n.y = height
        if (n.y > height) n.y = 0

        // Mouse displacement
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const angle = Math.atan2(dy, dx)
          const force = (150 - dist) / 150
          n.x -= Math.cos(angle) * force * 1.2
          n.y -= Math.sin(angle) * force * 1.2
        }

        const currentRadius = n.radius + Math.sin(n.pulse) * 0.5

        ctx.beginPath()
        ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2)
        ctx.fillStyle = n.color
        ctx.globalAlpha = 0.5 + Math.sin(n.pulse) * 0.3
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          if (!n2) continue

          const ndx = n.x - n2.x
          const ndy = n.y - n2.y
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy)

          if (nDist < 120) {
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = '#00F0FF'
            ctx.globalAlpha = (1 - nDist / 120) * 0.15
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className='pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70'
    />
  )
}
