import { useState } from 'react';
import { Masonry, Block, Img, Description } from '../../styles/activities/acivities';
import ModalWindow from './MasonryBox_Modal';
export interface ImageSrc {
  url: string[];
  title: string;
}

const imgSrc: ImageSrc[] = [
  {
    url: ['https://w0.peakpx.com/wallpaper/76/665/HD-wallpaper-wernigerode-wohltaeterbrunnen-beautiful-square-german-city-cityscape-saxony-anhalt-germany.jpg'],
    title: 'Hello?'
  },
  {
    url: ['https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80'],
    title: 'We'
  },
  {
    url: ['https://i.pinimg.com/originals/d7/1c/52/d71c521ccd7baf5bd076c27ecdf769a2.jpg'],
    title: 'Welcome'
  },
  {
    url: ['https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzY4Njc0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'],
    title: 'Network Leader!'
  },
  {
    url: ['https://c0.wallpaperflare.com/preview/1/703/828/fighter-jet-airshow.jpg'],
    title: 'Are'
  },
  {
    url: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNecYSJLywI-eQKsTm3c4Mi5MnurISJosUnQ&usqp=CAU'],
    title: 'To be'
  },
  {
    url: ['https://i.pinimg.com/736x/84/af/c3/84afc369022cf56f1d8957aac5bb4aa0.jpg'],
    title: 'Here'
  },
]//이미지소스 데이터, 나중에 데어터 폴더생기면 분리예정
const MasonryBox = () => {
  const [modal, setModal] = useState(false);
  const onClick = () => {
    setModal(!modal);
  }
  return (
    <Masonry>
      {
        imgSrc.map((item, index) => (
          <>
            <Block key={index} onClick={onClick}>
              <Img src={item.url[0]} />
              <Description>{item.title}</Description>
            </Block>
          </>
        ))
      }
      {
        modal
          ? <ModalWindow modal={modal} setModal={onClick} />
          : null
      }
    </Masonry>
  )
}
export default MasonryBox;