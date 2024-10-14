import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h2 className="text-xl font-blod uppercase font-light text-designColor tracking-wide">
       {title}
      </h2>
      <h1 className="text-4xl md:text-5xl text-white font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title