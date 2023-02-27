interface ToastOptions {
	duration?: number;
	elementId?: string;
}

const useToast = (options?: ToastOptions) => {
	const el = document.getElementById(options?.elementId ?? 'toast');
	const duration = options?.duration ?? 1000;
	let currentIntervalId: number | null = null;

	function start(text: string) {
		setText(text);
		setVisibility(true);
		if (currentIntervalId) {
			clearInterval(currentIntervalId);
		}
		currentIntervalId = setInterval(stop, duration);
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