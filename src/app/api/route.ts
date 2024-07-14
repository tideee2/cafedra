import { getLocalData } from '@/hooks/getLocalData'

export async function GET() {
  const data = await getLocalData()
  return Response.json(data)
}
