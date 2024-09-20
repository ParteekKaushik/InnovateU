const Footer = () => {
  return (
    <footer id="footer" className=" text-gray-400 py-8">
      <div className="container mx-auto px-6 md:px-12">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="text-4xl text-indigo-400 mb-4">🌊</div>
            {/* Tagline */}
            <p className="text-center md:text-left">
            Empowering the next generation by equipping students with future-ready tech skills to drive innovation and shape a better world.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="/" aria-label="Facebook" className="hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/" aria-label="Instagram" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" aria-label="X (formerly Twitter)" className="hover:text-white">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="/" aria-label="GitHub" className="hover:text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="/" aria-label="YouTube" className="hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>


        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© 2024 InnovateU, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{/* <div className="grid grid-cols-2 gap-8 text-center md:text-left md:grid-cols-4">
            {/* Solutions */}
            {/* <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul>
                <li className="mb-2"><a href="/" className="hover:text-white">Marketing</a></li>
                <li className="mb-2"><a href="/" className="hover:text-white">Analytics</a></li>
                <li className="mb-2"><a href="/" className="hover:text-white">Commerce</a></li>
                <li><a href="/" className="hover:text-white">Insights</a></li>
              </ul>
            </div> */}

            {/* Support */}
            {/* <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul>
                <li className="mb-2"><a href="/" className="hover:text-white">Pricing</a></li>
                <li className="mb-2"><a href="/" className="hover:text-white">Documentation</a></li>
                <li className="mb-2"><a href="/" className="hover:text-white">Guides</a></li>
                <li><a href="/" className="hover:text-white">API Status</a></li>
              </ul>
            </div> */}

            {/* Company */}
            {/* <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2"><a href="/" className="hover:text-white">About</a></li>
                <li className="mb-2"><a href="/" className="hover:text-white">Blog</a></li>
                <li className="mb-2"><a href="/" className="hover:text-white">Jobs</a></li>
                <li><a href="/" className="hover:text-white">Press</a></li>
                <li><a href="/" className="hover:text-white">Partners</a></li>
              </ul>
            </div> */}

            {/* Legal */}
            {/* <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul>
                <li className="mb-2"><a href="/" className="hover:text-white">Claim</a></li>
                <li className="mb-2"><a href="/" className="hover:text-white">Privacy</a></li>
                <li><a href="/" className="hover:text-white">Terms</a></li>
              </ul>
            </div> */}
      