import MinecraftApiController from "@/controllers/minecraftApi";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async (_request: Request) => {
	const data = await MinecraftApiController.PlayersRouteStripped();
	return new Response(JSON.stringify(data));
};

