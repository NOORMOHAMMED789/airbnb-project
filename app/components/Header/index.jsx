import Image from 'next/image'
import React from 'react'

export default function Header(){
    return (
        <div className='py-[32px] grid grid-cols-3 items-end'>
            <div>
                <img src="\Images\mainLogo.png" alt='' width={102} height={32} />  
            </div>
            <div>
                This is the search
            </div>
            <div className='absolute right-[160px]'>
                Become a host
            </div>
        </div>
    )
}