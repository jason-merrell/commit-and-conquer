"use client"
import Image from "next/image"
import CardBase from "./card-base"
import { ScrollArea } from "@/components/ui/scroll-area"

export interface Ability {
  name: string
  description: string[]
}

export interface Creature {
  imageUrl: string
  imageAlt: string
  title: string
  flavorText: string
  power: number
  toughness: number
  cost: number
  tags: string[]
  abilities?: Ability[]
}

export interface CreatureCardProps {
  data: Creature
}

export default function CreatureCard({ data }: CreatureCardProps) {
  const { title, imageUrl, imageAlt, flavorText, abilities, power, toughness, cost, tags } = data
  return (
    <CardBase
      frontContent={
        <div className="relative w-full h-full flex flex-col">
          <div className="relative grow shrink-0 basis-0 min-h-0">
            <Image
              src={
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/card-background-U0l5SIZGOcnHhJ9c0OJXW10sK9Qz5f.webp"
              }
              alt="Card background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between px-[calc(var(--card-width)*0.05)]">
            <div className="flex w-full h-[calc(var(--card-height)*0.06)] items-center justify-between">
              <svg
                className="w-[calc(100%-var(--card-height)*0.06)] h-full"
                viewBox="0 0 100 20"
                preserveAspectRatio="xMinYMid meet"
              >
                <text
                  x="0"
                  y="15"
                  className="fill-white font-bold font-permanent-marker drop-shadow-lg"
                  style={{
                    fontSize: "0.7em",
                    filter: "drop-shadow(0px 0.08em 0.08em rgba(0, 0, 0, 0.5))",
                  }}
                >
                  {title}
                </text>
              </svg>
              <div className="relative flex items-center justify-center w-[calc(var(--card-height)*0.04)] h-[calc(var(--card-height)*0.04)]">
                <div className="absolute -bottom-[1px] -left-[1px] w-full h-full bg-gray-500 rounded-full"></div>
                <div className="absolute inset-0 bg-gray-300 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)]"></div>
                <span className="relative z-10 text-black font-bold font-mono text-[calc(var(--card-width)*0.04)] leading-none">
                  {cost}
                </span>
              </div>
            </div>
            <div className="relative w-full grow min-h-[calc(var(--card-height)*0.4)] max-h-[calc(var(--card-height)*0.6)]">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover border-[length:var(--card-inner-border-width)] border-card-inner-border absolute inset-0"
                priority
              />
            </div>
            <div className="flex items-center justify-between w-full h-[calc(var(--card-height)*0.06)]">
              <p className="text-white font-bold text-[calc(var(--card-width)*0.04)]">
                {Array.isArray(tags) && <span>{tags.join(", ")}</span>}
              </p>
            </div>
            {/* Card description area */}
            <div className="grow shrink-0 basis-0 min-h-0 relative bg-gradient-to-br from-amber-50 to-amber-100 rounded-md shadow-inner">
              <ScrollArea className="h-full w-full">
                <div className="flex flex-col w-full p-[calc(var(--card-width)*0.04)] pb-[calc(var(--card-width)*0.08)]">
                  {abilities &&
                    abilities.map((ability) => (
                      <div key={ability.name} className="mb-[calc(var(--card-width)*0.02)]">
                        <p className="text-black font-bold text-[calc(var(--card-width)*0.035)]">{ability.name}</p>
                        {ability.description && (
                          <ul className="pl-[calc(var(--card-width)*0.02)]">
                            {ability.description.map((para, index) => (
                              <li
                                key={`${ability.name}-${index}`}
                                className="text-black text-[calc(var(--card-width)*0.03)] mb-[calc(var(--card-width)*0.01)]"
                              >
                                {para}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  <p className="text-black text-[calc(var(--card-width)*0.03)] italic mt-[calc(var(--card-width)*0.02)]">
                    &quot;{flavorText}&quot;
                  </p>
                </div>
              </ScrollArea>
              <div className="absolute bottom-1 right-1 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)] border border-amber-200 px-[calc(var(--card-width)*0.02)] translate-y-[85%] translate-x-[20%] h-[calc(var(--card-height)*0.05)] flex items-center justify-center text-center shadow shadow-[0px 0.08em 0.08em rgba(0, 0, 0, 0.5)]">
                <span className="text-black font-bold text-[calc(var(--card-width)*0.04)] leading-none">
                  {power}
                  <span className="font-normal mx-[calc(var(--card-width)*0.01)]">/</span>
                  {toughness}
                </span>
              </div>
            </div>
            <div className="flex w-full h-[calc(var(--card-height)*0.05)]">
              <p className="text-white text-[calc(var(--card-width)*0.03)]">Illus. ChatGPT 4o</p>
            </div>
          </div>
        </div>
      }
      backContent={
        <div className="relative w-full h-full">
          <Image
            src={
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/card-background-U0l5SIZGOcnHhJ9c0OJXW10sK9Qz5f.webp"
            }
            alt="Card background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-between px-[calc(var(--card-width)*0.05)]"></div>
        </div>
      }
    />
  )
}

