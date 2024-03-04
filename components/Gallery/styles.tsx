import styled from "styled-components"

export const Container = styled.section`
  background-color: #FFFFFF;
  padding: 24px 0;
`
export const Wrapper = styled.div`
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 275px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  cursor: zoom-in;

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
    }
  }
`
export const BigImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;
  max-height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;


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
    }
  }
`