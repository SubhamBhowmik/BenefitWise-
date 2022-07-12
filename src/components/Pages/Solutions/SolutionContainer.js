import React, { useEffect } from 'react'
import './solutioncontainer.css'
import * as Scroll from 'react-scroll';
import { useLocation } from 'react-router-dom'
import NewHcard from '../../Cardbox/New/NewHcard';
const Solutioncontainer = () => {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location])

    const card1 = {
        img: "./images/cardholder/left1.png",
        title1: "Channel",
        title2: "promotion programs",
        subtitle: "Encourage your employees by giving seemless.",
        bg: " rgba(231, 21, 8, 0.36)"
    
      }
      const card2 = {
        img: "./images/cardholder/right1.png",
        title1: "Corporate",
        title2: "gifting",
        subtitle: "Encourage your employees by giving seemless.",
        bg: " rgba(231, 21, 8, 0.36)"
      }
      const card3 = {
        img: "./images/cardholder/1.png",
        title1: "Employee perks ",
        title2: " ",
        subtitle: "Encourage your employees by giving seemless.",
        bg:"rgba(14, 90, 205, 0.36)"
      }
      const card4 = {
        img: "./images/cardholder/2.png",
        title1: "Rewards & recognition ",
        title2: "programme",
        subtitle: "Encourage your employees by giving seemless.",
        bg:"rgba(14, 90, 205, 0.36)"
      }
      const card5 = {
        img: "./images/cardholder/3.png",
        title1: "Food Card",
        title2: "",
        subtitle: "Encourage your employees by giving seemless.",
        bg:"rgba(14, 90, 205, 0.36)"
      }

    return (


        <>
            <section >
                <div className="container" id='cz' smooth={true}>
                    <div class="text-center p-2 mt-71 ">
                        <h1 className='our-off'  >Our Offerings</h1>
                    </div>

                    <div class="sol-grid-container">
                        <div class="sol-item1">
                          <NewHcard card={card1}/>
                        </div>
                        <div class="sol-item2">
                            <div className="p-text kylo">
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
                                    eius ut nesciunt volupta
                                    lotes et tempore delectus At
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed temporibus et fuga officia! Consequatur non est ex voluptatem nesciunt voluptatum reiciendis cumque eius at? At molestias illum reprehenderit neque!


                                </p>
                            </div>
                        </div>
                        <div class="sol-item3">
                            <div className="p-text kylo">
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
                                    eius ut nesciunt volupta
                                    lotes et tempore delectus At
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident architecto accusamus fuga tenetur ratione eaque minima tempore quia placeat dignissimos necessitatibus, sed sapiente voluptas? 
                                    Eos adipisci eum beatae repudiandae omnis!

                                </p>
                            </div>
                        </div>
                        <div class="sol-item4">
                        <NewHcard card={card2}/>
                        </div>

                        <div class="sol-item5">
                        <NewHcard card={card3}/>
                        </div>
                        <div class="sol-item6">
                            <div className="p-text kylo">
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
                                    eius ut nesciunt volupta
                                    lotes et tempore delectus At
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore rerum, reiciendis tempora ab adipisci atque soluta quidem esse ipsa voluptatum possimus neque
                                     nemo officia exercitationem? Non dolores eius mollitia accusantium!

                                </p>
                            </div>
                        </div>
                        <div class="sol-item7">
                            <div className="p-text kylo">
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
                                    eius ut nesciunt volupta
                                    lotes et tempore delectus At
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel error commodi iure dolores vero officiis temporibus molestias fugiat architecto itaque eveniet 
                                    necessitatibus, laborum, soluta voluptates corrupti eos beatae laboriosam!

                                </p>
                            </div>
                        </div>
                        <div class="sol-item8">
                        <NewHcard card={card4}/>
                        </div>
                        <div class="sol-item9">
                        <NewHcard card={card5}/>
                        </div>
                        <div class="sol-item10">
                            <div className="p-text kylo">
                                <p>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
                                    eius ut nesciunt volupta
                                    lotes et tempore delectus At
                                    Lorem ipsum dolor sit amet consectetur ad
                                    ipisicing elit. Distinctio, rerum, totam iusto sit molestiae beatae maxime inventore pariatur ea enim at amet natus repellendus doloribus laborum voluptatum magnam ut a.


                                </p>
                            </div>
                        </div>


                    </div>

                </div>


            </section>
        </>
        // <div className="container-fluid mx-3 mb-3" id='cz'>
        //     <div class="text-center p-2 mt-2 ">
        //         <h1>Our Offerings</h1>

        //     </div>

        //     <div>
        //         <div class="sol-card-wrapper ">


        //             <div className='sol-left'>

        //                 <div className="solution-card float-end">
        //                     <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom solution-card " >
        //                         <div class=" ">
        //                             <div className=' p-2  border-radiuss  bg-light-blue  '>
        //                                 <h2 className='m-3 text-white'>Food Card</h2>
        //                             </div>
        //                             <div className="text-center">

        //                                 <img className='img-fluid text-center' src="./images/cardholder/3.png" alt="" />
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div class="sol-right ">

        //             <div className="solution-card">
        //                     <p className='px-4 '>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                         eius ut nesciunt volupta
        //                         lotes et tempore delectus At

        //                     </p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>


        //     <div class="">

        //         <div class="sol-card-wrapper ">


        //             <div className='sol-right'>
        //             <div className="solution-card float-end">
        //                     <p className='px-4 '>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                         eius ut nesciunt volupta
        //                         lotes et tempore delectus At

        //                     </p>
        //                 </div>
        //             </div>
        //             <div class="sol-left ">

        //                 <div className="solution-card">
        //                     <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom solution-card " >
        //                         <div class=" ">
        //                             <div className=' p-2  border-radiuss  bg-light-blue  '>
        //                                 <h2 className='m-3 text-white'>Employee Perks</h2>
        //                             </div>
        //                             <div className="text-center">

        //                                 <img className='img-fluid text-center' src="./images/cardholder/1.png" alt="" />
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>


        //             </div>

        //         </div>


        //     </div>

        //     <div class="">

        //         <div class="sol-card-wrapper ">


        //             <div className='sol-left'>

        //                 <div className="solution-card float-end">
        //                     <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom solution-card " >

        //                         <div className=' p-2  border-radiuss d-flex justify-content-center bg-light-blue  '>
        //                             <h2 className='ml-20 text-white'>Rewards
        //                                 & recognition programme</h2>
        //                         </div>
        //                         <div className="text-center">

        //                             <img className='img-fluid text-center' src="./images/cardholder/2.png" alt="" />
        //                         </div>


        //                     </div>
        //                 </div>

        //             </div>
        //             <div class="sol-right ">
        //             <div className="solution-card">
        //                     <p className='px-4 '>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                         eius ut nesciunt volupta
        //                         lotes et tempore delectus At

        //                     </p>
        //                 </div>
        //             </div>

        //         </div>


        //     </div>



        //     <div class="">

        //         <div class="sol-card-wrapper ">


        //             <div className='sol-right'>
        //             <div className="solution-card float-end">
        //                     <p className='px-4 '>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                         eius ut nesciunt volupta
        //                         lotes et tempore delectus At

        //                     </p>
        //                 </div>
        //             </div>
        //             <div class="sol-left ">

        //                 <div className="solution-card">
        //                     <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom solution-card " >
        //                         <div class=" ">
        //                             <div className=' p-2  border-radiuss  bg-pink '>
        //                                 <h2 className='ml-20 text-white'>
        //                                     <div>Channel</div>
        //                                     promotion programs</h2>
        //                             </div>
        //                             <div className="text-center">

        //                                 <img className='img-fluid text-center' src="./images/cardholder/left1.png" alt="" />
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>


        //             </div>

        //         </div>


        //     </div>


        //     <div>
        //         <div class="sol-card-wrapper ">


        //             <div className='sol-left'>
        //                 <div className="">
        //                     <div className="solution-card float-end">
        //                         <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom solution-card " >
        //                             <div class=" ">
        //                                 <div className=' p-2  border-radiuss bg-pink  '>
        //                                     <h2 className='m-3 text-white'>
        //                                         <div>Corporate</div>
        //                                         gifting
        //                                     </h2>
        //                                 </div>
        //                                 <div className="text-center">

        //                                     <img className='img-fluid text-center' src="./images/cardholder/right1.png" alt="" />
        //                                 </div>

        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="sol-right ">

        //                 <div className="solution-card">
        //                     <p className='px-4 '>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                         eius ut nesciunt volupta
        //                         lotes et tempore delectus At

        //                     </p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>







        //     {/*  <div class="row mt-3 px-2">
        //         <div class="col-md-6 p-2">

        //             <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom" >
        //                 <div class=" border-radiuss hover-overlay hover-zoom hover-shadow ripple solution-card">
        //                     <div className=' p-2 hover-overlay hover-zoom hover-shadow ripple border-radiuss d-flex justify-content-center bg-light-blue  '>
        //                         <h2 className='m-3 text-white'>Rewards
        //                             & recognition programme


        //                         </h2>
        //                     </div>
        //                     <div className="solution-card text-center">

        //                         <img className='img-fluid text-center' src="./images/cardholder/2.png" alt="" />
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col-md-6 py-2  ">
        //             <div className='px-3'>

        //                 <p className='mt-3 text-center p-2 px-3'>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                     eius ut nesciunt volupta
        //                     lotes et tempore delectus At
        //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores dolor quo impedit
        //                     consequuntur, natus autem illum. Doloremque quidem magni voluptates. Corporis amet
        //                     , placeat quos omnis deserunt laboriosam accusamus commodi!
        //                 </p>
        //             </div>


        //         </div>

        //     </div> */}



        //     {/* <div class="row mt-3 px-2">

        //         <div class="col-md-6 py-2">
        //             <div className='px-3'>

        //                 <p className='mt-3 text-center p-2 px-3'>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                     eius ut nesciunt volupta
        //                     lotes et tempore delectus At
        //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores dolor quo impedit
        //                     consequuntur, natus autem illum. Doloremque quidem magni voluptates. Corporis amet
        //                     , placeat quos omnis deserunt laboriosam accusamus commodi!
        //                 </p>
        //             </div>


        //         </div>
        //         <div class="col-md-6  p-2">

        //             <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom" width="200" height="50">
        //                 <div class=" border-radiuss hover-overlay hover-zoom hover-shadow ripple">
        //                     <div className=' p-2 hover-overlay hover-zoom hover-shadow ripple border-radiuss d-flex justify-content-center bg-pink '>
        //                         <h2 className='m-3 text-white'>Channel
        //                             promotion programs</h2>
        //                     </div>
        //                     <div className="card-body text-center">

        //                         <img className='img-fluid text-center' src="./images/cardholder/3.png" alt="" />
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>

        //     </div> */}


        //     {/* 
        //     <div class="row mt-3 px-2 ">
        //         <div class="col-md-6 p-2">

        //             <div class="border-radiuss hover-overlay hover-zoom hover-shadow ripple shadow gradient-custom" width="200" height="50">
        //                 <div class=" border-radiuss hover-overlay hover-zoom hover-shadow ripple">
        //                     <div className=' p-2 hover-overlay hover-zoom hover-shadow ripple border-radiuss d-flex justify-content-center bg-pink '>
        //                         <h2 className='m-3 text-white'>Corporate
        //                             gifting</h2>
        //                     </div>
        //                     <div className="card-body text-center">

        //                         <img className='img-fluid text-center' src="./images/cardholder/right1.png" alt="" />
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        //         <div class="col-md-6 py-2  ">
        //             <div className='px-3'>

        //                 <p className='mt-3 text-center p-2 px-3'>Lorem ipsum dolor sit amet. 33 internos vitae aut error tenetur ea iure aspernatur. Qui quia consectetur sit animi
        //                     eius ut nesciunt volupta
        //                     lotes et tempore delectus At
        //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores dolor quo impedit
        //                     consequuntur, natus autem illum. Doloremque quidem magni voluptates. Corporis amet
        //                     , placeat quos omnis deserunt laboriosam accusamus commodi!
        //                 </p>
        //             </div>


        //         </div>

        //     </div> */}

        // </div>
    )
}

export default Solutioncontainer