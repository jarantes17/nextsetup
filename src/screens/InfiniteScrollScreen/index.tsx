import { useEffect, useState } from 'react'

const InfiniteScrollScreen: React.FC = () => {
  const [commits, setCommits] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const perPage = 10
    const ENDPOINT = 'https://api.github.com/repos/vercel/next.js/commits'
    const URL = `${ENDPOINT}?per_page=${perPage}&page=${currentPage}&order=DESC`
    fetch(URL)
      .then(response => response.json())
      .then((newCommits: []) =>
        setCommits(prevCommits => [...prevCommits, ...newCommits])
      )
  }, [currentPage])

  useEffect(() => {
    const intersectionsObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        console.log('Sentinela appears!', currentPage + 1)
        setCurrentPage(currentValue => currentValue + 1)
      }
    })
    intersectionsObserver.observe(document.querySelector('#sentinela')!)
    return () => intersectionsObserver.disconnect()
  }, [])

  return (
    <>
      <div id="list">
        <h1>GitHub API: Infinite Scroller</h1>
        <h2>Página atual: {currentPage}</h2>

        <ul>
          {commits.map((commit: any) => (
            <li key={commit.author.login}>
              <div>
                <img src={commit.author.avatar_url} />
                <p>
                  github.com/<strong>{commit.author.login}</strong>
                </p>
              </div>
            </li>
          ))}
          <li id="sentinela"></li>
        </ul>
      </div>
      <style jsx>
        {`
          #list {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          ul {
            width: 300px;
            height: 600px;
            overflow-y: scroll;
            padding: 0;
            background-color: #ddd;
          }
          li {
            height: 150px;
            padding: 15px;
          }
          li img {
            --size: 75px;
            width: var(--size);
            height: var(--size);
            border-radius: 50%;
          }
          li div {
            padding: 15px;
            background-color: #fff;
            height: calc(100% - 30px);
          }
          #sentinela {
            width: 100%;
            height: 5px;
            background-color: red;
          }
        `}
      </style>
    </>
  )
}

export default InfiniteScrollScreen
