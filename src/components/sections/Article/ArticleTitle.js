export default function ArticleTitle({ title }) {
    return (
        <div style={{'--area': 'a'}} >
            <span className="xsmall-text text-main text-black-secondary up-case">{title}</span>
        </div>
    );
}
