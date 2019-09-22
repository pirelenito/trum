import { fixture } from './playback'

export interface State {
  source: string
}

export const initialState: State = {
  source: fixture,
}

export type Action = { type: 'updateSource'; newValue: string }

export type Dispatch = (value: Action) => void

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'updateSource':
      return { ...state, source: action.newValue }
  }
}
