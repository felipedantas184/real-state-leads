import { BsHouseDoor } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { ButtonTitle, Paragraph, SectionTitle, SmallParagraph, Topline } from "../Elements";
import { Container, FeatureBox, FeatureText, FirstHalf, ImageWrapper, SecondHalf, Wrapper } from "./styles";
import Image from "next/image";

const Presentation = () => {
  return (
    <Container>
      <Wrapper>
        <FirstHalf>
          <ImageWrapper>
            <Image src={'/assets/images/fotoperfil.png'} alt={'Jardim Vilmary'} fill className={'image'} />
          </ImageWrapper>
        </FirstHalf>
        <SecondHalf>
          <Topline>Corretora de Imóveis</Topline>
          <SectionTitle>Socorro Lima</SectionTitle>
          <Paragraph>Corretora Imobiliária com mais de 10 anos de experiência na venda e no aluguel de imóveis. Ajudo a realizar o sonho de dezenas de famílias.</Paragraph>
          <FeatureBox style={{ marginTop: 16 }} >
            <PiCertificate size={42} color="#3A0CA3" style={{ flex: 1 }} />
            <FeatureText>
              <ButtonTitle>+10 Anos de Experiência</ButtonTitle>
              <SmallParagraph>São mais de dez anos encontrando os melhores imóveis para meus clientes</SmallParagraph>
            </FeatureText>
          </FeatureBox>
          <FeatureBox>
            <BsHouseDoor  size={42} color="#3A0CA3" style={{ flex: 1 }} />
            <FeatureText>
              <ButtonTitle>Dezenas de Sonhos Realizados</ButtonTitle>
              <SmallParagraph>Área privativa de 26,09m², com quarto, sala e cozinha integrada e um banheiro social</SmallParagraph>
            </FeatureText>
          </FeatureBox>
        </SecondHalf>
      </Wrapper>
    </Container>
  );
}

export default Presentation;