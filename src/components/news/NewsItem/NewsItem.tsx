import { NewsArticle } from '@azure/cognitiveservices-newssearch/esm/models'
import React from 'react'
import { strings } from '../../../constants/strings'
import { getImageUrlForArticle } from '../../../utils/newsApi'

type Props = {
  article: NewsArticle
}

const NewsItem: React.FC<Props> = ({ article }) => {
  const image = getImageUrlForArticle(article)

  return (
    <li key={article.name} className="-mx-4 border-b default-border last:border-0">
      <a
        className="flex items-start py-4 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-gray-600 w-16 h-16 md:w-24 md:h-24 mr-4 flex-shrink-0">
          {!!image && <img src={image} alt="" />}
        </div>

        <div>
          <h3 className="text-lg strong-text">{article.name}</h3>
          <p className="mt-2 hidden md:block">{article.description}</p>
          <p className="mt-2 secondary-text">
            {strings.WEATHER_NEWS_PROVIDER_PREFIX} {article.provider?.[0]?.name}
          </p>
        </div>
      </a>
    </li>
  )
}

export default NewsItem
