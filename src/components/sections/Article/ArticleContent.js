import React from 'react';
import ArticleTitle from './ArticleTitle';
import ArticleText from './ArticleText';
import ArticleImages from './ArticleImages';
import ArticleCareRules from './ArticleCareRules';
import ArticleHelp from './ArticleHelp';

export default function ArticleContent({ data }) {
    return (
        <>
            <ArticleTitle title={data.title} />
            <ArticleText fullText={data.fullText} />
            <ArticleImages images={data.images} />
            <ArticleCareRules careRules={data.careRules} />
            <ArticleHelp />
        </>
    );
}
