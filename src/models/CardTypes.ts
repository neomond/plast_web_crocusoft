export interface CardData {
  cardTitle?: string;
  cardDescription?: string;
  cardImageSrc?: string;
  cardWeight?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  titleInstrument?: string;
  descriptionInstrument?: string;
  imageSrcInstrument?: string;
}

export interface CardProps {
  card: CardData;
}
