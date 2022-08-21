import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_project.png'
import IMG2 from '../../assets/iNotebook_project.png'
import IMG3 from '../../assets/todolist_project.png'
import IMG4 from '../../assets/blog_project.png'
import IMG5 from '../../assets/newsapp_project.png'
import IMG6 from '../../assets/drumkit_project.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portoflio Website',
    github: 'https://github.com/ShubhamGoyal7125/Portfolio.git',
    demo: 'https://shubhamgoyal7125.github.io/Portfolio/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'iNoteBook',
    github: 'https://github.com/ShubhamGoyal7125/inotebook',
    demo: 'https://github.com/ShubhamGoyal7125/inotebook'
  },
  {
    id: 3,
    image: IMG3,
    title: 'To Do List',
    github: 'https://hidden-lowlands-19867.herokuapp.com/',
    demo: 'https://github.com/ShubhamGoyal7125/To-Do-List-New'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Daily Journal',
    github: 'https://github.com/ShubhamGoyal7125/Blog-Website',
    demo: 'https://github.com/ShubhamGoyal7125/Blog-Website'
  },
  {
    id: 5,
    image: IMG5,
    title: 'News App',
    github: 'https://github.com/ShubhamGoyal7125/News-Daily',
    demo: 'https://github.com/ShubhamGoyal7125/News-Daily'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Drum Kit',
    github: 'https://github.com/ShubhamGoyal7125/Drum-kit',
    demo: 'https://drum-kit-shubham.herokuapp.com/'
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