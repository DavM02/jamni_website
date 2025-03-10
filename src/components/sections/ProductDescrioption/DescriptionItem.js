import { AnimatePresence, motion } from 'framer-motion';
import TechnicalSpecifications from './TechnicalSpecifications';
import Maintenance from './Maintenance';
import Packing from './Packing';
import ProductVisuals from './ProductVisuals';

export default function DescriptionItem({ sectionKey, label, content, open, onToggle }) {
     return (
        <li>
            <div className="container">
                <div
                    className="description-heading row center-y s-between gap-10"
                    onClick={() => onToggle()}
                >
                    <span className="xxsmall-text text-main text-black-secondary up-case">{label}</span>
                    <span className="xxsmall-text text-main text-black-secondary up-case">{open === sectionKey ? '-' : '+'}</span>
                </div>
            </div>
            <AnimatePresence initial={false} mode="wait">
                {open === sectionKey && content && (
                    <motion.div
                        className="container"
                        initial={{ height: 0, overflow: 'hidden' }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                     >
                        <div>
                            {sectionKey === 'technical' && <TechnicalSpecifications content={content} />}
                            {sectionKey === 'maintenance' && <Maintenance content={content} />}
                            {sectionKey === 'packing' && <Packing content={content} />}
                            {sectionKey === 'description' && <ProductVisuals
                                data={content[0]}
                                images={content[1]}
                                advantages={content[2]} />}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    );
}
