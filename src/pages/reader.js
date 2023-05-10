import { useState } from 'react'
import { QrReader } from 'react-qr-reader';
import { useRouter } from 'next/router'

export default function Reader({
  progress,
}) {
  const [data, setData] = useState('No result');

  const router = useRouter()

  return (
    <div className="bg-[#000] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
        <QrReader
          className="qr-reader"
          constraints={{ facingMode: 'environment' }}
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
        />
      </div>
    </div>
  )
}
