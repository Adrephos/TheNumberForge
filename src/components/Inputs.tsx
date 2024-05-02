let inputStyle = "bg-[#232327] border border-[#47474F] placeholder-[#5C5C67] text-white text-sm rounded-lg block w-full p-2.5 "

export const StringInput = ({ name, setVal }: { name: string, setVal: Function }) => {
  return (
    <div>
      <input placeholder={name} className={inputStyle}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  )
}

export const NumberInput = ({ name, setVal, type }: { name: string, setVal: Function, type: string }) => {
  return (
    <div>
      <input placeholder={name} className={inputStyle}
        onChange={(e) => setVal(
          type === "int"
            ? parseInt(e.target.value) || 0
            : parseFloat(e.target.value) || 0
        )}
      />
    </div>
  )
}

export const ToggleInput = (
  { a, b, stateVal, setStateVal }:
    { a: string, b: string, stateVal: boolean, setStateVal: Function }
) => {
  return (
    <div>
      <label
        htmlFor="toggle"
        className="w-full h-fit flex items-stretch justify-center rounded-md cursor-pointer"
      >
        <input
          id="toggle"
          type="checkbox"
          className="hidden peer"
          checked={stateVal}
          onChange={() => setStateVal(!stateVal)} />
        <span className="w-1/2 h-[100%] text-center px-4 py-[0.75rem] rounded-l-md bg-[#44279A]
        text-white peer-checked:bg-[#2B2931]"
        >
          {a}
        </span>
        <span className="w-1/2 h-[100%] text-center px-4 py-[0.75rem] rounded-r-md bg-[#2B2931]
        text-white peer-checked:bg-[#44279A]">
          {b}
        </span>
      </label>
    </div>
  )
}
