var server = require('./server.js')

describe.only("login validation testing.", () => {
    test("email should be proper email format.", () => {
        server.login('nick123.com', '123', (user) => {
            expect(user).toBe('failed');
        });

        server.login('nick@123', '123', (user) => {
            expect(user).toBe('failed');
        });

        server.login('nick@123com', '123', (user) => {
            expect(user).toBe('failed');
        });
    });
});