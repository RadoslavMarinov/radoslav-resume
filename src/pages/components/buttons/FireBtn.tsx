import {
  useFireBtn,
  Context as BtnContext,
  State as BtnState,
  EventType as BtnEvent,
} from "@/hooks/FireBtn/FireBtn.hook";

export const FireBtn = () => {
  const [context, dispatch] = useFireBtn();

  const handleClick = async () => {
    console.log(`👉 CLICK = `, context.state);
    dispatch({ type: BtnEvent.Go });
  };

  return (
    <div>
      <ul className="min-h-[7em] min-w-44">
        <li>
          <span>State:</span>{" "}
          <span
            className={`px-4 py-2 ${getColor(context.state)} text-green-100`}
          >
            {context.state}
          </span>
        </li>
        <li>Prev State: {context.prevState}</li>
        <li>{context.clicks}</li>
        <li>{context.timeout && "Timeout"}</li>
      </ul>
      <button className="w-[10em]" onClick={handleClick}>
        <div className="px-6 bg-slate-600 text-white">{context.state}</div>
      </button>
    </div>
  );
};

function getColor(state: BtnState) {
  switch (state) {
    case BtnState.Initial:
      return "bg-blue-400";
    case BtnState.Firing:
      return "bg-yellow-700";
    case BtnState.Boom:
      return "bg-orange-500";
    case BtnState.Fail:
      return "bg-red-600";

    default:
      break;
  }
}
