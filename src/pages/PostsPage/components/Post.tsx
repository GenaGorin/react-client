import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { PostType } from "../../../store/reducers/PostsSlice";

type PostComponentType = {
    post: PostType
}

const Post = ({ post }: PostComponentType) => {

    return <Card
        hoverable
        style={{ width: 500, marginBottom: '20px' }}
        cover={<img alt="example" src={'http://localhost:5000/' + post.image} />}
    >
        <Meta title={post.title} description={post.content} />
    </Card>
}

export default Post;