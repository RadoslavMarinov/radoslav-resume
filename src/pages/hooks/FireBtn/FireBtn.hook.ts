import { Dispatch, Reducer, useEffect, useReducer } from "react";
export enum EventType {
  Go = "Go",
  Timeout = "Timeout",
  SetTimeout = "SetTimeout",
  ClearTimeout = "ClearTimeout",
}
export type Event =
  | {
      type: EventType.Go;
    }
  | {
      type: EventType.Timeout;
    }
  | {
      type: EventType.SetTimeout;
      timeout: NodeJS.Timeout;
    }
  | {
      type: EventType.ClearTimeout;
    };

export enum State {
  Initial = "Initial",
  Firing = "Firing",
  Boom = "Boom",
  Fail = "Fail",
}

export type Context = {
  state: State;
  prevState: State;
  clicks: number;
  timeout?: NodeJS.Timeout;
};

const reducer: Reducer<Context, Event> = (context, event) => {
  console.log(`🚩  Event => `, event.type);
  switch (event.type) {
    // ----------------------------------------------------------------
    case EventType.Go: {
      switch (context.state) {
        case State.Initial: {
          return {
            ...context,
            prevState: context.state,
            state: State.Firing,
            clicks: 0,
          };
        }
        case State.Firing: {
          if (context.clicks + 1 >= 3) {
            return {
              ...context,
              prevState: context.state,
              state: State.Fail,
              clicks: 0,
              timeout: undefined,
            };
          }
          return {
            ...context,
            prevState: context.state,
            clicks: context.clicks + 1,
          };
        }
        case State.Boom:
        case State.Fail: {
          return { ...context, prevState: context.state, state: State.Initial };
        }
        default:
          return context;
      }
    }
    // On Timeout----------------------------------------------------------------
    case EventType.Timeout: {
      switch (context.state) {
        case State.Firing: {
          return {
            ...context,
            prevState: context.state,
            state: State.Boom,
            timeout: undefined,
            clicks: 0,
          };
        }
        case State.Boom: {
          return {
            ...context,
            prevState: context.state,
            state: State.Initial,
            timeout: undefined,
          };
        }
        default:
          return context;
      }
    }
    // ----------------------------------------------------------------
    case EventType.SetTimeout: {
      switch (context.state) {
        //
        case State.Boom:
        case State.Firing: {
          _clearTimeout(context);
          return { ...context, timeout: event.timeout };
        }
      }
      return context;
    }
    // ----------------------------------------------------------------
    case EventType.ClearTimeout: {
      switch (context.state) {
        case State.Boom:
        case State.Firing: {
          if (context.timeout) {
            clearTimeout(context.timeout);
            return { ...context, timeout: undefined };
          }
          break;
        }
      }

      return context;
    }
    // ----------------------------------------------------------------
    default:
      return context;
  }
};
export const useFireBtn = (): [Context, Dispatch<Event>] => {
  const [context, dispatch] = useReducer(reducer, {
    state: State.Initial,
    prevState: State.Initial,
    clicks: 0,
    timeout: undefined,
  });

  useEffect(() => {
    switch (context.state) {
      case State.Initial: {
        break;
      }
      case State.Firing: {
        new Promise((resolve) => {
          dispatch({
            type: EventType.SetTimeout,
            timeout: setTimeout(resolve, 3500),
          });
        }).then(() => {
          dispatch({ type: EventType.Timeout });
        });
        break;
      }
      case State.Boom: {
        new Promise((resolve) => {
          dispatch({
            type: EventType.SetTimeout,
            timeout: setTimeout(resolve, 3500),
          });
        }).then(() => {
          dispatch({
            type: EventType.Timeout,
          });
        });
        break;
      }

      default:
        console.error();
    }
  }, [context.state]);

  return [context, dispatch];
};

function _clearTimeout(context: { timeout?: NodeJS.Timeout }) {
  if (context.timeout) {
    clearTimeout(context.timeout);
  }
}
