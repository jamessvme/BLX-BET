import Head from 'next/head'
import Layout from '@/components/Layout/index';
import Image from 'next/image';
export default function Home() {
  return (
    <Layout>
      <>
        <Head>
          <title>BLX BET</title>
        </Head>
        <div className='game-container w-2/3 mx-auto'>
          <h1 className='text-center text-white text-[37px] leading-[87px]'>-Games</h1>
          <div className='grid grid-cols-3 pb-[190px] 0%, rgba(135, 0, 184, 0) 90.52%)] rounded-3xl'>
            <div className='card'>
              <h1 className='text-center text-white'>JackPort</h1>
              <Image 
                src="/jackpot_image.png"
                width={270}
                height={336}
                className='mx-auto mt-3'
                alt='Jackport'
              />
            </div>
            <div className='card'>
              <h1 className='text-center text-white'>CoinFlip</h1>
              <Image 
                src="/coinflip_image.png"
                width={270}
                height={336}
                className='mx-auto mt-3'
                alt='Jackport'
              />
            </div>
            <div className='card'>
              <h1 className='text-center text-white'>RPS</h1>
              <Image 
                src="/rps_image.png"
                width={270}
                height={336}
                className='mx-auto mt-3'
                alt='Jackport'
              />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
