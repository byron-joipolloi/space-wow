import { useState } from 'react'
import { QrReader } from 'react-qr-reader';
import { useRouter } from 'next/router'

export default function Reader({
  progress,
}) {
  const [data, setData] = useState('No result');

  const router = useRouter()

  return (
    <div className="bg-[#000]">
      <div className="min-h-[100dvh] max-w-sm w-full mx-auto text-center">
        <QrReader
          className="qr-reader"
          constraints={{ facingMode: 'environment' }}
          onResult={(result, error) => {
            if (!!result) {
              const path = result?.text.substring(result?.text.lastIndexOf("?") + 1);
              setData(path);
              const obj = {}
              obj[path] = 1

              if (progress.firstTime) {
                router.push({
                  pathname: `/intro`,
                  query: obj
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
