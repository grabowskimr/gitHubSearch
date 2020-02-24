interface State {
    error: string;
    users: User[];
}

type Action = { type: symbol; payload: Partial<State> };
