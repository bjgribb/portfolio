import React, { Component } from 'react'

export default class Portfolio extends Component {
  render () {
    return (
      <section className='portfolio-section section mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>Portfolio</b></h3>
                <h6 className='font-lite-black'><b>MY WORK</b></h6>
              </div>
            </div>
            {/* <div className='col-sm-8'>
              <div className='portfolioFilter clearfix margin-b-80'>
                <a href='#' data-filter='*' className='current'><b>ALL</b></a>
                <a href='#' data-filter='.web-design'><b>WEB DESIGN</b></a>
                <a href='#' data-filter='.branding'><b>BRANDING</b></a>
                <a href='#' data-filter='.graphic-design'><b>GRAPHIC DESIGN</b></a>
              </div>
            </div> */}
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <a href='images/portfolio-1-600x400.jpg'>
                <img src='images/portfolio-1-600x400.jpg' alt /></a>
            </div>
            <div className='col mb-3'>
              <p><strong>Spotify Me</strong> - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Praesent elementum luctus tellus eu
                  pellentesque. Pellentesque molestie, lacus eu lacinia
                  hendrerit, risus ligula sollicitudin sem, vel auctor tellus
                  enim sit amet dolor. Cras auctor, mi non ornare viverra, velit
                  odio scelerisque erat, ut dictum urna felis non lectus. Sed
                  faucibus nisl.</p>
            </div>
            <div className='col-md-6'>
              <a href='images/portfolio-7-600x800.jpg'>
                <img src='images/portfolio-7-600x800.jpg' alt /></a>
            </div>
            <div className='col mb-3'>
              <p><strong>TCBY Flashcards</strong> - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Praesent elementum luctus tellus eu
                  pellentesque. Pellentesque molestie, lacus eu lacinia
                  hendrerit, risus ligula sollicitudin sem, vel auctor tellus
                  enim sit amet dolor. Cras auctor, mi non ornare viverra, velit
                  odio scelerisque erat, ut dictum urna felis non lectus. Sed
                  faucibus nisl.</p>
            </div>
            <div className='col-md-6'>
              <a href='images/portfolio-2-600x400.jpg'>
                <img src='images/portfolio-2-600x400.jpg' alt /></a>
            </div>
            <div className='col mb-3'>
              <p><strong>WeeCare</strong> - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Praesent elementum luctus tellus eu
                  pellentesque. Pellentesque molestie, lacus eu lacinia
                  hendrerit, risus ligula sollicitudin sem, vel auctor tellus
                  enim sit amet dolor. Cras auctor, mi non ornare viverra, velit
                  odio scelerisque erat, ut dictum urna felis non lectus. Sed
                  faucibus nisl.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
