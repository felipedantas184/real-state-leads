import { FaBars } from "react-icons/fa";
import { Container, ImageWrapper, Wrapper } from "./styles";
import Image from "next/image";

const Navbar = ({toggle}:any) => {
  return ( 
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={'/assets/icons/Logo.png'} alt="" fill className={'image'}/>
        </ImageWrapper>
        <div onClick={toggle} >
        <FaBars size={32} color='#E4E4E4' style={{cursor: 'pointer'}} />
        </div>
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;