import Head from 'next/head'
import GetQuote from '@/components/GetQuote'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wisdom | Random Quote Generator</title>        
        <meta name="description" content="A random quote machine about bible verses using react with next.js and tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mark.svg" />
      </Head>
      <main className="bg-[url('../public/images/cozyrest.jpg')] bg-no-repeat bg-cover bg-center bg-fixed text-center w-screen h-screen flex justify-center items-center">
        <div className='w-80 sm:w-4/5 md:w-3/5 lg:w-2/4 xl:w-1/4 sm:px-5 sm:py-5 mx-2 px-4 py-4 bg-gray-600/20 backdrop-blur rounded grid grid-rows-8 grid-cols-10 shadow-[inset_0_0px_45px_15px_rgba(0,0,0,.4)]' id='quote-box'>
          <GetQuote />
        </div>
        <footer className="absolute top-[96%] w-full text-right pr-4">
          <p className="text-white 3xl:text-xl">by lucasdt</p>
        </footer>
      </main>
    </>
  )
}
