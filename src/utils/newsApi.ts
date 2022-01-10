import { NewsSearchClient } from '@azure/cognitiveservices-newssearch'
import { NewsArticle } from '@azure/cognitiveservices-newssearch/esm/models'
import { CognitiveServicesCredentials } from '@azure/ms-rest-azure-js'

const NEWS_API_ENDPOINT = 'https://api.bing.microsoft.com/v7.0/news/search'
const credentials = new CognitiveServicesCredentials(process.env.REACT_APP_NEWS_API_KEY as string)

export const api = new NewsSearchClient(credentials, { endpoint: NEWS_API_ENDPOINT })

export function getImageUrlForArticle(article: NewsArticle): string | undefined {
  if (article.image?.thumbnail) {
    return article.image?.thumbnail.contentUrl
  }

  if (article.provider?.[0]?.image?.thumbnail) {
    return article.provider?.[0]?.image?.thumbnail.contentUrl
  }

  return undefined
}
