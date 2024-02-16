"use client";
import { useEffect, useState, FC } from "react";
import type { StrippedPlayersRouteType } from "../types/minecraftApi";
import PlayerInfo from "./SinglePlayer";

type PlayersInfoProps = {
	data: StrippedPlayersRouteType | null;
};

const PlayersInfo: FC<PlayersInfoProps> = ({ data }) => {
	const [players, setPlayers] = useState(data);

	useEffect(() => {
		const interval = setInterval(() => {
			fetch("/api/players")
				.catch(() => {
					console.error("Failed to fetch");
				})
				.then(async (res) => {
					if (res) {
						const data = await res.json();
						setPlayers(data);
					}
				});
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				maxHeight: "50vh",
				overflowY: "scroll",
			}}
		>
			{players ? (
				players.map((player) => (
					<PlayerInfo data={player} key={player.displayName} />
				))
			) : (
				<p>Error</p>
			)}
		</div>
	);
};

export default PlayersInfo;
