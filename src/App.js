import * as S from "./styles";
import Text from "./pages/Text";

function App() {
  const textTitles = ["Top text", "Bottom text"];
  return (
    <S.Container>
      <S.Header>The MEME Generator</S.Header>
      <S.Body>
        <S.ImageContainer>
          <S.ImageLabel for="up-img">
            Upload an image from your computer
          </S.ImageLabel>
          <S.ImageInput id="up-img" type="file" />
          <S.ImageInfo>
            <S.ImageName>Image name:</S.ImageName>
            <S.ImageSize>Image size:</S.ImageSize>
          </S.ImageInfo>
        </S.ImageContainer>
        <S.InformationContainer>
          <S.InformationTitle>Set your text here</S.InformationTitle>
          {textTitles.map((textTitle, index) => (
            <Text key={index} textTitle={textTitle} />
          ))}
          <S.TextInclude>
            <S.IncludeInput type="checkbox" id="include-txt" />
            <S.IncludeLabel for="include-txt">
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
