import React, { useEffect } from 'react'
import './solutioncontainer.css'
import * as Scroll from 'react-scroll';
import { useLocation } from 'react-router-dom'
import NewHcard from '../../Cardbox/New/NewHcard';
import NewSolcard from '../../Cardbox/New/NewSolcard';
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
        title1: "Sales Incentivization",
        title2: "",
        subtitle: "All set, Target met? Reward your employees each time they meet business requirements. ",
        bg: "rgba(14, 90, 205, 0.36)"
    }
    const card2 = {
        img: "./images/cardholder/right1.png",
        title1: "Corporate gifting ",
        title2: "",
        subtitle: "A variety of Gift coupons and vouchers are available to maintain your business relations.",
        bg: "rgba(14, 90, 205, 0.36)"
    }
    const card3 = {
        img: "./images/cardholder/1.png",
        title1: "Employee perks ",
        title2: " ",
        subtitle: " Browse more than 500+ online and offline options to motivate and reward your employees.",
        bg: "rgba(14, 90, 205, 0.36)"
    }
    const card4 = {
        img: "./images/cardholder/2.png",
        title1: "Rewards & recognition ",
        title2: "programme",
        subtitle: " Reward your employees for their dedication and constant efforts.",
        bg: "rgba(14, 90, 205, 0.36)"
    }
    const card5 = {
        img: "./images/cardholder/3.png",
        title1: "Food Card",
        title2: "",
        subtitle: " We offer food cards that can be availed on food applications as well as Food Outlets.",
        bg: "rgba(14, 90, 205, 0.36)"
    }

    return (


        <>
            <section >
                <div className="" id='cz' smooth={true}>
                    <div class="text-center p-2 mt-71 ">
                        <h1 className='our-off'  >Our Offerings</h1>
                    </div>
                    <div className='pad-left'>


                        <div class="sol-grid-container">
                            <div class="sol-item1">
                                <NewSolcard card={card1} />
                            </div>
                            <div class="sol-item2">
                                <div className="p-text kylo ">
                                    <p>Boost your channel's growth with our promotion program. Reach a wider audience and amplify your profits. Providing the work partners with gifts, appreciating their work and also providing them with benefits like employees can improve the relations between the company and the partners.


                                    </p>
                                </div>
                            </div>
                            <div class="sol-item3">
                                <div className="p-text kylo wid">
                                    <p>Gift your employees rewards in the form of vouchers to drive employee productivity, boost morale, express gratitude for their hard work, and enhance your goodwill and the company's reputation!


                                    </p>
                                </div>
                            </div>
                            <div class="sol-item4">
                                <NewSolcard card={card2} />
                            </div>

                            <div class="sol-item5">
                                <NewSolcard card={card3} />
                            </div>
                            <div class="sol-item6">
                                <div className="p-text kylo">
                                    <p>We know it's important to take care of your people, which is why we offer all the support and amenities that help make their experience awesome. From free coupons in our employee perks package to free vouchers, we have got you covered!


                                    </p>
                                </div>
                            </div>
                            <div class="sol-item7">
                                <div className="p-text kylo wid">
                                    <p>Employees are the backbone of any company and it is our goal to show them how much they mean. We do this through monthly rewards and year-end awards ceremonies where we thank all those who have gone above and beyond for their hard work!

                                    </p>
                                </div>
                            </div>
                            <div class="sol-item8">
                                <NewSolcard card={card4} />
                            </div>
                            <div class="sol-item9">
                                <NewSolcard card={card5} />
                            </div>
                            <div class="sol-item10">
                                <div className="p-text kylo">
                                    <p>After you've had enough of the same old food at your local cart, come to our spot and try some really unique options! We have something that will make even an experienced eater think twice.



                                    </p>
                                </div>
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