var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
( function() {
	
	let recaptchaWidgets = [];
	recaptchaCallback = function() {
		
		let forms = document.getElementsByTagName( 'form' );
		let pattern = /(^|\s)g-recaptcha(\s|$)/;

		for ( let i = 0; i < forms.length; i++ ) {
			let recaptchas = forms[ i ].getElementsByClassName( 'wpcf7-recaptcha' );
			
			for ( let j = 0; j < recaptchas.length; j++ ) {
				let sitekey = recaptchas[ j ].getAttribute( 'data-sitekey' );

				if ( recaptchas[ j ].className && recaptchas[ j ].className.match( pattern ) && sitekey ) {
					let params = {
						'sitekey': sitekey,
						'type': recaptchas[ j ].getAttribute( 'data-type' ),
						'size': recaptchas[ j ].getAttribute( 'data-size' ),
						'theme': recaptchas[ j ].getAttribute( 'data-theme' ),
						'align': recaptchas[ j ].getAttribute( 'data-align' ),
						'badge': recaptchas[ j ].getAttribute( 'data-badge' ),
						'tabindex': recaptchas[ j ].getAttribute( 'data-tabindex' )
					};

					let callback = recaptchas[ j ].getAttribute( 'data-callback' );

					if ( callback && 'function' == typeof window[ callback ] ) {
						params[ 'callback' ] = window[ callback ];
					}

					let expired_callback = recaptchas[ j ].getAttribute( 'data-expired-callback' );

					if ( expired_callback && 'function' == typeof window[ expired_callback ] ) {
						params[ 'expired-callback' ] = window[ expired_callback ];
					}

					let widget_id = grecaptcha.render( recaptchas[ j ], params );
					recaptchaWidgets.push( widget_id );
					break;
				}
			}
		}
	};

	/**
	 * Reset the reCaptcha when Contact Form 7 gives us:
	 *  - Spam
	 *  - Success
	 *  - Fail
	 * 
	 * @return void
	 */
	document.addEventListener( 'wpcf7submit', function( event ) {
		switch ( event.detail.status ) {
			case 'spam':
			case 'mail_sent':
			case 'mail_failed':
				for ( let i = 0; i < recaptchaWidgets.length; i++ ) {
					grecaptcha.reset( recaptchaWidgets[ i ] );
				}
		}
	}, false );
	
} )();
}

/*
     FILE ARCHIVED ON 04:32:58 Aug 05, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:30:52 Jun 17, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.39
  exclusion.robots: 0.058
  exclusion.robots.policy: 0.051
  esindex: 0.006
  cdx.remote: 13.976
  LoadShardBlock: 104.505 (3)
  PetaboxLoader3.datanode: 81.758 (5)
  PetaboxLoader3.resolve: 95.285 (2)
  load_resource: 87.002
  loaddict: 13.932
*/