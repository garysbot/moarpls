'use client';

import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../../public/brand/logo.svg';

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Dropdown gradientDuoTone="purpleToBlue" label={session?.user?.name}>
        <Dropdown.Item gradientDuoTone="purpleToBlue">
          <Button outline gradientDuoTone="purpleToBlue" onClick={() => signOut()}>Sign out</Button>
        </Dropdown.Item>
      </Dropdown>
    );
  }

  return (
    <Button gradientDuoTone="purpleToBlue" onClick={() => signIn()}>
      Sign In
    </Button>
  );
}

export default function NavMenu() {
  return (
    <Navbar className="bg-slate-950">
      <Link href="/">
        <Image src={logo} width={50} height={50} alt="logo" />
      </Link>
      <AuthButton />
    </Navbar>
  );
}
