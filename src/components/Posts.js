import { __ } from "@wordpress/i18n";
import Post from "./Post";
import { Spinner } from '@wordpress/components';
import { useContext } from "@wordpress/element";
import { PostsDetailContext } from "../Context/postsDetail.context";
import { getPostsStyles } from "../Context/postsStyles.context";
const Posts = () => {

    const postDetails = useContext( PostsDetailContext );
    const { posts, isLoading, totalPosts } = postDetails;
    if ( isLoading ) {
        return <div className="sample-block-post-block-loading"><Spinner/>{ __( 'Loading...', 'sample-block' ) }</div>;
    }

    const hasPosts = posts && posts.length > 0;
    if ( !hasPosts ) {
        return (
            <div className="sample-block-post-block-loading">
                { totalPosts > 0 ? <Spinner/> : __( 'No post found.', 'sample-block' ) }
            </div>
        );
    }

    const postStyle = getPostsStyles();
    const { postsLayout } = postStyle;

    return (
        <>
            <div className="container">
                <div className="gridlist-container">
                    <div className={ `gridlist ${ postsLayout === 'grid' ? 'gridview' : 'listview' }` }>
            { posts.map( ( post, index ) => {
                return <Post key={ index } post={ post }/>;
            } ) }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;