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
    <div className="border border-stone-200 bg-gradient-to-br from-transparent dark:border-stone-800 to-stone-100/35 dark:to-stone-900/35 p-4 h-64 rounded-lg group cursor-pointer relative flex items-center justify-center overflow-hidden">
      <h4
        className={`${
          isDead && "group-hover:line-through"
        } font-bold uppercase text-xl text-center group-hover:opacity-50 transition-opacity`}
      >
        {member.name}
      </h4>
      <div className="transition-transform absolute inset-0 p-4 bg-stone-200/50 dark:bg-stone-800/50 group-hover:translate-y-0 translate-y-full ease-in-out">
        <p className="font-semibold">[ {isDead ? "Dead" : "Alive"} ]</p>
        {isDead && <p className="mt-2">{member.died}</p>}
      </div>
    </div>
  )
}

export default Member
