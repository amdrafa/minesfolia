import styled, { css } from "styled-components";

export const ContainerCardTips = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  pointer-events: none;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLACK_500};
  `}

  max-width: 340px;
  width: 100%;
  height: 350px;

  border-radius: 10px;

  @media (max-width: 945px) {
    max-width: 100%;
  }

  .logo-and-name {
    display: flex;
    align-items: center;
    gap: 10px;

    .name {
      margin-top: -5px;

      h5 {
        margin-top: -4px;
        margin-bottom: -5px;
        font-size: 1.2rem;
        text-transform: uppercase;
      }
    }
  }

  .title {
    color: #CDCDCD;
    font-size: 1.125rem;
    padding-top: 1rem;
    font-weight: 600;
  }

  .description {
    color: #FFFFFf;
    font-size: 1rem;
    padding-top: 0.5rem;
    font-weight: 200;
  }
`;
