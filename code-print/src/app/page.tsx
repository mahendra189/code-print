import Stack from '@mui/joy/Stack';

import Editor from './editor';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 wallpaper-background">
      {/* <div className='p-2 bg-black rounded-md'> */}

        {/* <h1 className='font-bold text-white '>Code Print</h1> */}
      {/* </div> */}
      <Editor />

    </main>
  );
}
