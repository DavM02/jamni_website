import "./buildSet.css";
import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";
import SliderSection from "./SliderSection";
import CategoryList from "./CategoryList";
import { useState } from "react";
import { userCartStore } from "../../../stores/cartStore";
import useProductActions from "../../../hooks/useProductActions";
import useMediaQ from "../../../hooks/useMediaQ";
 

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

  const allData = [
    { data: a, error: aError, isLoading: aLoading },
    { data: b, error: bError, isLoading: bLoading },
    { data: c, error: cError, isLoading: cLoading },
    { data: d, error: dError, isLoading: dLoading }];


  return (
    <section id="build-set">
      <div className="container">
        <div className="text-center">
          <h2>соберите свой комплект</h2>
          <span className="small-text text-main text-black up-case">
            создайте идеальное пространство: дополните свою <br /> комнату уникальным декором
          </span>
        </div>
        <div className="section-layout">
          <CategoryList
            categories={randomCatalogs}
            currentCategory={currentCategory}
            onCategorySelect={setCurrentCategory}
          />
          <SliderSection
            currentCategory={currentCategory}
            allData={allData.map(({ data, error, isLoading }) => ({
              data: data && data.slice(0, 14),
              error,
              loading: isLoading,
            }))}
            query={query}
            decreaseQuantity={decreaseQuantity}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </section>
  );
}


