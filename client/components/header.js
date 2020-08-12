import Link from 'next/link';
import '../styles/Layout/l-header.scss'

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className='header'>
      <Link href='/'>
        <a className='header_title'>GitTix</a>
      </Link>

      <div>
        <ul className='header_auth'>{links}</ul>
      </div>
    </nav>
  );
};
