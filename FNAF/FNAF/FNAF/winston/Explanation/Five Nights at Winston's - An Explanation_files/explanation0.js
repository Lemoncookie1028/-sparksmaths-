var currentQueryString = null;
var awaitImageLoad = false;

window.addEventListener("load", () => {
	
	const expandElement = document.getElementById("expand-overlay");
	const expandOverlayTitleTitle = document.getElementById("expandOverlayTitleTitle");
	const expandOverlayDownloadButtonLink = document.getElementById("expandOverlayDownloadButtonLink");
	const expandOverlayImage = document.getElementById("expandOverlayImage");
	const expandOverlayLoading = document.getElementById("expandOverlayLoading");
	
	document.getElementById("expandOverlayCloseButton").addEventListener("click", () => {
		expandElement.style.display = "none";
	});
	
	var imgs = document.getElementsByClassName("expandImage");
	for(var i = 0; i < imgs.length; ++i) {
		var el = imgs[i];
		const hrf = el.dataset.expandUri;
		const ttl = el.dataset.expandTitle;
		if(typeof ttl === "string" && typeof hrf === "string") {
			el.addEventListener("click", () => {
				expandElement.style.display = "block";
				expandOverlayLoading.style.display = null;
				expandOverlayImage.style.display = "none";
				expandOverlayTitleTitle.style.display = "none";
				expandOverlayTitleTitle.innerText = ttl;
				awaitImageLoad = true;
				expandOverlayImage.src = hrf;
				expandOverlayDownloadButtonLink.href = hrf;
				expandOverlayDownloadButtonLink.style.display = "none";
				var dln = hrf;
				var ii = hrf.lastIndexOf("/");
				if(ii >= 0) {
					dln = dln.substring(ii + 1);
				}
				expandOverlayDownloadButtonLink.download = dln;
				expandOverlayDownloadButtonLink.target = "_blank";
			});
		}
		expandOverlayImage.addEventListener("load", (evt) => {
			if(awaitImageLoad) {
				awaitImageLoad = false;
				expandOverlayLoading.style.display = "none";
				expandOverlayTitleTitle.style.display = null;
				expandOverlayDownloadButtonLink.style.display = null;
				var wdth = window.innerWidth * 0.95 - 50;
				var hght = window.innerHeight * 0.95 - 200;
				var size = 1.0;
				size = Math.min(size, Math.max(wdth / expandOverlayImage.width, 0.025));
				size = Math.min(size, Math.max(hght / expandOverlayImage.height, 0.025));
				expandOverlayImage.style.width = "" + Math.round(expandOverlayImage.width * size) + "px";
				expandOverlayImage.style.height = "" + Math.round(expandOverlayImage.height * size) + "px";
				expandOverlayImage.style.display = null;
			}
		});
	}
	
	var collapse = document.getElementsByClassName("cameraCollapse");
	for(var i = 0; i < collapse.length; ++i) {
		const el = collapse[i];
		const collapseText = el.querySelector(".cameraTitle p");
		const collapseText2 = el.querySelector(".cameraTitle .cameraExpandIcon");
		const collapseSection = el.querySelector(".cameraCollapse .cameraCollapseCollapse");
		const collapseInnerSection = el.querySelector(".cameraCollapse .cameraCollapseCollapseInner");
		const collapseResizeListener = () => {
			collapseSection.style.height = (collapseInnerSection.clientHeight + 60) + "px";
		};
		const toggleListener = () => {
			if(collapseSection.style.display === "none") {
				location.hash = "#" + el.id;
				collapseSection.style.display = "block";
				collapseText2.style.backgroundPosition = "top 0px left 19px";
				collapseResizeListener();
			}else {
				collapseSection.style.display = "none";
				collapseText2.style.backgroundPosition = "top 0px left 0px";
			}
		};
		collapseText.addEventListener("click", toggleListener);
		collapseText2.addEventListener("click", toggleListener);
		const openListener = () => {
			collapseSection.style.display = "block";
			collapseText2.style.backgroundPosition = "top 0px left 19px";
			collapseResizeListener();
		};
		if(location.hash === "#" + el.id) {
			openListener();
		}
		const dontMakeLink = el.querySelector(".cameraTitle a");
		const links = document.querySelectorAll("a[href=\"#" + el.id + "\"]");
		for(var j = 0; j < links.length; ++j) {
			if(links[j] !== dontMakeLink) {
				links[j].addEventListener("click", openListener);
			}
		}
	}
	
	const vids = document.querySelectorAll(".jumpscareVideo");
	for(var k = 0; k < vids.length; ++k) {
		const vidd = vids[k];
		vidd.addEventListener("play", () => {
			vidd.classList.add("jumpscareVideoActivated");
			const winWidth = Math.min(window.innerWidth - 170, 700);
			vidd.width = winWidth;
			vidd.height = Math.round(winWidth * 0.5625);
		});
	}
	
	window.addEventListener("resize", () => {
		const winWidth = Math.min(window.innerWidth - 170, 700);
		const wHeight = Math.round(winWidth * 0.5625);
		const vidz = document.querySelectorAll(".jumpscareVideoActivated");
		for(var l = 0; l < vidz.length; ++l) {
			const vidd = vidz[l];
			vidd.width = winWidth;
			vidd.height = wHeight;
		}
	});
	
	const vidLinks = document.querySelectorAll(".autoplayLink");
	for(var m = 0; m < vidLinks.length; ++m) {
		const viddLnk = vidLinks[m];
		const elmt = document.getElementById(viddLnk.dataset.playElement);
		viddLnk.addEventListener("click", () => {
			setTimeout(() => elmt.play(), 500);
		});
	}
	
});