import { useState } from 'react';
import { Wrapper2, Masonry, Block, Img, Description } from '../styles/acivities';

interface ImageSrc {
  url: string;
  description: string;
}

const imgSrc: ImageSrc[] = [
  {
    url: 'https://w0.peakpx.com/wallpaper/76/665/HD-wallpaper-wernigerode-wohltaeterbrunnen-beautiful-square-german-city-cityscape-saxony-anhalt-germany.jpg',
    description: 'Hello?'
  },
  {
    url: 'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80',
    description: 'We'
  },
  {
    url: 'https://i.pinimg.com/originals/d7/1c/52/d71c521ccd7baf5bd076c27ecdf769a2.jpg',
    description: 'Are'
  },
  {
    url: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzY4Njc0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
    description: 'Network Leader'
  },
  {
    url: 'https://c0.wallpaperflare.com/preview/1/703/828/fighter-jet-airshow.jpg',
    description: 'Welcome'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNecYSJLywI-eQKsTm3c4Mi5MnurISJosUnQ&usqp=CAU',
    description: 'To be'
  },
  {
    url: 'https://i.pinimg.com/736x/84/af/c3/84afc369022cf56f1d8957aac5bb4aa0.jpg',
    description: 'Here'
  },
]//이미지소스 데이터, 나중에 데어터 폴더생기면 분리예정
// 오브젝트로 바꾸고, url,text삽입해서 수정하기 =>
export default function Activities() {
  const [isTrue, setIsTrue] = useState(false);
  const onHover = () => {
    setIsTrue(true);
  };
  const onMouseLeave = () => {
    setIsTrue(false);
  };
  console.log(isTrue)
  return (
    <Wrapper2>
      <Masonry>
        {
          imgSrc.map((item, index) => (
            <>
              <Block key={index} onMouseEnter={onHover} onMouseLeave={onMouseLeave}>
                <Description>
                  {
                    isTrue
                      ? item.description
                      : null
                  }
                </Description>
                <Img src={item.url} />
              </Block>
            </>
          ))
        }
      </Masonry>
    </Wrapper2 >
  )
}