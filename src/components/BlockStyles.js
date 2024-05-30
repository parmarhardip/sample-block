import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { usePostsStyles } from "../Context/postsStyles.context";


const BlockStyles = () => {

    const { styles, updateStyles } = usePostsStyles();
    const { postsLayout } = styles;

    const handlePostsLayoutChange = ( newLayout ) => {
        updateStyles( { postsStyles: { postsLayout: newLayout ? 'grid' : 'list' } } );
    }

    return (
        <>
            <ToolbarGroup>
                <ToolbarButton
                    icon="list-view"
                    label={__('List Layout', 'GrowwBuddy')}
                    onClick= { () => handlePostsLayoutChange( false ) }
                    isPressed={postsLayout === 'list'}
                />
                <ToolbarButton
                    icon="grid-view"
                    label={__('Grid Layout', 'GrowwBuddy')}
                    onClick= { () => handlePostsLayoutChange( true ) }
                    isPressed={postsLayout === 'grid'}
                />
            </ToolbarGroup>

        </>
    );


};

export default BlockStyles;
