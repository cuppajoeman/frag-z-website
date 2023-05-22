import React from 'react'

interface Props {
    params: {
        article: string
    }
}

export default async function WikiArticle( { params: { article } }: Props )  {
  return (
    <div>page</div>
  )
}
