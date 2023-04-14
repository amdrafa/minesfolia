/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import { ButtonPrimary } from "./ButtonPrimary";

const ContainerHeader = styled.header`
	padding-top: 1.5rem;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

	.button-header {
		margin-right: 1.5rem;
	}

	@media (max-width: 945px) {
		justify-content: center;

		.button-header {
			display: none;
		}
	}
`;

export function Header() {
	return (
		<ContainerHeader>
			<Link href="/">
				<div className="logo">
					<img src={"/assets/android-chrome-192x192.png"} alt="Logo Mines Lucrativo" />
				</div>
			</Link>
			<Link href="https://wlf12bet.adsrv.eacdn.com/C.ashx?btag=a_4620b_87c_&affid=3280&siteid=4620&adid=87&c=" target="_blank">
				<ButtonPrimary
					className="button-header"
					title="Entrar na F12.bet"
					style={{ height: "45px", maxWidth: "250px" }}
					iconRight={<FaArrowRight size={23} />}
				/>
			</Link>
		</ContainerHeader>
	);
}
