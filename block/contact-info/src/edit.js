import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Contact Info Settings', 'CC')} initialOpen={true}>
                    <TextControl
                        label={__('Title', 'CC')}
                        value={attributes.title}
                        onChange={(val) => setAttributes({ title: val })}
                    />
                    <TextControl
                        label={__('Description', 'CC')}
                        value={attributes.description}
                        onChange={(val) => setAttributes({ description: val })}
                    />
                    <hr />
                    <TextControl
                        label={__('Phone Title', 'CC')}
                        value={attributes.phoneTitle}
                        onChange={(val) => setAttributes({ phoneTitle: val })}
                    />
                    <TextControl
                        label={__('Phone Value', 'CC')}
                        value={attributes.phoneValue}
                        onChange={(val) => setAttributes({ phoneValue: val })}
                    />
                    <hr />
                    <TextControl
                        label={__('Email Title', 'CC')}
                        value={attributes.emailTitle}
                        onChange={(val) => setAttributes({ emailTitle: val })}
                    />
                    <TextControl
                        label={__('Email Value', 'CC')}
                        value={attributes.emailValue}
                        onChange={(val) => setAttributes({ emailValue: val })}
                    />
                    <hr />
                    <TextControl
                        label={__('Map Location', 'CC')}
                        value={attributes.mapLocation}
                        onChange={(val) => setAttributes({ mapLocation: val })}
                    />
                    <RangeControl
                        label={__('Map Zoom', 'CC')}
                        value={attributes.mapZoom}
                        onChange={(val) => setAttributes({ mapZoom: val })}
                        min={1}
                        max={20}
                    />
                    <RangeControl
                        label={__('Map Height (px)', 'CC')}
                        value={attributes.mapHeight}
                        onChange={(val) => setAttributes({ mapHeight: val })}
                        min={200}
                        max={800}
                    />
                </PanelBody>
            </InspectorControls>

            <div className="contact-info-section">
                <div className="contact-info-wrapper">
                    <div className="contact-info-left">
                        <h2 className="contact-info-title">{attributes.title}</h2>
                        <p className="contact-info-description">{attributes.description}</p>
                        
                        <div className="contact-info-item">
                            <i className="icon-phone"></i>
                            <div className="contact-info-item-content">
                                <h3 className="contact-info-item-title">{attributes.phoneTitle}</h3>
                                <p className="contact-info-item-value">{attributes.phoneValue}</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <i className="icon-email"></i>
                            <div className="contact-info-item-content">
                                <h3 className="contact-info-item-title">{attributes.emailTitle}</h3>
                                <p className="contact-info-item-value">{attributes.emailValue}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info-right">
                        <div className="map-placeholder" style={{ height: `${attributes.mapHeight}px` }}>
                            <p><strong>{__('Google Map', 'CC')}</strong></p>
                            <p>{attributes.mapLocation}</p>
                            <p>{__('Zoom:', 'CC')} {attributes.mapZoom}</p>
                            <small>{__('Map will appear on frontend', 'CC')}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
