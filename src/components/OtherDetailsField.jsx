export default function OtherDetailsField({ visible }) {
  if (!visible) return null

  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[#6b0000] md:col-span-2">
      Please specify
      <input
        name="otherDetails"
        required
        maxLength={300}
        className="rounded-2xl border border-[#ebd7d7] bg-[#fffaf9] px-4 py-3 outline-none transition focus:border-[#d84d4d]"
        placeholder="Please describe the service or category"
      />
    </label>
  )
}
