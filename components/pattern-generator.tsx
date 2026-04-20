'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type ShapeType = 'circle' | 'square' | 'triangle' | 'star'
type PatternType = 'grid' | 'radial' | 'wave'

interface PatternConfig {
  shape: ShapeType
  pattern: PatternType
  color: string
  backgroundColor: string
  scale: number
  spacing: number
}

export function PatternGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [config, setConfig] = useState<PatternConfig>({
    shape: 'circle',
    pattern: 'grid',
    color: '#7c3aed',
    backgroundColor: '#ffffff',
    scale: 1,
    spacing: 40,
  })

  const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.beginPath()
    ctx.arc(x, y, size / 2, 0, Math.PI * 2)
    ctx.fill()
  }

  const drawSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.fillRect(x - size / 2, y - size / 2, size, size)
  }

  const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.beginPath()
    ctx.moveTo(x, y - size / 2)
    ctx.lineTo(x + size / 2, y + size / 2)
    ctx.lineTo(x - size / 2, y + size / 2)
    ctx.closePath()
    ctx.fill()
  }

  const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    const points = 5
    const innerRadius = size / 4
    const outerRadius = size / 2

    ctx.beginPath()
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius
      const angle = (i * Math.PI) / points - Math.PI / 2
      const px = x + radius * Math.cos(angle)
      const py = y + radius * Math.sin(angle)
      if (i === 0) ctx.moveTo(px, py)
      else ctx.lineTo(px, py)
    }
    ctx.closePath()
    ctx.fill()
  }

  const drawShape = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    ctx.fillStyle = config.color
    switch (config.shape) {
      case 'circle':
        drawCircle(ctx, x, y, size)
        break
      case 'square':
        drawSquare(ctx, x, y, size)
        break
      case 'triangle':
        drawTriangle(ctx, x, y, size)
        break
      case 'star':
        drawStar(ctx, x, y, size)
        break
    }
  }

  const drawPattern = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const size = 20 * config.scale
    const spacing = config.spacing

    // Background
    ctx.fillStyle = config.backgroundColor
    ctx.fillRect(0, 0, width, height)

    // Draw pattern based on type
    if (config.pattern === 'grid') {
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          drawShape(ctx, x + spacing / 2, y + spacing / 2, size)
        }
      }
    } else if (config.pattern === 'radial') {
      const centerX = width / 2
      const centerY = height / 2
      const maxRadius = Math.sqrt(width * width + height * height)

      for (let r = 0; r < maxRadius; r += spacing) {
        const pointsOnCircle = Math.max(3, Math.floor((2 * Math.PI * r) / spacing))
        for (let i = 0; i < pointsOnCircle; i++) {
          const angle = (i / pointsOnCircle) * Math.PI * 2
          const x = centerX + r * Math.cos(angle)
          const y = centerY + r * Math.sin(angle)
          if (x >= 0 && x <= width && y >= 0 && y <= height) {
            drawShape(ctx, x, y, size)
          }
        }
      }
    } else if (config.pattern === 'wave') {
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const waveOffset = Math.sin((x + y) / 50) * 20
          drawShape(ctx, x + spacing / 2, y + spacing / 2 + waveOffset, size)
        }
      }
    }
  }

  useEffect(() => {
    drawPattern()
  }, [config])

  const handleExport = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = `pattern-${Date.now()}.png`
    link.click()
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Canvas */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden shadow-lg">
            <canvas
              ref={canvasRef}
              width={600}
              height={600}
              className="w-full border border-border bg-white"
            />
          </Card>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Shape</h3>
            <div className="space-y-2">
              {(['circle', 'square', 'triangle', 'star'] as ShapeType[]).map((shape) => (
                <label key={shape} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shape"
                    value={shape}
                    checked={config.shape === shape}
                    onChange={(e) =>
                      setConfig({ ...config, shape: e.target.value as ShapeType })
                    }
                    className="w-4 h-4"
                  />
                  <span className="capitalize text-foreground">{shape}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Pattern</h3>
            <div className="space-y-2">
              {(['grid', 'radial', 'wave'] as PatternType[]).map((pattern) => (
                <label key={pattern} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="pattern"
                    value={pattern}
                    checked={config.pattern === pattern}
                    onChange={(e) =>
                      setConfig({ ...config, pattern: e.target.value as PatternType })
                    }
                    className="w-4 h-4"
                  />
                  <span className="capitalize text-foreground">{pattern}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Colors</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Shape Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={config.color}
                    onChange={(e) => setConfig({ ...config, color: e.target.value })}
                    className="w-12 h-10 rounded cursor-pointer border border-border"
                  />
                  <span className="flex items-center text-foreground text-sm">{config.color}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Background
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={config.backgroundColor}
                    onChange={(e) => setConfig({ ...config, backgroundColor: e.target.value })}
                    className="w-12 h-10 rounded cursor-pointer border border-border"
                  />
                  <span className="flex items-center text-foreground text-sm">
                    {config.backgroundColor}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Scale: {config.scale.toFixed(1)}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.1"
                  value={config.scale}
                  onChange={(e) => setConfig({ ...config, scale: parseFloat(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Spacing: {config.spacing}px
                </label>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={config.spacing}
                  onChange={(e) => setConfig({ ...config, spacing: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>
          </Card>

          <Button
            onClick={handleExport}
            className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow"
            size="lg"
          >
            Download Pattern
          </Button>
        </div>
      </div>
    </div>
  )
}
