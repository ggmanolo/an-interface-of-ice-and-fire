import House from "@/components/house"

interface House {
  name: string
  region: string
  swornMembers: []
}

const fetchHouses = async () => {
  const res = await fetch("https://anapioficeandfire.com/api/houses")
  if (!res.ok) {
    throw new Error("Failed to fetch houses")
  }
  return res.json()
}

const Home = async () => {
  const houses: House[] = await fetchHouses()

  return (
    <main className="px-10 py-12">
      <h1 className="text-6xl md:text-7xl uppercase text-center font-bold text-balance">
        An interface of Ice & Fire
      </h1>

      <ul className="flex flex-col gap-10 mt-20">
        {houses.map((house, index) => (
          <li key={index}>
            <House
              name={house.name}
              region={house.region}
              swornMembers={house.swornMembers}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
