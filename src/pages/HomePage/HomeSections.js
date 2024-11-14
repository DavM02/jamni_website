
import Bestsellers from '../../components/sections/Bestsellers/Bestsellers'
import Home from '../../components/sections/Home/Home'
import Subscribe from '../../components/sections/Subscribe/Subscribe'
import About from '../../components/sections/About/About'
import ProductsDisplay from '../../components/sections/ProductsDisplay/ProductsDisplay'
import Projects from '../../components/sections/Projects/Projects'

function HomeSections() {
    return (
        <>

            <Home />
            <Bestsellers />
            <ProductsDisplay />
            <About />
            <Projects />
            <Subscribe />

        </>
    )
}
export default HomeSections