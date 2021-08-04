const burgerId = document.getElementById('burger-beard');


//we need to click to addClassList hidden
//then click to close 
if (burgerId) {

	burgerId.addEventListener('click', (e) => {
		console.log(e, 'this is clicked');
		burgerId.classList.toggle('active-class');
	})
}






const linear_search = (list, target) => {
	
}