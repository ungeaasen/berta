
import SanityBlockContent from "@sanity/block-content-to-react";

export default function About({ content }) {
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
        <div className="about">
            { content.map(cont => 
             <SanityBlockContent blocks={cont.content} serializers={serializers} />
             )}
        </div>
    )
}