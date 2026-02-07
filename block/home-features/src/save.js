import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { items } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
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
