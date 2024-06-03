import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToggleControl, TextControl, SelectControl } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { PostsDetailContext } from "../Context/postsDetail.context";
import { usePostsSettings } from "../Context/postsSettings.context";

const BlockSettings = () => {
    const { settings, updateSettings } = usePostsSettings();
    const postDetails = useContext( PostsDetailContext );
    const { totalPages } = postDetails;

    return (
        <>
            <PanelBody
                title={ __( 'Settings', 'sample-block' ) }
                initialOpen={ true }
            >
                <PanelRow>
                    <TextControl
                        label={ __( 'Search', 'sample-block' ) } value={ settings.search }
                        onChange={ ( value ) => updateSettings( {
                            postsSettings: {
                                ...settings,
                                search: value
                            }
                        } ) }/>
                </PanelRow>

                <PanelRow>
                    <SelectControl
                        label={ __( 'Order', 'sample-block' ) }
                        options={ [
                            { value: 'desc', label: __( 'Descending', 'sample-block' ) },
                            { value: 'asc', label: __( 'Ascending', 'sample-block' ) },
                        ] }
                        onChange={ ( value ) => updateSettings( {
                            postsSettings: {
                                ...settings,
                                order: value
                            }
                        } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label={ __( 'Order By', 'sample-block' ) }
                        options={ [
                            { value: 'date', label: __( 'Date', 'sample-block' ) },
                            { value: 'id', label: __( 'ID', 'sample-block' ) },
                            { value: 'title', label: __( 'Title', 'sample-block' ) },
                            { value: 'slug', label: __( 'Slug', 'sample-block' ) },
                            { value: 'modified', label: __( 'Last Modified', 'sample-block' ) },
                        ] }
                        onChange={ ( value ) => updateSettings( {
                            postsSettings: {
                                ...settings,
                                orderBy: value
                            }
                        } ) }
                    />
                </PanelRow>

                <PanelRow>
                    <TextControl
                        label={ __( 'Posts per page', 'sample-block' ) }
                        type="number"
                        value={ settings.perPage }
                        onChange={ ( value ) => updateSettings( { postsSettings: { ...settings, perPage: value } } ) }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl
                        label={ __( 'Current Page', 'sample-block' ) }
                        value={ settings.currentPage }
                        options={ Array.from( { length: totalPages }, ( v, i ) => ({ value: i + 1, label: i + 1 }) ) }
                        onChange={ ( value ) => updateSettings( {
                            postsSettings: {
                                ...settings,
                                currentPage: value
                            }
                        } ) }
                    />
                </PanelRow>
            </PanelBody>

        </>
    );


};

export default BlockSettings;
