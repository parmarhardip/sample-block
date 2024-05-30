import { createContext, useState, useEffect } from "@wordpress/element";
import { addQueryArgs } from "@wordpress/url";
import { getPostsSettings } from "./postsSettings.context";

export const PostsDetailContext = createContext( {
    isLoading: true,
    posts: [],
    totalPages: 1,
    totalPosts: 0,
    setPostsDetails: () => {
    },
} );

export const PostsDetailProvider = ( { children, setAttributes, attributes } ) => {

    const settings = getPostsSettings();

    const [ postDetails, updatePostsDetails ] = useState( {
        isLoading: true,
        posts: [],
        totalPages: 1,
        totalPosts: 0,
        setPostsDetails: ( value ) => {
            updatePostsDetails( prevState => {
                return {
                    ...prevState,
                    ...value,
                };

            } );
        }
    } );

    useEffect( () => {
        const queryParams = {
            per_page: settings.perPage,
            page: settings.currentPage,
            orderby: settings.orderBy,
            order: settings.order,

        };

        if( '' !== settings.type ) {
            queryParams.type = settings.type;
        }
        if( '' !== settings.search ) {
            queryParams.search = settings.search;
        }

        console.log(queryParams);
        console.log(settings);
        const url = addQueryArgs( '/wp-json/wp/v2/posts', queryParams );

        fetch( url, {
            headers: {
                'X-WP-Nonce': SampleData.nonce,
            },
        } )
            .then( response => {

                if ( !response.ok ) {
                    throw new Error( 'Network response was not ok' );
                }

                if ( response.headers.get( 'X-WP-TotalPages' ) ) {
                    updatePostsDetails( prevState => ({
                        ...prevState,
                        totalPages: parseInt( response.headers.get( 'X-WP-TotalPages' ) ),
                    }) );
                }

                if ( response.headers.get( 'X-WP-Total' ) ) {
                    updatePostsDetails( prevState => ({
                        ...prevState,
                        totalPosts: parseInt( response.headers.get( 'X-WP-Total' ) ),
                    }) );
                }

                return response.json();

            } )
            .then( data => {
                updatePostsDetails( prevState => {
                    return {
                        ...prevState,
                        posts: data,
                        isLoading: false,
                    };
                } );

                // Update the block's attributes with fetched data
            } )
            .catch( error => {
                console.error( error );

                updatePostsDetails( prevState => {
                    return {
                        ...prevState,
                        posts: [],
                        isLoading: false,
                    };
                } )

                // Update the block's attributes with fetched data
                setAttributes( { ...attributes, posts: [] } );

            } );

    }, [ settings ] );


    return (
        <PostsDetailContext.Provider value={ postDetails }>
            { children }
        </PostsDetailContext.Provider>
    );

}

