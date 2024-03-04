import { PiSelectionBackground } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { ButtonTitle, Paragraph, SectionTitle, SmallParagraph, Topline } from "../Elements";
import { Container, DoubleImage, FeatureBox, FeatureText, FirstHalf, ImageWrapper, SecondHalf, Wrapper } from "./styles";
import Image from "next/image";

const Apartment = () => {
  return (
    <Container>
      <Wrapper>
        <FirstHalf>
          <Topline>Opções de Apartamento</Topline>
          <SectionTitle>Escolha o Apartamento Perfeito para Você</SectionTitle>
          <Paragraph>Dois modelos de apartamento para você poder escolher o que melhor atende as suas necessidades!</Paragraph>
          <FeatureBox style={{ marginTop: 16 }} >
            <PiSelectionBackground size={42} color="#3A0CA3" style={{ flex: 1 }} />
            <FeatureText>
              <ButtonTitle>Studios de 26,09m²</ButtonTitle>
              <SmallParagraph>Área privativa de 26,09m², com quarto, sala e cozinha integrada e um banheiro social</SmallParagraph>
            </FeatureText>
          </FeatureBox>
          <FeatureBox>
            <BiArea size={42} color="#3A0CA3" style={{ flex: 1 }} />
            <FeatureText>
              <ButtonTitle>Studios de 29,09m²</ButtonTitle>
              <SmallParagraph>Área privativa de 29,09m², com quarto, sala e cozinha integrada e um banheiro social</SmallParagraph>
            </FeatureText>
          </FeatureBox>
        </FirstHalf>
        <SecondHalf>
          <ImageWrapper>
            <Image src={'/assets/images/apartment03.jpg'} alt={'Jardim Vilmary'} fill className={'image'} />
          </ImageWrapper>
          <DoubleImage>
            <ImageWrapper>
              <Image src={'/assets/images/apartment03.jpg'} alt={'Jardim Vilmary'} fill className={'image'} />
            </ImageWrapper><ImageWrapper>
              <Image src={'/assets/images/apartment03.jpg'} alt={'Jardim Vilmary'} fill className={'image'} />
            </ImageWrapper>
          </DoubleImage>
        </SecondHalf>
      </Wrapper>
    </Container>
  );
}

export default Apartment;