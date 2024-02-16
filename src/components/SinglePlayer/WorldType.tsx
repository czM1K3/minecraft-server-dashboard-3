import Image from "next/image";
import type { FC } from "react";

type WorldTypeProps = {
	type: string;
};

const WorldType: FC<WorldTypeProps> = ({ type }) => {
	switch (type) {
		case "NETHER":
			return (
				<Image
					src="/assets/netherrack.webp"
					alt="netherrack icon"
					width={50}
					height={50}
					unoptimized
					title="Player is in the nether"
				/>
			);
		case "THE_END":
			return (
				<Image
					src="/assets/endstone.webp"
					alt="endstone icon"
					width={50}
					height={50}
					unoptimized
					title="Player is in the end"
				/>
			);
		default:
			return (
				<Image
					src="/assets/grassblock.webp"
					alt="grassblock icon"
					width={50}
					height={50}
					unoptimized
					title="Player is in overworld"
				/>
			);
	}
};

export default WorldType;
