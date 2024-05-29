import styled from "styled-components";

export const CircleDot = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  margin: 10px 0px 10px 15px;
  justify-content: center;
  background-color: ${(props) => props.lightColor};
  border-radius: 50%;
  border: 1px solid black;
`;
