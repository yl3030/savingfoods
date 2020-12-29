$("#menu-icon").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$("#menu").css("left", "-100%");
	} else {
		$(this).addClass("active");
		$("#menu").css("left", "0");
	}
});

$("#setting-box").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$("#setting").css("right", "-100%");
	} else {
		$(this).addClass("active");
		$("#setting").css("right", "0");
	}
});

$(".active-select").click(function () {
	$(this).parents(".select-box").children(".hide-select").slideToggle(100);
});
var selectWidth = $(".active-select").width() + 15 + 35 + 2;
$(".hide-select").css("width", selectWidth);
$(".hide-select")
	.children("li")
	.click(function () {
		var select = $(this).text();
		document.getElementById("as").innerText = select;
		$(this).parents(".hide-select").hide();
	});
$(document).click(function (event) {
	var y_con = $(".active-select");
	if (!y_con.is(event.target) && y_con.has(event.target).length === 0) {
		$(".hide-select").hide();
	}
});
$(".select-receipt")
	.children(".hide-select")
	.children("li")
	.click(function () {
		if ($(this).hasClass("company-receipt")) {
			$(this).parents(".input-box").children(".company").show();
		} else {
			$(this).parents(".input-box").children(".company").hide();
		}
	});

$(".minus").click(function () {
	var buyNum = $(this).parents(".num-input").children(".active-num").val();
	var clickNum;
	if (buyNum == 0 || buyNum < 0) {
		clickNum = 0;
	} else if (buyNum == "") {
		clickNum = 0;
	} else {
		clickNum = parseInt(buyNum) - 1;
	}
	$(this).parents(".num-input").children(".active-num").val(clickNum);
});
$(".plus").click(function () {
	var buyNum = $(this).parents(".num-input").children(".active-num").val();
	var clickNum;
	if (buyNum == "") {
		clickNum = 1;
	} else {
		clickNum = parseInt(buyNum) + 1;
	}
	$(this).parents(".num-input").children(".active-num").val(clickNum);
});

$("#addtocart").click(function () {
	var buyNum = $(this)
		.parents("#product-detail")
		.children(".buy-num")
		.children(".num-input")
		.children(".active-num")
		.val();
	if (buyNum == 0 || buyNum < 0) {
		$(".noadd-alert").fadeIn(300);
		$(".noadd-alert").delay(1000).fadeOut(300);
	} else {
		$(".add-alert").fadeIn(300);
		$(".add-alert").delay(1000).fadeOut(300);
	}
});
$(document).click(function (event) {
	var y_con = $(".alert");
	var x_con = $("#addtocart");
	if (!y_con.is(event.target) && y_con.has(event.target).length === 0) {
		if (!x_con.is(event.target) && x_con.has(event.target).length === 0) {
			y_con.hide();
		}
	}
});

// 預設日期
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
console.log(year + "/" + month + "/" + date + " " + hour + ":" + minute);
var Btoday = year + "/" + month + "/" + date;
var Etoday = month + "/" + date;
$("#birth").val(Btoday);
$("#expiry").val(Etoday);

$(".deadline").each(function () {
	counter($(this));
});
// function counter2(ct) {
// 	this.
// }
function counter(ct) {
	var aI = ct.children(".remain").children("span");
	var now = new Date();
	var nowTime = now.getTime();
	var end = new Date(ct.attr("close-time"));
	var endTime = end.getTime();
	var remainTime = endTime - nowTime;
	var remainDay = parseInt(remainTime / (60 * 60 * 24 * 1000));
	var remainHour = parseInt((remainTime / (60 * 60 * 1000)) % 24);
	var remainMin = parseInt((remainTime / (60 * 1000)) % 60);
	var remainSec = parseInt((remainTime / 1000) % 60);
	aI[0].textContent = remainDay + "日";
	aI[1].textContent = remainHour + "時";
	aI[2].textContent = remainMin + "分";
	aI[3].textContent = remainSec + "秒";
	setInterval(function () {
		now = new Date();
		nowTime = now.getTime();
		end = new Date(ct.attr("close-time"));
		endTime = end.getTime();
		remainTime = endTime - nowTime;
		remainDay = parseInt(remainTime / (60 * 60 * 24 * 1000));
		remainHour = parseInt((remainTime / (60 * 60 * 1000)) % 24);
		remainMin = parseInt((remainTime / (60 * 1000)) % 60);
		remainSec = parseInt((remainTime / 1000) % 60);
		if (remainTime < 0) {
			// aI[0].textContent = "";
			// aI[1].textContent = "";
			// aI[2].textContent = "";
			// aI[3].textContent = "";
			// clearInterval(ct);
			ct.children(".remain").hide();
			ct.children(".expired").css("display", "inline-block");
		}
		if (remainDay < 1) {
			aI[0].textContent = "";
		} else {
			aI[0].textContent = remainDay + "日";
		}
		aI[1].textContent = remainHour + "時";
		aI[2].textContent = remainMin + "分";
		if (remainSec < 10) {
			aI[3].textContent = "0" + remainSec + "秒";
		} else {
			aI[3].textContent = remainSec + "秒";
		}
	}, 1000);
}

