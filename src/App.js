import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Text from "./pages/Text";

function App() {
  const textTitles = ["Top text", "Bottom text"];
  const [imgUrl, setImgUrl] = useState(null);
  const [imgName, setImgName] = useState(null);
  const [imgSize, setImgSize] = useState(null);
  const [inputEnable, setInputEnable] = useState(true);
  const [includeText, setIncludeText] = useState(true);

  const [imgTitleDetail, setImgTitleDetail] = useState([
    { text: "Top text", textPos: 5, textSize: 2 },
    { text: "Bottom text", textPos: 5, textSize: 2 },
  ]);

  const uploadImageHandler = (e) => {
    setImgName(e.target.files[0].name);
    setImgSize(e.target.files[0].size);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setInputEnable(false);
  };

  const titleHandler = (index, title) => {
    setImgTitleDetail((prev) => {
      const newValue = [...prev];
      newValue[index] = title;
      return newValue;
    });
  };

  const onIncludeHandler = (e) => {
    console.log("ok");
    setIncludeText(false);
  };

  useEffect(() => {
    console.log(includeText);
  }, [includeText]);
  return (
    <S.Container>
      <S.Header>The MEME Generator</S.Header>
      <S.Body>
        <S.ImageContainer>
          {!imgUrl && (
            <S.ImageLabel htmlFor="up-img">
              Upload an image from your computer
            </S.ImageLabel>
          )}
          <S.ImageInput
            id="up-img"
            type="file"
            accept="image/*"
            onChange={uploadImageHandler}
          />
          {imgUrl && (
            <S.ImgBox>
              <S.Img src={imgUrl} className={includeText ? "outer" : null} />
              <S.TopTitle
                style={{
                  top: `${imgTitleDetail[0].textPos}px`,
                  fontSize: `${imgTitleDetail[0].textSize * 10}px`,
                }}
              >
                {imgTitleDetail[0].text}
              </S.TopTitle>
              <S.BottomTitle
                style={{
                  bottom: `${imgTitleDetail[1].textPos}px`,
                  fontSize: `${imgTitleDetail[1].textSize * 10}px`,
                }}
              >
                {imgTitleDetail[1].text}
              </S.BottomTitle>
            </S.ImgBox>
          )}
          {imgName && imgSize && (
            <S.ImageInfo>
              <S.ImageName>
                Image name: <span>{imgName}</span>
              </S.ImageName>
              <S.ImageSize>
                Image size: <span>{imgSize / 1000} KB</span>
              </S.ImageSize>
            </S.ImageInfo>
          )}
        </S.ImageContainer>
        <S.InformationContainer>
          <S.InformationTitle>Set your text here</S.InformationTitle>
          {textTitles.map((textTitle, index) => (
            <Text
              key={index}
              index={index}
              title={textTitle}
              inputEnable={inputEnable}
              onValueChange={titleHandler}
              value={imgTitleDetail[index]}
            />
          ))}
          <S.TextInclude>
            <S.IncludeInput
              type="checkbox"
              id="include-txt"
              disabled={inputEnable}
            />
            <S.IncludeLabel htmlFor="include-txt">
              Text outside the image
            </S.IncludeLabel>
          </S.TextInclude>
        </S.InformationContainer>
      </S.Body>
      <S.Footer>
        <S.NewMemeButton disabled={inputEnable} onChange={onIncludeHandler}>
          Generate a new MEME
        </S.NewMemeButton>
        <S.ResetMemeButton disabled={inputEnable}>
          Reset MEME settings
        </S.ResetMemeButton>
      </S.Footer>
    </S.Container>
  );
}

export default App;
