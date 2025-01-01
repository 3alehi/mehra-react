'use client'
import React from 'react';

import LastVisite from '@/components/Profile/LastVisite';
import { motion } from 'framer-motion';

const Page: React.FC = () => {
    return (
        <div>
            <>    
                  <div className="flex relative pr-10">

                <div
                    className="relative"
                >
                    <p
                        className={`px-5 cursor-pointer mb-2  text-turquoise
`}
                    >
                        بازدید های اخیر </p>
                    <motion.div
                        layoutId="underline"
                        className="absolute rounded-2xl bottom-0 left-0 w-full mt-2"
                        style={{
                            height: '3px',
                            backgroundColor: '#36BABB',
                        }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                </div>
            </div>
            <div className='border rounded-2xl py-6 px-7 flex flex-col gap-2'>

                <LastVisite />
                <LastVisite />
                <LastVisite />
                <LastVisite />
                <LastVisite />
                <LastVisite />
                <LastVisite />
            </div>


            </>

        </div>
    );
};

export default Page;