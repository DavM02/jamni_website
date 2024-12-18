import { useState } from "react";
import Dot from "./Dot";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";
import './slider.css'
export default function Slider({ images }) {
    const [activeImage, setActiveImage] = useState(0);

 

    const thumbnails = images ? images.slice(1) : Array(5).fill(null)

    return (
        <div className="product-image-slider row gap-35">
  
            <div className="dots column center-x center-y gap-15">
                {thumbnails.map((_, i) => (
                    <Dot
                        key={i}
                        isActive={i === activeImage}
                        onClick={() => setActiveImage(i)}
                    />
                ))}
            </div>
 
            <div>
   
                <MainImage images={thumbnails} activeImage={activeImage} />

               
                <div className="thumbnail-images gap-10">
                    {thumbnails.map((el, i) => (
                        <Thumbnail
                            key={i}
                            src={el}
                            alt={`product-thumbnail-${i}`}
                            isActive={i === activeImage}
                            onClick={() => setActiveImage(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
