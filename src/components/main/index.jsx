import  { Component } from 'react'
import "./style.scss"
export default class Main extends Component {
  render() {
    return (
      <div className='main'>
          <h1 className='main__title'>Blog</h1>
          <div className="main__cards">
            <div className="main__card">
              <h1 className='card__title'>UI Interactions of the week</h1>
              <h2 className='card__info'>12 Feb 2019  |  <span className='card__span'>Express, Handlebars</span></h2>
              <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="main__card">
            <h1 className='card__title'>UI Interactions of the week</h1>
              <h2 className='card__info'>12 Feb 2019  |  <span className='card__span'>Express, Handlebars</span></h2>
              <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="main__card">
            <h1 className='card__title'>UI Interactions of the week</h1>
              <h2 className='card__info'>12 Feb 2019  |  <span className='card__span'>Express, Handlebars</span></h2>
              <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="main__card">
            <h1 className='card__title'>UI Interactions of the week</h1>
              <h2 className='card__info'>12 Feb 2019  |  <span className='card__span'>Express, Handlebars</span></h2>
              <p className='card__desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
      </div>
    )
  }
}
