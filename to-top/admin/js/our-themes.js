jQuery(document).ready(function ($) {
	var label =
		typeof catchThemesTab !== 'undefined' && catchThemesTab.label
			? catchThemesTab.label
			: 'Catch Themes';

	var our_themes = $('<li />').append(
		$('<a />', {
			href: '#',
			'data-sort': 'catchthemes',
			text: label,
		})
	);

	$('.filter-links').append(our_themes);
});
