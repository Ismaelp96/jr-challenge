'use client';
import Image from 'next/image';

import { Button } from './ui/button';
import mock from './mock';

export const Main = () => {
  return (
    <section className='flex items-center justify-center relative'>
      <Image
        src='/bg-cafe.jpg'
        alt='Imagem de um café'
        title='imagem de um café'
        width={1280}
        height={680}
        className='m-auto absolute z-0 top-0'
      />
      <div className='flex justify-center items-center z-50 pt-[160px]'>
        <div className='w-5/6 bg-[#1b1d1f] rounded-md flex justify-center items-center flex-col p-10 relative'>
          <Image
            src='/vector.svg'
            alt='vector'
            width={257}
            height={153}
            className='absolute top-10 right-72 z-10'
          />

          <h1 className='text-center text-white text-3xl font-bold mt-16 z-20'>
            Our Collection
          </h1>

          <p className='text-[#6f757c] font-semibold text-base text-center w-6/12 mt-4 z-20'>
            Introducing our COffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className='mt-6'>
            <Button
              variant='default'
              size='lg'
              className=' font-bold text-md mr-4'
            >
              All Products
            </Button>
            <Button
              variant='ghost'
              size='lg'
              className='text-white font-bold text-md'
            >
              Avaliable Now
            </Button>
          </div>
          <div className='grid grid-cols-3 gap-8 mt-8'>
            {mock.map((products, index) => (
              <div key={index} className=''>
                <div className='overflow-hidden rounded-xl w-[300px] h-[180px]'>
                  <Image
                    src={products.img}
                    alt='Produtos'
                    width={300}
                    height={200}
                    className='flex items-center justify-center object-cover'
                  />
                </div>
                <div className='flex justify-between items-center mt-2'>
                  <p className='text-white font-semibold'>{products.title}</p>
                  <span className='bg-[#BEE3CC] p-1 rounded-sm text-xs font-semibold'>
                    {products.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
