import "./buildSet.css";
import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { userCartStore } from "../../../stores/cartStore";
import InfiniteSlider from "../../InfiniteSlider/InfiniteSlider";
import Slide from "./Slide";
import SmoothAppearance from "../../ui/SmoothAppearance";
import { AnimatePresence } from "framer-motion";
import useProductActions from "../../../hooks/useProductActions";
import useMediaQ from "../../../hooks/useMediaQ";
import FetchError from "../../ui/messages/FetchError";
import DataLoading from "../../ui/messages/DataLoading";

export default function BuildSet() {

  const query = useMediaQ('(min-width: 651px)');

  const { decreaseQuantity, } = userCartStore();
  const { handleAddToCart } = useProductActions()
  const randomCatalogs = useMemo(() => {
    const catalogs = [
      { name: "outdoor", heading: "уличная <br/> мебель", preview: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202448/0216/tulum-wicker-swivel-outdoor-lounge-chair-xl.jpg", quantity: 90 },
      { name: "frameless", heading: "бескаркасная <br/> мебель", preview: "https://assets.ptimgs.com/ptimgs/ab/images/dp/wcm/202441/0010/boucle-twill-gravel-modern-lounger-xl.jpg", quantity: 90 },
      { name: "bedsheets", heading: "постельное <br/> белье", preview: "https://cb.scene7.com/is/image/Crate/TateFullBedWnslwCharclSSS20_1x1?$web_pdp_main_carousel_med$", quantity: 90 },
      { name: "curtains", heading: "шторы", preview: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202501/0040/custom-emery-linen-sheer-drape-white-xl.jpg", quantity: 90 },
      { name: "beds", heading: "кровати", preview: "https://cb.scene7.com/is/image/Crate/CambriaTuftedQnBedSOSSF24?$web_pdp_main_carousel_med$", quantity: 90 },
      { name: "decor", heading: "декор", preview: "https://i.ibb.co/Ks8KTFq/img-1.jpg", quantity: 79 },
      { name: "sofas", heading: "диваны", preview: "https://i.ibb.co/dbKNMTH/img-10.jpg", quantity: 90 },
      { name: "poufs", heading: "пуфы <br/> и банкетки", preview: "https://cb.scene7.com/is/image/Crate/TexturedPldPoufPmIvr18inSSF23?$web_pdp_main_carousel_high$", quantity: 76 },
      { name: "chairs", heading: "стулья", preview: "https://cb.scene7.com/is/image/Crate/OjaiUphWFAcntChrBC3QSSS22_3D?$web_pdp_main_carousel_med$", quantity: 90 },

      { name: "armchairs", heading: "кресла", preview: "https://cb.scene7.com/is/image/Crate/LisantAccChairCmBg3QSSS25?$web_pdp_main_carousel_med$", quantity: 90 },


    ];

    let array = new Set([]);

    while (array.size !== 4) {
      array.add(catalogs[Math.min(9, Math.round(Math.random() * 9))]);
    }

    return Array.from(array);
  }, []);

  const [currentCategory, setCurrentCategory] = useState(2)


  const {
    data: a,
    error: aError,
    isLoading: aLoading,
  } = useSWRImmutable([randomCatalogs[0].name, 1, 18]);
  const {
    data: b,
    error: bError,
    isLoading: bLoading,
  } = useSWRImmutable([randomCatalogs[1].name, 1, 18]);
  const {
    data: c,
    error: cError,
    isLoading: cLoading,
  } = useSWRImmutable([randomCatalogs[2].name, 1, 18]);
  const {
    data: d,
    error: dError,
    isLoading: dLoading,
  } = useSWRImmutable([randomCatalogs[3].name, 1, 18]);

  const allData = [{ data: a, error: aError, loading: aLoading }, { data: b, error: bError, loading: bLoading }, { data: c, error: cError, loading: cLoading }, { data: d, error: dError, loading: dLoading }];


  return (
    <section id="build-set">
      <div className="container">
        <div className="text-center">
          <h2>соберите свой комплект</h2>

          <span className="small-text text-main text-black up-case">
            создайте идеальное пространство: дополнитесвою <br /> комнату
            уникальным декором
          </span>
        </div>
        <div className="section-layout">
          <div className="column gap-15">
            {randomCatalogs.map((el, i) => {
              return <div
                onClick={() => setCurrentCategory(i)}
                className={`row wrap center-y gap-25 ${currentCategory === i ? 'active' : 'inactive'}`} key={i}>
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
                  <h4 dangerouslySetInnerHTML={{ __html: el.heading }} className="text-black-secondary"></h4>
                  <span className="xsmall-text text-main text-black-secondary">
                    {el.quantity} наименований
                  </span>
                </div>
              </div>
            })}
          </div>

          <AnimatePresence mode="wait">



          
            {allData[currentCategory].error ? (
              <FetchError message={allData[currentCategory].error?.message} />
            ) : allData[currentCategory].data && !allData[currentCategory].loading ? (
                <SmoothAppearance blur={true} key={currentCategory}>
                  <InfiniteSlider
                    hideNav={query}
                    itemWidth={'build-set-slider-img-width'}
                    sliderData={allData[currentCategory].data}
                    wrapper={Slide}
                    decreaseQuantity={decreaseQuantity}
                    addProduct={handleAddToCart}
                  />
                </SmoothAppearance>
              ) : (
                <DataLoading key={"loading"} />
              )}
          
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}


