export default function ArticleText({ fullText }) {
    return (
        <>
            <div className="gap-a"></div>
            <div className="b">
                <p className="xsmall-text text-main">{fullText[0]}</p>
            </div>
            <div className="c">
                <p className="xsmall-text text-main">{fullText[1]}</p>
            </div>
            <div className="gap-b"></div>
            <div className="d">
                <p className="xsmall-text text-main">{fullText[0]}</p>
            </div>
        </>
    );
}
