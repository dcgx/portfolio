import React from 'react'

const Articles = () => {
  return (
    <article className="article border max-w-screen-xl mx-auto">
      <h1>Latest Articles</h1>
      <div className="wrapper">
        <article>
          <h3>Creating my own website with NextJS, Styled Components</h3>
          <span>January 30, 2021</span>
          <ul className="article-skills">
            <li>NextJS</li>
            <li>Styled Components</li>
          </ul>
          <p>
            I am going to show you how I created the website you are watching right now and why I
            decided to pick each piece of the tech stack
          </p>
        </article>
      </div>
    </article>
  )
}

export default Articles
