export function Burger({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <button
      className={`
        z-10
        md:hidden
        absolute top-0 right-0 flex flex-col justify-around w-[28px] h-[28px]`}
      onClick={() => setOpen(!open)}
    >
      <div
        className={`w-6 h-1.5 bg-gray-800  absolute transform 
          ${open ? "rotate-45 top-2" : "top-0 rotate-0"}
        `}
      ></div>

      <div
        className={`w-6 h-1.5 bg-gray-800 top-2 absolute
          ${open ? "hidden" : "absolute"}
        `}
      ></div>
      <div
        className={`
        w-6 h-1.5 bg-gray-800 transform
        ${open ? "absolute -rotate-45 top-2" : "absolute top-4"}
        `}
      ></div>
    </button>
  );
}
