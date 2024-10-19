interface MemberProps {
  url: string
}

interface MemberData {
  name: string
  died: string
}

const fetchMemberData = async (url: string): Promise<MemberData> => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error("Failed to fetch member")
  }
  return res.json()
}

const Member = async ({ url }: MemberProps) => {
  const member = await fetchMemberData(url)
  const isDead = member.died !== ""

  return (
    <div className="border border-neutral-300 p-4 h-64 rounded-md">
      <h4 className="font-semibold uppercase">{member.name}</h4>
      <p>Status: {isDead ? "Dead" : "Alive"}</p>
      {isDead && <p>{member.died}</p>}
    </div>
  )
}

export default Member
