import fortuneCat1 from '../../assets/images/fortune-cat1.png';
import fortuneCat2 from '../../assets/images/fortune-cat2.png';
import fortuneCat3 from '../../assets/images/fortune-cat3.png';
import fortuneCat4 from '../../assets/images/fortune-cat4.png';
import fortuneCat5 from '../../assets/images/fortune-cat5.png';

export interface FortuneCatImg {
  src: string;
  alt: string;
}

export const fortuneCats: FortuneCatImg[] = [
  {
    src: fortuneCat1,
    alt: '운세 고양이 이미지 1',
  },
  {
    src: fortuneCat2,
    alt: '운세 고양이 이미지 2',
  },
  {
    src: fortuneCat3,
    alt: '운세 고양이 이미지 3',
  },
  {
    src: fortuneCat4,
    alt: '운세 고양이 이미지 4',
  },
  {
    src: fortuneCat5,
    alt: '운세 고양이 이미지 5',
  },
];
