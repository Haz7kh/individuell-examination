const { setupServer } = require('msw/node');
const { handlers } = require('../src/mocks/handlers');

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


