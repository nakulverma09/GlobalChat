import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const InformationIconButton = () => {
  return (
    <>
      <button onClick={() => document.getElementById("my_modal_3").showModal()}>
        <FontAwesomeIcon
          icon={faCircleInfo}
          className="text-blue-950"
          size="1x"
        />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-130">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="max-w-2xl mx-auto text-center p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">
              🌍 Global Anonymous Chat 💬
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Welcome to{" "}
              <span className="font-semibold text-blue-400">
                Global Anonymous Chat
              </span>
              , a platform where you can
              <span className="font-semibold text-green-400">
                {" "}
                talk freely{" "}
              </span>
              with strangers from around the world
              <span className="font-semibold text-yellow-400">
                {" "}
                without revealing your identity!
              </span>{" "}
              🕵️‍♂️✨
            </p>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                🔹 No Names, No Profiles, Just Pure Conversation
              </h2>
              <ul className="text-gray-300 text-left list-disc list-inside space-y-2">
                <li>✅ No sign-up, no login—just enter and start chatting.</li>
                <li>
                  ✅ You are{" "}
                  <span className="font-semibold text-green-400">
                    completely anonymous
                  </span>
                  , no personal details needed.
                </li>
                <li>
                  ✅ Every message is real-time with{" "}
                  <span className="font-semibold text-yellow-400">
                    Socket.io
                  </span>{" "}
                  technology!
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold text-green-400 mb-2">
                🔹 Safe & Simple Communication
              </h2>
              <ul className="text-gray-300 text-left list-disc list-inside space-y-2">
                <li>
                  ✅ Only{" "}
                  <span className="font-semibold text-blue-400">
                    text messages
                  </span>
                  —no photos, no videos, no files.
                </li>
                <li>
                  ✅{" "}
                  <span className="font-semibold text-yellow-400">
                    No tracking, no data collection
                  </span>
                  —your privacy is our priority.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-purple-400 mt-4">
              🚀 Start chatting now and enjoy <em>mystery conversations!</em> 💬
            </h2>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default InformationIconButton;
