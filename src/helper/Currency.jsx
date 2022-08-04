const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
	currency: 'GBP',
	style: 'currency'
});

export function Currency(NumberFormat) {
	return CURRENCY_FORMATTER.format(NumberFormat);
}
