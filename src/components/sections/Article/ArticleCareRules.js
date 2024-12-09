export default function ArticleCareRules({ careRules }) {
    return (
        <>
            <div style={{ '--area': 'f' }} >
                <span className="xsmall-text text-main up-case">10 правил по уходу за мебелью</span>
            </div>
            <ol style={{ '--area': 'g' }} className="xsmall-text text-main">
                {careRules.map((rule, index) => (
                    <li key={index}>
                        <p>{rule}</p>
                    </li>
                ))}
            </ol>
        </>
    );
}
