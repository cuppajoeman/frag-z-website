import React from "react";

interface Props {
  params: {
    nameOfArticleOrFolder: string[];
  };
}

export default async function WikiFolder({ params: { nameOfArticleOrFolder}, }: Props) {
    console.log(nameOfArticleOrFolder)
    var current: string = nameOfArticleOrFolder[-1]
    // TODO somehow figure out if that is an article or a folder by
    // checking in the articles only table vs the folders only table
    // create two components for article or folder, then load each one condition
    return (
        <h1>{nameOfArticleOrFolder}</h1>
    );
}