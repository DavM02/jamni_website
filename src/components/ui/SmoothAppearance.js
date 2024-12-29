import React from 'react'
import { motion } from 'framer-motion'
export default function SmoothAppearance({ blur, Tag = motion.div ,...props}) {
    return (
        <Tag
            initial={{ opacity: 0, filter: blur ? 'blur(4px)' : 'none'  }}
            animate={{ opacity: 1, filter: blur ? 'blur(0px)' : 'none' }}
            exit={{ opacity: 0, filter: blur ? 'blur(2px)' : 'none' }}
            {...props}>
            {props.children}
        </Tag>
    );
}
