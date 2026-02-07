import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

    // Generiši Google Maps iframe URL
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(attributes.mapLocation)}&t=&z=${attributes.mapZoom}&ie=UTF8&iwloc=&output=embed`;

    return (
        <div {...blockProps}>
            <div className="contact-info-section">
                <div className="contact-info-wrapper">
                    <div className="contact-info-left">
                        <h2 className="contact-info-title">{attributes.title}</h2>
                        <p className="contact-info-description">{attributes.description}</p>
                        
                        <div className="contact-info-item">
                            <i className="icon-phone"></i>
                            <div className="contact-info-item-content">
                                <h3 className="contact-info-item-title">{attributes.phoneTitle}</h3>
                                <p className="contact-info-item-value">
                                    <a href={`tel:${attributes.phoneValue.replace(/\s/g, '')}`}>
                                        {attributes.phoneValue}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <i className="icon-email"></i>
                            <div className="contact-info-item-content">
                                <h3 className="contact-info-item-title">{attributes.emailTitle}</h3>
                                <p className="contact-info-item-value">
                                    <a href={`mailto:${attributes.emailValue}`}>
                                        {attributes.emailValue}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info-right">
                        <div className="map-container">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height={attributes.mapHeight}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
