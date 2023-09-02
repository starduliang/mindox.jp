'use client'

const News = () => (
  <div>
    <div className="--center-content-container mt-[100px]">
      <article className="prose dark:prose-invert w-full">
        <HelloWorld />
      </article>
    </div>
  </div>
)

import HelloWorld from './helloworld.mdx'
export default News
