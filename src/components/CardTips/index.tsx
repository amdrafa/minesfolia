/* eslint-disable @next/next/no-img-element */
import { ContainerCardTips } from "./styles";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
const TypeAnimation = dynamic(() => import("react-type-animation").then((r) => r.TypeAnimation), {
	ssr: false,
});

const TIPS = [
	`Conheça os jogos e esportes em que você deseja apostar: É importante ter conhecimento profundo sobre os jogos e esportes em que você deseja apostar para tomar decisões informadas.`,
	`Mantenha-se atualizado: Siga as últimas notícias e tendências dos esportes que você deseja apostar, pois isso pode influenciar em suas apostas.`,
	`Tenha uma estratégia: Determinar sua estratégia de apostas antes de começar a jogar é fundamental. Isso ajudará a mantê-lo no controle de suas ações.`,
	`Limite suas perdas: É importante estabelecer limites para as perdas que você está disposto a suportar antes de começar a apostar. Isso evitará que você gaste mais do que pode se perder.`,
	`Mantenha registros detalhados: Tenha um registro detalhado de todas as suas apostas, incluindo o valor e o resultado. Isso ajudará a avaliar sua estratégia ao longo do tempo.`,
	`Não se apoie em emoções: Evite deixar suas emoções influenciarem em suas decisões de aposta. Mantenha a calma e siga sua estratégia.`,
	`Escolha um site de apostas confiável: Certifique-se de escolher um site de apostas confiável e bem estabelecido para evitar fraudes e garantir a segurança de seus dados e de seu dinheiro.`,
	`Compare as odds: Compare as odds oferecidas pelos diferentes sites de apostas para encontrar as melhores oportunidades.`,
	`Não siga a multidão: Evite fazer apostas apenas porque a maioria das pessoas está fazendo. Use sua própria análise e conhecimento para tomar decisões informadas.`,
	`Seja paciente: Não se desespere se você perder algumas apostas. Mantenha sua estratégia e seja paciente, pois o sucesso a longo prazo é mais importante do que o curto prazo.`,
];

export function CardTips() {
	const [tips, setTips] = useState<(string | number)[]>([]);

	useEffect(() => {
		const tipsRandomized = TIPS.sort(() => Math.random() - 0.5);

		// add number 2000 after each tip
		const tipsWithNumber = tipsRandomized
			.map((tip, index) => {
				return [tip, 2000];
			})
			.flat();

		setTips(tipsWithNumber);
	}, []);

	return (
		<ContainerCardTips>
			<div className="logo-and-name">
				<img src={"https://imgur.com/a/fBCFxiA"} alt="Logo mines lucrativo" />
				<div className="name">
					<h5>Mines lucrativo</h5>
					<p>Assistente bot</p>
				</div>
			</div>
			<p className="title">Informação:</p>
			<p className="description">
				<TypeAnimation
					sequence={tips}
					wrapper="div"
					cursor={true}
					speed={60}
					deletionSpeed={99}
					repeat={Infinity}
				/>
			</p>
		</ContainerCardTips>
	);
}
