const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-base-200 px-6">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Welcome to Chatter
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Stay Connected.
          <br />
          Chat Freely.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base-content/70 md:text-lg">
          Chatter is a simple messaging platform where you can connect with
          people, send messages, and stay in touch with the people who matter.
        </p>

        <div className="mt-8">
          <button className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;