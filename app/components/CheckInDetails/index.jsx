import React from 'react'
import ReviewCard from '../ReviewCard'

export default function CheckInDetails(){
    return (
        <div className='flex gap-[80px]'>
            <div className='w-[60%]'>
                <div className='flex justify-between items-center pb-[32px] border-b-[1px] border-[#000-]'>
                    <div>
                        <div>Entire rental unit hosted by Ghazal</div>
                        <div>2 guests . 1 bedroom . 1 bed . 1 bath</div>
                    </div>
                    <div>
                        <img src='\Images\Avatar.png' alt='avatar' width={56} height={56} />
                    </div>
                </div>
                <div className='pt-[40px] border-b-[1px] border-[#000-]'>
                    <div className='flex gap-[16px] pb-[16px]'>
                        <img src='\Images\Icon.png' width={32} height={32} alt='home-icon' className='object-contain' />
                        <div>
                            <div>Entire home</div>
                            <div>you'll have apartment to yourself</div>
                        </div>
                    </div>
                    <div className='flex gap-[16px] pb-[16px]'>
                        <img src='\Images\Icon.png' width={32} height={32} alt='home-icon' className='object-contain' />
                        <div>
                            <div>Enhanced clean</div>
                            <div>This Host commited to Airbnb's 5-step enhanced cleaning process.
                                <span className='underline'>show more</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[16px] pb-[16px]'>
                        <img src='\Images\Icon (1).png' width={32} height={32} alt='home-icon' className='object-contain' />
                        <div>
                            <div>self check-in</div>
                            <div>Check yourself in with the keyboard</div>
                        </div>
                    </div>
                    <div className='flex gap-[16px] pb-[16px]'>
                        <img src='\Images\calendar.png' width={32} height={32} alt='home-icon' className='object-contain' />
                        <div>
                            Free cancellation before 14 feb
                        </div>
                    </div>
                </div>
                <div className='pt-[40px] border-b-[1px] border-[#000-] pb-[40px]'>
                    Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44. ...
                </div>
                <div className='py-[40px] border-b-[1px] border-[#000-]'>
                    <div className='pb-[24px]'>Where you'll sleep</div>
                    <img src='\Images\Rectangle 3.png' width={320} height={212} alt='home-image' />
                    <div>Bedroom</div>
                    <div>1 queen bed</div>
                </div>
                <div className='py-[40px] border-b-[1px] border-[#000-]'>
                    <div className='pb-[32px]'>What this place offers</div>
                    <div className='flex gap-[24px]'>
                        <div className='w-[323px]'>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (3).png' width={32} height={32} alt='garden-icon' />
                                <div>Garden view</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (4).png' width={32} height={32} alt='garden-icon' />
                                <div>Wifi</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (5).png' width={32} height={32} alt='garden-icon' />
                                <div>Free washer - in building</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (6).png' width={32} height={32} alt='garden-icon' />
                                <div>Central air conditioning</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (7).png' width={32} height={32} alt='garden-icon' />
                                <div>Refrigerator</div>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (3).png' width={32} height={32} alt='garden-icon' />
                                <div>Garden view</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (4).png' width={32} height={32} alt='garden-icon' />
                                <div>Wifi</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (5).png' width={32} height={32} alt='garden-icon' />
                                <div>Free washer - in building</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (6).png' width={32} height={32} alt='garden-icon' />
                                <div>Central air conditioning</div>
                            </div>
                            <div className='flex gap-[16px] items-center pb-[16px]'>
                                <img src='\Images\Icon (7).png' width={32} height={32} alt='garden-icon' />
                                <div>Refrigerator</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ReviewCard />
            </div>
        </div>
    )
}