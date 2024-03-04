import Image from "next/image";
import { FlexBox, HeroTitle, Paragraph, Topline } from "../Elements";
import Form from "../Form";
import { Container, FirstHalf, ImageWrapper, SecondHalf, Wrapper } from "./styles";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <FirstHalf>
          <Topline align="left">Apartamentos</Topline>
          <HeroTitle align="left">Edifício <br/>Jardim Vilmary</HeroTitle>
          <Paragraph align="left">Aproveite todo o conforto de um prédio moderno e bem localizado! O edifício Jardim Vilmary é o lugar perfeito para morar!</Paragraph>
          <ImageWrapper>
            <Image src={'/assets/images/apartment01.jpg'} alt={'Jardim Vilmary'} fill className={'image'} />
          </ImageWrapper>
        </FirstHalf>
        <SecondHalf style={{alignItems: 'flex-end'}} >
          <Form/>
        </SecondHalf>
      </Wrapper>
    </Container>
  );
}

export default Hero;
