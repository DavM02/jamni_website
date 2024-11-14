import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import './pageTransition.css';
import AnimatedText from '../scroll/TextAnimation';

function PageTransition(Component) {
    return function WrappedComponent(props) {

        const [pathname, setPathname] = useState(null)

        return (
            <React.Fragment>


                <Component {...props} />

                {ReactDOM.createPortal(
                    <>
                        <motion.div

                            onAnimationComplete={(e) => {
                                if (e.clipPath === 'inset(0% 0% 0% 0%)') {
                                    const getPath = window.location.hash.split('/')
                                    const path = getPath[getPath.length-1]  
                                    setPathname(path.length === 0 ? 'home' : path)
                                }
                            }}
                            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                            animate={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                            exit={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                            transition={{
                                duration: 0.5,
                                ease: [0.645, 0.045, 0.355, 1],
                            }}
                            className="slide-in center-gr"
                        >

                            {pathname && (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: pathname ? 0 : 1 }}
                                    transition={{ duration: 0.3, delay: 1.1 }}

                                >
                                    <AnimatedText
                                        center={true}
                                        as="h2"
                                        text={pathname}
                                    />
                                </motion.div>
                            )}


                        </motion.div>

                        <motion.div
                            onAnimationStart={(e) => {
                                if (e.clipPath === "inset(0% 0% 100% 0%)") {
                                    setPathname(false)
                                }
                            }}
                            initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                            animate={{ clipPath: 'inset(0% 0% 100% 0%)' }}
                            exit={{
                                clipPath: 'inset(0% 0% 100% 0%)',
                                transition: {
                                    delay: 1.8,
                                },
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.645, 0.045, 0.355, 1],
                            }}
                            className="slide-out center-gr"
                        ></motion.div>
                    </>,
                    document.getElementById('modal-root')
                )}
            </React.Fragment>
        );
    };
}

export default PageTransition;
