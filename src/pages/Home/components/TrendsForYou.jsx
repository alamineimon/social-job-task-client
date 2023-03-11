import React from 'react'
import {TrendData} from '../../../assets/Data/TrendData'

const TrendsForYou = () => {
  return (
    <div className="flex-col gap-4 text-black bg-white p-4 rounded-md pl-12">
    <h3 className='text-xl mb-5 mt-2'>Trends for you</h3>
    {TrendData.map((trend)=>{
        return(
            <div className="flex-col gap-5">
                <p className='font-bold'>#{trend.name}</p>
                <p className='text-sm'>{trend.shares}k shares</p>
            </div>
        )
    })}

    

</div>
  )
}

export default TrendsForYou