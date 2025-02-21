
const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-[32px] px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
      {/* Company Info */}
      <div className="mb-4 text-[20px] font-semibold md:mb-0 text-center md:text-left">
        <p>© WXYZ Studio</p>
      </div>

      {/* Contact Information */}
      <div className="mb-4 text-[20px] py-[32px] font-semibold md:mb-0 text-center md:text-left">
        <p>Southampton, Hampshire</p>
        <p className="mb-[32px]">United Kingdom</p>
        <p>
          <a href="mailto:Contact@wxyzstudio.co.uk">
            sunnywxyzstudio@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+447388348419">+44 7388 348 419</a>
        </p>
      </div>

      {/* Follow Us & Social Links */}
      <div className="text-center font-semibold text-[20px] md:text-left">
        <div className="flex mt-[16px] justify-center md:justify-start space-x-4 text-[24px]">

        <a
            href="https://www.linkedin.com/in/sunny-weisheng-he/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <span>|</span>

          <a
            href="https://www.linkedin.com/in/sunny-weisheng-he/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <span>|</span>

          <a
            href="https://www.linkedin.com/in/sunny-weisheng-he/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
