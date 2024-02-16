import Image from "next/image";
import { FC, useMemo, CSSProperties } from "react";

export enum BarType {
	hunger = "hunger",
	hearts = "heart",
}

type BarProps = {
	count: number;
	type: BarType;
};

const imageProperties = (mirror: boolean): CSSProperties => ({
	imageRendering: "pixelated",
	padding: "1px",
	transform: mirror ? `scaleX(-1)` : undefined,
});

const Bar: FC<BarProps> = ({ count, type }) => {
	const counts = useMemo(() => {
		const fixedCount = Math.ceil(count);
		return {
			full: Array(Math.floor(fixedCount / 2)).fill(""),
			hasHalf: Boolean(fixedCount % 2),
			empty: Array(Math.floor((20 - fixedCount) / 2)).fill(""),
		};
	}, [count]);

	return (
		<div style={{ fontSize: "20px" }}>
			{counts.full.map((_item, index) => (
				<Image
					src={`/assets/full-${type}.png`}
					alt={"full-"+type}
					width={20}
					height={20}
					unoptimized
					key={index}
					style={imageProperties(type === "hunger")}
				/>
			))}
			{counts.hasHalf && (
				<Image
					src={`/assets/half-${type}.png`}
					alt={"half-"+type}
					width={20}
					height={20}
					unoptimized
					style={imageProperties(type === "hunger")}
				/>
			)}
			{counts.empty.map((_item, index) => (
				<Image
					src={`/assets/no-${type}.png`}
					alt={"no-"+type}
					width={20}
					height={20}
					unoptimized
					key={index}
					style={imageProperties(type === "hunger")}
				/>
			))}
		</div>
	);
};

export default Bar;
