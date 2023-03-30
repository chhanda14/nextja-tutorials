import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="topNav">
          <Image
            alt="Logo"
            src={'/images/logo_black.png'}
            width={50}
            height={50}
          />

          <nav>
            <ul>
              <li>
                {' '}
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">gfhgfhgjhgjhjhg</p>
      </div>
    </header>
  );
};

export default Header;
