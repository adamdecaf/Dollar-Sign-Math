/**
 * Dollar Sign Math
 * Adam Shannon
 * 2010-02-10
 */
 
// Grab an element by the id
function $(id) {
	return document.getElementById(id);
}

function get_xhr() {
	
	// Internet explorer has had a long history of not supporting 
	// the w3c standard for XMLHttpRequests (The underlying API 
	// that allows web browsers to grab additional content via
	// HTTP requests), instead Microsoft has created their own API
	// set in reaction to the spec.
	// 
	// This is a common techiqune used to find an acceptable XHR
	// object for the browser.
	// 
	// Seeing as the Microsoft API's are experimental and do NOT 
	// follow the w3c standatd use of these is classified under
	// 'experimental' and any issues with them will not be addressed
	// by the team.
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
		
	} else if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
		
	} else if (window.ActiveXObject) {
		return new ActiveXObject("Msxml2.XMLHTTP");
		
	}

return false;
}

// Load the page.
function load(page) {
	// Declare and do everything once the page has loaded
	var content = document.getElementById('results');
	
	// Load the proper page
	var xhr = get_xhr();
		xhr.open('GET', 'html/' + page + '.html', false);
		xhr.send(null);
	
	// Fill the content
	content.innerHTML = xhr.responseText;
	
	// Now grab the script.
	xhr.open('GET', 'js/' + page + '.js', false);
	xhr.send(null);
	
	var script = document.createElement('script');
		script.innerHTML = xhr.responseText;
		
		// Append the script to the page.
		document.getElementsByTagName('body')[0].appendChild(script);
}

// Load plugins
function load_plugin(plugin, page) {
	// Declare and do everything once the page has loaded
	var content = document.getElementById('results');
	
	// alert('../plugins/' + plugin + '/tests/' + page + '.html');
	// alert('../plugins/' + plugin + '/' + plugin + '-math.js');
	// alert('../plugins/' + plugin + '/tests/' + page + '.js');
	
	// Load the proper page
	var xhr = get_xhr();
		xhr.open('GET', '../../plugins/' + plugin + '/tests/' + page + '.html', false);
		xhr.send(null);
	
	// Fill the content
	content.innerHTML = xhr.responseText;
	// alert( xhr.responseText );
		
	// Load the plugin
	xhr.open('GET', '../../plugins/' + plugin + '/' + plugin + '-math.js', false);
	xhr.send(null);
	
		var plg = document.createElement('script');
			// plg.type = 'text/javascript';
			plg.innerHTML = xhr.responseText;
			
			document.getElementsByTagName('body')[0].appendChild(plg);
	
	// Now grab the script.
	xhr.open('GET', '../../plugins/' + plugin + '/tests/' + page + '.js', false);
	xhr.send(null);
	
	var script = document.createElement('script');
		// script.type = 'text/javascript';
		script.innerHTML = xhr.responseText;
		
		document.getElementsByTagName('body')[0].appendChild(script);
}
