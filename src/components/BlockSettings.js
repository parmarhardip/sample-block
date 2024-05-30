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
                        label={ __( 'Type', 'sample-block' ) }
                        options={ [
                            { value: '', label: __( 'Select', 'sample-block' ) },
                            { value: 'newest', label: __( 'Newest', 'sample-block' ) },
                            { value: 'popular', label: __( 'Popular', 'sample-block' ) },
                            { value: 'active', label: __( 'Active', 'sample-block' ) },
                            { value: 'alphabetical', label: __( 'Alphabetical', 'sample-block' ) },
                            { value: 'random', label: __( 'Random', 'sample-block' ) },
                        ] }
                        defaultValue=''
                        onChange={ ( value ) => updateSettings( { postsSettings: { ...settings, type: value } } ) }
                    />
                </PanelRow>
                { settings.type === '' && (
                    <>
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
                                    { value: 'name', label: __( 'Name', 'sample-block' ) },
                                    { value: 'last_activity', label: __( 'Last Activity', 'sample-block' ) },
                                    { value: 'total_member_count', label: __( 'Total Member Count', 'sample-block' ) },
                                    { value: 'random', label: __( 'Random', 'sample-block' ) },
                                ] }
                                onChange={ ( value ) => updateSettings( {
                                    postsSettings: {
                                        ...settings,
                                        orderBy: value
                                    }
                                } ) }
                            />
                        </PanelRow></>
                ) }

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
