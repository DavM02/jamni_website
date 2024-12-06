export default function ArticleCareRules({ careRules }) {
    return (
        <>
            <div className="f">
                <span className="xsmall-text text-main up-case">10 правил по уходу за мебелью</span>
            </div>
            <ol className="xsmall-text text-main g">
                {careRules.map((rule, index) => (
                    <li key={index}>
                        <p>{rule}</p>
                    </li>
                ))}
            </ol>
        </>
    );
}
