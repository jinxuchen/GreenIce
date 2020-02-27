import React, { useState, useCallback } from "react";
import styled from "styled-components";

const functions: Set<any> = new Set();
const randomColor = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

const Board = styled.div`
  display: flex;
`;

const Cube = styled.button`
  background-color: ${randomColor()};
  height: 300px;
  width: 300px;

  border-color: white;
  border-style: solid;
  border-width: 10px 5px 10px 5px;
  font-size: 30px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Hook = props => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
  const increment = useCallback(() => setC(c => c + delta), []);

  functions.add(incrementDelta);
  functions.add(increment);

  return (
    <Board>
      <Cube style={{ backgroundColor: randomColor() }} onClick={incrementDelta}>
        Increment Delta: {delta}
      </Cube>
      <Cube onClick={increment}>Increment c: {c}</Cube>
      <div>newly created function: {functions.size - 2}</div>
    </Board>
  );
};
