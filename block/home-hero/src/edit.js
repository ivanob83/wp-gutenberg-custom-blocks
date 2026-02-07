import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Hero Settings', 'CC')} initialOpen={true}>
                    <TextControl
                        label={__('Title', 'CC')}
                        value={attributes.title}
                        onChange={(val) => setAttributes({ title: val })}
                    />
                    <TextControl
                        label={__('Subtitle', 'CC')}
                        value={attributes.subtitle}
                        onChange={(val) => setAttributes({ subtitle: val })}
                    />
                    <TextControl
                        label={__('Button Text', 'CC')}
                        value={attributes.buttonText}
                        onChange={(val) => setAttributes({ buttonText: val })}
                    />
                    <TextControl
                        label={__('Button URL', 'CC')}
                        value={attributes.buttonUrl}
                        onChange={(val) => setAttributes({ buttonUrl: val })}
                    />
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ backgroundImage: media.url })}
                            allowedTypes={['image']}
                            value={attributes.backgroundImage || ''}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {attributes.backgroundImage
                                        ? __('Change Background Image', 'CC')
                                        : __('Select Background Image', 'CC')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>

            <div
                className="hero-section"
                style={{ backgroundImage: `url('${attributes.backgroundImage}')` }}
            >
                <div className="hero-wrapper">
                    <h2 className="hero-title">{attributes.title}</h2>
                    <p className="hero-subtitle">{attributes.subtitle}</p>
                    <div className="hero-button-wrapper">
                        <a href={attributes.buttonUrl} className="hero-button">
                            {attributes.buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
