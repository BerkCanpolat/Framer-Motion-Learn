import React from 'react'

const Card = ({ heading, imgBackground }) => {

    const colors = {
        red: "bg-red-400",
        green: "bg-green-400",
        blue: "bg-blue-400",
    }

  return (
    <div className='flex bg-white max-w-[90%] h-full mx-auto px-10 gap-20 rounded-3xl shadow-xl'>
        <div className='flex-1 grid content-center gap-10'>
            <h2 className='text-4xl lg:text-8xl'>{heading}</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui a officia iure aut libero ipsam, maiores atque hic reiciendis, minima, veritatis iste laudantium animi at adipisci excepturi distinctio et explicabo.
            </p>
            <button className='p-2 px-4 border border-black rounded-full mr-auto'>Fond out more</button>
        </div>
        <div className='flex-1 h-full py-10'>
            <div className={`${colors[imgBackground]} w-full h-full rounded-tr-[200px]`}/>
        </div>
    </div>
  )
}

export default Card