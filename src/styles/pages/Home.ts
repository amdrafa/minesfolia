import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export const ContainerLimit = styled.main`
  max-width: 1050px;
  width: 100%;
  margin: auto;

  @media (max-width: 1100px) {
    max-width: 900px;
  }

  @media (max-width: 945px) {
    max-width: 530px;
  }

  @media (max-width: 580px) {
    max-width: 340px;
  }

  @media (max-width: 363px) {
    max-width: 289px;
  }
`;

export const ContainerContent = styled.section`
  margin-top: 1.5rem;
  display: flex;
  gap: 20px;

  @media (max-width: 945px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerCardTipsAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  color: white;

  @media (max-width: 945px) {
      justify-content: center;
      align-items: center;
      flex-direction: column-reverse;
  }

  .container-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .buttons-card-tips {
    max-width: 340px;

    @media (max-width: 945px) {
      max-width: 100%;
    }

  }
`;

export const ContainerMines = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 120px);
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(5, 90px);
    grid-template-rows: repeat(3, 90px);
    gap: 20px;
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(3, 60px);
    gap: 10px;
  }

  @media (max-width: 363px) {
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(3, 50px);
    gap: 8px;
  }
`;
