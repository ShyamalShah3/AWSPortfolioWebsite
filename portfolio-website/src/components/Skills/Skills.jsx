import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../../assets/img/skills/meter1.svg";
import meter2 from "../../assets/img/skills/meter2.svg";
import meter3 from "../../assets/img/skills/meter3.svg";
import backgroundLeft from "../../assets/img/skills/color-sharp-left.png";
import backgroundRight from "../../assets/img/skills/color-sharp-right.png";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";

const SkillItem = ({ skill, image }) => {
    return (
        <div className="item">
            <img src={image } alt="Image" />
            <h5>{ skill }</h5>
        </div>
    );
};

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const skills = [
        { name: "Web Development", image: meter1 },
        { name: "Brand Identity", image: meter2 },
        { name: "Logo Design", image: meter3 },
        { name: "HTML", image: meter2 },
    ];

    const skillItems = skills.map((skill,index) => (
        <SkillItem skill={skill.name} image={skill.image} key={index} />
    ));

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} autoPlay={true} infinite={true} className="owl-carousel owl-theme skill-slider">
                                {skillItems}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={backgroundLeft} alt="Image" />
            <img className="background-image-right" src={backgroundRight} alt="Image" />
        </section>
    )
}