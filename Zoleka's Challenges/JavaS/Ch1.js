function showDate() {
	var now = new Date();
	var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	


	tnow = new Date();
	thour = now.getHours();
	tmin = now.getMinutes();
	tsec = now.getSeconds();


	if (tsec <= 9)
		tsec = "0" + tsec;
	if (tmin < 12)
		tmin = "0" + tmin
	var suffix = "AM"; // suffix allows me to add the AM and PM at the end.
	if (thour >= 12) {
		suffix = "PM";
		thour = thour - 12;
	}
//tnow is time now. thour is time hour. tmin is time min. tsec is time sec.

	today = days[now.getDay()] + ", " + "  " + thour + suffix + ":" + tmin + ":" + tsec;
	document.getElementById("dateDiv").innerHTML = today;
}
setInterval("showDate()", 1000);