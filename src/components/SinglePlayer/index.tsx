import type { FC } from "react";
import type { StrippedPlayerRouteType } from "../../types/minecraftApi";
import Bar, { BarType } from "./Bar";
import Gamemode from "./Gamemode";
import Op from "./Op";
import WorldType from "./WorldType";

type PlayerInfoProps = {
	data: StrippedPlayerRouteType;
};

const PlayerInfo: FC<PlayerInfoProps> = ({ data }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
			<h2 style={{ margin: 0, fontSize: "3rem" }}>{data.displayName}</h2>
			<Bar count={data.health} type={BarType.hearts} />
			<Bar count={data.hunger} type={BarType.hunger} />
			<div>
				<WorldType type={data.dimension} />
				{data.op && <Op />}
				<Gamemode mode={data.gamemode} />
			</div>
		</div>
	);
};

export default PlayerInfo;
