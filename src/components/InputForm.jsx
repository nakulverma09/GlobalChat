import React from "react";

const InputForm = ({
  inputRef,
  message,
  setMessage,
  handleBlur,
  sendMessage,
}) => {
  return (
    <div className="flex w-full max-w-lg mt-4 space-x-2">
      <input
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type your message..."
        onBlur={handleBlur}
      />
      <button
        onClick={(e) => sendMessage(e)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default InputForm;
