import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
  background-color: rgba(var(--primary-color), 1);
  padding: 24px 0;
`
export const Wrapper = styled.div`
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
  }
`
export const LogoWrapper = styled.div`
 position: relative;
  width: 100%;
  max-width: 200px;

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
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const Nav = styled.ul`
	list-style: none;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`
export const IconsNav = styled.ul`
	list-style: none;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
export const IWrap = styled.li`
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #E1E1E1;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`
export const Item = styled(Link)`
  font-size: 16px;
	font-weight: 500;
	color: #E1E1E1;

  display: flex;
  flex-direction: row;
  align-items: center;	
  gap: 8px;
  
  cursor: pointer;
	transition: all 0.2s ease-in-out;
`