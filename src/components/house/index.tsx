import Member from "../member"

interface HouseProps {
  name: string
  region: string
  swornMembers: string[]
}

const House = ({ name, region, swornMembers }: HouseProps) => {
  return (
    <div className="p-4 bg-neutral-800">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-400">Region: {region}</p>
      <div>
        <h3 className="text-lg font-semibold">Sworn Members:</h3>
        {swornMembers.length ? (
          <ul className="flex gap-4 flex-wrap">
            {swornMembers.map((member, index) => (
              <li key={index}>
                <Member url={member} />
              </li>
            ))}
          </ul>
        ) : (
          <div>This house has no sworn members</div>
        )}
      </div>
    </div>
  )
}

export default House
