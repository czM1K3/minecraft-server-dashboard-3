import type {
	PlayersRouteType,
	ServerRouteType,
	StrippedPlayersRouteType,
	StrippedServerRouteType,
} from "../types/minecraftApi";
import { env } from "../env";
import cache from "@/utils/cache";

const ServerRoute = async () => {
	try {
		const cached = cache.get("server");
		if (cached) {
			return cached as ServerRouteType;
		}
		const result = await fetch(`${env.SERVERTAP_ADDRESS}/v1/server`);
		if (result.ok) {
			const json = await result.json();
			cache.set("server", json, 1);
			return json as ServerRouteType;
		}
		return null;
	} catch {
		return null;
	}
};

const ServerRouteStripped =
	async (): Promise<null | StrippedServerRouteType> => {
		const data = await ServerRoute();
		if (!data) {
			return null;
		}
		return {
			maxPlayers: data.maxPlayers,
			onlinePlayers: data.onlinePlayers,
			uptime: data.health.uptime,
			version: data.version,
		};
	};

const PlayersRoute = async () => {
	try {
		const cached = cache.get("players");
		if (cached) {
			return cached as PlayersRouteType;
		}
		const result = await fetch(`${env.SERVERTAP_ADDRESS}/v1/players`);
		if (result.ok) {
			const json = await result.json();
			cache.set("players", json, 1);
			return json as PlayersRouteType;
		}
		return null;
	} catch {
		return null;
	}
};

const PlayersRouteStripped =
	async (): Promise<StrippedPlayersRouteType | null> => {
		const data = await PlayersRoute();
		if (!data) {
			return null;
		}
		return data.map((p) => ({
			dimension: p.dimension,
			displayName: p.displayName,
			gamemode: p.gamemode,
			health: p.health,
			hunger: p.hunger,
			op: p.op,
		}));
	};

const MinecraftApiController = {
	ServerRoute,
	ServerRouteStripped,
	PlayersRoute,
	PlayersRouteStripped,
};

export default MinecraftApiController;

