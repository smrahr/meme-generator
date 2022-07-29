import styled from "styled-components";

export const Info = styled.div`
  margin: 10px 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const TextLabel = styled.label`
  padding: 5px 0;
  margin: 5px 0;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 5px 0;
  margin: 5px 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const wrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const PositionLabel = styled.label`
  /* padding: 5px; */
  /* margin: 5px; */
  color: #f1fa8c;
  & > span {
    color: #50fa7b;
  }
`;

export const PositionInput = styled.input`
  /* padding: 5px; */
  margin-top: 10px;
  height: 2px;
  /* appearance: none; */

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-left: 20px;
`;

export const SizeLabel = styled.label`
  /* padding: 5px; */
  /* margin: 5px; */
  color: #f1fa8c;
  & > span {
    color: #50fa7b;
  }
`;

export const SizeInput = styled.input`
  /* padding: 5px; */
  margin-top: 10px;
  height: 2px;
  /* appearance: none; */

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &::-webkit-slider-thumb {
    height: 3px;
    width: 3px;
  }
`;
