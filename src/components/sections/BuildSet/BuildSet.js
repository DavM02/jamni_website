import "./buildSet.css";
import { useMemo } from "react";
import useSWRImmutable from "swr/immutable";
export default function BuildSet() {
  const randomCatalogs = useMemo(() => {
    const catalogs = [
      "outdoor",
      "frameless",
      "bedsheets",
      "curtains",
      "beds",
      "decor",
      "sofas",
      "poufs",
      "chairs",
      "armchairs",
    ];

    let array = new Set([]);

    while (array.size !== 4) {
      array.add(catalogs[Math.min(9, Math.round(Math.random() * 9))]);
    }

    return Array.from(array);
  }, []);

  const {
    data: a,
    error: aError,
    isLoading: aLoading,
  } = useSWRImmutable([randomCatalogs[0], 1, 18]);
  const {
    data: b,
    error: bError,
    isLoading: bLoading,
  } = useSWRImmutable([randomCatalogs[1], 1, 18]);
  const {
    data: c,
    error: cError,
    isLoading: cLoading,
  } = useSWRImmutable([randomCatalogs[2], 1, 18]);
  const {
    data: d,
    error: dError,
    isLoading: dLoading,
  } = useSWRImmutable([randomCatalogs[3], 1, 18]);

  console.log(a, b, c, d);
  return (
    <section id="build-set">
      <div className="container">
        <div className="text-center">
          <h2>соберите свой комплект</h2>

          <span className="small-text text-main text-black up-case">
            создайте идеальное пространство: <br /> дополнитесвою комнату
            уникальным декором
          </span>
        </div>
        <div className="section-layout">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
