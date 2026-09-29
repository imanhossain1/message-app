
import React from "react";
import users from "../../../data/users";

type ChatPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function ChatDynamicPage({ params }: ChatPageProps) {
  const { id } = await params;

  const user = users.find((user) => user.id === Number(id));

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="mx-auto flex h-[80vh] max-w-4xl flex-col overflow-hidden rounded-2xl bg-base-100 shadow-xl">

        {/* Chat Header */}
        <div className="flex items-center gap-4 border-b border-base-300 p-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src={user?.image}
                alt={user?.name || "User"}
              />
            </div>
          </div>

          <div>
            <h1 className="text-lg font-bold">
              {user?.name || "Unknown User"}
            </h1>

            <div className="flex items-center gap-2 text-sm">
              <span
                className={`h-2 w-2 rounded-full ${
                  user?.status === "online"
                    ? "bg-success"
                    : "bg-base-content/30"
                }`}
              ></span>

              <span className="text-base-content/60">
                {user?.status || "offline"}
              </span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">

          {/* Other User Message */}
          <div className="flex items-start gap-2">
            <div className="avatar">
              <div className="w-9 rounded-full">
                <img
                  src={user?.image}
                  alt={user?.name || "User"}
                />
              </div>
            </div>

            <div className="max-w-xs rounded-2xl rounded-tl-none bg-base-200 px-4 py-3">
              <p className="text-sm">
                Hello! How are you?
              </p>

              <span className="mt-1 block text-xs text-base-content/50">
                10:30 AM
              </span>
            </div>
          </div>

          {/* My Message */}
          <div className="flex justify-end">
            <div className="max-w-xs rounded-2xl rounded-tr-none bg-primary px-4 py-3 text-primary-content">
              <p className="text-sm">
                I'm good! How about you?
              </p>

              <span className="mt-1 block text-xs opacity-70">
                10:31 AM
              </span>
            </div>
          </div>

        </div>

        {/* Message Input */}
        <div className="border-t border-base-300 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="input input-bordered flex-1"
            />

            <button className="btn btn-primary">
              Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ChatDynamicPage;
