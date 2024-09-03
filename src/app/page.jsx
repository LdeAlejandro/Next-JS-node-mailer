'use client';

import { SendMail } from '../utils/SendMail/SendMail';
import { useEffect } from 'react';
import { VerificationToken } from '../utils/VerificationToken/VerificationToken';
import connect from '../utils/db/db';
import { useRouter } from 'next/router';

export default function Home() {


  return (
    <div>
      <h1>Mail</h1>
    </div>
  );
}
