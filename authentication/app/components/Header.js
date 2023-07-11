import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Header = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <>
      {!userId && (
        <>
          <Link href='sign-in'>Sign In</Link>
          <Link href='sign-up'>Sign Up</Link>
        </>
      )}
      {userId && (
          <Link href='profile'>Profile</Link>
      )}

      <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
      </div>


    </>
  )
}

export default Header