var bodyHeight =
	$(window).height() - $("header").height() - $("footer").height() - 130;
console.log("footer height:" + $("footer").height());
console.log("header height:" + $("header").height());
$(window).on("resize scroll", function () {
	$("main").css("min-height", bodyHeight);
});
$("main").css("min-height", bodyHeight);

$(".user-data.result")
	.children("button")
	.click(function () {
		$(this).parents(".user-data").hide();
		$(".user-data.edit").show();
	});
$(".user-data.edit")
	.children("button")
	.click(function () {
		$(this).parents(".user-data").hide();
		$(".user-data.result").show();
	});

$(".attend").click(function () {
	$(this).hide();
	$(this).parents(".btn-box").children(".attended").show();
});
$(".attended").click(function () {
	$(this).hide();
	$(this).parents(".btn-box").children(".attend").show();
});

$(".class-slide").click(function () {
	if (!$(this).hasClass("active")) {
		$(this)
			.parents(".swiper-wrapper")
			.children(".class-slide")
			.removeClass("active");
		$(this).addClass("active");
		if ($(this).hasClass("all")) {
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children(".p-content")
				.hide();
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children("#all")
				.show();
		} else if ($(this).hasClass("bread")) {
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children(".p-content")
				.hide();
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children("#bread")
				.show();
		} else if ($(this).hasClass("noodle")) {
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children(".p-content")
				.hide();
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children("#noodle")
				.show();
		} else if ($(this).hasClass("cookie")) {
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children(".p-content")
				.hide();
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children("#cookie")
				.show();
		} else if ($(this).hasClass("icecream")) {
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children(".p-content")
				.hide();
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children("#icecream")
				.show();
		} else if ($(this).hasClass("snack")) {
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children(".p-content")
				.hide();
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children("#snack")
				.show();
		} else if ($(this).hasClass("frozen")) {
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children(".p-content")
				.hide();
			$(this)
				.parents("#store-detail")
				.children("#product")
				.children("#frozen")
				.show();
		}
	}
});

$("#back-arrow").click(function () {
	window.history.go(-1);
});

$("#order")
	.children(".btn-box")
	.children(".btn")
	.click(function () {
		if (!$(this).hasClass("active")) {
			$("#order").children(".btn-box").children(".btn").removeClass("active");
			$(this).addClass("active");
			if ($(this).hasClass("done-btn")) {
				$(this)
					.parents("#order")
					.children(".order-list")
					.children("div")
					.hide();
				$(this)
					.parents("#order")
					.children(".order-list")
					.children(".o-title")
					.show();
				$(this)
					.parents("#order")
					.children(".order-list")
					.children(".done")
					.show();
			} else if ($(this).hasClass("not-btn")) {
				$(this)
					.parents("#order")
					.children(".order-list")
					.children("div")
					.hide();
				$(this)
					.parents("#order")
					.children(".order-list")
					.children(".o-title")
					.show();
				$(this)
					.parents("#order")
					.children(".order-list")
					.children(".notpick")
					.show();
			} else {
				$(this)
					.parents("#order")
					.children(".order-list")
					.children("div")
					.show();
			}
		}
	});

$("#money")
	.children(".btn-box")
	.children(".btn")
	.click(function () {
		if (!$(this).hasClass("active")) {
			$("#money").children(".btn-box").children(".btn").removeClass("active");
			$(this).addClass("active");
			if ($(this).hasClass("order-btn")) {
				$(this).parents("#money").children(".order-record").show();
				$(this).parents("#money").children(".appropriate-record").hide();
			} else if ($(this).hasClass("appropriate-btn")) {
				$(this).parents("#money").children(".order-record").hide();
				$(this).parents("#money").children(".appropriate-record").show();
			}
		}
	});

$(".sr-title").click(function () {
	$(this).parents(".select-range").children(".select-content").slideToggle(300);
	if ($(this).children(".container").children("i").hasClass("active")) {
		$(this).children(".container").children("i").removeClass("active");
	} else {
		$(this).children(".container").children("i").addClass("active");
	}
});
$(".select-county")
	.children("li")
	.click(function () {
		$(".select-county").children("li").removeClass("active");
		$(this).addClass("active");
	});
$(".select-district")
	.children("li")
	.click(function () {
		if ($(this).hasClass("all")) {
			$(".select-district").children("li").removeClass("active");
			$(this).addClass("active");
		} else {
			if ($(this).hasClass("active")) {
				$(".select-district").children(".all").removeClass("active");
				$(this).removeClass("active");
			} else {
				$(".select-district").children(".all").removeClass("active");
				$(this).addClass("active");
			}
		}
	});
$(".select-content")
	.children(".container")
	.children("button")
	.click(function () {
		$(this).parents(".select-content").slideUp(300);
		$(this)
			.parents(".select-range")
			.children(".sr-title")
			.children(".container")
			.children("i")
			.removeClass("active");
	});
