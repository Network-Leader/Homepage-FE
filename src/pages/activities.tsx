import { useState } from 'react';
import { Wrapper2, Masonry, Block, Img } from '../styles/acivities';

const imgSrc: string[] = [
  'https://w0.peakpx.com/wallpaper/76/665/HD-wallpaper-wernigerode-wohltaeterbrunnen-beautiful-square-german-city-cityscape-saxony-anhalt-germany.jpg',
  'https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80',
  'https://i.pinimg.com/originals/d7/1c/52/d71c521ccd7baf5bd076c27ecdf769a2.jpg',
  'https://w0.peakpx.com/wallpaper/324/696/HD-wallpaper-city-nature-sunset-toronto-vertical.jpg',
  'https://c0.wallpaperflare.com/preview/1/703/828/fighter-jet-airshow.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNecYSJLywI-eQKsTm3c4Mi5MnurISJosUnQ&usqp=CAU',
  'https://i.pinimg.com/736x/84/af/c3/84afc369022cf56f1d8957aac5bb4aa0.jpg'
]//이미지소스 데이터, 나중에 데어터 폴더생기면 분리예정

export default function Activities() {
  const [isHover, setIsHover] = useState(false);
  const onHover = () => {
    setIsHover(!isHover);
  }
  const onMouseLeave = () => {
    setIsHover(!isHover);
  }
  return (
    <Wrapper2>
      <Masonry>
        {
          imgSrc.map((item, index) => (
            <Block key={index} onMouseEnter={onHover} onMouseLeave={onMouseLeave} >
              <Img src={item} />
            </Block>
          ))
        }
      </Masonry>
    </Wrapper2 >
  )
}