import { getPostsStyles } from "../Context/postsStyles.context";


const Post = ( props ) => {

    const postStyle = getPostsStyles();
    const { postsLayout } = postStyle;

    const postStatusLabels = {
        public: 'Public',
        private: 'Private',
        hidden: 'Hidden',
    }
    const getPostStatus = ( status ) => {
        return postStatusLabels[status] || '';
    }

    const getPostsMetas = ( post ) => {
        let metas = [];
        if ( getPostStatus( post.status ) ) {
            metas.push( getPostStatus( post.status ) );
        }
        if ( post.members_count ) {
            metas.push( post.members_count + ' Members' );
        }
        return metas
    }

    const postTitle = props.post.title.rendered;
    const postDescription = props.post.excerpt.rendered;
    const postLink = props.post.link;

    return (
        <div className="sample-block-post-block-item">
            { postsLayout === 'grid' && 0 !== props.post.featured_media && (
                <div className="sample-block-post-block-item-cover">
                    <img src={ props.post.featured_media } alt={ postTitle }/>
                </div>
            ) }
            <div className="sample-block-post-block-item-content">
                <h4 className="sample-block-post-block-item-title">
                    <a href="javascript:void(0);" data-href={ postLink }>{ postTitle }</a>
                </h4>
                { postsLayout === 'list' && (
                    <div className="sample-block-post-block-item-description">{ postDescription }</div>
                ) }
                <div className="sample-block-post-block-item-meta">
                    { getPostsMetas( props.post ).length > 0 && getPostsMetas( props.post ).map( ( meta, index ) => (
                        <span key={ index } className={ `sample-block-post-block-item-meta-item${ meta.toLowerCase().replace( ' ', '-' ) }` }>{ meta } </span>

                    ) ) }
                </div>
                <div className="sample-block-post-block-item-actions">
                    <a href="javascript:void(0);" data-href={ postLink } className="sample-block-post-block-item-link">View
                        Post</a>
                </div>
            </div>
        </div>
    );
}

export default Post;