import SmoothAppearance from "../SmoothAppearance"
import ReactDOM from "react-dom"
import { AnimatePresence } from "framer-motion"
import './backdrop.css'

export default function Backdrop({ value, root, ...props }) {
    const content = (
        <SmoothAppearance {...props} className='backdrop' />
    )

    return (
        <AnimatePresence mode="wait">
            {value && <>
                {
                    root
                        ? ReactDOM.createPortal(content, document.getElementById(root ?? 'modal-root'))
                        : content
                }
            </>}
        </AnimatePresence>
    )
}



// return <AnimatePresence mode="wait">
//     {
//         value && <>
//             {
//                 ReactDOM.createPortal(<SmoothAppearance
//                     {...props}
//                     className='backdrop'>
//                 </SmoothAppearance>, document.getElementById('modal-root'))
//             }
//         </>
//     }
// </AnimatePresence>