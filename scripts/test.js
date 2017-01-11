console.log(`${new Date()} ... we are starting script!`);

$(function(){
			// --- versions
			$('#version').text(`jQuery version: ${$().jquery}, Highcharts version: ${Highcharts.version}`);

			function update() {
					$('#date').text(new Date());
			}

			var myVar = setInterval( update, 1000);
});
