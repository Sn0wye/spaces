import { useState } from 'react';

import spacesImg from '../assets/icons/SpacesLogo.svg';
import { LogInModal } from '../components/Modals/LogInModal';
import { SignUpModal } from '../components/Modals/SignUpModal';

export function Home() {
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleToggleLogInModal = () => {
    setIsLogInModalOpen(!isLogInModalOpen);
  };

  const handleToggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  const handleAlternateBetweenModals = () => {
    if (isLogInModalOpen) {
      handleToggleLogInModal();
      handleToggleSignUpModal();
    } else {
      handleToggleLogInModal();
      handleToggleSignUpModal();
    }
  };

  return (
    <>
      <div className='flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-brand-500 to-brand-600'>
        <main className='flex flex-col items-center'>
          <h1 className='text-8xl font-bold text-white md:text-9xl'>Spaces</h1>
          <img
            src={spacesImg}
            alt='Spaces logo Image'
            className='relative -top-16 w-32 md:-top-20  md:w-56'
          />
        </main>
        <p className='text-center text-2xl text-white'>
          <b>Simple</b>, <b>clean</b> and <b>fast</b> to get your
          <br />
          <u>tasks done</u> best.
        </p>
        <button
          onClick={handleToggleLogInModal}
          className='mt-12 rounded-lg border-2 border-white bg-white py-6 px-12 font-semibold text-brand-500 transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white'
        >
          GET STARTED
        </button>
      </div>
      <LogInModal
        isModalOpen={isLogInModalOpen}
        handleToggleModal={handleToggleLogInModal}
        handleAlternateBetweenModals={handleAlternateBetweenModals}
      />
      <SignUpModal
        isModalOpen={isSignUpModalOpen}
        handleToggleModal={handleToggleSignUpModal}
        handleAlternateBetweenModals={handleAlternateBetweenModals}
      />
    </>
  );
}
