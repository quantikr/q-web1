import { http, HttpResponse } from 'msw'

// Define your mock API handlers here
export const handlers = [
  http.get('/api/example', () => {
    return HttpResponse.json({
      message: 'This is a mocked response',
    })
  }),

  http.post('/api/example', async ({ request }) => {
    const data = await request.json()

    return HttpResponse.json({
      message: 'Data received',
      data,
    })
  }),
]
