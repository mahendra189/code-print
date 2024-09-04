import Stack from '@mui/joy/Stack';

import Editor from './editor';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 wallpaper-background">
      <h1 className='font-bold'>Code Print</h1>
      <Editor />

    </main>
  );
}
