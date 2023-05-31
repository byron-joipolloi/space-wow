import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from '../data.json'
import Reset from '../components/Reset'
import { useRouter } from 'next/router'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 3rem)',
    maxWidth: '375px'
  },
};

Modal.setAppElement('#app');

const imgLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const home = data.home
const intro = data.intro

export default function Home({
  progress,
  setProgress,
  qrCode,
  setQrCode,
  updateLocalStorage,
}) {
  const router = useRouter()
  const [modalIsOpen, setIsOpen] = useState(false);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const handleStart = (qr) => {
    if (progress.firstTime) {
      router.push({
        pathname: '/intro',
      })
    } else if (qr.page === 'attitudes') {
      router.push({
        pathname: '/attitudes',
      })
    } else if (qr.page === 'health') {
      router.push({
        pathname: '/health',
      })
    } else if (qr.page === 'safety') {
      router.push({
        pathname: '/safety',
      })
    } else if (qr.page === 'environment') {
      router.push({
        pathname: '/environment',
      })
    } else {
      router.push({
        pathname: '/menu',
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let gender = document.querySelector('input[name="gender"]:checked');

    console.log(gender.value);
  }

  useEffect(() => {
    if (progress.firstTime) {
      openModal();
    }
  }, [])

  return (
    <div className="bg-[#fecee1] bg-[url('/bg-pink.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col justify-between min-h-[100dvh] max-w-sm w-full mx-auto px-6 py-10 text-center space-y-12">
        <div className="flex flex-wrap items-center justify-center">
          <a href="https://leeds2023.co.uk/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-leeds.png"
              alt="Leeds 2020"
              width={93}
              height={33}
              className="max-w-full"
            />
          </a>
          <a href="https://thewowfoundation.com/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-wow.png"
              alt="Leeds 2020"
              width={93}
              height={33}
              className="max-w-full"
            />
          </a>
          <a href="https://www.thespace.org/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-space.png"
              alt="Leeds 2020"
              width={105}
              height={34}
              className="max-w-full"
            />
          </a>
          <a href="https://www.artscouncil.org.uk/" className="mx-2 mb-4 mt-0">
            <Image
              loader={imgLoader}
              src="/img-lottery.png"
              alt="Lottery Funded"
              width={260}
              height={70}
              className="max-w-full"
            />
          </a>
        </div>

        <div className="space-y-6 slide-up-1">
          <h1 className="text-[#a50c9d] font-serif text-6xl uppercase">
            <span className="block font-bold">{home.title[0]}</span>
            <span className="block italic">{home.title[1]}</span>
            <span className="block font-bold">{home.title[2]}</span>
          </h1>

          <p className="text-lg font-bold text-[#a50c9d] uppercase tracking-widest">An Interactive Experience</p>
        </div>

        <button onClick={() => handleStart(qrCode)} className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition">Start</button>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <h2 className="text-xl mb-4" ref={(_subtitle) => (subtitle = _subtitle)}>What's your gender?</h2>
          <button onClick={closeModal} className="text-2xl absolute top-0 right-0 leading-none p-4">&times;<span className="sr-only">close</span></button>

          <form onSubmit={handleSubmit}>
            <div>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male" className="text-lg ml-2">Male</label>
            </div>

            <div>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female" className="text-lg ml-2">Female</label>
            </div>

            <div>
              <input type="radio" id="nonbinary" name="gender" value="nonbinary" />
              <label htmlFor="nonbinary" className="text-lg ml-2">Non binary</label>
            </div>

            <div>
              <input type="radio" id="prefernottosay" name="gender" value="prefernottosay" />
              <label htmlFor="prefernottosay" className="text-lg ml-2">Prefer not to say</label>
            </div>

            <div>
              <button className="text-lg text-center uppercase tracking-widest w-full p-2.5 bg-[#a50c9d] border-5 border-[#7b0575] text-white shadow-sm transition mt-4">Submit</button>
            </div>
          </form>
        </Modal>

      </div>

      <Reset
        setProgress={setProgress}
        updateLocalStorage={updateLocalStorage}
        setQrCode={setQrCode}
      />
    </div>
  )
}
