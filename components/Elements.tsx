import styled from "styled-components";

interface Flex {
  flexDirection?: 'row' | 'column';
  justify?: 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';
  align?: 'center' | 'flex-start' | 'flex-end';
  flex?: number;
  gap?: string;
}

interface Text {
  align?: 'left' | 'center' | 'right';
}

export const Container = styled.section`
  background-color: rgba(var(--third-color), 1);
  padding: 24px 0;
`
export const Wrapper = styled.div<Flex>`
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: ${props => props.flexDirection};
	justify-content: ${props => props.justify};
	align-items: ${props => props.align};
  gap: ${props => props.gap};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8px;
  }
`
export const FlexBox = styled.div<Flex>`
  width: 100%;
  display: flex;
	flex-direction: ${props => props.flexDirection};
	justify-content: ${props => props.justify};
	align-items: ${props => props.align};
  flex: ${props => props.flex};
  gap: ${props => props.gap};
`
export const HeroTitle = styled.h1<Text>`
  color: rgb(var(--text-primary));
  text-align: left;
  width: 100%;
  font-size: 54px;
  font-weight: 600;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`
export const SectionTitle = styled.h2<Text>`
  color: rgb(var(--text-secondary));
  text-align: left;
  font-size: 40px;
  font-weight: 500;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 28px
  }
`
export const ButtonTitle = styled.h5`
  color: rgb(var(--primary-color));
  text-align: left;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 16px
  }
`
export const SmallButtonTitle = styled.h5`
  color: rgb(var(--primary-color));
  text-align: left;
  font-size: 12px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 12px
  }
`
export const Paragraph = styled.p<Text>`
  color: rgb(var(--text-secondary));
  text-align: left;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 13px
  }
`
export const SmallParagraph = styled.p<Text>`
  color: rgb(var(--text-secondary));
  text-align: left;
  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 12px
  }
`
export const Highlight = styled.p<Text>`
  color: rgb(var(--primary-color));
  text-align: left;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 13px
  }
`
export const Topline = styled.span<Text>`
  width: 100%;
  color: rgb(var(--primary-color));
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 16px
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #000;

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
export const PrimaryButton = styled.button`
  padding: 8px 16px;
  background-color: rgb(var(--primary-color));
  color: #FFFFFF;
  border: none;
  font-family: "Poppins";
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`
export const WppButton = styled.a`
  position: fixed;
  right: 16px;
  bottom: 16px;

  background-color: #1cac51;
  color: #F6F6F6;
  border-radius: 16px;
  padding: 12px;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 12px;

  text-decoration: none;
  transition: all 500ms;
  user-select: none;
  -webkit-user-select: none;

  &:hover, &:focus {
    background-color: #13131A;
    color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:active {
    background-color: #13113A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`