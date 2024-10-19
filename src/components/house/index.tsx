import Member from "../member"

interface HouseProps {
  name: string
  region: string
  swornMembers: string[]
}

const House = ({ name, region, swornMembers }: HouseProps) => {
  return (
    <div className="p-4 bg-neutral-900">
      <div className="flex md:items-baseline gap-2 flex-col md:flex-row">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-gray-400">{region}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Sworn Members</h3>
        {swornMembers.length ? (
          <ul className="flex gap-4 flex-wrap mt-4">
            {swornMembers.map((member, index) => (
              <li key={index}>
                <Member url={member} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6">This house has no sworn members</div>
        )}
      </div>
    </div>
  )
}

export default House
