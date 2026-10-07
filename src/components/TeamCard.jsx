export default function TeamCard({ member }) {
  return (
    <div className="rounded-[1.5rem] border border-[#f1d7d7] bg-white p-6 text-center shadow-[0_12px_28px_rgba(177,0,0,0.04)]">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fbe7e7] text-2xl font-black text-[#b30000] ring-1 ring-[#f0b7b7]">
        {member.initials}
      </div>
      <h3 className="mt-5 text-xl font-bold text-[#6b0000]">{member.name}</h3>
      <p className="mt-2 text-sm font-medium text-[#b30000]">{member.role}</p>
      {member.qualification && <p className="mt-3 text-xs leading-6 text-[#7b0000]">{member.qualification}</p>}
      {member.responsibility && <p className="mt-3 text-xs leading-6 text-[#7b0000]">{member.responsibility}</p>}
    </div>
  )
}
