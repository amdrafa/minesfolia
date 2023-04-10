import styled from "styled-components";

type CardMineContainerProps = {
	selected: boolean;
};

export const CardMineContainer = styled.div<CardMineContainerProps>`
	width: 120px;
	height: 120px;
	background-color: ${({ theme }) => theme.COLORS.BLUE};
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	border: ${({ selected }) => (selected ? "3px solid #FFF500" : "none")};

	transition: all 1s;

	// flip on selected
	transform: ${({ selected }) => (selected ? "rotateY(180deg)" : "rotateY(0deg)")};

	@media (max-width: 1100px) {
		width: 90px;
		height: 90px;

		.image-icon {
			width: 50px;
		}
	}

	@media (max-width: 580px) {
		width: 60px;
		height: 60px;

		.image-icon {
			width: 30px;
		}
	}

	@media (max-width: 363px) {
		width: 50px;
		height: 50px;

		.image-icon {
			width: 30px;
		}
	}
`;
