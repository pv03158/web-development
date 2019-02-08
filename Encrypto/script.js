function present_webpage(){
	var preloader = document.getElementById("preloader");
	preloader.style.display = "none";
	console.log("Presenting Webpage");
}

document.getElementById("enc_btn").addEventListener("click",function(){
	var lock_img = document.getElementById("lock_img");
	lock_img.src = "./assets/locked-padlock.png";
});

document.getElementById("dec_btn").addEventListener("click",function(){
	var lock_img = document.getElementById("lock_img");
	lock_img.src = "./assets/padlock-unlocked.png";
});