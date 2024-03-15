import React from 'react'

export default function Reviews({ title, rating, review, tags, place }){
    return (
        <div>
            <div className='pb-[8px] text-[30px] leading-[40px] font-medium'>{title}</div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-row justify-center items-center gap-[18px]'>
                    <div>
                        <div className='flex gap-[2px] justify-center items-centers'>
                            <img src='\Images\star.png' width={20} height={20} alt='rating' className=' object-contain ' />
                            <div>{rating}</div>
                        </div> 
                    </div>
                    <div className=''>.</div>  
                    <div className='underline text-[18px] leading-[20px] font-medium text-[#'>
                        {`${review} reviews`}
                    </div>
                    <div className=''>.</div>  
                    <div className='flex gap-[2px] justify-center items-center'>
                        <img src='\Images\badge.png' width={20} height={20} alt='rating' className='object-contain ' />
                        <div className='text-[18px] leading-[20px] font-medium text-[#6B7280]'>{tags}</div>
                    </div>
                    <div className=''>.</div>  
                    <div className='text-[18px] underline font-medium leading-[20px] text-[#6B7280]'>{place}</div>
                </div>
                <div className='flex gap-[16px] justify-center items-center'>
                    <img src='\Images\share.png' width={59} height={20}  alt='share-icon' />
                    <img src='\Images\save.png' width={53} height={20} alt='save-icon' />
                </div>
            </div>
        </div>
    )
}