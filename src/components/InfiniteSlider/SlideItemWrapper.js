 

export default function SlideItemWrapper({
    adjustTransition,
    transformIndex,
    width,
    Tag = 'div',
    children }) {
     return (
        <Tag
            className='slider-item'
            style={{
                left: `calc((var(--${width}) + 20px) * ${transformIndex})`,
                transition: adjustTransition ? 'var(--transition) left 0.8s' : 'unset'
            }}
        >
            {children}
        </Tag>
    )
}

