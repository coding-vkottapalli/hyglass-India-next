import type { Metadata } from 'next';
import { PageIntro } from '@/components/PageIntro';
import { GalleryGrid } from '@/components/GalleryGrid';

export const metadata: Metadata = {
	title: 'Gallery',
	description: 'A look at HyGlass: our delivery fleet,team and product range.',
};

export default function GalleryPage() {
	return (
		<>
			<PageIntro
				eyebrow='Gallery'
				title='A look at what we do'
				subtitle='Our delivery fleet,team and product range.'
			/>

			<section className='mx-auto max-w-6xl px-4 py-16 sm:px-6'>
				<GalleryGrid />
			</section>
		</>
	);
}
