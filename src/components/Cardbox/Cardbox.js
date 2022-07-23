import React from 'react';
import './Cardbox.css'
export default function App() {
  return (
    <div className='d-flex justify-content-center mbb-14 mt-97 ' id='test-card'>

      <div className='testi-card shadow' style={{ position: "relative", overflow: "hidden" }}>
         <div className='dot'  >"</div>
        <img className='img-fluid cls1' src="./images/testimonial/Line 285.png" alt=""  />
        <img className='img-fluid cls2' src="./images/testimonial/Line 287.png" alt=""  />
        <img className='img-fluid cls3' src="./images/testimonial/Line 285.png" alt=""  />
        <img className='img-fluid cls4' src="./images/testimonial/Line 287.png" alt=""  />
        <img className='img-bgun' src="./images/testimonial/1.png" alt="" style={{ position: "absolute" }} />

        <div className=' text-center'>

          {/* <img src="./images/testimonial/right.png" alt="" style={{position:"absolute",height:"120px",marginLeft:"-205px",marginTop:"290px"}} /> */}
          <div className=' first text-dark' >
            <h3> Customer</h3></div>

          <div className="second">
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores, error natus beatae incidunt culpa libero sed hic consectetur temporibus, dolores voluptates! Id, aspernatur neque tenetur minus nesciunt iste sunt?</p>

          </div>





          <img className='avatar-img' src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />


          <div className='thirddd text-center'>
           <h4>Customer Name</h4>
           <h6>designation</h6>
          </div>
        </div>
      </div>
    </div>
  );
}