"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Login from '../../components/Login/Login';
import Password from '@/components/Login/Password';
import Sms from '@/components/Login/Sms';
import { useAppContext } from '../context';

const Page: React.FC = () => {
    const [step, setStep] = useState<number>(0)
    const [phoneNumber, setPhoneNumber] = useState('');
    const { hasPassword } = useAppContext();


    return (
        <div className="flex items-center justify-center h-screen">
            <div className='bg-lightBlueGray rounded-2xl border w-[527px] max-md:w-screen max-md:h-full border-lightGray' >
                <div className='w-full flex justify-center'>
                    <Image
                        className='mt-20'
                        alt='mehra-logo'
                        src={'/Mehra.png'}
                        width={163}
                        height={57}
                    />
                </div>
                {step === 0 && (
                    <Login phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setStep={setStep} />
                )}
                {step === 1 && hasPassword && (
                    <Password phoneNumber={phoneNumber} setStep={setStep} />
                )}
                {step === 2 && (
                    <Sms setStep={setStep} phoneNumber={phoneNumber} />
                )}
                {step === 3 && (
                    <Sms setStep={setStep} phoneNumber={phoneNumber} />

                )}

            </div>
        </div>
    );
};

export default Page;
