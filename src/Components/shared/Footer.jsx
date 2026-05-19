
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
      <footer className=" text-lg  font-semibold footer footer-horizontal footer-center bg-base-300 text-base-content p-10">
  <aside>
  <Image 
  src='/footer-logo.png' alt='logo' width={500} height={70} className='mix-blend-darken w-auto h-auto mx-auto'/>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 1200 1227"
  className="fill-current"
>
  <path d="M714.163 519.284L1160.89 0H1055.17L667.137 
  450.887L357.328 0H0L468.492 681.821L0 
  1226.37H105.728L515.213 750.218L842.672 
  1226.37H1200L714.137 519.284H714.163ZM568.796 
  688.331L521.397 620.487L144.011 80.6594H306.615L611.159 
  516.173L658.558 584.017L1055.22 1151.72H892.614L568.796 
  688.357V688.331Z" />
</svg>

      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;