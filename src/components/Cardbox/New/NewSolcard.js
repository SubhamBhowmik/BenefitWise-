import React from 'react'

const NewSolcard = ({card}) => {
    return (
        <>
            <div className="" id='newhcard'  >
                <div className="card-- hover-zoom shadow" >
                    <div className='first-div'>
                        <h1>{card.title1}</h1>
                        <h1>{card.title2}</h1>
                    </div>
                    <div className=' second d-flex justify-content-center'>
                        <div className='img-wrap'>
                            <img className='img-box' src={card.img} alt="" />
                        </div>

                    </div>
                    <div className='third-div '>
                        <p>{card.subtitle}</p>
                    </div>

                    <div className='fourth-div'>

                    </div>

                </div>
            </div>
        </>
    )
}

export default NewSolcard