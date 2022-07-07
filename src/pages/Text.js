import React from "react";
import * as S from "./styles";

function Text({ textTitle }) {
  return (
    <S.Info>
      <S.TextLabel for="text-content">{textTitle}</S.TextLabel>
      <S.TextInput type="text" id="text-content" placeholder={textTitle} />
      <S.wrapper>
        <S.PositionContainer>
          <S.PositionLabel for="text-position">Text position</S.PositionLabel>
          <S.PositionInput type="range" id="text-position" min="0" max="50" />
        </S.PositionContainer>
        <S.SizeContainer>
          <S.SizeLabel for="text-size">Text size</S.SizeLabel>
          <S.SizeInput type="range" id="text-size" min="0" max="4" />
        </S.SizeContainer>
      </S.wrapper>
    </S.Info>
  );
}

export default Text;
