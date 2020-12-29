var BannerSwiper = new Swiper(".banner", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".banner-sp",
		clickable: true,
	},
	navigation: {
		nextEl: ".banner-rn", // 上一頁按鈕物件
		prevEl: ".banner-rp", // 下一頁按鈕物件
	},
});

// 滑鼠滑入後停止輪播
$(".banner").mouseenter(function () {
	BannerSwiper.autoplay.stop();
});
$(".banner").mouseleave(function () {
	BannerSwiper.autoplay.start();
});


var classifySwiper = new Swiper(".classify", {
	slidesPerView: 2.5,
	spaceBetween: 20,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			slidesPerGroup: 2,
		},
		500: {
			slidesPerView: 3.5,
			slidesPerGroup: 2,
		},
		700: {
			slidesPerView: 4.5,
			slidesPerGroup: 2,
		},
		1024: {
			slidesPerView: 4.8,
			slidesPerView: 4.8,
			slidesPerGroup: 2,
		},
	},
});

var ProductSwiper = new Swiper(".product-pic", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".product-sp",
		clickable: true,
	},
	navigation: {
		nextEl: ".product-rn", // 上一頁按鈕物件
		prevEl: ".product-rp", // 下一頁按鈕物件
	},
});

// 滑鼠滑入後停止輪播
$(".product-pic").mouseenter(function () {
	BannerSwiper.autoplay.stop();
});
$(".product-pic").mouseleave(function () {
	BannerSwiper.autoplay.start();
});

var PclassifySwiper = new Swiper(".store-classify", {
	slidesPerView: 3.5,
	spaceBetween: 20,
	breakpoints: {
		0: {
			slidesPerView: 3.8,
			slidesPerGroup: 2.5,
		},
		// 300: {
		// 	slidesPerView: 2,
		// 	slidesPerView: 2,
		// 	slidesPerGroup: 2,
		// },
		// 769: {
		// 	slidesPerView: 3,
		// 	slidesPerView: 3,
		// 	slidesPerGroup: 3,
		// },
		// 1024: {
		// 	slidesPerView: 4.8,
		// 	slidesPerView: 4.8,
		// 	slidesPerGroup: 2,
		// },
	},
});
