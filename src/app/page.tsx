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
    <main className="px-6 md:px-8 py-20 max-w-[1080px]">
      <h1 className="text-5xl text-center font-bold text-balance mt-20">
        An interface of Ice & Fire
      </h1>
      <p className="text-center text-xl mt-4 text-stone-500 dark:text-stone-400 font-medium">
        A frontend challenge by Manuel Garcia Genta
      </p>

      <ul className="flex flex-col gap-20 mt-40">
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
