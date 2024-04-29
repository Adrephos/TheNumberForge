export const NormalButton = ({ text, href }: { text: string, href: string }) => {
  return (
    <div className="hover:drop-shadow-[0px_0px_1rem_#5C469C] hover:-translate-y-1 active:translate-y-1 w-[18rem] rounded-xl transition-all">
      <a className="block text-center bg-[#5C469C]
      text-white text-xl font-medium py-2 px-4 w-full rounded-xl drop-shadow-lg"
        href={href}>
        {text}
      </a>
    </div>
  )
}

export const MethodButton = ({ text, href }: { text: string, href: string }) => {
  return (
    <div className="m-5 hover:drop-shadow-[0px_0px_3rem_#8576FF] hover:-translate-y-1 active:translate-y-1 w-[13rem] rounded-xl transition-all">
      <a className="block border-[3px] border-[#8576FF] text-center text-[#8576FF] text-xl font-medium py-2 px-4 w-full rounded-xl"
        href={href}>
        {text}
      </a>
    </div>
  )
}

export const ToggleButton = (
  { a, b, stateVal, setStateVal }:
    { a: string, b: string, stateVal: boolean, setStateVal: Function }
) => {
  return (
    <div>
      <label
        htmlFor="toggle"
        className="inline-flex items-center rounded-md cursor-pointer"
      >
        <input
          id="toggle"
          type="checkbox"
          className="hidden peer"
          checked={stateVal}
          onChange={() => setStateVal(!stateVal)} />
        <span className="px-4 py-[0.75rem] rounded-l-md bg-[#44279A]
        text-white peer-checked:bg-[#2B2931]"
        >
          {a}
        </span>
        <span className="px-4 py-[0.75rem] rounded-r-md bg-[#2B2931]
        text-white peer-checked:bg-[#44279A]">
          {b}
        </span>
      </label>
    </div>
  )
}
