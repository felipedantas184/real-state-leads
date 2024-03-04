import { BsTextareaResize } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { ButtonTitle, Paragraph, SectionTitle, SmallParagraph, Topline } from "../Elements";
import { Container, DoubleImage, FeatureBox, FeatureText, FirstHalf, ImageWrapper, SecondHalf, Wrapper } from "./styles";
import Image from "next/image";

const Building = () => {
  return (
    <Container>
      <Wrapper>
        <FirstHalf>
          <ImageWrapper>
            <Image src={'/assets/images/apartment04.jpg'} alt={'Jardim Vilmary'} fill className={'image'} />
          </ImageWrapper>
          <DoubleImage>
            <ImageWrapper>
              <Image src={'/assets/images/apartment03.jpg'} alt={'Jardim Vilmary'} fill className={'image'} />
            </ImageWrapper><ImageWrapper>
              <Image src={'/assets/images/apartment03.jpg'} alt={'Jardim Vilmary'} fill className={'image'} />
            </ImageWrapper>
          </DoubleImage>
        </FirstHalf>
        <SecondHalf>
          <Topline>Sobre o Empreendimento</Topline>
          <SectionTitle>Localização em uma área nobre de Teresina</SectionTitle>
          <Paragraph>Apartamento com área de 118,52 m², 3 quartos sendo 3 suítes, varanda, ampla sala de estar e jantar, lavabo, cozinha com área de serviço e 2 vagas de garagem.</Paragraph>
          <FeatureBox style={{ marginTop: 16 }} >
           <BsTextareaResize size={42} color="#3A0CA3" style={{flex: 1}} />
            <FeatureText>
              <ButtonTitle>Espaço Amplo</ButtonTitle>
              <SmallParagraph>Apartamento com área de 118,52 m², 3 quartos sendo 3 suítes</SmallParagraph>
            </FeatureText>
          </FeatureBox>
          <FeatureBox>
            <MdSecurity size={42} color="#3A0CA3" style={{flex: 1}} />
            <FeatureText>
              <ButtonTitle>Segurança e Lazer</ButtonTitle>
              <SmallParagraph>Portaria 24h e área com piscina, playground e quadra de futebol</SmallParagraph>
            </FeatureText>
          </FeatureBox>
        </SecondHalf>
      </Wrapper>
    </Container>
  );
}

export default Building;