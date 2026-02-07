import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Contact Form Settings', 'CC')} initialOpen={true}>
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
                    <TextareaControl
                        label={__('Contact Form 7 Shortcode', 'CC')}
                        help={__('Enter the Contact Form 7 shortcode (e.g., [contact-form-7 id="123" title="Contact Form"])', 'CC')}
                        value={attributes.formShortcode}
                        onChange={(val) => setAttributes({ formShortcode: val })}
                    />
                </PanelBody>
            </InspectorControls>

            <div className="contact-form-section">
                <div className="contact-form-wrapper section-container">
                    <h2 className="contact-form-title">{attributes.title}</h2>
                    <p className="contact-form-subtitle">{attributes.subtitle}</p>
                    <div className="contact-form-container">
                        <div className="contact-form-placeholder">
                            <p><strong>{__('Contact Form 7', 'CC')}</strong></p>
                            <code>{attributes.formShortcode}</code>
                            <p className="help-text">{__('The actual form will appear on the frontend', 'CC')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
