import React from 'react';
import { Button } from '../ui/button';
import Delete from '../icons/Delete';
import Shop from '../icons/Shop';

const LastVisite: React.FC = () => {
    return (
        <div>       
             <div className='w-full border px-4 flex py-4 bg-lightBlueGray rounded-md'>
        <img className='w-36 h-48' src='https://s3-alpha-sig.figma.com/img/2867/97b6/8a8422a387485e1cafdf41e2f0c3b1e1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9pm65CodbSIi-LEPlTCL15VxXx2LeZR9fwPnaD2n7Ad0i2SBC-c8NAKBQVuacuo5mISXzhdihCvTNbBu89hWPh74elT9~ZBjghKDqlppVMxzqWYf083OPrIanuiGHy8mYB1tODX6DcGHgG9N5qXSS-ZkcIPxlph8uPOiCqGcVeKQfNcz2Mpl2zcq~zwsXY4y-yNiNQq9DEqbi7QNNZ45k9c3SycK1qUMdUDgZV2jMeYdgZPY23rgmE7deCqpLbDbiT9RqyUiMuCra6hk7ggDC-jtskBDjgB25-2SIElcO9rFopLV5aUGje2VCfycb0D29pqmoHFp92DxnIwMkN7FQ__' alt="" />

<div className='flex justify-between w-full'>
<div className='mr-10 flex flex-col justify-between'>
<p className='text-customGray text-2xl'>اینجا برای تو</p>
<p className='text-dark-gray'>مجموعه شعر</p>
<p className='text-dark-gray'>انتشارات مهرک</p>
<p className='text-customRed'>25 تومان تخفیف</p>
<p className='text-dark-gray text-lg'>4,900,000 تومان </p>

</div>
<div className='mt-14 ml-5 flex gap-4'>
    <Button className='py-1 px-4 border bg-white text-CloudGray hover:bg-CloudGray hover:text-white'>  <i><Delete/></i> حذف</Button>
    <Button className='py-1 px-4 text-customRed border border-customRed bg-white hover:bg-red-500 hover:text-white transition-all' >  <i><Shop/> </i> انتقال به سبد خرید </Button>
</div>
</div>
    </div>
            
        </div>
    );
};

export default LastVisite;