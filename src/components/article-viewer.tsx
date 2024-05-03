"use client";

import Markdown from 'react-markdown'

export default function ArticleViewer() {
    const markdown = '# Hi, *Pluto*!'
  return (
    <div className="flex bg-teal-950 w-full">
        <div className="m-5">

            <Markdown>{markdown}</Markdown>
        </div>
    </div>
  );
}
