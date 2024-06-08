import { render, screen } from '@testing-library/react'
import { DEFAULT_NEWS_ARTICLE } from '../../../testUtils/sampleData'
import NewsItem from './NewsItem'

function renderTarget(article = DEFAULT_NEWS_ARTICLE) {
  render(<NewsItem article={article} index={0} />)
}

describe('NewsItem', () => {
  test('renders news article and links to external news site', () => {
    renderTarget()

    expect(screen.getByText(DEFAULT_NEWS_ARTICLE.name as string)).toBeInTheDocument()
    expect(screen.getByText(DEFAULT_NEWS_ARTICLE.description as string)).toBeInTheDocument()

    const link = screen.getByText(DEFAULT_NEWS_ARTICLE.name as string).closest('a')
    expect(link).toHaveAttribute('href', DEFAULT_NEWS_ARTICLE.url)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  test('renders article image if available', () => {
    renderTarget()

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      DEFAULT_NEWS_ARTICLE.image?.thumbnail?.contentUrl,
    )
  })

  test('falls back to provider image if available', () => {
    renderTarget({
      ...DEFAULT_NEWS_ARTICLE,
      image: undefined,
    })

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      DEFAULT_NEWS_ARTICLE.provider?.[0]?.image?.thumbnail?.contentUrl,
    )
  })
})
