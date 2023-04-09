import BooClient from './BooClient';

export const dynamic = 'force-dynamic';

export default function Home(props: any) {
	console.log('Home props', props);
	return (
		<main>
			<BooClient />
		</main>
	);
}
