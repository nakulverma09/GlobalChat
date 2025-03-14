import React from 'react'
import InformationModal from './InformationModal';
import Title from './Title';


const Heading = () => {
  return (
    <div className="flex flex-row justify-between p-0.5 items-center w-full max-h-[400px] max-w-lg">
        <Title/>
        <InformationModal/>
      </div>

  )
}

export default Heading