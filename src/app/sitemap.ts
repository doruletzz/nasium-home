import { getArticlePosts } from '@/app/article/utils'

export const baseUrl = 'https://home.nasium.coach'

export default async function sitemap() {
  let articles = getArticlePosts().map((post) => ({
    url: `${baseUrl}/article/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/article'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...articles]
}