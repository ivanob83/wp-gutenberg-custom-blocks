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
                    <TextControl
                        label={__('Tooltip Text', 'CC')}
                        value={attributes.tooltipText}
                        onChange={(val) => setAttributes({ tooltipText: val })}
                    />
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ backgroundImage: media.url })}
                            allowedTypes={['image']}
                            value={attributes.backgroundImage || ''}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {attributes.backgroundImage
                                        ? __('Change Feature Image', 'CC')
                                        : __('Select Feature Image', 'CC')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                </PanelBody>
            </InspectorControls>

            <div className="product-feature-section">
                <div className="product-feature-wrapper section-container">
                    <div className="product-feature-left">
                        <h2 className="product-feature-title">{attributes.title}</h2>
                        <p className="product-feature-description">{attributes.subtitle}</p>
                        <div className="product-feature-button-wrapper">
                            <a href={attributes.buttonUrl} className="product-feature-button">
                                {attributes.buttonText}
                            </a>
                        </div>
                    </div>
                    <div className="product-feature-right">
                        <img src={attributes.backgroundImage} alt="Feature Image" />
                        <div className="map-icon-wrapper" data-tooltip={attributes.tooltipText}>
                            <i className="fa fa-map-marker"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
