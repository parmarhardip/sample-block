import { getPostsStyles } from "../Context/postsStyles.context";
import defaultImg from '../images/default-post.png';


const Post = ( props ) => {

    const postStyle = getPostsStyles();
    const { postsLayout } = postStyle;

    const {post} = props;
console.log(post);
    const postTitle = post.title.rendered;
    const postLink = post.link;
    const featuredImg = post.featured_img ? post.featured_img : defaultImg;

    return (
        <div className="item is-collapsed">
            <div className="item-container ">
                <div className="item-cover">
                    <div className="avatar">
                        <img src={ featuredImg }/>
                    </div>
                </div>
                <div className="item-content">
                    <a className="subhead-1 activator" href={postLink}>{ postTitle }</a>
                </div>
            </div>
        </div>
    );
}

export default Post;