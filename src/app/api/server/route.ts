import MinecraftApiController from "@/controllers/minecraftApi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async (_request: Request) => {
	const data = await MinecraftApiController.ServerRouteStripped();
	return new Response(JSON.stringify(data));
};

