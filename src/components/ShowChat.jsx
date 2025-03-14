import React from 'react'

const ShowChat = ({chatRef, chat, storedUserId}) => {
  return (
    <div
        ref={chatRef}
        className="flex flex-col items-center w-full max-h-[400px] max-w-lg shadow-lg bg-yellow-100 rounded-lg p-4 h-96 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {chat.map((msg, index) => (
          <p
            key={index}
            className={`px-4 py-2 rounded-md mb-2 max-w-xs ${
              msg.id === storedUserId
                ? "bg-blue-400 text-black self-end ml-auto"
                : "bg-yellow-300 text-black self-start"
            }`}
          >
            <b>{msg.message}</b>
          </p>
        ))}
      </div>
  )
}

export default ShowChat