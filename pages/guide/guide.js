import { getGuide } from 'lib/api';
import SanityBlockContent from "@sanity/block-content-to-react";
import PageLayout from 'components/PageLayout';

export default function Guide({ guide }) {
	const serializers = {
		types: {
			block: (props) => {
				const { node, children } = props
				const { style, _key } = node
		  
				if (/^h\d/.test(style)) {
				  const HeadingTag = style;
				  // Even though HTML5 allows id to start with a digit, we append it with a letter to avoid various JS methods to act up and make problems
				  const headingId = `h${_key}`;
				  return (
					<HeadingTag id={headingId}>{children}
					 
					</HeadingTag>
					)
				}
				// ... you can put in other overrides here

				return <p>{children}</p>
				
				//return PortableText.defaultSerializers.types.block(props)
				// or return the default ones 👇
				
			  }
			 
		},
	  }

	return (
		<PageLayout>
		<div>
			{guide.map(guide => 
				<div key="1" className='guide'>
					<SanityBlockContent blocks={guide.guideTextBlock} serializers={serializers} />
				</div>
			)}
		</div>
		</PageLayout>
	)
}

export async function getStaticProps() {
	const guide = await getGuide();
	return {
	  props: {
		guide 
	  }
	}
  }