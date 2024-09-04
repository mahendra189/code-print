"use client"
import { useState } from 'react';
import { Kbd, IconButton } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react';
const button_size = 10
export default function Editor() {
  const [font, setFont] = useState({
    size: 18
  })
  return (
    <div className="min-w-20 min-h-20 w-96 h-56 bg-[#202025] rounded-md relative shadow-md shadow-slate-400">
      {/* Double Border */}
      <div className="absolute inset-0 border-[0.5px] border-black rounded-md pointer-events-none"></div>
      <div className="absolute inset-[0.3px] border-[1px] border-gray-600 rounded-md pointer-events-none"></div>
      {/* Navigation Bar */}
      <div className='h-5 flex flex-row pt-1 pr-2 pl-2 pb-1'>
        {/* buttons */}
        <div className='h-full pr-5 flex flex-row space-x-1 align-middle justify-center items-center'>

          <div className='bg-[#FF5F56] size-[6px] rounded-full'></div>
          <div className='bg-[#FFBD2E] size-[6px] rounded-full'></div>
          <div className='bg-[#27C93F] size-[6px] rounded-full'></div>
        </div>


        {/* side */}
        <div className='flex flex-row flex-1 justify-center h-full'>
          {/* search */}
          <div className='w-3/4 flex flex-1 justify-center items-center'>

            <div className='w-1/2 bg-[#424242] rounded-sm text-center text-[#999999]'>
              <p style={{ fontSize: 5 }}>
                Computer Science
              </p>
            </div>
          </div>
          {/* options */}
          <div className='space-1 flex flex-row items-center justify-end'>

            <IconButton
              colorScheme='white'
              aria-label='Done'
              fontSize='7px'
              icon={<SettingsIcon />}
              size='10px'
            />
          </div>


        </div>
      </div>


      <div className='w-full bg-[#414141]' style={{ height: '0.5px' }}>

      </div>
      {/* Editor */}
      {/* to write a code */}
      <div className='h-5/6 p-2'>
        <textarea className='w-full bg-transparent outline-none text-white ' aria-multiline name='space' style={{ fontSize: font.size }} />

      </div>
    </div >
  );
}
