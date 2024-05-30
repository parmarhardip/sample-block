/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PostsSettingsProvider } from "./Context/postsSettings.context";
import { PostsStylesProvider } from "./Context/postsStyles.context";
import { PostsDetailProvider } from "./Context/postsDetail.context";
import BlockSettings from "./components/BlockSettings";
import BlockStyles from "./components/BlockStyles";
import Posts from "./components/Posts";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { postsLayout } = attributes.postsStyles;
    const blockProps = useBlockProps( {
        className: 'sample-block-groups-blocks ' + (postsLayout === 'grid' ? 'sample-block-groups-blocks--grid' : 'sample-block-groups-blocks--list')
    } );

    return (
        <PostsSettingsProvider initialSettings={ attributes.postsSettings } setAttributes={ setAttributes }>
            <PostsStylesProvider initialStyles={ attributes.postsStyles } setAttributes={ setAttributes }>
                <PostsDetailProvider setAttributes={ setAttributes } attributes={ attributes }>
                    <div { ...blockProps }>
                        <InspectorControls>
                            <BlockSettings/>
                        </InspectorControls>
                        <BlockControls>
                            <BlockStyles/>
                        </BlockControls>
                        <Posts/>
                    </div>
                </PostsDetailProvider>
            </PostsStylesProvider>
        </PostsSettingsProvider>
    );
}
