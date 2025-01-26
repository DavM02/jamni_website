import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CategoryList({ categories, currentCategory, onCategorySelect }) {
    return (
        <div className="column gap-15">
            {categories.map((el, i) => (
                <div
                    key={i}
                    onClick={() => onCategorySelect(i)}
                    className={`row wrap center-y gap-25 ${currentCategory === i ? "active" : "inactive"}`}
                >
                    <div className="preview">
                        <LazyLoadImage
                            width="100%"
                            height="100%"
                            effect="blur"
                            src={el.preview}
                            alt={el.name}
                        />
                    </div>
                    <div>
                        <h4
                            dangerouslySetInnerHTML={{ __html: el.heading }}
                            className="text-black-secondary"
                        ></h4>
                        <span className="xsmall-text text-main text-black-secondary">
                            {el.quantity} наименований
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
