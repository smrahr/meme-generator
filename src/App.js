import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
import * as S from "./styles";
import Text from "./pages/Text";

function App() {
  const textTitles = ["Top text", "Bottom text"];
  const [selectedImage, setSelectedImage] = useState(null);
  // const [imgUrl, setImgUrl] = useState(null);
  // const [imgName, setImgName] = useState(null);
  // const [imgSize, setImgSize] = useState(null);
  const [inputEnable, setInputEnable] = useState(true);
  const [includeText, setIncludeText] = useState(false);
  const imageInputRef = useRef();
  const imgRef = useRef();

  const [imgTitleDetail, setImgTitleDetail] = useState([
    { text: "Top text", textPos: 5, textSize: 2 },
    { text: "Bottom text", textPos: 5, textSize: 2 },
  ]);

  const getSelectedImageUrl = () =>
    selectedImage ? URL.createObjectURL(selectedImage) : null;

  const uploadImageHandler = (e) => {
    const [selectedFile] = e.target.files;
    setSelectedImage(selectedFile);

    // setImgName(e.target.files[0].name);
    // setImgSize(e.target.files[0].size);
    // setImgUrl(URL.createObjectURL(e.target.files[0]));

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
    setIncludeText((currentvalue) => !currentvalue);
    console.log("ok");
  };

  const onGenerateButtonHandler = async () => {
    const canvas = await html2canvas(imgRef);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };

  const onResetButtonHandler = () => {
    imageInputRef.current.value = "";
    setSelectedImage(null);
    // setImgUrl(null);
    // setImgName(null);
    // setImgSize(null);

    setInputEnable(true);
    setImgTitleDetail([
      { text: "Top text", textPos: 5, textSize: 2 },
      { text: "Bottom text", textPos: 5, textSize: 2 },
    ]);
    setIncludeText(false);
  };

  return (
    <S.Container>
      <S.Header>The MEME Generator</S.Header>
      <S.Body>
        <S.ImageContainer>
          {!selectedImage && (
            <S.ImageLabel htmlFor="up-img">
              Upload an image from your computer
            </S.ImageLabel>
          )}
          <S.ImageInput
            ref={imageInputRef}
            id="up-img"
            type="file"
            accept="image/*"
            onChange={uploadImageHandler}
          />
          {selectedImage && (
            <S.ImgBox ref={imgRef}>
              <S.Img
                src={getSelectedImageUrl()}
                className={includeText ? "outer" : ""}
              />
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
          {selectedImage && (
            <S.ImageInfo>
              <S.ImageName>
                Image name: <span>{selectedImage.name}</span>
              </S.ImageName>
              <S.ImageSize>
                Image size: <span>{selectedImage.size / 1000} KB</span>
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
              onChange={onIncludeHandler}
              value={includeText}
            />
            <S.IncludeLabel htmlFor="include-txt">
              Text outside the image
            </S.IncludeLabel>
          </S.TextInclude>
        </S.InformationContainer>
      </S.Body>
      <S.Footer>
        <S.NewMemeButton
          disabled={inputEnable}
          onClick={onGenerateButtonHandler}
        >
          Generate a new MEME
        </S.NewMemeButton>
        <S.ResetMemeButton
          disabled={inputEnable}
          onClick={onResetButtonHandler}
        >
          Reset MEME settings
        </S.ResetMemeButton>
      </S.Footer>
    </S.Container>
  );
}

export default App;
