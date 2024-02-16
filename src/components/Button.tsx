import Link from "next/link";
import React, { FC } from "react";
import "./button.scss";

enum ButtonType {
	Type1 = 1,
	Type2 = 2,
	Type3 = 3,
	Type4 = 4,
};

type ButtonProps = {
	type: ButtonType;
	link: string;
	text: string;
};

const Button: FC<ButtonProps> = ({ type, link, text }) => {
	const icon = (() => {
		switch (type) {
			case ButtonType.Type1:
				return "👫";
			case ButtonType.Type2:
				return "🗺️";
			case ButtonType.Type3:
				return "ℹ️";
			case ButtonType.Type4:
				return "🏠";
			default:
				return "fa-solid fa-question";
		}
	})();
	return (
		<span className="btn-wrapper">
			<Link href={link}>
				<button className={"btn" + type}>
					{icon}{text}
				</button>
			</Link>
		</span>
	);
};

export default Button;

