function num2IpMask(num) {
	if (!Number.isInteger(num)) return;
	if (num < 0 || num > 32) return;
	let res = ''
	for (let i = 0; i < 4; i++) {
		if (num >= 8) {
			num -= 8;
			res += '255.';
		} else if (num > 0) {
			res += '';
			let sum = 0, i = 1;
			while (num--) {
				sum += Math.pow(2, 8 - i);
				i++;
			}
			res += `${sum}.`;
		} else {
			res += '0.'
		}
	}
	return res.slice(0, -1);
}

console.log(0, num2IpMask(0));
console.log(8, num2IpMask(8));
console.log(16, num2IpMask(16));
console.log(24, num2IpMask(24));
console.log(12, num2IpMask(12));
console.log(20, num2IpMask(20));
console.log(23, num2IpMask(23));
console.log(25, num2IpMask(25));
console.log(31, num2IpMask(31));








