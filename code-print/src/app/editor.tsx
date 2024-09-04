import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

export default function Editor() {
  return (
    <div className={"min-w-20 min-h-20 w-96 h-56 bg-[#202025] rounded-md relative"}>
      {/* Double Border */}
      <div className="absolute inset-0 border-[0.5px] border-black rounded-md pointer-events-none"></div>
      <div className="absolute inset-[0.3px] border-[1px] border-gray-600 rounded-md pointer-events-none"></div>
      {/* Navigation Bar */}
      <div className='h-5 flex flex-row pt-1 pr-2 pl-2 pb-1'>
        {/* buttons */}
        <div className='h-full flex flex-row space-x-1 align-middle justify-center items-center'>

          <div className='bg-[#FF5F56] w-2 h-2 rounded-full'></div>
          <div className='bg-[#FFBD2E] w-2 h-2 rounded-full'></div>
          <div className='bg-[#27C93F] w-2 h-2 rounded-full'></div>
        </div>


        {/* side */}
        <div className='flex-1 flex justify-center h-full'>
          {/* search */}
          <div className='w-1/2 bg-[#424242] rounded-sm text-center text-[#999999]'>
            <p style={{ fontSize: 5 }}>
              Computer Science
            </p>
          </div>

        </div>
      </div>


      <div className='w-full bg-[#414141]' style={{ height: '0.5px' }}>

      </div>
      {/* Editor */}
      {/* to write a code */}
      <div className='h-5/6 p-2'>
        <input className='bg-transparent outline-none text-white ' type='text' aria-multiline name='space' />

      </div>
    </div>
  );
}
