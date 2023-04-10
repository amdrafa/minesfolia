/* eslint-disable @next/next/no-img-element */
import { CardMineContainer } from "./styles";

type CardMineProps = {
	selected: boolean;
};

export function CardMine({ selected }: CardMineProps) {
	return (
		<CardMineContainer selected={selected}>
			{selected ? (
				<img src={"https://i.imgur.com/Z6jmOXn.png"} className="image-icon" alt="Icone estrela amarela" />
			) : (
				<img src={"https://i.imgur.com/FzPUUhN.png"} className="image-icon" alt="Icone bola redonda branca" />
			)}
		</CardMineContainer>
	);
}
