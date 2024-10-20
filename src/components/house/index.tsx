import Member from "../member"

interface HouseProps {
  name: string
  region: string
  swornMembers: string[]
}

const House = ({ name, region, swornMembers }: HouseProps) => {
  return (
    <div className="border border-stone-200 dark:border-stone-900  bg-radial-gradient from-stone-200/25 dark:from-stone-900/25 to-transparent">
      <div className="p-6 flex md:items-baseline gap-2 flex-col md:flex-row">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-stone-500 dark:text-stone-400 font-medium">
          ({region})
        </p>
      </div>
      <h3 className="mt-10 ml-6 text-lg border w-fit px-2 py-1 border-stone-200 dark:border-stone-900 text-stone-600 dark:text-stone-300">
        Sworn Members
      </h3>
      <div className="p-6 border-t pt-4 border-stone-200 dark:border-stone-900">
        {swornMembers.length ? (
          <ul className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {swornMembers.map((member, index) => (
              <li key={index}>
                <Member url={member} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 h-64 flex items-center justify-center">
            <p className="text-stone-500 dark:text-stone-400 font-medium">
              This house has no sworn members
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default House
