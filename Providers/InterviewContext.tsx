import { ReactNode, createContext, useContext, useReducer } from 'react';

function interviewReducer(state: any, action: any) {
  switch (action.type) {
    case 'javascript': {
      return { ...state, javascript: { ...action.data } };
    }
    case 'css': {
      return { ...state, css: { ...action.data } };
    }
    case 'react': {
      return { ...state, react: { ...action.data } };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialState = {
  javascript: {},
  css: {},
  react: {},
} as const;

const InterviewContext = createContext(null);

const InterviewDispatchContext = createContext(null);

export function InterviewProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(interviewReducer, initialState);

  return (
    <InterviewContext.Provider value={tasks}>
      <InterviewDispatchContext.Provider value={dispatch as any}>
        {children}
      </InterviewDispatchContext.Provider>
    </InterviewContext.Provider>
  );
}

export function useInterview() {
  return useContext(InterviewContext);
}

export function useInterviewDispatch() {
  return useContext(InterviewDispatchContext);
}
