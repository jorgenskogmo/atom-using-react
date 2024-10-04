import { createRoot } from "react-dom/client";
import * as React from "react";

import "atom-lit";

function MyButton({ title }: { title: string }) {
	return <atom-button variant="constructive"></atom-button>;
	// return <button>{title}</button>;
}

export function App() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<MyButton title="I'm a button" />
		</div>
	);
}

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
