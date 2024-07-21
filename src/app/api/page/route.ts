import apiResponse from '@/app/api/apiResponse.json';

export async function GET() {
  return Response.json(apiResponse.data);
}
