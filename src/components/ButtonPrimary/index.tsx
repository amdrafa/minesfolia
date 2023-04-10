import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  iconLeft?: any;
  iconRight?: any;
  buttonType?: "PRIMARY" | "SECONDARY";
};

export function ButtonPrimary({
  title,
  buttonType = "PRIMARY",
  iconLeft,
  iconRight,
  ...rest
}: Props) {
  return (
    <ButtonContainer buttonType={buttonType} {...rest}>
      {iconLeft}
      {title}
      {iconRight}
    </ButtonContainer>
  );
}
