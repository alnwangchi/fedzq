import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer aria-labelledby='footer-heading' className='w-full px-10 py-5'>
      <div className='mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
        <p className='text-xs text-right leading-5 text-gray-700'>
          {dayjs().year()} 前端當自強 made by Allen 王
        </p>
      </div>
    </footer>
  );
};

export default Footer;
