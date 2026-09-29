const users = [
  {
    id: 1,
    name: "Rahim",
    status: "Online",
  },
  {
    id: 2,
    name: "Karim",
    status: "Online",
  },
  {
    id: 3,
    name: "Sakib",
    status: "Offline",
  },
  {
    id: 4,
    name: "Nadia",
    status: "Online",
  },
];

const ActiveUsers = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Active Users</h2>

          <p className="mt-2 text-base-content/60">
            Find people and start a conversation.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search users..."
          className="input input-bordered mb-8 w-full max-w-md"
        />

        {/* Users */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div key={user.id} className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="avatar placeholder">
                    <div className="w-12 rounded-full bg-primary text-primary-content">
                      <span className="text-lg">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* User Info */}
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>

                    <p className="text-sm text-base-content/60">
                      {user.status}
                    </p>
                  </div>
                </div>

                <button className="btn btn-primary btn-sm mt-4">
                  Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveUsers;