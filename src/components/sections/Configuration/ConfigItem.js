
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ConfigItem({ item, index, updateQuantity }) {
    return (
        <div className="column center-y gap-15 display-num" data-num={item.quantity}>
            <div className="config-image">
                <LazyLoadImage
                    width="100%"
                    height="100%"
                    effect="blur"
                    src={item.img}
                    alt={item.type}
                />
            </div>
            <span className="small-text text-main text-black up-case">{item.type}</span>
            <span className="xsmall-text text-main text-gray">
                {item.price.toLocaleString("ru-RU")} руб
            </span>
            <div className="config-adjustment grid-3 xsmall-text text-main text-black">
                <button className="center-gr" onClick={() => updateQuantity(index, -1)}>
                    -
                </button>
                <span className="center-gr">{item.quantity}</span>
                <button className="center-gr" onClick={() => updateQuantity(index, 1)}>
                    +
                </button>
            </div>
        </div>
    );
}
