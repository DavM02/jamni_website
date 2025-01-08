import bg from "../../assets/img_21.webp";
import Intro from "../../components/sections/Intro/Intro";
import Reviews from "../../components/sections/Reviews/Reviews";
function ReviewsSections() {
  return (
    <>
      <Intro
        bg={bg}
        id="reviews-intro"
        posY={"70%"}
   
          headline="отзывы"
          description="Мнение наших клиентов очень важно для нас"
  
      />
   <Reviews/>
    </>
  );
}
export default ReviewsSections;
