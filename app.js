var tl = gsap.timeline({
	defaults: { duration: 1, delay: 0.2 }
});
tl.to(".svg", {
	x: "random(-20, 20, 5)",
	repeat: -1,
	yoyo: true,
	repeatRefresh: true
});