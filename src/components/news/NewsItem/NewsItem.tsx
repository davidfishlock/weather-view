import { NewsArticle } from '@azure/cognitiveservices-newssearch/esm/models'
import React from 'react'
import { strings } from '../../../constants/strings'
import { getImageUrlForArticle } from '../../../utils/newsApi'

type Props = {
  index: number
  article: NewsArticle
}

const NewsItem: React.FC<Props> = ({ article, index }) => {
  const image = getImageUrlForArticle(article)

  return (
    <li className="-mx-4 border-b default-border last:border-0 relative">
      <article
        aria-labelledby={`article-${index}-header`}
        className="flex items-start py-4 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div>
          <h3 id={`article-${index}-header`} className="text-lg strong-text">
            <a
              className="after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0"
              href={article.url}
              target="_blank"
              rel="noreferrer"
            >
              {article.name}
            </a>
          </h3>
          <p className="mt-2 hidden md:block">{article.description}</p>
          <p className="mt-2 secondary-text">
            {strings.WEATHER_NEWS_PROVIDER_PREFIX} {article.provider?.[0]?.name}
          </p>
        </div>
        {!!image && (
          <div className="bg-gray-600 w-20 h-20 md:w-28 md:h-28 mt-1 ml-4 flex-shrink-0">
            <img src={image} alt="" className="h-full w-full" />
          </div>
        )}
      </article>
    </li>
  )
}

export default NewsItem
