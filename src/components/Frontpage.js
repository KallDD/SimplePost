import Posts from "./Posts"
import { Container, Col, Row } from "react-bootstrap"
import Newpost from "./Newpost"

const Frontpage = ({ posts, addNewPost, showPosts, baseURL  }) => {
    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        <Posts posts={posts} showPosts={showPosts}/>
                    </Col>
                    <Col><Newpost addNewPost={addNewPost} baseURL={baseURL} /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Frontpage