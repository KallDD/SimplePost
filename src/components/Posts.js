import { Container } from "react-bootstrap"
import Post from "./Post"

const Posts = ({ posts, showPosts }) => {
    const postList = posts.slice(showPosts).reverse().map(e => <Post key={e.id} post={e} />)
    return (
        <Container>
            <ul>
                {postList}
            </ul>
        </Container>

    )
}

export default Posts