export const Title = ({ text }: { text: string }) => {
  return (
    <div
      className="text-4xl text-[#D4C2FC] font-medium w-[40%]
      border-[#47474F] border-b-[5px] pb-[0.5rem]"
    >
      {text}
    </div>
  )
}

export const SubTitle = ({ text, iconSrc }: { text: string, iconSrc: string }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <img src={iconSrc} alt="icon" className="h-[2.25] w-[2.25rem]" />
      <div className="text-2xl text-[#D4C2FC] font-medium">{text}</div>
    </div>
  )
}

