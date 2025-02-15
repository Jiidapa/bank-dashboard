import { banners } from "@/mock/apiResponse";

export async function GET() {
  return Response.json({
    success: true,
    data: banners,
  });
}
