import Image from "next/image";
import type { FC } from "react";

type GamemodeProps = {
	mode: string;
};

const Gamemode: FC<GamemodeProps> = ({ mode }) => {
	switch (mode) {
		case "CREATIVE":
			return (
				<Image
					src="/assets/goldenapple.webp"
					alt="golden apple icon"
					width={50}
					height={50}
					unoptimized
					title="Player is in creative mode"
				/>
			);
		case "SPECTATOR":
			return (
				<Image
					src="/assets/spyglass.webp"
					alt="spyglass icon"
					width={50}
					height={50}
					unoptimized
					title="Player is in specator mode"
				/>
			);
		default:
			return <></>;
	}
};

export default Gamemode;
