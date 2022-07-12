import React from 'react'

const Prefooter = () => {
  return (
    <>

      <section className='mt-300'>
        <div className='prefooter-wrap' style={{background:"rgba(253, 150, 68, 0.18)"}} >
          <div class="text-center p-2  watchit">
            <h1 className='font-weight-bold'>Watch it</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <video class='video-tag' controls>
              <source src="movie.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />

            </video>
          </div>

          <div class="get-text mt-5 text-center">
            <h1 >Get an easy and quick meaningful  <span class='text-violet'>Employee Engagement</span> </h1>
            <h1 >orboarding with us for your entire farm</h1>
            <p className='text-muted '>How this portal can be helpful to you </p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Prefooter