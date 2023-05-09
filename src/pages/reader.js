import { useState } from 'react'
import { QrReader } from 'react-qr-reader';
import { useRouter } from 'next/router'

export default function Reader({
  progress,
}) {
  const [data, setData] = useState('No result');

  const router = useRouter()

  return (
    <div className="bg-[#fecee1] bg-[url('/bg-pink.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              const path = result?.text.replace('https://space-wow.vercel.app/?', '')
              setData(path);

              if (progress.firstTime) {
                router.push({
                  pathname: `/intro?${path}`,
                })
              } else {
                router.push({
                  pathname: `/${path}`,
                })
              }
            }

            if (!!error) {
              {/*console.info(error);*/}
            }
          }}
          style={{ width: '100%' }}
        />
        <p>{data}</p>
      </div>
    </div>
  )
}
