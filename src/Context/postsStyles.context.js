import { createContext, useContext, useState } from '@wordpress/element';

const PostsStylesContext = createContext();

export const usePostsStyles = () => useContext( PostsStylesContext );

export const getPostsStyles = () => useContext( PostsStylesContext ).getStyles();

export const PostsStylesProvider = ( { children, initialStyles, setAttributes } ) => {
    const [ styles, setStyles ] = useState( initialStyles );

    const updateStyles = ( newStyles ) => {
        setStyles( ( prevStyles ) => ({
            ...prevStyles,
            ...newStyles.postsStyles,
        }) );

        setAttributes( { postsStyles: { ...styles, ...newStyles.postsStyles } } );
    };

    const getStyles = () => {
        return styles;
    }

    return (
        <PostsStylesContext.Provider value={ { styles, updateStyles, getStyles } }>
            { children }
        </PostsStylesContext.Provider>
    );
};
