const useToast = () => {
	const el = document.querySelector<HTMLDivElement>('#toast');
	const duration = 750;
	let currentInterval: number | null = null;

	function start(text: string) {
		setText(text);
		setVisibility(true);
		if (currentInterval) {
			clearInterval(currentInterval);
		}
		currentInterval = setInterval(stop, duration);
	}

	function stop() {
		setVisibility(false);
	}

	function setText(text: string) {
		el!.innerText = text ?? '';
	}

	function setVisibility(visible: boolean) {
		el!.setAttribute('data-visible', String(visible));
	}

	return { start };
};

export default useToast;