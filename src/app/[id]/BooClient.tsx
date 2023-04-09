'use client';

import { useRouter } from 'next/navigation';

export default function BooClient() {
	const router = useRouter();

	return (
		<div className="flex gap-4">
			<button onClick={() => router.push('/ccc?foo=aaa')}>foo=aaa</button>
			<button onClick={() => router.push('/ccc?foo=bbb')}>foo=bbb</button>
		</div>
	);
}
