import React, { useEffect, useState } from "react";
import * as S from "./styles";

function Text({ index, title, inputEnable, onValueChange, value }) {
  const [imgTitle, setImageTitle] = useState(value);

  const onChangeHandler = (e) => {
    // setImageTitle({ ...imgTitle, [e.target.name]: e.target.value });
    setImageTitle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    onValueChange(index, imgTitle);
  }, [imgTitle]);

  return (
    <S.Info>
      <S.TextLabel htmlFor="text-content">{title}</S.TextLabel>
      <S.TextInput
        type="text"
        id="text-content"
        placeholder={title}
        disabled={inputEnable}
        name="text"
        onChange={onChangeHandler}
        value={imgTitle.text}
      />
      <S.wrapper>
        <S.PositionContainer>
          <S.PositionLabel htmlFor="text-position">
            Text position <span>[{imgTitle.textPos}]</span>
          </S.PositionLabel>
          <S.PositionInput
            type="range"
            id="text-position"
            min="0"
            max="50"
            disabled={inputEnable}
            name="textPos"
            onChange={onChangeHandler}
            defaultValue={imgTitle.textPos}
          />
        </S.PositionContainer>
        <S.SizeContainer>
          <S.SizeLabel htmlFor="text-size">
            Text size <span>[{imgTitle.textSize}]</span>
          </S.SizeLabel>
          <S.SizeInput
            type="range"
            id="text-size"
            min="0"
            max="4"
            disabled={inputEnable}
            name="textSize"
            // onChange={(e) =>
            //   setImageTitle((prevVal) => {
            //     return { ...prevVal, titleSize: e.target.value };
            //   })
            // }
            onChange={onChangeHandler}
            defaultValue={imgTitle.Size}
          />
        </S.SizeContainer>
      </S.wrapper>
    </S.Info>
  );
}

export default Text;
