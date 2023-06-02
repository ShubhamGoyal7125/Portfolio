import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/college_buddy_project.png'
import IMG2 from '../../assets/iNotebook_project.png'
import IMG3 from '../../assets/todolist_project.png'
import IMG4 from '../../assets/blog_project.png'
import IMG5 from '../../assets/newsapp_project.png'
import IMG6 from '../../assets/anugoonj_project.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'College Buddy',
    github: 'https://github.com/ssgroup2022/College_Buddy',
    demo: 'https://github.com/ssgroup2022/College_Buddy'
  },
  {
    id: 2,
    image: IMG2,
    title: 'NoteHive',
    github: 'https://github.com/ShubhamGoyal7125/NoteHive',
    demo: 'https://inotebook-snowy.vercel.app/login'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Anugoonj',
    github: 'https://github.com/Anugoonj-Website/anugoonj',
    demo: 'https://github.com/Anugoonj-Website/anugoonj'
  },
  {
    id: 4,
    image: IMG3,
    title: 'To Do List',
    github: 'https://github.com/ShubhamGoyal7125/toDoList',
    demo: 'https://github.com/ShubhamGoyal7125/toDoList'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Daily Journal',
    github: 'https://github.com/ShubhamGoyal7125/Blog-Website',
    demo: 'https://github.com/ShubhamGoyal7125/Blog-Website'
  },
  {
    id: 6,
    image: IMG5,
    title: 'News-Daily',
    github: 'https://github.com/ShubhamGoyal7125/News-Daily',
    demo: 'https://news-daily-liard.vercel.app/'
  }


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