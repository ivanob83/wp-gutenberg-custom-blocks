import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
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
