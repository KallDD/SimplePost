import { Container } from "react-bootstrap"
import Moment from 'moment';

const Post = ({post}) => {
    Moment.locale('fi')
    return(
        <div>
            <Container style={{ 
                margin: "1em",
                padding: "0.5em",
                backgroundColor: "#FFFFFF",
                border: "3px solid #fc7f03",
                borderRadius:"20px"
                }}>
                <p style={{float:"right"}}> {Moment(post.date).format('HH.mm | D MMM YYYY')} </p>
                <b>{post.title}</b>
                <br></br>
                <p>{post.content}</p>
                
            </Container>
        </div>
    )

}





export default Post