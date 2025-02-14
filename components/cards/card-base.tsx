"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"

interface CardBaseProps {
  frontContent: React.ReactNode
  backContent: React.ReactNode
}

export default function CardBase({ frontContent, backContent }: CardBaseProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const cardStyle = cn(
    "absolute w-full h-full",
    "[backface-visibility:hidden]",
    "border-[length:var(--card-border-width)] border-card-border",
    "bg-gradient-to-br from-card-bg-from to-card-bg-to",
    "shadow-[inset_0_0_calc(var(--card-width)*0.009375)_rgba(255,255,255,0.3)]",
    "overflow-hidden",
    "p-0",
  )

  const innerCardStyle = cn(
    "absolute inset-0",
    // "bg-gradient-to-br from-card-bg-from to-card-bg-to",
    "bg-black",
  )

  return (
    <div
      className="relative card-w card-h cursor-pointer [perspective:calc(var(--card-width)*50)]"
      onClick={handleFlip}
    >
      <div
        className={cn(
          "absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]",
        )}
      >
        <Card className={cardStyle}>
          <div className={innerCardStyle}>
            <div className="relative w-full h-full">{frontContent}</div>
          </div>
        </Card>
        <Card className={cn(cardStyle, "[transform:rotateY(180deg)]")}>
          <div className={innerCardStyle}>
            <div className="relative w-full h-full">{backContent}</div>
          </div>
        </Card>
      </div>
    </div>
  )
}

