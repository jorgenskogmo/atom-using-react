import { createRoot } from "react-dom/client";
import * as React from "react";

import "atom-lit";

function MyButton({ title }: { title: string }) {
	// even HTML Custom Elements can be used as React components and are self-closing
	const onChange = (e: Event) => {
		console.log("Button clicked");
	};

	return (
		<atom-button
			variant="outline"
			label="my button 2"
			onClick={onChange}
			onKeyUp={onChange}
		/>
	);
}

export function App() {
	return (
		<div>
			<h1>Rendered as a rect component:</h1>
			<MyButton title="I'm a button" />

			<atom-range onChange={(e: Event) => console.log("Range changed")} />

			<atom-icon name="align-center" />
		</div>
	);
}

const container = document.getElementById("app");
if (container) {
	const root = createRoot(container);
	root.render(<App />);
} else {
	console.error("Failed to find the app container");
}
