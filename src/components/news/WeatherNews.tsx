import { NewsArticle } from '@azure/cognitiveservices-newssearch/esm/models'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { City } from 'ts-open-weather-map'
import { strings } from '../../constants/strings'
import { api } from '../../utils/newsApi'
import NewsItem from './NewsItem/NewsItem'

type Props = {
  location: City | { name: string; lat: number; lon: number }
  className: string
}

const WeatherNews: React.FC<Props> = ({ location, className }) => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setIsLoading(true)
    const city = location as City
    const searchQuery = `weather ${city.country ? `${city.name} ${city.country}` : ''}`

    api.news
      .search(searchQuery, {
        location: `lat:${location.lat};long:${location.lon};re:100`,
      })
      .then((res) => setNewsArticles(res.value))
      .catch((error) => {
        setError(error)
      })
      .finally(() => setIsLoading(false))
  }, [location])

  if (isLoading || error || !newsArticles?.length) return null

  return (
    <section aria-labelledby="newsHeader" className={classNames(['card', className])}>
      <h2 id="newsHeader" className="text-xl strong-text mb-2">
        {strings.WEATHER_NEWS}
      </h2>
      <ul>
        {newsArticles.map((article) => (
          <NewsItem key={article.name} article={article} />
        ))}
      </ul>
    </section>
  )
}

export default WeatherNews
