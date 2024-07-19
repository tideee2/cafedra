import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  console.log(request)

  return new Response('ff')
}

export async function POST(request: Request, response: Response) {
  const data = await request.json()

  if (data.login.toLowerCase() === 'admin' && data.password === '12345') {
    return new Response(JSON.stringify({
      statusText: 'Ok',
      message: '',
    }))
  }

  return new Response(JSON.stringify(
    {
      statusText: 'error',
      message: 'Логін та пароль не співпадають',
    },
  ))
}
