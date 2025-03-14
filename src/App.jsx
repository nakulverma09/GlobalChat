import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import Heading from "./components/Heading";
import ShowChat from "./components/ShowChat";
import InputForm from "./components/InputForm";

const socketServerURL = "https://globalchat-r4ym.onrender.com/"; // Backend URL

const storedUserId =
  sessionStorage.getItem("socket_user_id") ||
  Math.random().toString(36).substr(2, 9);
sessionStorage.setItem("socket_user_id", storedUserId); // Ensure user ID persists

const socket = io(socketServerURL, {
  auth: { userId: storedUserId }, // Send user ID to server
  transports: ["websocket"], // Stable connection
});

export default function ChatApp() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus on load
  }, []);

  const handleBlur = () => {
    setTimeout(() => {
      inputRef.current?.focus(); // Re-focus after losing focus
    }, 100); // Small delay to avoid issues
  };

  useEffect(() => {
    // Handle incoming messages
    socket.on("receiveMessage", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = (e) => {
    if (message.trim()) {
      socket.emit("sendMessage", { message });
      setMessage("");
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]); // Scroll to bottom on new messages

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <Heading />

      <ShowChat chatRef={chatRef} chat={chat} storedUserId={storedUserId} />

      <InputForm
        inputRef={inputRef}
        message={message}
        setMessage={setMessage}
        handleBlur={handleBlur}
        sendMessage={sendMessage}
      />
    </div>
  );
}
