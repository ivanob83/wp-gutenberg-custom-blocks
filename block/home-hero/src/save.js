import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
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
