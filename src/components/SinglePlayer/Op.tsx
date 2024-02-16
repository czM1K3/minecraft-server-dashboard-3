import Image from "next/image";
import type { FC } from "react";

const Op: FC = () => {
	return (
		<Image
			src="/assets/commandblock.webp"
			alt="command block icon"
			width={50}
			height={50}
			unoptimized
			title="Player has op"
		/>
	);
};

export default Op;
