import React from 'react'

const CV = () => {
  return (
    <div
      id="CV"
      className="my-8 bg-fixed"
      style={{
        backgroundImage: `url('/images/fondocv.jpg')`,
      }}
    >
      <div className="text-center py-4">
        <h1 className="font-2ond font-thin text-lg lg:text-xl 2xl:text-2xl text-white">
          ¡Echa un vistazo a mí hoja de vida!
        </h1>
      </div>
      <a
<<<<<<< HEAD
        href="https://drive.google.com/file/d/1odWzt2lhNhVhP6SMcbGKUJsYkB8tqKZ7/view"
=======
        href="https://drive.google.com/file/d/1mV6YSELk7r0evE3zJRVCJ4wom00mFF2k/view?usp=sharing"
>>>>>>> 3a27e591c8ecfc7e45590b19d8495353ae728677
        target="_blank"
      >
        <div className="h-36 text-center flex justify-center items-center bg-fixed text-lg lg:text-xl 2xl:text-2xl">
          <div className="w-[30%] lg:w-[20%] h-[25%] border-4  border-white flex justify-center items-center animate-pulse hover:bg-white hover:animate-none ">
            <button className="text-xl text-white hover:text-black w-full">
              VER
            </button>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CV
