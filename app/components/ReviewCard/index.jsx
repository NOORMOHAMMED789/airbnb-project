import React from 'react'

export default function ReviewCard(){
    return (
        <div className='p-[24px] shadow-lg w-[300px]'>
            <div className='flex flex-row justify-bewteen items-center relative '>
                <div>$75 / night</div>
                <div className='flex gap-[5px] flex-row justify-center items-center absolute right-0'>
                    <div className='flex gap-[2px]'>
                        <img src='\Images\star.png' width={9.67} height={9.67} alt='homeapge' className='object-contain' />
                        <div>5.0</div> 
                    </div>
                    <div className='underline'>
                        7 reviews
                    </div>
                </div>
            </div>
            <div className='pt-[16px]'>
                <div className='grid grid-cols-2 border border-[#000-] rounded-[8px] p-[8px]'>
                    <div>
                        <div className='text-[10px] font-medium'>CHECK-IN</div>
                        <div className='text-[#6B7280] text-[14px]'>29/03/2024</div>
                    </div>
                    <div>
                        <div className='text-[10px] font-medium'>CHECK-OUT</div>
                        <div className='text-[#6B7280] text-[14px]'>29/03/2024</div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}