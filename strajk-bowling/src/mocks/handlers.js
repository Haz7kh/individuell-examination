const { rest } = require('msw');

const handlers = [
  rest.post('/api/bookings', (req, res, ctx) => {
    const { players } = req.body;

    if (!players) {
      return res(ctx.status(400), ctx.json({ error: 'Players required' }));
    }

    return res(
      ctx.status(200),
      ctx.json({
        bookingNumber: 'B12345',
        total: 580,
      })
    );
  }),
];

module.exports = { handlers };
