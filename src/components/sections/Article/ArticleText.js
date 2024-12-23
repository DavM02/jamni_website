export default function ArticleText({ fullText }) {
    return (
        <>
            <div style={{ '--area': 'gap-a' }}></div>
            <div style={{ '--area': 'b' }}>
                <p className="xsmall-text text-main text-black-secondary">{fullText[0]}</p>
            </div>
            <div style={{ '--area': 'c' }}>
                <p className="xsmall-text text-main text-black-secondary">{fullText[1]}</p>
            </div>
            <div style={{ '--area': 'gap-b' }} ></div>
            <div style={{ '--area': 'd' }}  >
                <p className="xsmall-text text-main text-black-secondary">{fullText[0]}</p>
            </div>
        </>
    );
}
