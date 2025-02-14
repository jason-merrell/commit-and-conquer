import CreatureCard from "@/components/cards/creature-card"
import creatures from "@/data/creatures.json"

export default function Page() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 p-4">
      {
        creatures.map((creature)=> <CreatureCard key={creature.id} data={creature} />)
      }
    </div>
  )
}

