import Image from "next/image";
import { SectionTitle } from "../Elements";
import { BigImageWrapper, Container, GalleryWrapper, ImageWrapper, Wrapper } from "./styles";
import { GalleryImages } from "./galleryData";
import { useState } from "react";

const Gallery = () => {
  type Image = {
    id: number,
    url: string,
    alt: string,
  }

  const [selectedImage, setSelectedImage] = useState<Image>()

  return (
    <Container>
      <Wrapper>
        <SectionTitle style={{textAlign: 'center'}} >Perfeito para Morar</SectionTitle>
        {(selectedImage !== undefined) ? (
          <BigImageWrapper><Image src={selectedImage?.url} alt={'Jardim Vilmary'} fill className={'image'} /></BigImageWrapper>
        ) : (
          <></>
        ) }
        <GalleryWrapper>
          {GalleryImages.map((item) => (
            <ImageWrapper onClick={() => setSelectedImage(item)} key={item.id} ><Image src={item.url} alt={item.alt} fill className={'image'} /></ImageWrapper>
          ))}
        </GalleryWrapper>
      </Wrapper>
    </Container>
  );
}

export default Gallery;