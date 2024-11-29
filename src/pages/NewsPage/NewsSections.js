import bg from '../../assets/decor/img_9.webp'
import Intro from '../../components/sections/Intro/Intro'
import News from '../../components/sections/News/News'
function NewsSections() {
    return (
        <>
        <News/>
            <Intro
                bg={bg}
                id="news-intro"
                posY={'50%'}
                text={{
                    headline: 'новости', description: 'Свежие тренды и вдохновение: <br/> последние новости из мира мебели'
                }}
            />

        </>
    )
}
export default NewsSections