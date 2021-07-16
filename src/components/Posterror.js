import { Alert } from "react-bootstrap"

const Posterror = ({errMessage, errData}) => {
    
    if(errMessage === '' ){
        return(
        <div>

        </div>
        )
    }
    if(errMessage === 'both' ){
        return(
        <div>
            <Alert variant="danger">
                <Alert.Heading>Remember to enter title and content!</Alert.Heading>
                <p>What are you doing??? You can't make an empty post!</p>
            </Alert>
        </div>
        )
    }
    if(errMessage === 'contentMissing' ){
        return(
        <div>
            <Alert variant="danger">
                <Alert.Heading>Remember to enter content!</Alert.Heading>
                <p>Post without content.... intresting.</p>
            </Alert>
        </div>
        )
    }
    if(errMessage === 'titleMissing' ){
        return(
        <div>
            <Alert variant="danger">
                <Alert.Heading>Remember to enter title!</Alert.Heading>
                <p>Well, well, well, what is this about?? Well i don't know because it doesn't have a TITLE!!</p>
            </Alert>
        </div>
        )
    }
    if(errMessage === 'success' ){
        return(
        <div>
            <Alert variant="success">
                <Alert.Heading>Success!! Your post has been posted!!</Alert.Heading>
                <p>Good work! You made a valid post.</p>
            </Alert>
        </div>
        )
    }
    if(errMessage === 'short' ){
        return(
        <div>
            <Alert variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>{errData}</p>
            </Alert>
        </div>
        )
        }
}

export default Posterror