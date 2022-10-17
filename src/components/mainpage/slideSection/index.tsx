import React from "react";
import {
  ImgBox,
  SlideWrapper,
  SlideElement,
} from "../../../styles/mainpage/slideSection";
import { Text } from "../../common";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function SlideSection() {
  const slideList = [
    "https://image.fmkorea.com/files/attach/new/20180627/486616/53929437/1125408696/3d94f3de6495906341f10d941b69ec3c.jpeg",
    "https://cdn.clien.net/web/api/file/F01/11493442/9bf8a4bfc1ce2e.jpg",
    "https://photo.coolenjoy.co.kr/data/editor/1608/Bimg_20160830182658_rnuhpunc.jpg",
    "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMTAg/MDAxNjQzMTAyOTg0ODA5.q_DQWr2DSXnLYALcvh7u9o8DLZbD6OixJWa_Y7bwv4Yg.IHgg6s43ZkW0jRw3kKxr0WWrccnHJ0HflOYCbDVdGwog.JPEG.minziminzi128/IMG_7369.JPG?type=w800",
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202111/07/762ce144-d666-4790-8609-c78416910e88.jpg",
  ];

  return (
    <>
      <SlideWrapper>
        <Text size="h1" weight="bold">
          How We Affect
        </Text>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={100}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {slideList.map((item, idx): JSX.Element => {
            return (
              <SwiperSlide key={item} virtualIndex={idx}>
                <Text size="h4" weight="bold">
                  {idx}
                </Text>

                <img
                  style={{
                    width: "491px",
                    height: "325px",
                    borderRadius: "10px",
                  }}
                  src={item}
                  alt="cat"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SlideWrapper>
    </>
  );
}

export default SlideSection;
