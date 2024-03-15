import Image from 'next/image'
import React from 'react'

export default function Header(){
    return (
        <div className='py-[32px] flex justify-between items-center'>
            <div>
                <img src="\Images\mainLogo.png" alt='' width={102} height={32} />  
            </div>
            <div className=' relative'>
                <input type='text' placeholder='Start your search...' className='py-[14px] pl-[24px] pr-[56px] w-full outline-none border-[1px] border-[#000] rounded-full ' />
                <img src='\Images\searchIcon.png' width={32} height={32} alt='search-icon' className='absolute right-[6px] top-[12px]'/>
            </div>
            <div className='flex flex-row justify-center items-center gap-[12px]'>
                <div>
                    Become a host
                </div>
                <img src='\Images\globe.png' alt='global-icon' width={24} height={24} />
                <div className='flex flex-row gap-[12px] justify-center items-center py-[12px] px-[16px] border-[1px] rounded-full'>
                    <img src='\Images\menu.png' width={24} height={24} alt='hamburger-menu' />
                    <img src='\Images\Avatar Base.png ' width={32} height={32} alt='avatar' />
                </div>
            </div>
        </div>
    )
}