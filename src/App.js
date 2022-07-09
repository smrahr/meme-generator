import React, { useState } from "react";
import * as S from "./styles";
import Text from "./pages/Text";

function App() {
  const textTitles = ["Top text", "Bottom text"];
  const [imgUrl, setImgUrl] = useState("");
  const [imgName, setImgName] = useState("");
  const [imgSize, setImgSize] = useState("");

  const uploadImageHandler = (e) => {
    setImgName(e.target.files[0].name);
    setImgSize(e.target.files[0].size);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    e.target.previousSibling.style.display = "none";
    e.target.nextSibling.nextSibling.style.display = "block";
  };
  return (
    <S.Container>
      <S.Header>The MEME Generator</S.Header>
      <S.Body>
        <S.ImageContainer>
          <S.ImageLabel htmlFor="up-img">
            Upload an image from your computer
          </S.ImageLabel>
          <S.ImageInput
            id="up-img"
            type="file"
            accept="image/*"
            onChange={uploadImageHandler}
          />
          <img src={imgUrl} />
          <S.ImageInfo>
            <S.ImageName>Image name:{imgName}</S.ImageName>
            <S.ImageSize>Image size:{imgSize}</S.ImageSize>
          </S.ImageInfo>
        </S.ImageContainer>
        <S.InformationContainer>
          <S.InformationTitle>Set your text here</S.InformationTitle>
          {textTitles.map((textTitle, index) => (
            <Text key={index} textTitle={textTitle} />
          ))}
          <S.TextInclude>
            <S.IncludeInput type="checkbox" id="include-txt" />
            <S.IncludeLabel htmlFor="include-txt">
              Text outside the image
            </S.IncludeLabel>
          </S.TextInclude>
        </S.InformationContainer>
      </S.Body>
      <S.Footer>
        <S.NewMemeButton>Generate a new MEME</S.NewMemeButton>
        <S.ResetMemeButton>Reset MEME settings</S.ResetMemeButton>
      </S.Footer>
    </S.Container>
  );
}

export default App;
