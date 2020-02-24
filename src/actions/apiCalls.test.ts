import moxios from 'moxios';

import { searchForUser } from './apiCalls';
import { user } from '../service/data';

const mockSuccess = (data: object) => ({ status: 200, response: data });
const mockError = (error: string) => ({ status: 500, response: error });

describe('getFeaturedPlaylist', () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());
    window.localStorage.setItem('token', 'test');

    it('fetch proper users data', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(
                mockSuccess({
                    total_count: 200,
                    incomplete_results: true,
                    items: [user],
                })
            );
        });

        const users = await searchForUser('test');

        expect(users).toEqual([user]);
        expect(users[0].login).toBe('test');
    });
});
