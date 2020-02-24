import axios from 'axios';

import { apiUrl } from '../constants/config';

export const searchForUser = async (query: string): Promise<User[] | RequestError> => {
    try {
        const { data }: Response<UsersResponse> = await axios.get(`${apiUrl}/search/users`, {
            params: {
                q: query,
            },
        });

        return data.items;
    } catch (e) {
        return {
            message: e.message,
        };
    }
};
