import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    const updateItem = (index, field, value) => {
        const newItems = [...attributes.items];
        newItems[index][field] = value;
        setAttributes({ items: newItems });
    };

    const addItem = () => {
        const newItems = [...attributes.items, { title: 'New Question', description: 'Answer to the question' }];
        setAttributes({ items: newItems });
    };

    const removeItem = (index) => {
        const newItems = attributes.items.filter((_, i) => i !== index);
        setAttributes({ items: newItems });
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('FAQ Settings', 'CC')} initialOpen={true}>
                    <TextControl
                        label={__('Form Title', 'CC')}
                        value={attributes.formTitle}
                        onChange={(val) => setAttributes({ formTitle: val })}
                    />
                    <TextareaControl
                        label={__('Contact Form 7 Shortcode', 'CC')}
                        help={__('Enter the Contact Form 7 shortcode', 'CC')}
                        value={attributes.formShortcode}
                        onChange={(val) => setAttributes({ formShortcode: val })}
                    />
                    <TextControl
                        label={__('FAQ Title', 'CC')}
                        value={attributes.title}
                        onChange={(val) => setAttributes({ title: val })}
                    />
                </PanelBody>
                
                <PanelBody title={__('FAQ Items', 'CC')} initialOpen={true}>
                    {attributes.items.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: '20px',
                                padding: '15px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                            }}
                        >
                            <h4>{__('Question', 'CC')} {index + 1}</h4>
                            <TextControl
                                label={__('Title', 'CC')}
                                value={item.title}
                                onChange={(val) => updateItem(index, 'title', val)}
                            />
                            <TextareaControl
                                label={__('Description', 'CC')}
                                value={item.description}
                                onChange={(val) => updateItem(index, 'description', val)}
                            />
                            <Button
                                isDestructive
                                onClick={() => removeItem(index)}
                                style={{ marginTop: '10px' }}
                            >
                                {__('Remove Item', 'CC')}
                            </Button>
                        </div>
                    ))}
                    <Button isPrimary onClick={addItem}>
                        {__('Add Question', 'CC')}
                    </Button>
                </PanelBody>
            </InspectorControls>

            <div className="faq-section">
                <div className="faq-wrapper section-container">
                    <div className="faq-left">
                        <div className="sw-faq-one__search">
                            <form action="/" role="search" method="get">
                                <input type="text" defaultValue="" name="s" id="s" placeholder="Search here" />
                                <button type="submit"><i className="icon-magnifying-glass"></i></button>
                            </form>
                        </div>
                        <h2 className="sw-faq-one__form__title">{attributes.formTitle}</h2>
                        <div className="sw-faq-one__form">
                            <p><strong>{__('Contact Form 7', 'CC')}</strong></p>
                            <code>{attributes.formShortcode}</code>
                            <p className="help-text">{__('Form will appear on frontend', 'CC')}</p>
                        </div>
                    </div>

                    <div className="sw-faq-one__form faq-right">
                        <h2 className="sw-faq-one__title mb-35">{attributes.title}</h2>
                        <div className="faq-items">
                            {attributes.items.map((item, index) => (
                                <div className="faq-item" key={index}>
                                    <div className="faq-item-title">
                                        {item.title}
                                        <i className="icon-arrow-right"></i>
                                    </div>
                                    <div className="faq-item-description">
                                        {item.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
