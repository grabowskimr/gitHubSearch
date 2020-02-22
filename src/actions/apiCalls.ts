import axios from 'axios';

import { apiUrl } from '../constants/config';

export const searchForUser = async (query: string) => {
    try {
        const data = await axios.get(`${apiUrl}/search/users`, {
            params: {
                q: query,
            },
        });

        console.log(data);
        return data;
    } catch (e) {
        return e;
    }
};
