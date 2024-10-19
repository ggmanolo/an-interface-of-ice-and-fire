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
    <div className="border-2 border-neutral-700 dark:border-neutral-300 p-4 h-64 rounded-md">
      <h4 className="font-bold uppercase text-xl">{member.name}</h4>
      <p className="mt-4 font-semibold">[ {isDead ? "Dead" : "Alive"} ]</p>
      {isDead && <p>{member.died}</p>}
    </div>
  )
}

export default Member
