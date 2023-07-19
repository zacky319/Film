import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Carousel } from "react-responsive-carousel";
import { Fragment, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const cx = classNames.bind(styles);

export default function Home() {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Fragment>
      <div className={cx("contact-container")}>
        <div className={cx("toan")}>
          <Carousel
            autoPlay={true}
            interval={4000}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoFocus={true}
            emulateTouch={true}
            //chế độ trung tâm
            // centerMode={true}
          >
            <img
              alt=""
              src="https://cdnimg.vietnamplus.vn/uploaded/hotnnz/2019_12_30/phimdienanhfastfurioushobbsandshaw.jpg"
            />
            <img
              alt=""
              src="https://skypeenglish.vn//wp-content/uploads/2019/12/nhung-bo-phim-giup-luyen-nghe-tieng-anh-2.png"
            />
            <img
              alt=""
              src="https://s3.ap-southeast-1.amazonaws.com/sansangduhoc.vn/wp-content/uploads/2017/09/Action-Films.jpg"
            />
            <img
              alt=""
              src="https://ik.imagekit.io/tvlk/blog/2022/07/phim-hanh-dong-my-8-1024x576.jpeg?tr=dpr-2,w-675"
            />
            <img
              alt=""
              src="https://dep365.com/wp-content/uploads/2022/11/phim-hanh-dong-my-11.jpg"
            />
            <img alt="" src="https://i.imgur.com/OJvllWR.jpg" />
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
}