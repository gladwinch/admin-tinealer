module.exports = {
	extends: 'stylelint-config-standard',
  
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	plugins: ['stylelint-scss'],
	rules: {
		'block-no-empty': null,
		'color-no-invalid-hex': true,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'selector-type-no-unknown': null,
		'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
		'comment-empty-line-before': ['always', { ignore: ['stylelint-commands', 'after-comment'] }],
		'declaration-colon-space-after': 'always',
		// 'indentation': ['tab', {
		//   'except': ['value']
		// }],
		'max-empty-lines': 2
		// 'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',  // check class has name in lowerCamelCase
		// 'selector-id-pattern': '^[a-z][a-zA-Z0-9]+$',     // check id has name in lowerCamelCase
		// 'selector-nested-pattern': " "
		// 'rule-empty-line-before': [ 'always', {
		//   'except': ['first-nested'],
		//   'ignore': ['after-comment']
		// } ],
		// 'unit-whitelist': ['em', 'rem', '%', 's']
	}
}