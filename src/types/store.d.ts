interface State {
    error: string;
}

type Action = { type: symbol; payload: Partial<State> };
