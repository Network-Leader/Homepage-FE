import { BlogNewsSection } from "../../../styles/about/howWeAffect";
import { Text, Image } from "../../common";
import BlogNewsImg1 from "../../../assets/blog_news1.png";
import BlogNewsImg2 from "../../../assets/blog_news2.png";
import BlogNewsImg3 from "../../../assets/blog_news3.png";

const BlogNews = () => {
  return (
    <BlogNewsSection>
      <div className="title">
        <Text size="h1" weight="bold">
          Blog&News
        </Text>
      </div>
      <div className="contentBox">
        <div className="content1">
          <Image src={BlogNewsImg1} alt="image1" />
          <div className="description">
            <Text size="large" lineheight="30.59px">
              클래스는 정기적으로 진행되는 강의입니다.
              <br />한 분야에 특화된 강사가 여러 명을 알려주는
              <br />
              형식으로, 알고리즘이나 기초 프로그래밍 교육 등<br />
              다양한 분야의 강의가 진행되고 있습니다.
            </Text>
          </div>
          <div className="subtitle">
            <Text size="large" weight="bold">
              '수강신청 망하는 법' 특강 소식
            </Text>
          </div>
          <Text size="medium" weight="bold" color="grey">
            2022.08.16
          </Text>
        </div>
        <div className="content2">
          <Image src={BlogNewsImg2} alt="image2" />
          <div className="description">
            <Text size="large" lineheight="30.59px">
              스터디는 정기적으로 진행되는 모임입니다.
              <br />한 분야에 관심이 많은 동아리 부원들끼리 모여
              <br />
              책, 강의를 정해 주기적으로 만나 의견을 교환하고
              <br />
              코드를 리뷰하면서 진행되고 있습니다.
            </Text>
          </div>
          <div className="subtitle">
            <Text size="large" weight="bold">
              '수강신청 망하는 법' 특강 소식
            </Text>
          </div>
          <Text size="medium" weight="bold" color="grey">
            2022.08.16
          </Text>
        </div>
        <div className="content3">
          <Image src={BlogNewsImg3} alt="image3" />
          <div className="description">
            <Text size="large" lineheight="30.59px">
              특강, 세미나 그리고 동아리 부원들끼리 팀을 이뤄
              <br />
              참가하는 공모전, 경진대회를 통해
              <br />
              새로운 창조적 가치를 발굴하고 자체 역량을
              <br />
              강화할 수 있습니다.
            </Text>
          </div>
          <div className="subtitle">
            <Text size="large" weight="bold">
              '수강신청 망하는 법' 특강 소식
            </Text>
          </div>
          <Text size="medium" weight="bold" color="grey">
            2022.08.16
          </Text>
        </div>
      </div>
    </BlogNewsSection>
  );
};

export default BlogNews;
