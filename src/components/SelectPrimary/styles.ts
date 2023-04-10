import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  border-radius: 10px;
  max-width: 190px;
  width: 100%;
  height: 44px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLUE};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 2rem;

  flex: 1;

  p {
    font-size: 1.25rem;
    font-weight: 600;

    span {
      font-weight: 300;
    }
  }

  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

type ListOptionProps = {
  isOpen: boolean;
};

export const ListOption = styled.div<ListOptionProps>`
  position: absolute;
  top: 45px;
  left: 0;

  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  height: ${({ isOpen }) => (isOpen ? "200px" : "0px")};

  transition: all 0.2s ease-in-out;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  z-index: 2;

  background-color: white;

  overflow-y: ${({ isOpen }) => (isOpen ? "scroll" : "hidden")};

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BLUE};

  padding: 5px;
`;

type OptionProps = {
  selected: boolean;
  isOpen: boolean;
};

export const Option = styled.button<OptionProps>`
  width: 100%;
  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  color: white;
  font-weight: 600;

  transition: all 0.4s;

  display: ${({ isOpen }) => (isOpen ? "inline-block" : "none")};
  border: ${({ selected }) => (selected ? "1px solid white" : "none")};

  &:hover {
    opacity: 0.8;
    border: 1px solid white;
  }
`;
