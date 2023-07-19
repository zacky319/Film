import styles from "./About.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import {
  Icon,
  Container,
  Section,
  Collapsible,
  CollapsibleItem,
  Slider,
  Slide,
  Caption,
} from "react-materialize";
const cx = classNames.bind(styles);

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className={cx("contact-container")}>
      <Container id="about">
        <Section
          className={cx("contact-container1")}
        >
          <Slider
            fullscreen={false}
            options={{
              duration: 1000,
              height: 400,
              indicators: true,
              interval: 2000,
            }}
          >
            <Slide
              image={
                <img
                  alt=""
                  src="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                  style={{ filter: "brightness(50%)" }}
                />
              }
            >
              <Caption placement="center">
                <h3>Hi there!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Welcome to Film.
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  alt=""
                  src="https://kenh14cdn.com/thumb_w/650/2016/photo-1-1483034771542.jpg"
                  style={{ filter: "brightness(50%)" }}
                />
              }
            >
              <Caption placement="left">
                <h3>Who are we?</h3>
                <h5 className="light grey-text text-lighten-3">
                  Only the geekiest of movie geeks.
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  alt=""
                  src="https://cdn.doctailieu.com/tu-vi/images/2019/02/19/nhung-cau-noi-hay-trong-hunter-x-hunter.jpg"
                  style={{ filter: "brightness(50%)" }}
                />
              }
            >
              <Caption placement="right">
                <h3>Where are we?</h3>
                <h5 className="light grey-text text-lighten-3">
                  All over this very Earth.
                </h5>
              </Caption>
            </Slide>
            <Slide
              image={
                <img
                  alt=""
                  src="https://vnw-img-cdn.popsww.com/api/v2/containers/file2/cms_topic/doraemons9_05_seriesdetailimagemobile-80424f74d030-1609395371290-iZgELVcX.png?v=0"
                  style={{ filter: "brightness(50%)" }}
                />
              }
            >
              <Caption placement="center">
                <h3>And our mission?</h3>
                <h5 className="light grey-text text-lighten-3">
                  To bring you only the best cinema has to offer!
                </h5>
              </Caption>
            </Slide>
          </Slider>
          <Collapsible accordion popout>
            <CollapsibleItem
              expanded={true}
              header="The Team"
              icon={<Icon>group</Icon>}
              node="div"
            >
              From the hunble beginning of just the venerable Sir Alt
              and his cohorts, we have since grown into legion,
              comprising of dwellers of all realms.
            </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header="Our Mission"
              icon={<Icon>location_on</Icon>}
              node="div"
            >
              To mend the schism that had torn our community - the
              community of movie geeks - apart. And from it we shall
              rise anew.
            </CollapsibleItem>
            <CollapsibleItem
              expanded={false}
              header="Wanna join us?"
              icon={<Icon>whatshot</Icon>}
              node="div"
            >
              Bewarn! Abandon all hope ye who enter here; once a geek,
              always a geek, there is no going back... But if you're
              up for it, just send us an email.
            </CollapsibleItem>
          </Collapsible>
        </Section>
      </Container>
    </div>
  );
}
