
$(function(){
	if($("#sincos_temp").length)
	{
		var sin = [], cos = [];
		
		for (var i = 0; i < 7; i++) {
			sin.push([i, 0]);
			cos.push([i, Math.cos(i)]);
		}
		
		var plot = $.plot($("#sincos_temp"),
				[ { data: sin, label: "标准"}, { data: cos, label: "实际" } ], {
			series: {
				lines: { show: true,
					lineWidth: 2,
				},
				points: { show: true },
				shadowSize: 2
			},
			grid: { hoverable: true, 
				clickable: true, 
				tickColor: "#ddd",
				borderWidth: 0 
			},
			yaxis: { min: -1.2, max: 1.2 },
			xaxis: {ticks:20, tickDecimals: 0, 
				tickFormatter: function(val, axis){
					var week =  ["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];
					return week[val];
				}},
				colors: ["#FA5833", "#00ACE9"]
		});
		
		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}
		
		var previousPoint = null;
		$("#sincos_temp").bind("plothover", function (event, pos, item) {
			$("#x_temp").text(pos.x.toFixed(2));
			$("#y_temp").text(pos.y.toFixed(2));
			
			if (item) {
				if (previousPoint != item.dataIndex) {
					previousPoint = item.dataIndex;
					
					$("#tooltip").remove();
					var x = item.datapoint[0].toFixed(2),
					y = item.datapoint[1].toFixed(2);
					
					showTooltip(item.pageX, item.pageY,
							item.series.label + " of " + x + " = " + y);
				}
			}
			else {
				$("#tooltip").remove();
				previousPoint = null;
			}
		});
		
		
		
		$("#sincos_temp").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata_temp").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
//				plot.highlight(item.series, item.datapoint);
			}
		});
	}
	
	if($("#sincos_hum").length)
	{
		var sin = [], cos = [];
		
		for (var i = 0; i < 7; i++) {
			sin.push([i, 0]);
			cos.push([i, Math.cos(i)]);
		}
		
		var plot = $.plot($("#sincos_hum"),
				[ { data: sin, label: "标准"}, { data: cos, label: "实际" } ], {
			series: {
				lines: { show: true,
					lineWidth: 2,
				},
				points: { show: true },
				shadowSize: 2
			},
			grid: { hoverable: true, 
				clickable: true, 
				tickColor: "#ddd",
				borderWidth: 0 
			},
			yaxis: { min: -1.2, max: 1.2 },
			xaxis: {ticks:20, tickDecimals: 0, 
				tickFormatter: function(val, axis){
					var week =  ["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];
					return week[val];
				}},
				colors: ["#FA5833", "#47A947"]
		});
		
		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}
		
		var previousPoint = null;
		$("#sincos_hum").bind("plothover", function (event, pos, item) {
			$("#x_hum").text(pos.x.toFixed(2));
			$("#y_hum").text(pos.y.toFixed(2));
			
			if (item) {
				if (previousPoint != item.dataIndex) {
					previousPoint = item.dataIndex;
					
					$("#tooltip").remove();
					var x = item.datapoint[0].toFixed(2),
					y = item.datapoint[1].toFixed(2);
					
					showTooltip(item.pageX, item.pageY,
							item.series.label + " of " + x + " = " + y);
				}
			}
			else {
				$("#tooltip").remove();
				previousPoint = null;
			}
		});
		
		
		
		$("#sincos_hum").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata_hum").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
//				plot.highlight(item.series, item.datapoint);
			}
		});
	}
	
	if($("#sincos_co2").length)
	{
		var sin = [], cos = [];
		
		for (var i = 0; i < 7; i++) {
			sin.push([i, 0]);
			cos.push([i, Math.cos(i)]);
		}
		
		var plot = $.plot($("#sincos_co2"),
				[ { data: sin, label: "标准"}, { data: cos, label: "实际" } ], {
			series: {
				lines: { show: true,
					lineWidth: 2,
				},
				points: { show: true },
				shadowSize: 2
			},
			grid: { hoverable: true, 
				clickable: true, 
				tickColor: "#ddd",
				borderWidth: 0 
			},
			yaxis: { min: -1.2, max: 1.2 },
			xaxis: {ticks:20, tickDecimals: 0, 
				tickFormatter: function(val, axis){
					var week =  ["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];
					return week[val];
				}},
				colors: ["#FA5833", "#F9AF3F"]
		});
		
		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}
		
		var previousPoint = null;
		$("#sincos_co2").bind("plothover", function (event, pos, item) {
			$("#x_co2").text(pos.x.toFixed(2));
			$("#y_co2").text(pos.y.toFixed(2));
			
			if (item) {
				if (previousPoint != item.dataIndex) {
					previousPoint = item.dataIndex;
					
					$("#tooltip").remove();
					var x = item.datapoint[0].toFixed(2),
					y = item.datapoint[1].toFixed(2);
					
					showTooltip(item.pageX, item.pageY,
							item.series.label + " of " + x + " = " + y);
				}
			}
			else {
				$("#tooltip").remove();
				previousPoint = null;
			}
		});
		
		
		
		$("#sincos_co2").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata_co2").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
//				plot.highlight(item.series, item.datapoint);
			}
		});
	}
	
	if($("#sincos_light").length)
	{
		var sin = [], cos = [];
		
		for (var i = 0; i < 7; i++) {
			sin.push([i, 0]);
			cos.push([i, Math.cos(i)]);
		}
		
		var plot = $.plot($("#sincos_light"),
				[ { data: sin, label: "标准"}, { data: cos, label: "实际" } ], {
			series: {
				lines: { show: true,
					lineWidth: 2,
				},
				points: { show: true },
				shadowSize: 2
			},
			grid: { hoverable: true, 
				clickable: true, 
				tickColor: "#ddd",
				borderWidth: 0 
			},
			yaxis: { min: -1.2, max: 1.2 },
			xaxis: {ticks:20, tickDecimals: 0, 
				tickFormatter: function(val, axis){
					var week =  ["星期一","星期二","星期三","星期四","星期五","星期六","星期天"];
					return week[val];
				}},
				colors: ["#FA5833", "#435D78"]
		});
		
		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css( {
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 5,
				border: '1px solid #fdd',
				padding: '2px',
				'background-color': '#dfeffc',
				opacity: 0.80
			}).appendTo("body").fadeIn(200);
		}
		
		var previousPoint = null;
		$("#sincos_light").bind("plothover", function (event, pos, item) {
			$("#x_light").text(pos.x.toFixed(2));
			$("#y_light").text(pos.y.toFixed(2));
			
			if (item) {
				if (previousPoint != item.dataIndex) {
					previousPoint = item.dataIndex;
					
					$("#tooltip").remove();
					var x = item.datapoint[0].toFixed(2),
					y = item.datapoint[1].toFixed(2);
					
					showTooltip(item.pageX, item.pageY,
							item.series.label + " of " + x + " = " + y);
				}
			}
			else {
				$("#tooltip").remove();
				previousPoint = null;
			}
		});
		
		
		
		$("#sincos_light").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata_light").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
