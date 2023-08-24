import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import "./Experiences.css";

export const Experiences = () => {
    const work_experiences = [
        {
            title: "Work Experience 1",
            description: "Description 1",
            imgUrl: workExImg1,
        },
        {
            title: "Work Experience 2",
            description: "Description 2",
            imgUrl: workExImg2,
        },
        {
            title: "Work Experience 3",
            description: "Description 3",
            imgUrl: workExImg3,
        },
        {
            title: "Work Experience 4",
            description: "Description 4",
            imgUrl: workExImg4,
        },
        {
            title: "Work Experience 5",
            description: "Description 5",
            imgUrl: workExImg5,
        },
        {
            title: "Work Experience 6",
            description: "Description 6",
            imgUrl: workExImg6,
        }
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2>Experiences</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id="experience-tabs" defaultActiveKey="work">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="work">Work</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="personal">Personal Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="education">Education</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}