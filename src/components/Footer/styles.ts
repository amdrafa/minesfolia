import styled, { css } from "styled-components";

export const ContainerFooter = styled.footer`
  margin-top: 4rem;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.BLACK_500};
  `}

  color: white;
  height: 130px;

  @media (max-width: 580px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

export const ContainerFooterLimit = styled.div`
  max-width: 1050px;
  width: 100%;
  height: 100%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    max-width: 900px;
  }

  @media (max-width: 945px) {
    max-width: 550px;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 20px;
  }

  .logo-and-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .icon {
      cursor: pointer;
    }
  }

  .links {
    p {
      text-decoration: underline;
      font-weight: 400;
      cursor: pointer;
    }
  }
`;
