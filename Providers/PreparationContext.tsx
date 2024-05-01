import { ReactNode, createContext, useContext, useReducer } from 'react';

function preparationReducer(state: any, action: any) {
  switch (action.type) {
    case 'toggleIsSaveInLocalStorage': {
      return { ...state, isSaveInLocalStorage: !state.isSaveInLocalStorage };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = {
  isSaveInLocalStorage: true,
} as const;

const PreparationContext = createContext(null);

const PreparationDispatchContext = createContext(null);

export function PreparationProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(preparationReducer, initialState);

  return (
    <PreparationContext.Provider value={tasks}>
      <PreparationDispatchContext.Provider value={dispatch as any}>
        {children}
      </PreparationDispatchContext.Provider>
    </PreparationContext.Provider>
  );
}

export function usePreparation() {
  return useContext(PreparationContext);
}

export function usePreparationDispatch() {
  return useContext(PreparationDispatchContext);
}
