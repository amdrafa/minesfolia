/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

import { HashLoader as LoadingComponent } from "react-spinners";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export function Loading() {
  return (
    <Container>
      <img src={"https://imgur.com/a/fBCFxiA"} width={325} height={300} alt="Logo mines lucrativo" />
      <LoadingComponent color="#FFA400" size={80} />
    </Container>
  );
}
