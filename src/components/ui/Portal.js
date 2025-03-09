import SmoothAppearance from "./SmoothAppearance"
import { createPortal } from 'react-dom';

import { AnimatePresence } from "framer-motion"

export default function Portal({ value, root, ...props }) {
    const content = (
        <SmoothAppearance {...props}>
            {props.children}
        </SmoothAppearance>
    )

    return (
        <AnimatePresence mode="wait">
            {value && <>
                {
                    root
                        ? createPortal(content, document.getElementById(root ?? 'modal-root'))
                        : content
                }
            </>}
        </AnimatePresence>
    )
}

