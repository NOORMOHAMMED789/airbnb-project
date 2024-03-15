import React from 'react'

export default function ImageGallary({}){
    return (
        <div className='flex gap-[8px] w-full'>
            <div>
                <img src='\Images\Image.png' width={556} height={400} alt='bedroom-image' className='rounded-l-[24px]'/>
            </div>
            <div className='flex flex-row gap-[8px]'>
                <div className='flex gap-[8px] flex-col'>
                    <img src='\Images\house1.png' width={274} height={196} alt='house-image' />
                    <img src='\Images\house2.png' width={274} height={196} alt='house-image' />
                </div>
                <div className='flex gap-[8px] flex-col'>
                    <img src='\Images\house3.png' width={274} height={196} alt='house-image' />
                    <img src='\Images\house4.png' width={274} height={196} alt='house-image' />
                </div>
            </div>
        </div>
    )
}