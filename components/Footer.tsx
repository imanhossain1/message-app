
const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-8">
      <div>
        <div className="text-2xl font-bold">💬 Chatter</div>

        <p className="max-w-md text-sm opacity-70">
          Stay connected, share moments, and chat with the people who matter
          to you.
        </p>

        <div className="flex gap-5 text-sm">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
          <a className="link link-hover">Contact</a>
        </div>

        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} Chatter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
