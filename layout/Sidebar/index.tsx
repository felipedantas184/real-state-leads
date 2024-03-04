import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { Close, Container, Item, Logo, Menu, SButton, Wrapper } from "./SidebarStyles";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }:any) => {  
  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <Close onClick={toggle}>
          <FaTimes color="#B4B4B4" />
        </Close>
        <Logo href={'/'} ><Image src={'/assets/icons/Logo.png'} alt='' fill className={'image'} /></Logo>
        <Menu>
          <Item><a onClick={toggle} href="/">Instagram</a></Item>
          <Item><a onClick={toggle} href="/">Facebook</a></Item>
          <Item><a onClick={toggle} href="/">Email</a></Item>
        </Menu>
        <SButton onClick={toggle}><Link href={'/dashboard'}>Entrar em Contato</Link></SButton>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;