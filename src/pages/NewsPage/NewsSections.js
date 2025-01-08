import Intro from "../../components/sections/Intro/Intro";
import News from "../../components/sections/News/News";
function NewsSections() {

  return (
    <>
      <Intro
        bg={"https://images.pexels.com/photos/25182965/pexels-photo-25182965/free-photo-of-flowers-in-vase-on-table.jpeg"}
        id="news-intro"
        posY={"50%"}
        headline="новости"
        description=
        "Свежие тренды и вдохновение: <br/> последние новости из мира мебели"

      />
      <News />
    </>
  );
}
export default NewsSections;
