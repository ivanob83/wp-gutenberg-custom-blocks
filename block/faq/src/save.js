import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
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
                            <div dangerouslySetInnerHTML={{ __html: attributes.formShortcode }} />
                        </div>
                    </div>

                    <div className="sw-faq-one__form faq-right">
                        <h3 className="sw-sec-heading__title mb-35">{attributes.title}</h3>
                        <div className="faq-items swiftcart-accordion-one">
                            {attributes.items.map((item, index) => (
                                <details className="faq-item sw-accordion" key={index}>
                                    <summary className="sw-accordion-title">
                                        <h4 className="sw-accordion-question">{item.title}</h4>
                                        <span><i className="icon-arrow-right"></i></span>
                                    </summary>
                                    <div className="faq-item-description sw-accordion-answer">
                                        <p dangerouslySetInnerHTML={{ __html: item.description }} />
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
