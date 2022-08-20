import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_project.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portoflio Website',
    github: 'https://github.com/ShubhamGoyal7125/',
    demo: 'https://github.com/ShubhamGoyal7125/'
  },
  {
    id: 2,
    image: IMG1,
    title: 'My Portoflio Website',
    github: 'https://github.com/ShubhamGoyal7125/',
    demo: 'https://github.com/ShubhamGoyal7125/'
  },
  {
    id: 3,
    image: IMG1,
    title: 'My Portoflio Website',
    github: 'https://github.com/ShubhamGoyal7125/',
    demo: 'https://github.com/ShubhamGoyal7125/'
  },
  {
    id: 4,
    image: IMG1,
    title: 'My Portoflio Website',
    github: 'https://github.com/ShubhamGoyal7125/',
    demo: 'https://github.com/ShubhamGoyal7125/'
  },
  {
    id: 5,
    image: IMG1,
    title: 'My Portoflio Website',
    github: 'https://github.com/ShubhamGoyal7125/',
    demo: 'https://github.com/ShubhamGoyal7125/'
  },
  {
    id: 6,
    image: IMG1,
    title: 'My Portoflio Website',
    github: 'https://github.com/ShubhamGoyal7125/',
    demo: 'https://github.com/ShubhamGoyal7125/'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item__image">
                  <img src={image} alt={image} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__cta">
                  <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                  <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }




      </div>
    </section>
  )
}

export default Portfolio