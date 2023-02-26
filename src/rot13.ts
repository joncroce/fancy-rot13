const mod = (n: number, p: number) => n - p * Math.floor(n / p);

export const rotate = (input: string = '', rotateBy: number = 13) =>
	[...input].map((char) => {
		const decomposedChar = char.normalize('NFKD');
		const baseCharCode = decomposedChar.charCodeAt(0);
		const codeOffset =
			65 <= baseCharCode && baseCharCode <= 90
				? 65
				: 97 <= baseCharCode && baseCharCode <= 122
					? 97
					: null;

		if (codeOffset === null) {
			return char;
		}

		const rotatedBaseCharCode = mod(baseCharCode - codeOffset + rotateBy, 26) + codeOffset;
		const rotatedChar = String.fromCharCode(rotatedBaseCharCode) + decomposedChar.slice(1);

		return rotatedChar;
	}).join('');

