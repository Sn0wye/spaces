import React, { useState } from 'react';
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
      <div className='w-full h-screen bg-gradient-to-b from-brand-500 to-brand-600 flex flex-col items-center justify-center'>
        <main className='flex flex-col items-center'>
          <h1 className='font-bold text-8xl md:text-9xl text-white'>Spaces</h1>
          <img
            src={spacesImg}
            alt='Spaces logo Image'
            className='w-32 md:w-56 relative -top-16  md:-top-20'
          />
        </main>
        <p className='text-white text-center text-2xl'>
          <b>Simple</b>, <b>clean</b> and <b>fast</b> to get your
          <br />
          <u>tasks done</u> best.
        </p>
        <button
          onClick={handleToggleLogInModal}
          className='mt-12 py-6 px-12 border-2 border-white bg-transparent text-white rounded-lg'
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
