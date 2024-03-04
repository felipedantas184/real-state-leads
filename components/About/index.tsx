import { LuAlarmClock } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { ButtonTitle, Paragraph, PrimaryButton, SectionTitle, SmallParagraph, Topline } from "../Elements";
import { Container, FeatureBox, FeatureText, FirstHalf, ImageWrapper, SecondHalf, Wrapper } from "./styles";
import Form from "../Form";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <Wrapper>
        <FirstHalf>
          <Topline>OFERTA POR TEMPO LIMITADO</Topline>
          <SectionTitle>Não Perca Mais Tempo</SectionTitle>
          <Paragraph>Aproveite a super oferta de lançamento e não deixe o seu sonho da casa própria para depois! Preencha seus dados para entrarmos em contato!</Paragraph>
          <FeatureBox style={{ marginTop: 16 }} >
            <MdPeopleAlt size={42} color="#3A0CA3" style={{ flex: 1 }} />
            <FeatureText>
              <ButtonTitle>Conheça o Imóvel</ButtonTitle>
              <SmallParagraph>Marcaremos uma visita ao imóvel para te mostrar de perto tudo que ele te reserva</SmallParagraph>
            </FeatureText>
          </FeatureBox>
          <FeatureBox>
            <LuAlarmClock size={42} color="#3A0CA3" style={{ flex: 1 }} />
            <FeatureText>
              <ButtonTitle>Últimas Unidades</ButtonTitle>
              <SmallParagraph>A oferta continua, mas restam poucas unidades com essa condição especial</SmallParagraph>
            </FeatureText>
          </FeatureBox>
        </FirstHalf>
        <SecondHalf style={{alignItems: 'flex-end'}} >
          <Form />
        </SecondHalf>
      </Wrapper>
    </Container>
  );
}

export default About;