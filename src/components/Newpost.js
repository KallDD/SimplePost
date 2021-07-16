import axios from "axios"
import { useState } from "react"
import { Form, Container, Button } from "react-bootstrap"
import Posterror from "./Posterror"


const Newpost = ({addNewPost, baseURL}) => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const [errData, setErrData] = useState('')

    const postPost = () => {
        if (title === '' && content === '') {
            setErrMessage('both')
            setTimeout(() => setErrMessage(''), 5000)
            return
        }
        if (content === '') {
            setErrMessage('contentMissing')
            setTimeout(() => setErrMessage(''), 5000)
            return
        }
        if (title === '') {
            setErrMessage('titleMissing')
            setTimeout(() => setErrMessage(''), 5000)
            return
        }
        const post = { title: title, content: content }
        setTitle('')
        setContent('')

        axios
            .post(baseURL, post)
            .then(res => {
                addNewPost(res.data)
                setErrMessage('success')
                setTimeout(() => setErrMessage(''), 5000)
            })
            .catch(err => {
                setErrData(err.response.data.error)
                setErrMessage('short')
                setTimeout(() => setErrMessage(''), 5000)
                return
            })
        


    }

    return (
        <div >
            <Posterror errMessage={errMessage} errData={errData} />
            <Container style={{padding: "1em", }}>
                <h3 style={{color:"#fc7f03", textAlign:"center",}}><b>Create a new post</b></h3>
                <Form>
                    <Form.Group controlId="PostTitle.controlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value = {title}
                            type="text"
                            placeholder="Dog having zoomies"
                            onChange={(event) => setTitle(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="PostContent.constrolTexyarea1">
                        <Form.Label>Post content</Form.Label>
                        <Form.Control
                            value={content}
                            as="textarea"
                            placeholder="Today my dog ran around the house and caused a huge mess while having zoomies"
                            style={{ height: '200px' }}
                            onChange={(event) => setContent(event.target.value)} />
                    </Form.Group>
                </Form>
                <Button
                    style={{color:"#fc7f03"}}
                    disabled={!title && !content}
                    onClick={postPost}
                    variant="outline-dark" size="lg" >Post
                </Button>{' '}
            </Container>
        </div>
    )
}

export default Newpost