//				plot.highlight(item.series, item.datapoint);
			}
		});
	}
	
	
	var opts_co2 = {
			lines: 11, // The number of lines to draw
			angle: 0.03, // The length of each line
			lineWidth: 0.30, // The line thickness
			pointer: {
				length: 0.74, // The radius of the inner circle
				strokeWidth: 0.034, // The rotation offset
				color: '#484848' // Fill color
			},
			limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
			colorStart: '#00ace9',   // Colors
			colorStop: '#00ace9',    // just experiment with them
			strokeColor: '#f5f5f5',   // to see which ones work best for you
			generateGradient: true
	};
	var target = document.getElementById('gauge1'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts_co2); // create sexy gauge!
	gauge.maxValue = 2000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(1800); // set actual value
	
	var opts_co2 = {
			lines: 11, // The number of lines to draw
			angle: 0.03, // The length of each line
			lineWidth: 0.30, // The line thickness
			pointer: {
				length: 0.74, // The radius of the inner circle
				strokeWidth: 0.034, // The rotation offset
				color: '#484848' // Fill color
			},
			limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
			colorStart: '#00ace9',   // Colors
			colorStop: '#00ace9',    // just experiment with them
			strokeColor: '#f5f5f5',   // to see which ones work best for you
			generateGradient: true
	};
	var target = document.getElementById('gauge2'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts_co2); // create sexy gauge!
	gauge.maxValue = 2000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	gauge.set(1800); // set actual value
	
	var opts_temp = {
	  	lines: 11, // The number of lines to draw
	  	angle: 0.03, // The length of each line
	  	lineWidth: 0.30, // The line thickness
	  	pointer: {
	    	length: 0.74, // The radius of the inner circle
	    	strokeWidth: 0.034, // The rotation offset
	    	color: '#484848' // Fill color
	  	},
	  	limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
	  	colorStart: '#47a947',   // Colors
	  	colorStop: '#47a947',    // just experiment with them
	  	strokeColor: '#f5f5f5',   // to see which ones work best for you
	  	generateGradient: true
	};
	var target = document.getElementById('gauge3'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts_temp); // create sexy gauge!
	gauge.maxValue = 2000; // set max gauge value
	gauge.animationSpeed = 80; // set animation speed (32 is default value)
	gauge.set(1500); // set actual value
	
	if($("#gauge4").length){
		var opts_temp = {
				lines: 11, // The number of lines to draw
				angle: 0.03, // The length of each line
				lineWidth: 0.43, // The line thickness
				pointer: {
					length: 0.74, // The radius of the inner circle
					strokeWidth: 0.034, // The rotation offset
					color: '#484848' // Fill color
				},
				limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
				colorStart: '#47a947',   // Colors
				colorStop: '#47a947',    // just experiment with them
				strokeColor: '#f5f5f5',   // to see which ones work best for you
				generateGradient: true
		};
		var target = document.getElementById('gauge4'); // your canvas element
		var gauge = new Gauge(target).setOptions(opts_temp); // create sexy gauge!
		gauge.maxValue = 2000; // set max gauge value
		gauge.animationSpeed = 80; // set animation speed (32 is default value)
		gauge.set(1200); // set actual value
	}
	if($("#gauge5").length){
		var opts_hum = {
				lines: 11, // The number of lines to draw
				angle: 0.03, // The length of each line
				lineWidth: 0.43, // The line thickness
				pointer: {
					length: 0.74, // The radius of the inner circle
					strokeWidth: 0.034, // The rotation offset
					color: '#484848' // Fill color
				},
				limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
				colorStart: '#f79a0e',   // Colors
				colorStop: '#f79a0e',    // just experiment with them
				strokeColor: '#f5f5f5',   // to see which ones work best for you
				generateGradient: true
		};
		var target = document.getElementById('gauge5'); // your canvas element
		var gauge = new Gauge(target).setOptions(opts_hum); // create sexy gauge!
		gauge.maxValue = 2000; // set max gauge value
		gauge.animationSpeed = 80; // set animation speed (32 is default value)
		gauge.set(1200); // set actual value
	}
	if($("#gauge6").length){
		var opts_hum = {
				lines: 11, // The number of lines to draw
				angle: 0.03, // The length of each line
				lineWidth: 0.43, // The line thickness
				pointer: {
					length: 0.74, // The radius of the inner circle
					strokeWidth: 0.034, // The rotation offset
					color: '#484848' // Fill color
				},
				limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
				colorStart: '#f79a0e',   // Colors
				colorStop: '#f79a0e',    // just experiment with them
				strokeColor: '#f5f5f5',   // to see which ones work best for you
				generateGradient: true
		};
		var target = document.getElementById('gauge6'); // your canvas element
		var gauge = new Gauge(target).setOptions(opts_hum); // create sexy gauge!
		gauge.maxValue = 2000; // set max gauge value
		gauge.animationSpeed = 80; // set animation speed (32 is default value)
		gauge.set(1200); // set actual value
	}
	
	if($("#gauge7").length){
		var opts_light = {
				lines: 11, // The number of lines to draw
				angle: 0.03, // The length of each line
				lineWidth: 0.43, // The line thickness
				pointer: {
					length: 0.74, // The radius of the inner circle
					strokeWidth: 0.034, // The rotation offset
					color: '#484848' // Fill color
				},
				limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
				colorStart: '#F33D2C',   // Colors
				colorStop: '#F33D2C',    // just experiment with them
				strokeColor: '#f5f5f5',   // to see which ones work best for you
				generateGradient: true
		};
		var target = document.getElementById('gauge7'); // your canvas element
		var gauge = new Gauge(target).setOptions(opts_light); // create sexy gauge!
		gauge.maxValue = 2000; // set max gauge value
		gauge.animationSpeed = 80; // set animation speed (32 is default value)
		gauge.set(1200); // set actual value
	}
	
	if($("#gauge8").length){
		var opts_light = {
				lines: 11, // The number of lines to draw
				angle: 0.03, // The length of each line
				lineWidth: 0.43, // The line thickness
				pointer: {
					length: 0.74, // The radius of the inner circle
					strokeWidth: 0.034, // The rotation offset
					color: '#484848' // Fill color
				},
				limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
				colorStart: '#F33D2C',   // Colors
				colorStop: '#f33d2c',    // just experiment with them
				strokeColor: '#f5f5f5',   // to see which ones work best for you
				generateGradient: true
		};
		var target = document.getElementById('gauge8'); // your canvas element
		var gauge = new Gauge(target).setOptions(opts_light); // create sexy gauge!
		gauge.maxValue = 2000; // set max gauge value
		gauge.animationSpeed = 80; // set animation speed (32 is default value)
		gauge.set(1200); // set actual value
	}	
	
})
