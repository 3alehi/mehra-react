import React from 'react';
interface OrderItem {
  line_item_type: string;
  media_files: { main_link: string }[];
  number: number;
  total_formatted: string;
}
interface OrderNowProps {
  items: OrderItem; // Assuming it's a single item; if it's an array, change it to OrderItem[]
}


const OrderHow: React.FC<OrderNowProps> = ({items}) => {
     console.log(items);
     
    return (
        <>
        {items.line_item_type === "product" && (
          <div className='border rounded-2xl max-md:rounded-sm w-fit p-1 px-1 max-md:p-0'>
            <div className='relative'>
              <img
                alt='product image'
                src={items.media_files?.[0]?.main_link || 'fallback-image-url'}
                className='w-[75px] h-[75px] max-md:w-[46px] max-md:h-[46px] rounded-2xl max-md:rounded-sm'
              />
              <p className='absolute bottom-1 left-1 bg-lightGray px-1 max-md:text-[10px] pt-1 rounded text-customGray '>
                {items.number}
              </p>
            </div>
            <p className='text-[9px] w-full justify-center text-center mt-1 max-md:hidden text-customGray'>
              {items.total_formatted}
            </p>
          </div>
        )}
      </>
    );
};

export default OrderHow;