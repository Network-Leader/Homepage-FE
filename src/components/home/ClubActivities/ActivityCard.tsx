import Image, { StaticImageData } from 'next/image';
import React from 'react';
import {
  ActivityCardBox,
  ActivityContentBox,
  ActivityImageBox,
} from '../../../styles/home/ActivityCards';
import H3 from '../../common/H3';

interface ActivityCardProps {
  image: string | StaticImageData;
  width: number;
  height: number;
  title: string;
  content: string;
}

const ActivityCard = ({
  image,
  width,
  height,
  title,
  content,
}: ActivityCardProps) => (
  <React.Fragment>
    <ActivityCardBox width={width} height={height}>
      <ActivityImageBox width={width} height={height}>
        <Image src={image} width={width} height={height} />
      </ActivityImageBox>
      <ActivityContentBox
        width={width}
        height={height}
        backgroundColor={'grey'}
        color={'white'}
        top={height}>
        <H3>{title}</H3>
        {content}
      </ActivityContentBox>
    </ActivityCardBox>
  </React.Fragment>
);

export default ActivityCard;
