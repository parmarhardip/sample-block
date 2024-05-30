import { createContext, useContext, useState } from '@wordpress/element';

const PostsSettingsContext = createContext();

export const usePostsSettings = () => useContext( PostsSettingsContext );

export const getPostsSettings = () => useContext( PostsSettingsContext ).getSettings();

export const PostsSettingsProvider = ( { children, initialSettings, setAttributes } ) => {
    const [ settings, setSettings ] = useState( initialSettings );

    const updateSettings = ( newSettings ) => {
        setSettings( ( prevSettings ) => ({
            ...prevSettings,
            ...newSettings.postsSettings,
        }) );

        setAttributes( { postsSettings: { ...settings, ...newSettings.postsSettings } } );
    };

    const getSettings = () => {
        return settings;
    }

    return (
        <PostsSettingsContext.Provider value={ { settings, updateSettings, getSettings } }>
            { children }
        </PostsSettingsContext.Provider>
    );
};
