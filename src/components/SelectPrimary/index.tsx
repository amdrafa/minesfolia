import { MINES_CONFIG } from "@/constants/minesConfig";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { ListOption, Option, Select, SelectContainer } from "./styles";

type Props = {
	value: number;
	onChange: (value: number) => void;
};

export function SelectPrimary({ value, onChange }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	function handleSelectValue(valueSelected: number) {
		onChange(valueSelected);
		setIsOpen(false);
	}

	return (
		<SelectContainer>
			<Select onClick={() => setIsOpen((toggle) => !toggle)}>
				<p>
					Mines: <span>{value}</span>
				</p>
				<FaAngleDown size={25} />
			</Select>

			<ListOption isOpen={isOpen}>
				{MINES_CONFIG.quantityMines.map((quantityMine, index) => (
					<Option
						isOpen={isOpen}
						key={index}
						selected={value === quantityMine}
						onClick={() => handleSelectValue(quantityMine)}
					>
						{quantityMine}
					</Option>
				))}
			</ListOption>
		</SelectContainer>
	);
}
