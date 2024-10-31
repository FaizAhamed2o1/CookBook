const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-slate-800 md:py-20 p-4 py-12 text-gray-100">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
