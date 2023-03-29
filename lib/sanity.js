
import sanityClient from '@sanity/client';

const options = {
	//dataset: process.env.SANITY_DATASET_NAME,
	//projectId: process.env.SANITY_PROJECT_ID,
	//projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	//dataset: process.env.NEXT_PUBLIC_DATASET_NAME,
	dataset: 'production',
	projectId: 'yibftbsd',
	useCdn: process.env.NODE_ENV === 'production'
}

export default sanityClient(options);