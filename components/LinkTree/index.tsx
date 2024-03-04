import Image from "next/image";
import { Container, Heading, ImageWrapper, ItemTitle, ItemWrapper, Logo, Menu, Social, Subtitle, Title, Wrapper } from "./styles";
import { FaEnvelope, FaFacebook, FaInstagram, FaShare } from "react-icons/fa";

const LinkTree = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Logo><Image src={'/assets/icons/Logo.png'} alt='' fill className={'image'} /></Logo>
          {/** <Title>Socorro Lima</Title>
          <Subtitle>Corretora Imobiliária</Subtitle> */}
        </Heading>
        <Menu>
          <Title style={{alignSelf: 'flex-start'}}>Apartamentos</Title>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
        </Menu>
        <Menu>
          <Title style={{alignSelf: 'flex-start'}}>Casas de Alto Padrão</Title>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
        </Menu>
        <Menu>
          <Title style={{alignSelf: 'flex-start'}}>Casas de Alto Padrão</Title>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
          <ItemWrapper href={'/'} >
            <ImageWrapper><Image src={'/assets/images/apartment04.jpg'} alt='' fill className={'image'} /></ImageWrapper>
            <ItemTitle>Casa Terras Alphaville</ItemTitle>
          </ItemWrapper>
        </Menu>
        <Social>
          <a target='_blank' href='/' arial-label='Instagram'><FaInstagram size={24} color={'#F6F6F6'} /></a>
          <a target='_blank' href='/' arial-label='Facebook'><FaFacebook size={24} color={'#F6F6F6'} /></a>
          <a target='_blank' href='mailto:ricardo@tecdata.com.br' arial-label='Email'><FaEnvelope size={24} color={'#F6F6F6'} /></a>
        </Social>
      </Wrapper>
    </Container>
  );
}

export default LinkTree;