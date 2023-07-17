// import node module libraries
import { Fragment } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Highlight, themes } from 'prism-react-renderer';

const HighlightCode = ({ code }) => {
	const copyAction = (event) => {
		event.target.innerHTML = 'Copied';
		setTimeout(() => {
			event.target.innerHTML = 'Copy';
		}, 3000);
	};

	return (
		<Fragment>
			<CopyToClipboard text={code}>
				<button className="copy-button" onClick={copyAction}>
					Copy
				</button>
			</CopyToClipboard>
			<Highlight 
			theme={themes.nightOwl}
			code={code} language="jsx">
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={className} style={style}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</Fragment>
	);
};
export default HighlightCode;
