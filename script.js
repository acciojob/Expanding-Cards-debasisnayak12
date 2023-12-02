let panels = document.querySelectorAll(".panel");
function onClickToggle(e){
	panels.forEach(panel => {
		panel.classList.remove("active");
	});
	e.classList.add("active");
}