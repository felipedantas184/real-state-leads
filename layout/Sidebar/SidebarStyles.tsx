import Link from "next/link";
import styled from "styled-components";

interface Props {
  isOpen: any
}

export const Container = styled.nav<Props>`
  background-color: rgba(var(--primary-color), 1);
  font-family: 'Poppins';
  top: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  transition: 0.7s ease-in-out;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const Close = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none
`
export const Logo = styled(Link)`
  position: relative;
  width: 100%;
  max-width: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`
export const Menu = styled.ul`
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 60px);
`
export const Item = styled.li`
  color: #F1F1F1;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  user-select: none;
  &:hover {
    color: #EB5757;
    transition: 0.2s ease-in-out;
  }
  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #EB5757;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`


export const BWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const SButton = styled.button`
  background-color: #F1F1F1;
  color: #13131A;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  font-family: 'Poppins', sans-serif;
  height: 40px;
  width: 200px;
  border-radius: 8px;
  border: 0;
  transition: 0.5s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover, &:focus {
    background-color: #EB5757;
    color: #F1F1F1
  }
`