import React, { useEffect, useState } from 'react'

interface TableOfContentsItem {
  id: string
  text: string
  level: string
  children: TableOfContentsItem[]
}

const TableOfContents = ({ contentId }: { contentId: string }) => {
  const [headers, setHeaders] = useState<TableOfContentsItem[]>([])

  useEffect(() => {
    const processedHeaders = processHeaders(contentId)
    setHeaders(processedHeaders)
  }, [contentId])

  const renderTableOfContents = (items: TableOfContentsItem[]) => (
    <ul className="list-disc ml-4">
      {items.map((item, index) => (
        <li key={index}>
          <a href={`#${item.id}`}>{item.text}</a>
          {item.children.length > 0 && renderTableOfContents(item.children)}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="table-of-contents">
      <h3>Table of Contents</h3>
      {renderTableOfContents(headers)}
    </div>
  )
}

const processHeaders = (contentId: string): TableOfContentsItem[] => {
  const doc = document.getElementById(contentId)
  if (!doc) return []
  const headers: TableOfContentsItem[] = []
  const headerHierarchy: TableOfContentsItem[] = []

  const headerElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6')

  headerElements.forEach((element) => {
    const headerItem = processHeader(element as HTMLElement)
    element.id = headerItem.id

    while (headerHierarchy.length > 0 && Number(headerItem.level) <= headerHierarchy.length) {
      headerHierarchy.pop()
    }

    if (headerHierarchy.length > 0) {
      const currentParent = headerHierarchy[headerHierarchy.length - 1]
      currentParent.children.push(headerItem)
    } else {
      headers.push(headerItem)
    }

    headerHierarchy.push(headerItem)
  })

  return headers
}

const processHeader = (element: HTMLElement): TableOfContentsItem => {
  const textContent = element.textContent || ''
  const uniqueId = generateUniqueId(textContent)
  const level = element.tagName.substring(1)
  const headerItem: TableOfContentsItem = { id: uniqueId, text: textContent, children: [], level }
  return headerItem
}

const generateUniqueId = (() => {
  let idCounter = 0
  return (textContent: string) => {
    const sanitizedText = textContent.replace(/\s+/g, '_').toLowerCase()
    return `${sanitizedText}_${idCounter++}`
  }
})()

export default TableOfContents
