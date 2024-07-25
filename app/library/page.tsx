import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Library', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Library
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          <div className="mb-2 mr-5 mt-2">
            <Link
              href={'/books'}
              className="mr-3·text-3xl·font-medium·uppercase·text-primary-500·hover:text-primary-600·dark:hover:text-primary-400"
            >
              Books
            </Link>
          </div>
          <div className="mb-2 mr-5 mt-2">
            <Link
              href={'/movies'}
              className="mr-3·text-3xl·font-medium·uppercase·text-primary-500·hover:text-primary-600·dark:hover:text-primary-400"
            >
              Movies
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
