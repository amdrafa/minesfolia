import { ButtonPrimary } from "@/components/ButtonPrimary";
import { CardMine } from "@/components/CardMine";
import { CardTips } from "@/components/CardTips";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SelectPrimary } from "@/components/SelectPrimary";
import { HiCalculator } from "react-icons/hi";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import {
	ContainerCardTipsAndButtons,
	ContainerContent,
	ContainerLimit,
	ContainerMines,
	Layout,
} from "@/styles/pages/Home";
import Link from "next/link";

const CHANCE_PERCENT = 60;
const TOTAL_NUMBERS_CARD = 25;

export default function Home() {
	const [state, setState] = useState<"calculating" | "delay" | "ready">("ready");
	const [isLoading, setIsLoading] = useState(true);

	const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
	const [minesAmmount, setMinesAmmount] = useState(3);

	const setNewRandomNumbers = () => {
		const randomNumbers: number[] = [];
		for (let i = 0; i < Math.floor((TOTAL_NUMBERS_CARD - minesAmmount) * (CHANCE_PERCENT / 100)); i++) {
			const randomNumber = Math.floor(Math.random() * TOTAL_NUMBERS_CARD);
			if (randomNumbers.includes(randomNumber)) {
				i--;
				continue;
			}
			randomNumbers.push(randomNumber);
		}
		setRandomNumbers(randomNumbers);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	const onCalculateProbabilities = () => {
		setState("calculating");
		setRandomNumbers([]);

		setTimeout(() => {
			setNewRandomNumbers();
			setState("delay");
			setTimeout(() => {
				setState("ready");
			}, 15000);
		}, 5000);
	};

	// useEffect(() => {
	// 	const url = window.location.href;

	// 	if (!url.includes("mineslucrativo") && !url.includes("localhost")) {
	// 		window.location.href = "https://mineslucrativo.com";
	// 	}
	// }, []);

	if (isLoading)
		return (
			<Layout>
				<Loading />
			</Layout>
		);

	return (
		<Layout>
			<ContainerLimit>
				<Header />
				<SelectPrimary value={minesAmmount} onChange={setMinesAmmount} />

				<ContainerContent>
					<ContainerMines>
						{[...Array(TOTAL_NUMBERS_CARD)].map((_, index) => (
							<CardMine selected={randomNumbers.includes(index)} key={index} />
						))}
					</ContainerMines>

					<ContainerCardTipsAndButtons>
						<CardTips />
						<div className="container-buttons">
							<ButtonPrimary
								title={
									state === "calculating"
										? "Calculando..."
										: state === "delay"
											? "Aguarde..."
											: "Calcular probabilidades"
								}
								disabled={state !== "ready"}
								buttonType="SECONDARY"
								className="buttons-card-tips"
								iconRight={<HiCalculator size={30} />}
								onClick={onCalculateProbabilities}
							/>
							<Link
								href="https://wlf12bet.adsrv.eacdn.com/C.ashx?btag=a_4620b_87c_&affid=3280&siteid=4620&adid=87&c="
								target="_blank"
							>
								<ButtonPrimary title="Entrar na F12.bet" className="buttons-card-tips" />
							</Link>
						</div>
					</ContainerCardTipsAndButtons>
				</ContainerContent>
			</ContainerLimit>
			<Footer />
		</Layout>
	);
}
