'use client'

import React from 'react'

export default function ImageGallary({}){
    return (
        <div className='flex justify-start gap-[8px] w-full'>
            <div className=''>
                <img src='\Images\Image.png' width={600} height={400} alt='bedroom-image' className='rounded-l-[24px] aspect-auto'/>
            </div>
            <div className='flex flex-row gap-[8px]'>
                <div className='flex gap-[8px] flex-col'>
                    <img src='\Images\house1.png' width={295} height={200} alt='house-image' />
                    <img src='\Images\house2.png' width={295} height={200} alt='house-image' />
                </div>
                <div className='flex gap-[8px] flex-col'>
                    <img src='\Images\house3.png' width={295} height={196} alt='house-image' className='image3' />
                    <img src='\Images\house4.png' width={295} height={196} alt='house-image' className='image4' />
                </div>
            </div>
            <style jsx>{`
                .image3{
                    border-top-right-radius: 24px;
                }
                .image4{
                    border-bottom-right-radius: 24px;
                }
            `}</style>
        </div>
    )
}