import { redirect } from 'next/navigation';

export default function MembersOnly() {
  redirect('/signin');
}