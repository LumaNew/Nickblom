jQuery( document ).ready( function( $ ) {
	if ( typeof $.mmenu === 'function' ) {
		$( '#nav' ).mmenu( {
			offCanvas: {
				position: 'right'
			}
		}, {
			clone: true
		} );
	}

	$('#map').gMap({
		controls: {
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			scaleControl: true,
			streetViewControl: true,
			overviewMapControl: true
		},
		scrollwheel: false,
		maptype: 'TERRAIN',// 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
		zoom: 15,
		markers:[
			{
				address: "Delsestraat 11, 3013 AB Rotterdam",
				html: "Delsestraat 11-15, 3013 AB Rotterdame",
				icon: {
					image: "img/pointer.png",
					iconsize: [30, 52],
					iconanchor: [30,52]
				}
			}
		]
	});
} );