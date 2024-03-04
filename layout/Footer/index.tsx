import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, IWrap, IconsNav, Item, LogoWrapper, Nav, Wrapper } from "./styles";
import Image from "next/image";

const Footer = () => {
  return ( 
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Image src={'/assets/icons/Logo.png'} alt={'RAD Consultoria Aeronáutica'} fill className={'image'} />
        </LogoWrapper>
        <Nav>
          <IWrap><Item href={'/'}>Apartamentos</Item></IWrap>
          <IWrap><Item href={'/'}>Apartamentos</Item></IWrap>
          <IWrap><Item href={'/'}>Apartamentos</Item></IWrap>
        </Nav>
        <IconsNav>
          <a target='_blank' href='/' arial-label='Instagram'><FaInstagram size={24} color={'#F6F6F6'} /></a>
          <a target='_blank' href='/' arial-label='Facebook'><FaFacebook size={24} color={'#F6F6F6'} /></a>
          <a target='_blank' href='mailto:ricardo@tecdata.com.br' arial-label='Email'><FaEnvelope size={24} color={'#F6F6F6'} /></a>
        </IconsNav>
      </Wrapper>
    </Container>
   );
}
 
export default Footer;