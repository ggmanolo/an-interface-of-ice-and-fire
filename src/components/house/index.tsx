import Member from "../member"

interface HouseProps {
  name: string
  region: string
  swornMembers: string[]
}

const House = ({ name, region, swornMembers }: HouseProps) => {
  return (
    <div className="p-6 rounded-2xl bg-gray-100/50 dark:bg-gray-900/50">
      <div className="flex md:items-baseline gap-2 flex-col md:flex-row">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p>({region})</p>
      </div>
      <div className="mt-8 border-t pt-2 border-gray-400 dark:border-gray-600">
        <h3 className="text-lg font-semibold">Sworn Members</h3>
        {swornMembers.length ? (
          <ul className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4">
            {swornMembers.map((member, index) => (
              <li key={index}>
                <Member url={member} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 h-64 flex items-center justify-center">
            <p>This house has no sworn members</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default House
