import styled from "styled-components";

export const Container = styled.section`
  background-color: rgba(var(--third-color), 1);
  padding: 24px 0;
  background: linear-gradient(0deg, rgba(58,6,163,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%);
`
export const Wrapper = styled.div`
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
export const FirstHalf = styled.div`
	flex: 1;
  width: 100%;
  padding: 0 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const SecondHalf = styled.div`
	flex: 1;
  width: 100%;
  padding: 0 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 8px;
`
export const FeatureBox = styled.div`
  background-color: #FFFFFF;
  max-width: 450px;
  border-radius: 30px;
  padding: 20px;
  align-self: flex-start;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  box-shadow: 4px 10px 30px 0px rgba(0, 0, 0, 0.10);
`
export const FeatureText = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

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