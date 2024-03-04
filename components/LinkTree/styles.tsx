import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
  background-color: rgba(var(--primary-color), 1);
  padding: 24px 0;
  min-height: 100vh;
  background: linear-gradient(45deg, rgba(58,6,163,1) 0%, rgba(63,94,251,1) 100%);
`
export const Wrapper = styled.div`
	max-width: 960px;
  min-height: 80vh;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
  gap: 24px;
`
export const Heading = styled.div`
  width: 100%;
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const Logo = styled.div`
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
export const Title = styled.h1`
  color: #F6F6F6;
  font-size: 18px;
  font-weight: 600;
`
export const Subtitle = styled.h2`
  color: #E4E4E4;
  font-size: 16px;
  font-weight: 500;
`
export const Menu = styled.ul`
  width: 100%;
	list-style: none;
  padding: 8px;

  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const ItemWrapper = styled(Link)`
  background-color: #F6F6F6;
  width: 100%;
  padding: 8px;
  border-radius: 10px;

  display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
  gap: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: transform 0.5s ease-in-out;

  &:hover {
      transform: scale(1.05);
    }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 64px;

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
export const ItemTitle = styled.h3`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
`
export const Social = styled.ul`
	list-style: none;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
