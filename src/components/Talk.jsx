import React from 'react'

const Talk = ({img,title,description,link}) => {
  return (
    <>
        <div className="md:flex md:flex-row flex flex-col lg:ml-4 m-4 items-center justify-center">
          <img
            width={300}
            height={200}
            className="border-2  border-black rounded-md"
            src={img}
          />
          <div className=" flex flex-col items-center p-2 my-2 justify-center">
            <h1 className="text-center text-2xl p-2 ">{title}</h1>
            <p className="text-left p-2 m-2">
            {description}
              {/* Took a workshop on Android App Development in college which was
              attended by over 40 students. . */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                className="text-bold text-blue-500"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
    </>
  )
}

export default Talk