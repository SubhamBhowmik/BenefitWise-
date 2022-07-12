import React from 'react'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import { useHistory } from 'react-router-dom';
const NewFlip = ({ card }) => {
    const [isFlipped, setisFlipped] = useState(false)
    const handleClick = () => {
        setisFlipped(!isFlipped)
    }
    const history = useHistory()
    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div className='new-card- shadow hover-zoom ' onClick={handleClick}>
                    <div className='illa' style={{ background: card.bg }}>
                        <img src={card.img} alt="" />
                    </div>
                    <div className="illa2">
                        <div className='new-height'>
                            <h1>{card.title1}</h1>
                            <h1>{card.title2}</h1>
                        </div>


                        <p>{card.subtitle}</p>
                    </div>

                    <div className='new-more-wrap'>
                        <div className="new-more ripple hover-shadow" smooth={true} duration={500} onClick={() => { history.push('/solutions#cz') }}>
                            <h2>More</h2>
                        </div>
                    </div>
                </div>
                <div className='new-card- shadow hover-zoom ' onClick={handleClick} >

                    <div className="illa2">

                        <p>Encourage your employees by giving seemless.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum officia magna
                            m natus molestias architecto, voluptate omnis neque aliquid laborum? Dolorum dolorem nihil
                            modi blanditiis, nobis provident autem illo voluptate. Hic.
                        </p>
                    </div>


                </div>

            </ReactCardFlip>
        </>
    )
}

export default NewFlip