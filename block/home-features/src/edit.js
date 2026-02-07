import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const { items } = attributes;
    const blockProps = useBlockProps();

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setAttributes({ items: newItems });
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('Features Settings', 'CC')} initialOpen={true}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: '20px',
                                padding: '10px',
                                border: '1px solid #ddd',
                            }}
                        >
                            <h4>{__('Feature', 'CC')} {index + 1}</h4>
                            <MediaUploadCheck>
                                <MediaUpload
                                    allowedTypes={['image']}
                                    value={item.icon}
                                    onSelect={(media) => updateItem(index, 'icon', media.url)}
                                    render={({ open }) => (
                                        <Button onClick={open} isPrimary>
                                            {item.icon
                                                ? __('Change Icon', 'CC')
                                                : __('Select Icon', 'CC')}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                            <TextControl
                                label={__('Text', 'CC')}
                                value={item.text}
                                onChange={(val) => updateItem(index, 'text', val)}
                            />
                        </div>
                    ))}
                </PanelBody>
            </InspectorControls>

            <div className="features-section">
                <div className="features-section-in section-container">
                    {items.map((item, index) => (
                        <div className="feature-item" key={index}>
                            {item.icon && <img src={item.icon} className="feature-icon" alt="" />}
                            <p className="feature-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
