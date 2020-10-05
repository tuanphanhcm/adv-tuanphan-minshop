import React, { useContext, createContext } from "react";

export function useCreateContext<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;
  const stateCtx = createContext(initialState);
  const dispatchCtx = createContext(defaultDispatch);

  function useStateCtx<K extends keyof StateType>(property: K) {
    const state = useContext(stateCtx);
    return state[property];
  }

  function useDispatchCtx() {
    return useContext(dispatchCtx);
  }

  function Prodiver(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<
      React.Reducer<StateType, ActionType>
    >(reducer, initialState);
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{props.children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }
  return [useStateCtx, useDispatchCtx, Prodiver] as const;
}
