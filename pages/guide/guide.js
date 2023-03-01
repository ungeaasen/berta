import { getGuide } from 'lib/api';
import SanityBlockContent from "@sanity/block-content-to-react";
import PageLayout from 'components/PageLayout';

export default function Guide({ guide }) {
	const serializers = {
		types: {
		  code: (props) => (
			<pre data-language={props.node.language}>
			  <code>{props.node.code}</code>
			</pre>
		  ),
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