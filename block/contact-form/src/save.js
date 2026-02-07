import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className="contact-form-section">
                <div className="contact-form-wrapper section-container">
                    <h2 className="contact-form-title">{attributes.title}</h2>
                    <p className="contact-form-subtitle">{attributes.subtitle}</p>
                    <div className="contact-form-container">
                        <div dangerouslySetInnerHTML={{ __html: attributes.formShortcode }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
