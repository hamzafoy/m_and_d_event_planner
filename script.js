function myFunction(img) {
	// Get the expanded image
	var expandImg = document.getElementById("expandedImg");

	var x = document.getElementsByClassName("closebtn")[0];

	x.style.visibility = "visible";
	// Get the image text
	var imgText = document.getElementById("imgtext");

	imgText.style.visibility = "visible";
	// Use the same src in the expanded image as the image being clicked on from the grid
	expandImg.src = img.src;
	// Use the value of the alt attribute of the clickable image as text inside the expanded image
	imgText.innerHTML = img.alt;
	// Show the container element (hidden with CSS)
	expandImg.parentElement.style.display = "block";
}