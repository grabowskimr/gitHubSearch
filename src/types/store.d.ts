interface State {
    error: string;
    users: User[];
    searching: boolean;
}

type Action = { type: symbol; payload: Partial<State> };
