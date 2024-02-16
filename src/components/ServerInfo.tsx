"use client";
import { StrippedServerRouteType } from "@/types/minecraftApi";
import { getTimestamp } from "@/utils/timestamp";
import { getVersion } from "@/utils/version";
import React, { FC, useEffect, useState } from "react";

type ServerInfoProps = {
	data: StrippedServerRouteType | null;
};

const ServerInfo: FC<ServerInfoProps> = ({ data }) => {
	const [info, setInfo] = useState(data);

	useEffect(() => {
		const interval = setInterval(() => {
			fetch("/api/server")
				.catch(() => {
					console.error("Failed to fetch");
				})
				.then(async (res) => {
					if (res) {
						const data = await res.json();
						setInfo(data);
					}
				});
		}, 5000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<p>
				Online players: {info ? info.onlinePlayers : "-"}/
				{info ? info.maxPlayers : "-"}
			</p>
			<p>Version: {info ? getVersion(info.version) : "-"}</p>
			<p>Uptime: {info ? getTimestamp(info.uptime) : "-"}</p>
		</>
	);
};

export default ServerInfo;
