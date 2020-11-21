"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

window.mobilecheck = function () {
	var mobile = false;
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) mobile = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return mobile;
};

(function () {
	function UPError(sMessage) {
		this.name = "UP Error";
		this.message = sMessage;
	}
	UPError.prototype = new Error();
	UPError.prototype.constructor = UPError;

	try {
		if (localStorage) {
			console.log("localStorage supports");
		}
	} catch (e) {
		alert('Sorry, we dont support your browser.');
		throw new UPError('Sorry, we dont support your browser.(localStorage)');
	}
})();

var PROD = true;
if (PROD) {
	var UP_CONFIG = {
		API_KEY: '361704a7a081b6434ad84c73b01a42814e020e4f',
		USERNAME: 'biz_adm_weborderingchaipoint',
		//RAZOR_KEY: 'rzp_live_Zqmx92mExD1bHO',
		API_BASE_VANILLA: 'https://api.urbanpiper.com/'
	};
} else {
	var UP_CONFIG = {
		API_KEY: 'bb30b3e53176f7b249bf0b16652a5afd0dc5f9de',
		USERNAME: 'biz_tst_vjUSsDcewHRIZCFjCARVZn',
		//RAZOR_KEY: 'rzp_test_uDhKxKNNQTdkZ6',
		API_BASE_VANILLA: 'https://staging.urbanpiper.com/'
	};
}

UP_CONFIG.BIZ_ID = '73574477';
UP_CONFIG.BIZ_NAME = 'Chaipoint';
UP_CONFIG.BIZ_LOGO = 'http://chaipoint.com/images/logo.png';
UP_CONFIG.BIZ_COLOR = '#006736';
UP_CONFIG.GMAP_KEY = 'AIzaSyA--IcEie5LD04UxXhjf21MwA9YaLzq3PA';
UP_CONFIG.MP_ID = "cb2a1e1202006fbaf0b21b59bb3c86cd";
UP_CONFIG.GTM_ID = "GTM-5ZFNVV9";

UP_CONFIG.COUNTRY_CODE = '+91';
UP_CONFIG.CURR = {
	name: 'INR',
	code: '&#x20B9;'
};

UP_CONFIG.error_msg = {
	default: 'Something went wrong, try again!',
	login: 'Invalid credentials!'
};

UP_CONFIG.GUEST_CHECKOUT = true;
UP_CONFIG.WALLET = true;
UP_CONFIG.MENU_LAYOUT = {
	col: 1, // 1, 2 or 3 // if 1 -> Layout is list
	image: true,
	image_type: 1 // 1-> landscape 2-> square
};

UP_CONFIG.SOCIAL_LOGIN = true;

UP_CONFIG.CACHED_TIME = 30; //in min
UP_CONFIG.OTP_WAIT_TIME = 30000; // in millisecond

UP_CONFIG.SOCIAL = {
	enable: true,
	FB_APP_ID: 1577800152517243,
	GOOGLE_CLIENT_ID: '683488300151-h5ndurn8k010vk8hslegm8d082lk7hhn.apps.googleusercontent.com'

	// Do not change anything here
};UP_CONFIG.API_BASE = UP_CONFIG.API_BASE_VANILLA + 'api/';
UP_CONFIG.AUTH_BUSINESS = 'apikey ' + UP_CONFIG.USERNAME + ':' + UP_CONFIG.API_KEY;

UP_CONFIG.RAZOR_CONFIG = {
	"key": UP_CONFIG.RAZOR_KEY,
	"currency": UP_CONFIG.CURR.name,
	"name": UP_CONFIG.BIZ_NAME,
	//"description": "Order payment",
	"image": UP_CONFIG.BIZ_LOGO,
	"theme": {
		"color": UP_CONFIG.BIZ_COLOR
	}
};

// Other DOM related config.
//you can change the id if you want. But follow the naming convention i.e. id - up_  class - UP-
var LOGIN_MODAL = 'up_login_overlay';
var GOOGLE_LOCATION_INPUT = ['#google_location, #google_location2'];

// all api calls are JQuery dependent
// No DOM manipulation in UP obj, DOM related: UPDOM Obj
// Only Dependency : lowdash, pubsub, up_config.js
// code in UP.js should not be dependent on main.js
var auth2; // make it global variable
var UP = {
	vanillaAjax: function vanillaAjax(type, url, params, callback, errCallback) {
		jQuery.ajax({
			url: url,
			type: type,
			data: params,
			headers: {
				"Content-Type": "application/json"
			},
			contentType: "application/json",
			success: function success(resp) {
				callback(resp);
			},

			error: function error(err) {
				if (err.responseJSON && err.responseJSON.message) {
					console.log(err.responseJSON.message);
				}
				if (errCallback) {
					errCallback(err);
				}
			}
		});
	},
	bizAjax: function bizAjax(type, url, params, callback, errCallback) {
		if (!UP_CONFIG.AUTH_BUSINESS) {
			alert('Something went horribly wrong!  Contact support@urbanpiper.com');
			return false;
		}
		jQuery.ajax({
			url: UP_CONFIG.API_BASE + url,
			type: type,
			data: params,
			headers: {
				"Authorization": UP_CONFIG.AUTH_BUSINESS,
				"Content-Type": "application/json"
			},
			contentType: "application/json",
			success: function success(resp) {
				callback(resp);
			},

			error: function error(err) {
				if (err.responseJSON) {
					console.log(err.responseJSON.message);
				}
				if (errCallback) {
					errCallback(err);
				}
			}
		});
	},
	userAjax: function userAjax(type, url, params, callback, errCallback) {
		if (!UP_CONFIG.AUTH_USER) {
			alert('Something went horribly wrong! Contact support@urbanpiper.com');
			return false;
		}

		jQuery.ajax({
			url: UP_CONFIG.API_BASE + url,
			type: type,
			headers: {
				"Authorization": UP_CONFIG.AUTH_USER,
				"Content-Type": "application/json"
			},
			data: params,
			success: function success(resp) {
				callback(resp);
			},
			error: function error(err) {
				if (err.responseJSON) {
					console.log(err.responseJSON.message);
				}

				if (errCallback) {
					errCallback(err);
				}
			}
		});
	},
	paymentAjax: function paymentAjax(type, url, params, callback, errCallback) {
		/*
  if(!UP_CONFIG.AUTH_USER){
  	alert('Something went horribly wrong!');
  	return false;
  }*/
		if (UP.localStorage.getItem('guest')) {
			params.phone = UP.localStorage.getItem('guest').customer_phone;
			var AUTH = UP_CONFIG.AUTH_BUSINESS;
		} else {
			var AUTH = UP_CONFIG.AUTH_USER;
		}

		jQuery.ajax({
			url: UP_CONFIG.API_BASE_VANILLA + url,
			type: type,
			headers: {
				"Authorization": AUTH,
				"Content-Type": "application/json"
			},
			data: params,
			success: function success(resp) {
				callback(resp);
			},
			error: function error(err) {
				if (err.responseJSON) {
					console.log(err.responseJSON.error_message);
				}
				var error_message = err.responseJSON && err.responseJSON.error_message ? err.responseJSON.error_message : 'Error! Try Again!';

				if (errCallback) {
					errCallback(error_message);
				}
			}
		});
	},
	createAccount: function createAccount(data, callback, errCallback) {
		var data = _extends({}, data);
		data.channel = 'web';
		UP.localStorage.removeItem('guest');
		var url = 'v2/card/?' + jQuery.param(data);
		this.bizAjax('POST', url, {}, callback, errCallback);
	},
	verifyAccount: function verifyAccount(data, callback, errCallback) {
		if (UP_VARS.SOCIAL_LOGIN.otp) {
			data.provider = UP_VARS.SOCIAL_LOGIN.data.provider, data.token = UP_VARS.SOCIAL_LOGIN.data.token, data.email = UP_VARS.SOCIAL_LOGIN.data.email;

			var url = "v2/social_auth/me/?provider=" + data.provider + "&access_token=" + data.token + "&email=" + data.email + "&action=verify_otp&phone=" + data.customer_phone + "&otp=" + data.pin;
			this.bizAjax('GET', url, {}, callback, errCallback);
		} else {
			data.nopinsend = true;
			var url = 'v2/card/?' + jQuery.param(data);
			this.bizAjax('POST', url, {}, callback, errCallback);
		}
	},
	loginUser: function loginUser(data, callback, errCallback) {
		UP.localStorage.removeItem('guest');
		this.setAuthUser(data);
		this.userAjax('GET', 'v1/auth/me/', {}, function (d) {
			UP.setLoginInfo(d);
			/*
   var logged_user = d;
   logged_user.auth = UP_CONFIG.AUTH_USER;
   logged_user.phone_num = data.phone_num;
   UP.localStorage.removeItem('guest');
   UP_VARS.GUEST = false;
   UP.localStorage.setItem('logged_user', logged_user);
   */
			callback(d);
		}, errCallback);
	},
	forgotPassword: function forgotPassword(data, callback, errCallback) {
		var params = {
			"phone": data.phone_num,
			"biz_id": UP_CONFIG.BIZ_ID
		};
		this.bizAjax('POST', 'v1/user/password/token/', JSON.stringify(params), callback, errCallback);
	},
	resetPassword: function resetPassword(data, callback, errCallback) {
		data.biz_id = UP_CONFIG.BIZ_ID;
		this.bizAjax('POST', 'v1/user/password/', JSON.stringify(data), callback, errCallback);
	},
	resendOTP: function resendOTP(data, callback, errCallback) {
		data.biz_id = UP_CONFIG.BIZ_ID;
		data.format = "json", data.pin = "resendotp";

		var url = 'v2/card/?' + jQuery.param(data);
		this.bizAjax('POST', url, {}, callback, errCallback);
	},
	fetchOrderHistory: function fetchOrderHistory(callback, errCallback) {
		var biz_id = UP_CONFIG.BIZ_ID;
		var url = 'v1/user/history/?format=json&biz_id=' + biz_id + '&type=order';
		this.userAjax('GET', url, {}, callback, errCallback);
	},
	getuserInfo: function getuserInfo(callback, errCallback) {
		this.userAjax('GET', 'v1/userbizinfo/', { biz_id: UP_CONFIG.BIZ_ID }, callback, function (err) {
			if (err.status == 401) {
				console.log(err.statusText);
				alert('Your session has expired. \nYou\'ll need to re-login to place an order or access account specific information.');
				UPDOM.logout();
			}
		});
	},
	saveUserAddress: function saveUserAddress(data, callback, errCallback) {
		data.biz_id = UP_CONFIG.BIZ_ID;
		this.userAjax('POST', 'v1/user/address/', JSON.stringify(data), callback, errCallback);
	},
	deleteAddress: function deleteAddress(data, callback, errCallback) {
		var url = 'v1/user/address/' + data.id + '/';
		this.userAjax('DELETE', url, {}, function () {
			callback();
		}, errCallback);
	},
	fetchStores: function fetchStores(data, callback, errCallback) {
		if (data) {
			var params = data.latlng;
		} else {
			var params = {};
		}
		this.bizAjax('GET', 'v1/stores/', params, callback, errCallback);
	},
	getCategory: function getCategory(callback, errCallback) {
		this.bizAjax('GET', 'v1/order/categories/', { timestamp: new Date().getTime() }, callback);
	},
	getCategoryItems: function getCategoryItems(data, callback, errCallback) {
		var location_id = data.location_id;
		if (location_id) {
			var params = { location_id: location_id };
		} else {
			var params = {};
		}
		var cat_id = data.cat_id;
		var api_url = 'v1/order/categories/' + cat_id + '/items/';
		this.bizAjax('GET', api_url, params, callback, errCallback);
	},
	getItemDetails: function getItemDetails(data, callback, errCallback) {
		var url = 'v1/items/' + data.id + '/';
		this.bizAjax('GET', url, { location_id: data.location_id }, callback, errCallback);
	},
	placeOrder: function placeOrder(data, callback, errCallback) {
		var url = 'v1/order/?format=json&biz_id=' + UP_CONFIG.BIZ_ID;
		if (UP.localStorage.getItem('guest')) {
			this.bizAjax('POST', url, data, callback, errCallback);
		} else {
			this.userAjax('POST', url, data, callback, errCallback);
		}
	},
	paymentInit: function paymentInit(data, callback, errCallback) {
		if (data.pg && data.pg == 'paytm') {
			var url = "payments/init/" + UP_CONFIG.BIZ_ID + "/?channel=web&amount=" + data.amount + "&purpose=" + data.purpose + "&paytm=true&redirect_url=http://" + window.location.host + "/pg";
		} else if (data.pg && data.pg == 'instamojo') {
			var url = "payments/init/" + UP_CONFIG.BIZ_ID + "/?channel=web&amount=" + data.amount + "&purpose=" + data.purpose + "&redirect_url=http://" + window.location.host + "/pg";
		} else {
			if (UP.localStorage.getItem('selected_location').biz_detail.store.biz_location_id) {
				var url = "payments/init/" + UP_CONFIG.BIZ_ID + "/" + UP.localStorage.getItem('selected_location').biz_detail.store.biz_location_id + "/?channel=web&amount=" + data.amount + "&purpose=" + data.purpose;
			} else {
				var url = "payments/init/" + UP_CONFIG.BIZ_ID + "/?channel=web&amount=" + data.amount + "&purpose=" + data.purpose;
			}
		}
		this.paymentAjax('GET', url, {}, function (d) {
			UP_CONFIG.RAZOR_CONFIG.key = d.data.key;
			callback(d);
		}, errCallback);
	},
	validateCoupon_v2: function validateCoupon_v2(data, callback, errCallback) {
		var url = 'v1/coupons/' + data.code + '/';
		if (UP.localStorage.getItem('guest')) {
			data.order.phone = UP.localStorage.getItem('guest').customer_phone;
			var params = JSON.stringify(data);
			this.bizAjax('POST', url, params, callback, errCallback);
		} else {
			var params = JSON.stringify(data);
			this.userAjax('POST', url, params, callback, errCallback);
		}
	},
	setAuthUser: function setAuthUser(data) {
		var username = data.phone_num + '__' + UP_CONFIG.BIZ_ID;
		var userAuth = "Basic " + btoa(username + ':' + data.password);
		UP_CONFIG.AUTH_USER = userAuth;
	},
	setSocialAuth: function setSocialAuth(data) {
		var userAuth = 'Basic ' + btoa(data.email + ':' + UP_VARS.SOCIAL_LOGIN.data.token);
		UP_CONFIG.AUTH_USER = userAuth;
	},
	contactUs: function contactUs(data, callback, errCallback) {
		var url = UP_CONFIG.API_BASE_VANILLA + 'biz/' + UP_CONFIG.BIZ_ID + '/contact/';
		this.vanillaAjax('POST', url, JSON.stringify(data), callback, errCallback);
	},
	getReorderPayload: function getReorderPayload(data, callback, errCallback) {
		var url = 'v2/order/' + data.id + '/reorder/';
		this.userAjax('GET', url, {}, callback, errCallback);
	},
	updateUserInfo: function updateUserInfo(data, callback, errCallback) {
		var url = 'v1/user/profile/?customer_phone=' + data.customer_phone;
		this.bizAjax('PUT', url, JSON.stringify(data), callback, errCallback);
	},
	phonenoValid: function phonenoValid(data) {
		if (UP.intOnly(data)) {
			return (/^[0-9]\d{9}$/.test(data)
			);
		} else {
			return false;
		}
	},
	emailValid: function emailValid(data) {
		return (/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(data)
		);
	},
	intOnly: function intOnly(data) {
		return (/^[0-9]*$/.test(data)
		);
	},
	loginStatus: function loginStatus() {
		if (UP.localStorage.getItem('logged_user')) {
			return true;
		} else {
			return false;
		}
	},
	enableGuest: function enableGuest(data, callback) {
		var phone = data.customer_phone;
		this.createAccount(data, function (d) {
			UP_VARS.GUEST = { phone: data.customer_phone };
			callback();
		}, function (err) {
			console.log('guest checkout error: ' + err);
		});
	},
	getSavedAddress: function getSavedAddress(data, callback) {
		var update = data.update;
		if (update) {
			UP.getuserInfo(function (d) {
				UP.localStorage.setItem('user_info', d);
				callback(d.objects[0].addresses);
			});
		} else {
			if (UP.localStorage.getItem('user_info')) {
				var d = UP.localStorage.getItem('user_info');
				callback(d.objects[0].addresses);
			} else {
				UP.getuserInfo(function (d) {
					UP.localStorage.setItem('user_info', d);
					callback(d.objects[0].addresses);
				});
			}
		}
	},
	getSlots: function getSlots(d) {
		//d is JS UTCday
		//convert time to readable string.
		var todayInMilli = function todayInMilli(time_string) {
			var today = new Date();
			var selectedTimeToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), time_string[0], time_string[1], time_string[2]);
			return selectedTimeToday.getTime();
		};

		var tConvert = function tConvert(time) {
			// Check correct time format and split into components
			time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

			if (time.length > 1) {
				// If time format correct
				time = time.slice(1); // Remove full string match value
				time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
				time[0] = +time[0] % 12 || 12; // Adjust hours
			}
			return time.join(''); // return adjusted time or original string
		};

		var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var day = weekday[d];

		var slots = UP.localStorage.getItem('selected_location').biz_detail.biz.time_slots;
		var offset = UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time;

		if (!slots || slots.length == 0) {
			// if slots are not configured show time picker.
			UP_VARS.SLOT = false;
			return false;
		}
		var available_slots = _.filter(slots, { 'day': day });
		available_slots = _.sortBy(available_slots, 'start_time'.split(':')[0]);

		var slotsMarkup = '';
		var now = new Date().getTime() + offset;
		var todayDayName = new Date().getUTCDay();

		var slots = [];

		for (var x in available_slots) {
			var display_date_e = available_slots[x].end_time.split(":");
			display_date_e.splice(2, 1);
			display_date_e = display_date_e.join(":");

			var display_date_s = available_slots[x].start_time.split(":");
			display_date_s.splice(2, 1);
			display_date_s = display_date_s.join(":");

			var startTime = todayInMilli(available_slots[x].start_time.split(':'));
			var endTime = todayInMilli(available_slots[x].end_time.split(':'));

			if (d == todayDayName) {
				if (endTime > now) {
					var slotObj = {
						start_time: {
							value: available_slots[x].start_time,
							string: tConvert(display_date_s)
						},
						end_time: {
							value: available_slots[x].end_time,
							string: tConvert(display_date_e)
						}
					};
					slots.push(slotObj);
				}
			} else {
				var slotObj = {
					start_time: {
						value: available_slots[x].start_time,
						string: tConvert(display_date_s)
					},
					end_time: {
						value: available_slots[x].end_time,
						string: tConvert(display_date_e)
					}
				};
				slots.push(slotObj);
			}
		}
		return slots;
	},
	getPaymentOptions: function getPaymentOptions(data) {
		var wallet = data.wallet;
		var cod = data.cod;
		var paymentOpt = UP.localStorage.getItem('selected_location').biz_detail.biz.payment_options;

		if (wallet === false || !UP_CONFIG.WALLET || UP.localStorage.getItem('guest')) {
			if (paymentOpt.indexOf('prepaid') > -1) {
				var removeIndex = paymentOpt.indexOf('prepaid');
				paymentOpt.splice(removeIndex, 1);
			}
		}
		if (cod === false) {
			if (paymentOpt.indexOf('cash') > -1) {
				var removeIndex = paymentOpt.indexOf('cash');
				paymentOpt.splice(removeIndex, 1);
			}
		}

		var paymentStringArr = {
			cash: "Cash on Delivery",
			payment_gateway: "Payment Gateway",
			prepaid: "Wallet : " + UP_CONFIG.CURR.code + "&nbsp;<span class=\"up-wallet-balance\"></span>&nbsp;<span style=\"text-decoration:underline\" class=\"bold UP-ROUTE-WALLET cursor-pointer\">Reload Wallet</span>"
		};

		var formattedPaymentOpt = [];
		for (var x in paymentOpt) {
			formattedPaymentOpt.push({
				mode: paymentOpt[x],
				string: paymentStringArr[paymentOpt[x]] ? paymentStringArr[paymentOpt[x]] : paymentOpt[x]
			});
		}

		return formattedPaymentOpt;
	},
	localStorage: {
		setItem: function setItem(key, value) {
			var up_storage = JSON.parse(localStorage.getItem('UP'));
			if (up_storage) {
				up_storage[key] = value;
			} else {
				up_storage = {};
				up_storage[key] = value;
			}
			localStorage.setItem('UP', JSON.stringify(up_storage));
		},
		getItem: function getItem(key) {
			var data = JSON.parse(localStorage.getItem('UP'));
			if (!data) {
				return false;
			} else {
				if (data[key]) {
					return data[key];
				} else {
					return false;
				}
			}
		},
		removeItem: function removeItem(key) {
			var data = JSON.parse(localStorage.getItem('UP'));
			if (data) {
				var keysArray = Object.keys(data);
				for (var x in keysArray) {
					if (keysArray[x] == key) {
						delete data[key];
					}
				}
			}
			localStorage.setItem('UP', JSON.stringify(data));
		}
	},
	getItemObjFromBIZ_MENU: function getItemObjFromBIZ_MENU(itemId) {
		var itemObj = false;
		if (UP_VARS.BIZ_MENU.length > 0) {
			for (var x in UP_VARS.BIZ_MENU) {
				var items = UP_VARS.BIZ_MENU[x].d.objects;
				itemObj = _.find(items, { 'id': itemId });
				if (itemObj) {
					return itemObj;
					break;
				}
			}
		} else {
			return itemObj;
		}
	},
	getCartObj: function getCartObj() {
		if (UP.localStorage.getItem('cart')) {
			return UP.localStorage.getItem('cart');
		} else {
			return {
				meta: {
					item_count: 0,
					total: 0,
					total_tax: 0
				},
				items: []
			};
		}
	},
	destroyCart: function destroyCart(callback) {
		if (UP.localStorage.getItem('cart')) {
			UP.localStorage.removeItem('cart');
		}
		UP_VARS.CART = {
			meta: {
				item_count: 0,
				total: 0,
				total_tax: 0
			},
			items: []
		};

		if (callback) {
			callback();
		}
	},
	addToCartType1: function addToCartType1(data) {
		var item_id = data.item_id;
		data.add = true;
		var ItemObj = _.find(UP_VARS.CART.items, { 'id': item_id });

		if (ItemObj) {
			data.item = ItemObj;
		} else {
			if (UP.getItemObjFromBIZ_MENU(item_id)) {
				data.item = UP.getItemObjFromBIZ_MENU(item_id);
			}
		}
		data.item.sig = item_id + '_';

		PubSub.publish('cart', data);

		dataLayer.push({
			'event': 'addToCart',
			'ecommerce': {
				'currencyCode': 'INR',
				'add': { // 'add' actionFieldObject measures.
					'products': [{ //  adding a product to a shopping cart.
						'name': data.item.item_title,
						'id': data.item.id,
						'price': data.item.item_price,
						'brand': 'Chai Point',
						'category': data.item.category.name,
						'quantity': 1
					}]
				}
			}
		});

		// var __item_price = (data.item.option_groups.length > 0 ? data.item.option_groups[0].options[0].price : data.item.item_price);
		// dataLayer.push({
		// 	"event":"add_to_cart",
		// 	"prod_id":data.item.id,
		// 	"prod_name":data.item.item_title,
		// 	"prod_url":"/product-details.html#/id:"+data.item.id+"/"+data.item.item_title.split(" ").join("_"),
		// 	"image_url":data.item.image_url,
		// 	"price":__item_price,
		// 	"category":data.item.category.name,
		// 	"option": (data.item.options.length>0 ? data.item.options[0].title : ""),
		// 	"from_page":""
		// })
	},
	addComplexItem: function addComplexItem(data) {
		data.add = true;

		var item_id = data.item_id;

		// first search in cart, if not found search in loaded menu
		var ItemObj = _.find(UP_VARS.CART.items, { 'id': item_id });

		if (!ItemObj) {
			ItemObj = UP.getItemObjFromBIZ_MENU(item_id);
		}

		var item_sig = [];
		for (x in data.options) {
			item_sig.push(data.options[x].id);
		}

		item_sig = item_id + '_' + item_sig.join('_');
		//Try not to mutate the Obj
		//var NewObj = {};
		// try {
		// 	Object.assign(NewObj, ItemObj);
		// 	data.item = NewObj;
		// 	data.item.sig = item_sig;
		// } catch (err) {
		// 	console.log(err);
		// 	data.item = ItemObj;
		// }
		var NewObj = _extends({}, ItemObj);
		data.item = NewObj;
		data.item.options = data.options;
		data.item.total_options_price = data.optionsAddedPrice;
		data.item.sig = item_sig;

		PubSub.publish('cart', data);

		dataLayer.push({
			'event': 'addToCart',
			'ecommerce': {
				'currencyCode': 'INR',
				'add': { // 'add' actionFieldObject measures.
					'products': [{ //  adding a product to a shopping cart.
						'name': data.item.item_title,
						'id': data.item.id,
						'price': data.item.item_price,
						'brand': 'Chai Point',
						'category': data.item.category.name,
						'quantity': 1
					}]
				}
			}
		});

		// dataLayer.push({
		// 	"event":"add_to_cart",
		// 	"prod_id":data.item.id,
		// 	"prod_name":data.item.item_title,
		// 	"prod_url":"/product-details.html#/id:"+data.item.id+"/"+data.item.item_title.split(" ").join("_"),
		// 	"image_url":data.item.image_url,
		// 	"price":data.item.item_price,
		// 	"category":data.item.category.name,
		// 	"option": (data.item.options.length>0 ? data.item.options[0].title : ""),
		// 	"from_page":""
		// })
	},
	quickAdd: function quickAdd(data) {
		var default_option_id = parseInt(data.default_option_id);
		var item_id = data.item_id;

		var ItemObj = _.find(UP_VARS.CART.items, { 'id': item_id });

		if (!ItemObj) {
			ItemObj = UP.getItemObjFromBIZ_MENU(item_id);
		}

		var defaultOption = _.find(ItemObj.option_groups[0].options, { 'id': default_option_id });
		var nestedOptionDefault = _.find(defaultOption.nested_option_groups, { 'is_default': true });

		var options = [];
		var price = defaultOption.price;

		options.push(defaultOption);

		if (nestedOptionDefault) {
			for (var x in nestedOptionDefault.options) {
				options.push(nestedOptionDefault.options[x]);
				price += nestedOptionDefault.options[x].price;
			}
		}

		var complex_item = {
			item_id: item_id,
			options: options,
			optionsAddedPrice: price
		};

		this.addComplexItem(complex_item);
	},
	processCart: function processCart(data) {
		if (data.allDel) {
			for (var x in UP_VARS.CART.items) {
				if (UP_VARS.CART.items[x].sig == data.item.sig) {
					UP_VARS.CART.items.splice(x, 1);
				}
			}
			var quant = 0;
			var gtm_event = 'remove_from_cart';
		} else {
			if (data.add) {
				var gtm_event = 'add_to_cart';
				var items_by_id = _.filter(UP_VARS.CART.items, { 'id': data.item.id });
				var quant_by_id = _.reduce(items_by_id, function (s, entry) {
					return s + entry.quantity;
				}, 0);

				console.log(data.item.current_stock);
				console.log(quant_by_id);
				if (data.item.current_stock != -1 && quant_by_id == data.item.current_stock) {
					alert('Sorry, current stock at the store is limited to: ' + data.item.current_stock);
					return false;
				}

				var quant = 1;

				for (var x in UP_VARS.CART.items) {
					var exists = false;
					if (UP_VARS.CART.items[x].sig == data.item.sig) {

						UP_VARS.CART.items[x].quantity += 1;
						exists = true;
						break;
					}
				}

				if (!exists) {
					data.item.quantity = 1;
					UP_VARS.CART.items.push(data.item);
				}

				var cc_items = _.filter(UP_VARS.CART.items, function (e) {
					return e.sig && e.id == data.item.id;
				});

				quant = _.reduce(cc_items, function (s, entry) {
					return s + entry.quantity;
				}, 0);
			} else {
				var gtm_event = 'remove_from_cart';

				if (data.item.options && data.item.options.length > 0) {
					for (var x in UP_VARS.CART.items) {
						if (UP_VARS.CART.items[x].sig == data.item.sig) {
							if (UP_VARS.CART.items[x].quantity == 1) {
								UP_VARS.CART.items.splice(x, 1);
							} else {
								UP_VARS.CART.items[x].quantity -= 1;
								//quant = cart.items[x].quantity;
							}
							break;
						}
					}
					var cc_items = _.filter(UP_VARS.CART.items, function (e) {
						return e.sig && e.id == data.item.id;
					});

					var quant = _.reduce(cc_items, function (s, entry) {
						return s + entry.quantity;
					}, 0);
				} else {
					var quant = 0;
					for (var x in UP_VARS.CART.items) {
						if (UP_VARS.CART.items[x].id == data.item.id) {
							if (UP_VARS.CART.items[x].quantity == 1) {
								UP_VARS.CART.items.splice(x, 1);
							} else {
								UP_VARS.CART.items[x].quantity -= 1;
								quant = UP_VARS.CART.items[x].quantity;
							}
							break;
						}
					}
				}
			}
		}

		var __item_price = data.item.options.length > 0 ? data.item.options[0].price : data.item.item_price;
		dataLayer.push({
			"event": gtm_event,
			"prod_id": data.item.id,
			"prod_name": data.item.item_title,
			"prod_url": "/product-details.html#/id:" + data.item.id + "/" + data.item.item_title.split(" ").join("_"),
			"image_url": data.item.image_url,
			"price": __item_price,
			"category": data.item.category.name,
			"option": data.item.options.length > 0 ? data.item.options[0].title : "",
			"from_page": ""
		});

		var total_amount = _.reduce(UP_VARS.CART.items, function (s, entry) {
			var base_price = (entry.item_price + (entry.total_options_price ? entry.total_options_price : 0)) * entry.quantity;
			return s + parseFloat(base_price);
		}, 0);

		var total_tax = _.reduce(UP_VARS.CART.items, function (s, entry) {
			var total_vat = (entry.item_price + (entry.total_options_price ? entry.total_options_price : 0)) * entry.quantity * (entry.vat_rate / 100);
			var total_tax = (entry.item_price + (entry.total_options_price ? entry.total_options_price : 0)) * entry.quantity * (entry.service_tax_rate / 100);
			return s + parseFloat(total_vat + total_tax);
		}, 0);

		var item_count = _.reduce(UP_VARS.CART.items, function (s, entry) {
			return s + parseFloat(entry.quantity);
		}, 0);

		UP_VARS.CART.meta.total = parseFloat(total_amount.toFixed(2));
		UP_VARS.CART.meta.total_tax = parseFloat(total_tax.toFixed(2));

		UP_VARS.CART.meta.item_count = item_count;

		UP.localStorage.setItem('cart', UP_VARS.CART);

		//if($('body').data('app') == 'checkout'){
		dataLayer.push({
			"event": "cart",
			"items": UP_VARS.CART.items,
			"cart_total": UP_VARS.CART.meta.total,
			"quantity": UP_VARS.CART.meta.item_count,
			"prod_count": UP_VARS.CART.items.length
		});
		//}
	},
	getPayableAmount: function getPayableAmount() {
		var storeChargeDetail = UP.localStorage.getItem('selected_location').biz_detail.store;
		var delivery_charge = UP_VARS.CART.meta.delivery_charge;
		var packaging_charge = storeChargeDetail.packaging_charge;

		var sub_total = UP_VARS.CART.meta.total;
		var total_tax = UP_VARS.CART.meta.coupon ? UP_VARS.CART.meta.coupon.meta.item_taxes : UP_VARS.CART.meta.total_tax;

		var discount = UP_VARS.CART.meta.coupon ? UP_VARS.CART.meta.coupon.discount : 0;

		var payable = delivery_charge + packaging_charge + sub_total + total_tax - discount;

		return parseFloat(payable.toFixed(2));
	},
	processWalletReload: function processWalletReload(data, callback, errCallback) {
		var amt = data.amt;
		var mode = data.mode;
		if (mode && mode == 'paytm') {
			var payTMwin = window.open("", "_blank", "");
			UP.paymentInit({ pg: 'paytm', amount: parseInt(amt * 100), purpose: 'reload' }, function (d) {
				var paytm_data = d.data;
				var txn_id = d.transaction_id;
				//console.log(txn_id)
				// order_payload.state = "awaiting_payment";
				// order_payload.payment_server_trx_id = txn_id;
				var paytmForm = "\n\t\t\t\t<form name=\"paytm\" id=\"paytm_form\" action=\"" + paytm_data.payment_url + "/oltp-web/processTransaction\" method=\"POST\">\n\t\t\t\t\t<input type=\"hidden\" name=\"WEBSITE\" value=\"" + paytm_data.WEBSITE + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"ORDER_ID\" value=\"" + paytm_data.ORDER_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"MID\" value=\"" + paytm_data.MID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CHANNEL_ID\" value=\"" + paytm_data.CHANNEL_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"INDUSTRY_TYPE_ID\" value=\"" + paytm_data.INDUSTRY_TYPE_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CUST_ID\" value=\"" + paytm_data.CUST_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CALLBACK_URL\" value=\"" + paytm_data.CALLBACK_URL + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CHECKSUMHASH\" value=\"" + paytm_data.CHECKSUMHASH + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"TXN_AMOUNT\" value=\"" + paytm_data.TXN_AMOUNT + "\" />\n\t\t\t\t</form>";
				//var payTMwin = window.open("","_blank","");


				var getPAYTMStatus = window.setInterval(function () {
					var paytm_capture = UP.localStorage.getItem('payment_gateway');

					if (paytm_capture && paytm_capture.success) {
						var resp = _extends({}, paytm_capture.data);
						resp.order_id = paytm_capture.data.pid;
						UP.localStorage.removeItem('payment_gateway');
						callback(resp);
						window.clearInterval(getPAYTMStatus);
					} else if (paytm_capture && !paytm_capture.success) {
						var err = 'Error, Try Again!';
						UP.localStorage.removeItem('payment_gateway');
						errCallback(err);
						window.clearInterval(getPAYTMStatus);
					} else if (!UP.localStorage.getItem('payment_gateway')) {
						if (payTMwin.closed !== false) {
							// !== is required for compatibility with Opera
							console.log('closing');
							window.clearInterval(getPAYTMStatus);
							errCallback("Payment Cancelled");
						}
					}
				}, 200);

				$(payTMwin.document.body).html("<div style=\"text-align:center;\"><img src=\"http://" + window.location.host + "/images/ring.gif\" height=\"120\" width=\"120\" style=\"display:inline-block; margin-top:100px;\"/></div>");
				$(payTMwin.document.body).append(paytmForm);
				$(payTMwin.document.body).find('#paytm_form').submit();
			});
		} else {
			UP.paymentInit({ amount: parseInt(amt * 100), purpose: 'reload' }, function (d) {
				if (d.success) {
					var txn_id = d.transaction_id;
					UP_CONFIG.RAZOR_CONFIG.description = 'Reloading wallet';
					UP_CONFIG.RAZOR_CONFIG.notes = {
						channel: 'web',
						action: 'wallet_reload',
						srvr_trx_id: txn_id
					};

					UP_CONFIG.RAZOR_CONFIG.prefill = {
						contact: UP.localStorage.getItem('logged_user').phone_num,
						email: UP.localStorage.getItem('logged_user').email
					};

					UP_CONFIG.RAZOR_CONFIG.handler = function (response) {
						var reload_complete_url = 'payments/callback/' + txn_id + '/?gateway_txn_id=' + response.razorpay_payment_id;
						UP.paymentAjax('GET', reload_complete_url, {}, function (d) {

							if (d.status == 3) {
								callback(d);
							} else {
								errCallback("Unknown Error, try again!");
							}
						}, function () {
							errCallback("Transaction Failed");
						});
					};

					UP_CONFIG.RAZOR_CONFIG.modal = {
						ondismiss: function ondismiss() {
							errCallback("Payment Cancelled");
						}
					};

					UP_CONFIG.RAZOR_CONFIG.amount = parseInt(amt * 100); // in paisa;
					var rzp1 = new Razorpay(UP_CONFIG.RAZOR_CONFIG);
					rzp1.open();
				} else {
					errCallback("Unknown Error, try again!");
				}
			}, function (err) {
				if (err.responseJSON) {
					var err = err.responseJSON.message;
				} else {
					var err = 'Error, Try Again!';
				}
				errCallback(err);
			});
		}
	},
	preProcessOrder: function preProcessOrder(data, callback, errCallback) {
		var url = "v1/order/?format=json&pre_proc=1&biz_id=" + UP_CONFIG.BIZ_ID;
		var order_payload = data;
		//if(UP.localStorage.getItem('guest')){
		order_payload.phone = UP.localStorage.getItem('guest').customer_phone;
		UP.bizAjax('POST', url, JSON.stringify(order_payload), function (d) {
			callback(d);
		}, function (err) {
			errCallback(err);
		});
		//}
		// else{
		// 	if(UP.loginStatus()){
		// 		UP.userAjax('POST', url ,JSON.stringify(order_payload), function(d){
		// 			callback(d);
		// 		}, function(err){
		// 			errCallback(err);
		// 		})
		// 	}else{
		// 		errCallback();
		// 	}
		// }
	},
	processOrder: function processOrder(data, callback, errCallback) {
		var paymentMode = data.payment_option;
		var order_payload = data;
		var store = UP.localStorage.getItem('selected_location').biz_detail.store;

		var min_order_total = UP.localStorage.getItem('selected_location').biz_detail.biz.min_order_total;
		if (UP.getPayableAmount() < min_order_total) {
			errCallback("Min order value is : " + store.min_order_total);
			return false;
		}

		dataLayer.push({
			"event": "payment_proceed",
			"method": paymentMode,
			"delivery_type": UP_VARS.__DELIVERY_NOW_LATER ? UP_VARS.__DELIVERY_NOW_LATER : "Now",
			"delivery_time": order_payload.delivery_datetime,
			"coupon": order_payload.coupon,
			"subtotal": order_payload.order_subtotal,
			"taxes": order_payload.total_tax,
			"delivery_fee": UP_VARS.IS_PICKUP ? 0 : UP_VARS.CART.meta.delivery_charge,
			"discount": order_payload.discount_applied,
			"total": order_payload.order_total
		});

		if (paymentMode == "prepaid") {
			var wallet = UP.localStorage.getItem('user_info').objects[0].balance;
			if (wallet < UP.getPayableAmount()) {
				errCallback("You don't have enough balance in your wallet");
				return false;
			}

			UP.placeOrder(JSON.stringify(order_payload), function (d) {
				dataLayer.push({
					"event": "wallet",
					"amount": order_payload.order_total,
					"balance": wallet - UP.getPayableAmount(),
					"device": mobilecheck() ? "mobile_web" : "web",
					"transaction_type": "remove"
				});

				callback(d);
			}, function (err) {
				if (err.responseJSON) {
					var err = err.responseJSON.message;
				} else {
					var err = 'Error, Try Again!';
				}
				console.log(err);
				errCallback(err);
			});
		} else if (paymentMode == "cash") {
			UP.placeOrder(JSON.stringify(order_payload), function (d) {
				callback(d);
			}, function (err) {
				if (err.responseJSON) {
					var err = err.responseJSON.message;
				} else {
					var err = 'Error, Try Again!';
				}
				errCallback(err);
			});
		} else if (paymentMode == 'paytm') {
			//console.log(payTMwin)
			UP.paymentInit({ pg: 'paytm', amount: parseInt(UP.getPayableAmount() * 100), purpose: 'ordering' }, function (d) {
				var paytm_data = d.data;
				var txn_id = d.transaction_id;
				console.log(txn_id);
				order_payload.state = "awaiting_payment";
				order_payload.payment_server_trx_id = txn_id;
				var paytmForm = "\n\t\t\t\t<form name=\"paytm\" id=\"paytm_form\" action=\"" + paytm_data.payment_url + "/oltp-web/processTransaction\" method=\"POST\">\n\t\t\t\t\t<input type=\"hidden\" name=\"WEBSITE\" value=\"" + paytm_data.WEBSITE + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"ORDER_ID\" value=\"" + paytm_data.ORDER_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"MID\" value=\"" + paytm_data.MID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CHANNEL_ID\" value=\"" + paytm_data.CHANNEL_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"INDUSTRY_TYPE_ID\" value=\"" + paytm_data.INDUSTRY_TYPE_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CUST_ID\" value=\"" + paytm_data.CUST_ID + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CALLBACK_URL\" value=\"" + paytm_data.CALLBACK_URL + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"CHECKSUMHASH\" value=\"" + paytm_data.CHECKSUMHASH + "\" />\n\t\t\t\t\t<input type=\"hidden\" name=\"TXN_AMOUNT\" value=\"" + paytm_data.TXN_AMOUNT + "\" />\n\t\t\t\t</form>";

				var getPAYTMStatus = window.setInterval(function () {
					var paytm_capture = UP.localStorage.getItem('payment_gateway');

					if (paytm_capture && paytm_capture.success) {
						var resp = _extends({}, paytm_capture.data);
						resp.order_id = paytm_capture.data.pid;
						UP.localStorage.removeItem('payment_gateway');
						callback(resp);
						window.clearInterval(getPAYTMStatus);
					} else if (paytm_capture && !paytm_capture.success) {
						var err = 'Error, Try Again!';
						UP.localStorage.removeItem('payment_gateway');
						errCallback(err);
						window.clearInterval(getPAYTMStatus);
					} else if (!UP.localStorage.getItem('payment_gateway')) {
						if (payTMwin.closed !== false) {
							// !== is required for compatibility with Opera
							console.log('closing');
							window.clearInterval(getPAYTMStatus);
							errCallback("Payment Cancelled");
						}
					}
				}, 200);

				UP.placeOrder(JSON.stringify(order_payload), function (d) {
					$(payTMwin.document.body).append(paytmForm);
					$(payTMwin.document.body).find('#paytm_form').submit();
				}, function (err) {
					if (err.responseJSON && err.responseJSON.message) {
						var err = err.responseJSON.message;
					} else {
						var err = 'Error, Try Again!';
					}
					UP.localStorage.setItem('payment_gateway', { success: false, data: null });
					window.clearInterval(getPAYTMStatus);
					if (window.payTMwin) {
						payTMwin.opener.focus();
						payTMwin.close();
					}

					errCallback(err);
				});
			});
		} else if (paymentMode == "payment_gateway") {
			UP.paymentInit({ amount: parseInt(UP.getPayableAmount() * 100), purpose: 'ordering' }, function (d) {
				if (d.success) {
					var txn_id = d.transaction_id;

					order_payload.state = "awaiting_payment";
					order_payload.payment_server_trx_id = txn_id;

					UP_CONFIG.RAZOR_CONFIG.description = 'Order payment';
					UP_CONFIG.RAZOR_CONFIG.notes = {
						channel: 'web',
						action: 'ordering',
						store: store.name
					};
					UP_CONFIG.RAZOR_CONFIG.prefill = {
						contact: UP.localStorage.getItem('logged_user').phone_num,
						email: UP.localStorage.getItem('logged_user').email
					};
					UP_CONFIG.RAZOR_CONFIG.notes.srvr_trx_id = txn_id;

					UP.placeOrder(JSON.stringify(order_payload), function (d) {
						order_payload.id = d.order_id;
						UP_CONFIG.RAZOR_CONFIG.notes.oid = d.order_id;

						UP_CONFIG.RAZOR_CONFIG.handler = function (response) {
							order_payload.state = null;
							var order_complete_url = 'payments/callback/' + txn_id + '/?gateway_txn_id=' + response.razorpay_payment_id;
							UP.paymentAjax('GET', order_complete_url, {}, function (d) {
								if (d.status == 3) {
									UP.placeOrder(JSON.stringify(order_payload), function (e) {
										callback(e);
									}, function (err) {
										if (err.responseJSON) {
											var err = err.responseJSON.message;
										} else {
											var err = 'Error, Try Again!';
										}
										errCallback(err);
									});
								} else {
									//e.c_msg ="Payment failed!";
									errCallback('Payment failed!');
								}
							}, function (err) {
								if (err.responseJSON) {
									var err = err.responseJSON.message;
								} else {
									var err = 'Error, Try Again!';
								}
								errCallback(err);
							});
						};

						UP_CONFIG.RAZOR_CONFIG.modal = {
							ondismiss: function ondismiss() {
								errCallback("Payment Cancelled");
							}
						};

						UP_CONFIG.RAZOR_CONFIG.amount = parseInt(UP.getPayableAmount() * 100); // in paisa;
						var rzp1 = new Razorpay(UP_CONFIG.RAZOR_CONFIG);
						rzp1.open();
					}, function (err) {
						if (err.responseJSON) {
							var err = err.responseJSON.message;
						} else {
							var err = 'Error, Try Again!';
						}
						errCallback(err);
					});
				} else {
					errCallback("Unknown Error, Try Again!");
				}
			}, function (err) {
				console.log(err);
				if (err.responseJSON) {
					var err = err.responseJSON.message;
				} else {
					var err = 'Error, Try Again!';
				}
				errCallback(err);
			});
		}
	},
	processCoupon: function processCoupon(data, callback, errCallback) {
		this.validateCoupon_v2(data, function (d) {
			if (d.discount.success) {
				UP_VARS.CART.meta.coupon = {
					code: $.trim(data.code),
					discount: d.discount.value,
					meta: d
				};

				UP.localStorage.setItem('cart', UP_VARS.CART);
				callback({ msg: d.discount.msg });
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': 'ordering',
					'eventLabel': 'coupon-applied',
					'eventValue': UP_VARS.CART.meta.coupon.code.toUpperCase()
				});
			} else {
				delete UP_VARS.CART.meta.coupon;
				UP.localStorage.setItem('cart', UP_VARS.CART);
				errCallback({ msg: d.discount.msg });
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': 'ordering',
					'eventLabel': 'coupon-failed',
					'eventValue': $.trim($('#promo').val()).toUpperCase()
				});
			}
		}, function (err) {
			console.log(err);
			if (err.responseJSON && err.responseJSON.message) {
				err = err.responseJSON.message;
			} else {
				err = 'There was an error validating the coupon. Please try later.';
			}
			delete UP_VARS.CART.meta.coupon;
			UP.localStorage.setItem('cart', UP_VARS.CART);
			errCallback({ msg: err });
		});
	},
	getFBData: function getFBData(callback, errCallback) {
		try {
			FB.login(function (response) {
				console.log(response);
				if (response.authResponse) {
					FB.api('/me?fields=name,email', function (apiresponse) {
						apiresponse.access_token = response.authResponse.accessToken;
						callback(apiresponse);
					});
				} else {
					var err = 'User cancelled login or did not fully authorize.';
					errCallback(err);
				}
			}, { scope: 'email', return_scopes: true, auth_type: 'rerequest' });
		} catch (err) {
			console.log(err);
			var err = 'Something went wrong, try again!';
			errCallback(err);
		}
	},
	getGoogleData: function getGoogleData(callback, errCallback) {
		auth2.signIn().then(function (googleUser) {
			var apiresponse = {
				access_token: googleUser.getAuthResponse().id_token,
				email: googleUser.getBasicProfile().getEmail(),
				name: googleUser.getBasicProfile().getName()
			};
			callback(apiresponse);
		}, function (err) {
			errCallback(err);
		});
	},
	socialLogin: {
		init: function init(data, callback, errCallback) {
			UP_VARS.SOCIAL_LOGIN.data = data;
			var url = 'v2/social_auth/me/?provider=' + data.provider + '&access_token=' + data.token + '&email=' + data.email;
			UP.bizAjax('GET', url, {}, function (d) {
				console.log(d);
				callback(d);
			}, function (err) {
				console.log(err);
				errCallback(err);
			});
		},
		checkPhone: function checkPhone(data, callback, errCallback) {
			var url = "v2/social_auth/me/?provider=" + data.provider + "&access_token=" + data.token + "&email=" + data.email + "&action=check_phone&phone=" + data.phone;
			UP.bizAjax('GET', url, {}, function (d) {
				callback(d);
			}, function (err) {
				errCallback(err);
			});
		},
		loginUser: function loginUser(data, callback, errCallback) {
			UP.setSocialAuth(data);
			UP.setLoginInfo(data);
			callback();
		}
	},
	setLoginInfo: function setLoginInfo(data) {
		var logged_user = data;
		logged_user.auth = UP_CONFIG.AUTH_USER;
		logged_user.phone_num = data.phone;
		UP.localStorage.removeItem('guest');
		UP_VARS.GUEST = false;
		UP.localStorage.setItem('logged_user', logged_user);
	},

	locateMe: function locateMe(callback, errCallback) {
		UPDOM.spinner(true);
		console.log('spinner started by locateMe');
		var geocoder = new google.maps.Geocoder();
		var showPosition = function showPosition(position) {
			geocoder.geocode({
				"location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
			}, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					var formatted_address = [];
					for (var x in results[0].address_components) {
						//street number and postal code is not necessary in address detail.
						if (results[0].address_components[x].types[0] != 'street_number' && results[0].address_components[x].types[0] != 'postal_code') {
							formatted_address.push(results[0].address_components[x].short_name);
						}
					}

					formatted_address = formatted_address.join(', ');

					var locationDetail = {
						name: formatted_address,
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};

					UPDOM.spinner(false);
					console.log('spinner stopped by locateme');
					// do set location or populate address
					if (callback) {
						callback(locationDetail);
					}
				} else {
					UPDOM.spinner(false);
					console.log('spinner stopped by locateme');
					var err = 'Unable to retrieve your location.';
					if (errCallback) {
						errCallback(err);
					}
					return false;
				}
			});
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, function () {
				UPDOM.spinner(false);
				console.log('spinner stopped by locateme error');
				//UPDOM.customPopup({ style: { 'color': 'red', 'font-weight': 'bold', 'font-size': '13px' }, HTML: "Your location is not accessible, permission denied!" });
				//UPDOM.customPopup_v2({type:"error", HTML: "Your location is not accessible, permission denied." });
				alert('Your location is not accessible, permission denied.');
			});
		} else {
			UPDOM.spinner(false);
			console.log('spinner stopped by locateme error');
			var err = 'Geolocation is not supported by this browser.';
			if (errCallback) {
				errCallback(err);
			}
			//UPDOM.customPopup({ style: { 'color': 'red', 'font-weight': 'bold', 'font-size': '13px' }, HTML: err });
			//UPDOM.customPopup_v2({type:"error", HTML: err });
			alert(err);
			return false;
		}
	}
};

var UP_VARS = {
	CART: {},
	BIZ_MENU: [],
	BIZ_CAT: [],
	IS_PICKUP: false,
	GUEST: false,
	SLOT: true,
	SOCIAL_LOGIN: {
		state: false,
		data: ''
	}
};

var UP_MISC = {
	selectedAddress: function selectedAddress() {
		if (UP.localStorage.getItem('selected_location')) {
			var current_time = this.getTime();
			var location_info = UP.localStorage.getItem('selected_location');
			var last_fetched = location_info.fetchedTime;
			if ((current_time - last_fetched) / (1000 * 60) > UP_CONFIG.CACHED_TIME) {
				UP.localStorage.removeItem('selected_location');
				return false;
			} else {
				return UP.localStorage.getItem('selected_location');
			}
		} else {
			UP.localStorage.removeItem('selected_location');
			return false;
		}
	},
	locationRequired: function locationRequired() {
		if (!this.selectedAddress()) {
			UPDOM.locationPrompt();
			return false;
		} else {
			return true;
		}
	},
	getTime: function getTime() {
		return new Date().getTime();
	},
	urlToJson: function urlToJson(data) {
		var pairsArr = data.split('?')[1].split('&');
		var json = {};
		for (var x in pairsArr) {
			var key = pairsArr[x].split("=")[0];
			var val = pairsArr[x].split("=")[1];
			json[key] = val;
		}
		return json;
	}
};

var UPDOM = {
	scrolltoTop: function scrolltoTop() {
		$("html, body").animate({
			scrollTop: 0
		}, 0);
	},
	spinner: function spinner(show) {
		if (show) {
			$('.spinner').show();
		} else {
			$('.spinner').hide();
		}
	},
	loginPrompt: function loginPrompt(d) {
		if (d === false) {
			$('#' + LOGIN_MODAL).hide();
			$('body').removeClass('up-modal-added');
		} else {
			$('#' + LOGIN_MODAL).show();
			$('body').addClass('up-modal-added');
		}
	},
	locationPrompt: function locationPrompt() {
		$('#up_location_prompt').show();
	},
	logout: function logout() {
		var _user = UP.localStorage.getItem('logged_user');

		UP.localStorage.removeItem('logged_user');
		UP.localStorage.removeItem('user_info');
		UP.localStorage.removeItem('biz_category');
		UP.localStorage.removeItem('cart');

		dataLayer.push({
			"event": "logged_out",
			"mobile": _user.phone,
			"email": _user.email,
			"device": mobilecheck() ? "mobile_web" : "web",
			"eventCallback": function eventCallback() {
				location.reload(true);
			}
		});
	},
	routeTo: function routeTo(target) {
		UP.myRouter[target].routeTo();
	},
	pushMessage: function pushMessage(data) {
		var className = '';
		if (data.type) {
			switch (data.type) {
				case 'error':
					className = 'UP-ERROR-TEXT';
					break;
				case 'success':
					className = 'UP-SUCCESS-TEXT';
					break;
				default:
					className = '';
			}
			var msg = '<span class="messaging-body ' + className + '">' + data.msg + '</span>';
		}
		data.el.hide().html(msg).fadeIn();
	},
	guestCheckout: function guestCheckout() {
		var guest_el = $('#login').find('#guest_checkout');
		if (guest_el.data('status') == 1) {
			$('.modal-sections').hide();
			$('#login').find('#guest_checkout').show();
			guest_el.data('status', 2);
		} else {
			var phone = $('#login').find('#guest_checkout .phone').val();
			if (UP.phonenoValid(phone)) {
				var phone = UP_CONFIG.COUNTRY_CODE + phone;
				UPDOM.spinner(true);
				var data = {
					"customer_name": "",
					"customer_phone": phone,
					"password": ""
				};
				UP.enableGuest(data, function () {
					closeLoginPopup();
					dataLayer.push({
						'event': 'GAEvent',
						'eventCategory': 'user',
						'eventLabel': 'resend-otp',
						'eventCallback': function eventCallback() {
							if (UP.myRouter.redirect) {
								UP.myRouter[UP.myRouter.redirect].initFunc();
							}
						}
					});

					UPDOM.spinner(false);
				});
			} else {
				UPDOM.pushMessage({ el: $('#guest_checkout').find('.messaging'), msg: 'Enter Valid Mobile No', type: 'error' });
				return false;
			}
		}
	},
	customPopup: function customPopup(data) {
		if (data.style) {
			$('#up_custom_popup').find('.popup-content').css(data.style);
		}
		if (data.type && data.type == 'error') {
			var popup_container = '<div class="UP-ERROR-TEXT">' + data.HTML + '</div>';
		} else {
			var popup_container = '<div class="">' + data.HTML + '</div>';
		}
		$('#up_custom_popup').find('.popup-content').html(popup_container);
		$('#up_custom_popup').fadeIn();
	},
	closePopup: function closePopup(el) {
		el.closest('.up-overlay').hide();
		$('body').removeClass('up-modal-added');
	},
	renderCategory: function renderCategory(callback, errCallback) {
		if (UP.localStorage.getItem('biz_category')) {
			var cat_detail = UP.localStorage.getItem('biz_category');
			var last_fetched = cat_detail.last_fetched;
			var c_time = new Date().getTime();
			if ((c_time - last_fetched) / (1000 * 60) > 5) {
				var fetchFromServer = true;
			}
		} else {
			var fetchFromServer = true;
		}

		if (fetchFromServer) {
			UPDOM.spinner(true);
			UP.getCategory(function (d) {
				callback(d);
				var c_time = new Date().getTime();
				var biz_category = {
					last_fetched: c_time,
					data: d
				};
				UP.localStorage.setItem('biz_category', biz_category);
			}, function (err) {
				UPDOM.spinner(false);
				errCallback(err);
			});
		} else {
			var d = UP.localStorage.getItem('biz_category').data;
			callback(d);
		}
	},
	renderItems: function renderItems(data, callback, errCallback) {
		// in Manipulate the data and DOM in callback function
		// pass the styling classes according to the configured layout

		if (UP_CONFIG.MENU_LAYOUT.col > 1) {
			//its grid Layout
			var layout_class = 'up-grid up-col-' + UP_CONFIG.MENU_LAYOUT.col;
		} else {
			var layout_class = 'up-list ' + (UP_CONFIG.MENU_LAYOUT.image ? '' : 'up-item-no-image');
		}

		var item_payload = {
			cat_id: data.cat_id
		};

		if (UP_MISC.selectedAddress()) {
			item_payload.location_id = UP_MISC.selectedAddress().biz_detail.store.biz_location_id;
		}
		var itemsArr = _.filter(UP_VARS.BIZ_MENU, { 'cat_id': data.cat_id }); // fetch form localStorage is available (not older than CACHED_TIME)

		if (itemsArr.length > 0) {
			callback({ class: layout_class, items: itemsArr[0].d });
			UPDOM.spinner(false);
		} else {
			UPDOM.spinner(true);
			UP.getCategoryItems(item_payload, function (d) {
				UP_VARS.BIZ_MENU.push({ cat_id: data.cat_id, d: d }); // for caching purpose only
				callback({ class: layout_class, items: d });
				UPDOM.spinner(false);
			}, function (err) {
				errCallback(err);
				UPDOM.spinner(false);
			});
		}
	},
	addGooglePlaceApi: function addGooglePlaceApi(data, callback, errCallback) {
		var el = data.el;
		var autocomplete = new google.maps.places.Autocomplete(el[0]);
		google.maps.event.addListener(autocomplete, 'place_changed', function () {
			var place = autocomplete.getPlace();
			if (place.geometry && place.geometry.location.lat && place.geometry.location.lng) {
				callback(place);
			} else {
				errCallback();
			}
		}, function (err) {
			errCallback();
			console.log(err);
		});
	},
	setLocation: function setLocation(place, callback, errCallback) {
		var locationDetail = {
			name: place.formatted_address,
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng()
		};
		UPDOM.spinner(true);
		UP.fetchStores({ latlng: { lat: locationDetail.lat, lng: locationDetail.lng } }, function (d) {

			if (d.store) {
				if (d.store.temporarily_closed) {
					dataLayer.push({
						'event': 'GAEvent',
						'eventCategory': 'ordering',
						'eventLabel': 'nearest-store-closed-temp',
						'eventValue': locationDetail.name
					});
					UPDOM.spinner(false);
					//UPDOM.customPopup({ style: { 'color': 'red', 'font-weight': 'bold', 'font-size': '13px' }, HTML: d.biz.msg_store_closed_temporary });
					alert(d.biz.msg_store_closed_temporary);
					if (errCallback) {
						errCallback();
					}
					return false;
				}

				if (d.store.closing_day) {
					dataLayer.push({
						'event': 'GAEvent',
						'eventCategory': 'ordering',
						'eventLabel': 'nearest-store-closed-today',
						'eventValue': locationDetail.name
					});
					UPDOM.spinner(false);
					//UPDOM.customPopup({ style: { 'color': 'red', 'font-weight': 'bold', 'font-size': '13px' }, HTML: d.biz.msg_nearest_store_closed });
					alert(d.biz.msg_nearest_store_closed);
					if (errCallback) {
						errCallback();
					}
					return false;
				}

				locationDetail.location_id = d.store.biz_location_id;
				locationDetail.biz_detail = d;
				locationDetail.fetchedTime = new Date().getTime();
				UP.localStorage.setItem('selected_location', locationDetail);
				UP_VARS.BIZ_MENU = [];
				UPDOM.resetCart();

				var __store = UP.localStorage.getItem('selected_location').biz_detail.store;

				dataLayer.push({
					"event": "location_search",
					"city": __store.city,
					"location": __store.name,
					"store_id": __store.biz_location_id
				});
				// dataLayer.push({
				// 	'event': 'GAEvent',
				// 	'eventCategory': 'ordering',
				// 	'eventLabel': 'nearest-store-found',
				// 	'eventValue': locationDetail.name,
				// 	'eventCallback': function() {
				//
				// 	}
				// });
				var page = $('body').data('app');
				if (page == 'landing-page') {
					//window.location = 'order'
					var crossDomainFrame = document.getElementById("cross-domain-frame").contentWindow;
					var data = {
						location_update: true,
						locationObj: locationDetail
					};
					crossDomainFrame.postMessage(JSON.stringify(data), "*");
				} else {
					window.location = 'https://order.chaipoint.com';
				}

				// if not redirected to ordering page even after 5 sec..
				// force to redirect
				setTimeout(function () {
					console.log('Force redirection');
					window.location = 'https://order.chaipoint.com';
				}, 5000);
			} else {
				UPDOM.spinner(false);
				//UPDOM.customPopup({ style: { 'color': 'red', 'font-weight': 'bold', 'font-size': '13px' }, HTML: 'No Store Found, Try Another Location.' });
				alert('No Store Found!');
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': 'ordering',
					'eventLabel': 'no-stores-nearby',
					'eventValue': locationDetail.name
				});
				if (errCallback) {
					errCallback();
				}
				return false;
			}
		});
	},
	populateLocationString: function populateLocationString(flag) {
		if (flag === false) {
			for (var x in GOOGLE_LOCATION_INPUT) {
				$(GOOGLE_LOCATION_INPUT[x]).val('');
			}
		} else {
			for (var x in GOOGLE_LOCATION_INPUT) {
				$(GOOGLE_LOCATION_INPUT[x]).val(UP_MISC.selectedAddress().name);
			}
		}
	},
	resetCart: function resetCart(d) {
		UP.destroyCart(function () {
			$('.up-cart-counter').html(UP_VARS.CART.meta.item_count);
		});
	},
	getNestedOptions: function getNestedOptions(data) {
		var id = parseInt(data.option_id);
		var item_id = parseInt(data.item_id);

		var ItemObj = _.find(UP_VARS.CART.items, { 'id': item_id });

		if (ItemObj) {
			var item = ItemObj;
		} else {
			if (UP.getItemObjFromBIZ_MENU(item_id)) {
				var item = UP.getItemObjFromBIZ_MENU(item_id);
			}
		}

		for (var x in item.option_groups) {
			var nestedItemObj = _.find(item.option_groups[x].options, { 'id': id });
			if (nestedItemObj) {
				break;
			}
		}

		var nestedOption = nestedItemObj.nested_option_groups;

		var nestedOptionCont = '';
		for (var z in nestedOption) {
			var nestedOptionItem = '';
			for (var a in nestedOption[z].options) {
				nestedOptionItem += "<div data-default=\"" + (nestedOption[z].is_default ? true : false) + "\" class=\"nested-item-blocks " + (nestedOption[z].is_default ? 'default' : '') + "\" data-opt-id=\"" + nestedOption[z].options[a].id + "\">\n\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t" + nestedOption[z].options[a].title + (nestedOption[z].options[a].price != 0 ? ' - ' + UP_CONFIG.CURR.code + nestedOption[z].options[a].price : '') + "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"float-right\"><i class=\"fa fa-check-square\"></i></div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</div>";
			}
			nestedOptionCont += "<div class=\"nested-options-list-container-row\">\n\t\t\t\t<div class=\"nested-item-header\">" + nestedOption[z].title + "<i class=\"fa fa-plus float-right\"></i></div>\n\t\t\t\t<div class=\"toggle-options\" data-max=\"" + nestedOption[z].max_selectable + "\" data-min=\"" + nestedOption[z].max_selectable + "\">\n\t\t\t\t\t" + nestedOptionItem + "\n\t\t\t\t</div>\n\t\t\t</div>";
		}

		return nestedOptionCont;
	},
	shakeEl: function shakeEl(el) {
		el.addClass("shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
			$(this).removeClass("shake");
		});
	},
	timePicker: {
		buffer: 10 * 60 * 1000,
		todayInMilli: function todayInMilli(time_string) {
			var today = new Date();
			var selectedTimeToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), time_string[0], time_string[1], time_string[2]);
			return selectedTimeToday.getTime();
		},
		getDeliveryTime: function getDeliveryTime() {

			var mer = $('#up_timepicker_ampm').val();
			var hour_mer = $('#up_timepicker_hours').val();

			if (mer == 'PM') {
				var hours = parseInt($('#up_timepicker_hours').val()) + 12;
			} else {
				var hours = $('#up_timepicker_hours').val();
			}

			//var hours = $('#up_timepicker_hours').val();
			var min = $('#up_timepicker_min').val();

			var sec = 0;
			var timeinmili = this.todayInMilli([hours, min, 0]);
			return timeinmili;
		},
		isValid: function isValid() {
			var offset = UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time;
			var selectedTime = this.getDeliveryTime();
			if (selectedTime < this.getRange().start) {
				var buffer = 0;
			} else {
				var buffer = this.buffer; // contact mukesh@urababpiper.com before change
			}

			if (selectedTime + offset <= this.getRange().close && selectedTime + buffer >= this.getRange().start) {
				return true;
			} else {
				return false;
			}
		},
		isValidCTime: function isValidCTime() {
			var offset = UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time;
			var buffer = this.buffer; // contact mukesh@urababpiper.com before change
			var selectedTime = UP_MISC.getTime();

			//debugger
			if (selectedTime + offset <= this.getRange().close && selectedTime + buffer + offset >= this.getRange().start) {
				return true;
			} else {
				return false;
			}
		},

		getRange: function getRange() {

			var militostring = function militostring(milli) {
				var d = new Date(milli);
				var h = d.getHours();
				var m = d.getMinutes();
				if (h > 12) {
					return h - 12 + ':' + (m < 10 ? "0" + m : m) + ' pm';
				} else {
					return h + ':' + (m < 10 ? "0" + m : m) + 'am';
				}
			};
			var offset = UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time;
			var storeTime = UP.localStorage.getItem('selected_location').biz_detail.store;

			if (!offset || offset < 15 * 60 * 100) {
				offset = 15 * 60 * 1000; // contact mukesh@urbanpiper.com before changing this
			}
			var open = storeTime.opening_time;
			var close = storeTime.closing_time;

			var open_time_arr = open.split(':');
			var close_time_arr = close.split(':');

			var openHourMilli = this.todayInMilli(open_time_arr);
			var closeHourMilli = this.todayInMilli(close_time_arr);

			var currentTimeMilli = new Date().getTime();

			if (currentTimeMilli + offset > openHourMilli) {
				var startTimeMilli = currentTimeMilli + offset;
			} else {
				var startTimeMilli = openHourMilli;
			}
			return { start: startTimeMilli, startString: militostring(startTimeMilli), close: closeHourMilli, closeString: militostring(closeHourMilli) };
		},
		getMarkup: function getMarkup() {
			var offset = UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time;
			var start = this.getRange().start;
			var end = this.getRange().close;

			var minSelectableHour = new Date(start).getHours();

			var minSelectableHour = new Date(start).getHours();

			var initialMin = new Date(start).getMinutes();
			var maxSelectableHour = new Date(end).getHours();

			if (minSelectableHour > 12) {
				var minSelectableHour_mer = minSelectableHour - 12;
				var mer = 'PM';
			} else {
				var minSelectableHour_mer = minSelectableHour;
				var mer = 'AM';
			}

			var cTime = UP_MISC.getTime();
			if (cTime + offset >= this.getRange().close) {
				var disabled = true;
			} else {
				var disabled = false;
			}

			if (disabled) {
				var markup = 'Store closed for today';
			} else {
				var markup = "<div class=\"up-timepicker\" data-milli-max=\"" + end + "\" data-milli-min=\"" + start + "\">\n\t\t\t\t\t<div class=\"text text-later-delivery\">Delivery Time " + this.getRange().startString + " to " + this.getRange().closeString + "</div>\n\t\t\t\t\t<span class=\"time-wrapper hrs-item up-hourpicker\" data-hour-max=\"" + maxSelectableHour + "\"  data-hour-min=\"" + minSelectableHour + "\">\n\t\t\t\t\t\t<input type=\"text\"  id=\"up_timepicker_hours\" value=\"" + minSelectableHour_mer + "\" class=\"time\" readonly=\"readonly\">\n\t\t\t\t\t\t<span class=\"plus up-plus\"></span>\n\t\t\t\t\t\t<span class=\"minus up-minus\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"time-sep\">:</span>\n\t\t\t\t\t<span class=\"time-wrapper min-item up-minpicker\">\n\t\t\t\t\t\t<input type=\"text\" class=\"time\" value=\"" + (initialMin < 10 ? '0' + initialMin : initialMin) + "\" id=\"up_timepicker_min\" readonly=\"readonly\">\n\t\t\t\t\t\t<span class=\"plus up-plus\"></span>\n\t\t\t\t\t\t<span class=\"minus up-minus\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"time-wrapper min-item up-ampmpicker\">\n\t\t\t\t\t\t<input type=\"text\" class=\"time\" value=\"" + mer + "\" id=\"up_timepicker_ampm\" readonly=\"readonly\">\n\t\t\t\t\t\t<span class=\"plus up-mer-nav up-plus\"></span>\n\t\t\t\t\t\t<span class=\"minus up-mer-nav up-minus\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>";
			}
			return markup;
		}
	},
	renderAddress: function renderAddress(data) {
		var address = data.address;
		var el = data.el;

		UP_VARS.CART.meta.address_id = address.id;

		var addressMarkup = "<span class=\"edit-address\" id=\"edit_address\" data-address-id=\"" + address.id + "\">\n\t\t\t<i class=\"fa fa-pencil\"></i>\n\t\t</span>\n\t\t<span class=\"delete-address\" id=\"delete_address\" data-address-id=\"" + address.id + "\">\n\t\t\t<i class=\"fa fa-trash-o\"></i>\n\t\t</span>\n\t\t<div class=\"current-address-detail\">\n\t\t\t<div>" + address.address_1 + "</div>\n\t\t\t<div>" + address.address_2 + "</div>\n\t\t\t<div>" + address.sub_locality + "</div>\n\t\t\t<div>" + address.city + "</div>\n\t\t\t<div>" + address.pin + "</div>\n\t\t</div>";

		el.html(addressMarkup).show();
	},
	renderDeliveryDateTime: function renderDeliveryDateTime(data) {
		var d = data.date;
		if (UP.getSlots(d)) {
			var slots = UP.getSlots(d);
			var markup = "";
			for (var x in slots) {
				markup += "<option value=\"" + slots[x].start_time.value + "-" + slots[x].end_time.value + "\">\n\t\t\t\t\t" + slots[x].start_time.string + " - " + slots[x].end_time.string + "\n\t\t\t\t</option>";
			}
			markup = "<select id=\"delivery_datetime\">" + markup + "</select>";
			if (slots.length == 0) {
				markup = "<select id=\"delivery_datetime\"><option value=null>No Slots Available</option></select>";
			}
		} else {
			var markup = UPDOM.timePicker.getMarkup();
		}
		data.el.html(markup);
	},
	animatePlaceholder: function animatePlaceholder(el) {
		$(el).find('input').each(function (i, d) {
			var label = $(d).attr('placeholder');
			var id = $(d).attr('id');
			var label_el = "<label for=\"" + id + "\">" + label + "</label>";
			$(label_el).insertAfter($(d));
			$(d).attr('placeholder', '');

			$(d).focus(function () {
				$(this).addClass('hasVal');
			});
			$(d).blur(function () {
				if (!$(d).val()) {
					$(this).removeClass('hasVal');
				}
			});
		});
	},
	clearForm: function clearForm(el) {
		var el = $(el);
		el.find('input[type="text"],input[type="password"],input[type="email"]').each(function (i, d) {
			$(d).val('');
		});
	},
	processSocialLogin: function processSocialLogin(data, callback, errCallback) {

		var provider = data.provider;

		var socialLoginData = {
			provider: provider
		};

		if (data.prefetch) {
			//to call login with previously fetched auth_token
			socialLoginProceed(data);
		} else {
			if (provider == 'facebook') {
				UP.getFBData(function (d) {
					socialLoginProceed(d);
				}, function (err) {
					console.log(err);
					errCallback(err);
				});
			} else if (provider == 'google') {
				UP.getGoogleData(function (d) {
					socialLoginProceed(d);
				}, function (err) {
					console.log(err);
					errCallback(err);
				});
			}
		}

		function socialLoginProceed(d) {

			socialLoginData.token = d.access_token;
			socialLoginData.email = d.email;
			socialLoginData.name = d.name;

			UP.socialLogin.init(socialLoginData, function (d) {

				switch (d.message) {
					case 'phone_number_required':
						//$('.tab-item-content > div').removeClass('is-open');
						//$('.tab-items.login-tabs').find('.tab-item-link').removeClass('is-active');
						//$('#tab-checkphone').addClass('is-open');
						$('#phone-verify-modal').prop("checked", true).change();
						$('#social_acc_name').html(socialLoginData.name);
						errCallback();
						break;
					case 'email_check_failed':
						alert('Access token was wrong/spoofed!');
						errCallback();
						break;
					case 'userbiz_phone_not_validated':
						UP_VARS.SOCIAL_LOGIN.state = true;
						alert('Your phone no is not verified!');
						var data = {
							customer_phone: d.phone,
							email: UP_VARS.SOCIAL_LOGIN.data.email
						};
						UP.resendOTP(data, function () {
							//check if the phone no is with +91
							var phone_no = d.phone;
							if (phone_no.indexOf('91') >= 0) {
								var phone_clean = phone_no.split('91')[1];
							}

							$('#tab-verify').find('.verify-phone-no').html(phone_clean);
							$('#tab-verify').find('#phone_no_3').val(phone_clean);
							//$('#tab-login').removeClass('is-open');
							//$('#tab-signup').removeClass('is-open');
							//$('#tab-verify').addClass('is-open');
							//$('#tab-checkphone').removeClass('is-open');
							$('#phone-verify-modal').prop("checked", false).change();
							$('#verify-code-modal').prop("checked", true).change();
							$('#social_acc_name').html(UP_VARS.SOCIAL_LOGIN.data.name);

							$('.social-login').removeClass('blink');
						}, errCallback);
						break;
					default:
						//debugger;
						//var extract_phone_no = d.username.split('mob_user_')[1];
						UPDOM.spinner(true);
						UP.socialLogin.loginUser(d, function () {
							localStorage.setItem('need_to_push_to_gtm', JSON.stringify(_extends({}, d, { event: "logged_in", login_type: socialLoginData.provider, device: mobilecheck() ? "mobile_web" : "web", url: window.location.href })));
							loggedIn();
							//location.reload(true);
							var url_param = window.location.href.split('?')[1];

							if (url_param) {
								var param_frag_key = url_param.split('=')[0];
								var param_frag_val = url_param.split('=')[1].split('#')[0];

								if (param_frag_key == 'redirect' && param_frag_val == 'checkout') {
									window.location = '/cart';
								} else {
									location.reload(true);
								}
							} else {
								location.reload(true);
							}
						});
						callback();
						break;
				}
			}, function (err) {
				errCallback(err);
			});
		}
	}
};

$(document).on('click', '.UP-LOGIN', function () {
	popLoginPrompt();
});
$(document).on('click', '.UP-LOGOUT', function () {
	UPDOM.logout();
});

$(document).on('click', '.UP-CLOSE-POPUP', function () {
	UPDOM.closePopup($(this));
});

// Time picker related

function invalidTimeMarkup() {
	if (UPDOM.timePicker.isValid()) {
		$('.up-timepicker').find('input').removeClass('required');
	} else {
		$('.up-timepicker').find('input').addClass('required');
	}
}

$(document).on('click', '.up-timepicker .up-hourpicker .up-plus', function () {
	//var minHour = parseInt($(this).parent().data('hour-min'));
	var maxHour = parseInt($(this).parent().data('hour-max'));
	var cHour = parseInt($(this).parent().find('input').val());

	if (cHour < 12) {
		$(this).parent().find('input').val(cHour + 1);
	} else {
		var cHour = 0;
		$(this).parent().find('input').val(cHour + 1);
	}
	invalidTimeMarkup();
	/*
 var mer = $('.up-ampmpicker').find('input').val();
 if(mer == 'AM'){
 	if(cHour < maxHour && cHour <12){
 		$(this).parent().find('input').val(cHour+1);
 	}
 }else{
 	var cHour_tf = cHour + 12;
 	if(cHour_tf < maxHour && cHour <12){
 		$(this).parent().find('input').val(cHour+1);
 	}
 }*/
});
$(document).on('click', '.up-timepicker .up-hourpicker .up-minus', function () {
	var minHour = parseInt($(this).parent().data('hour-min'));
	var cHour = parseInt($(this).parent().find('input').val());

	if (cHour <= 12 && cHour > 1) {
		$(this).parent().find('input').val(cHour - 1);
	} else {
		var cHour = 12;
		$(this).parent().find('input').val(cHour);
	}

	invalidTimeMarkup();
	/*
 var mer = $('.up-ampmpicker').find('input').val();
 if(mer == 'AM'){
 	if(cHour > minHour && cHour <=12){
 		$(this).parent().find('input').val(cHour-1);
 	}
 }else{
 	var cHour_tf = cHour + 12;
 	if(cHour_tf > minHour && cHour <=12){
 		$(this).parent().find('input').val(cHour-1);
 	}
 }*/
});
$(document).on('click', '.up-timepicker .up-minpicker .up-plus', function () {
	//var minHour = parseInt($(this).parent().data('hour-min'));
	//var maxHour = parseInt($(this).parent().data('hour-max'));
	var cMin = parseInt($(this).parent().find('input').val());
	if (cMin < 59) {
		$(this).parent().find('input').val(cMin + 1);
	} else {
		cMin = 0;
		$(this).parent().find('input').val(cMin);
	}
	invalidTimeMarkup();
});
$(document).on('click', '.up-timepicker .up-minpicker .up-minus', function () {
	//var minHour = parseInt($(this).parent().data('hour-min'));
	//var cHour = parseInt($(this).parent().find('input').val());
	var cMin = parseInt($(this).parent().find('input').val());
	if (cMin > 0) {
		$(this).parent().find('input').val(cMin - 1);
	} else {
		cMin = 59;
		$(this).parent().find('input').val(cMin);
	}
	invalidTimeMarkup();
});

$(document).on('click', '.up-timepicker .up-ampmpicker .up-mer-nav', function () {
	//var minHour = parseInt($(this).parent().data('hour-min'));
	//var maxHour = parseInt($(this).parent().data('hour-max'));
	var mer = $(this).parent().find('input').val();
	if (mer == 'AM') {
		$(this).parent().find('input').val('PM');
	} else {
		$(this).parent().find('input').val('AM');
	}

	invalidTimeMarkup();
});

var SIDEBAR_MARKUP = "<ul id=\"#menu1\" class=\"hamburger-menu login-required hide\">\n\t<li><a href=\"edit-profile.html\">My Account</a></li>\n\t<li><a href=\"orders.html\">My Orders</a></li>\n\t<!--<li><a href=\"invite-friends.html\">Invite Friends</a></li>-->\n\t<!--<li><a href=\"bulk-order\">Bulk Order</a></li>-->\n\t<li><a href=\"wallet.html\">Wallet</a><span class=\"text-block\"><span class=\"price wallet-price\"></span></span></li>\n\t<li><a href=\"#\" class=\"UP-LOGOUT\">\n\t\tLogout\n\t\t<span class=\"text-block\">\n\t\t\t<svg class=\"icon icon-exit\">\n\t\t\t\t<use xlink:href=\"images/home-icons.svg#icon-exit\"></use>\n\t\t\t</svg>\n\t\t</span>\n\t</a></li>\n</ul>\n<ul id=\"#menu2\" class=\"hamburger-menu sub-menu static-menu\">\n<li class=\"more-link\">\n<a href=\"javascript:void(0)\">REWARDS</a>\n<span class=\"arrow\">\n\t\t\t<svg class=\"icon icon-expand-arrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-expand-arrow\"></use></svg>\n\t\t</span>\n\t\t<ul class=\"submenu\">\n\t\t\t <!--<li><a href=\"stores.html\">Our Stores</a></li>-->\n          <li><a href=\"introduction-prioritea.html\">Introduction</a></li>\n          <li><a href=\"prioritea-wallet.html\">Wallet</a></li>\n          <li><a href=\"terms-condition-prioritea.html\">Terms & Conditions</a></li>\n          <li><a href=\"faq-prioritea.html\">FAQ</a></li>\n\t\t</ul>\n\n</li>\n<li class=\"more-link\">\n\t\t<a href=\"javascript:void(0)\">STORES</a>\n\t\t<span class=\"arrow\">\n\t\t\t<svg class=\"icon icon-expand-arrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-expand-arrow\"></use></svg>\n\t\t</span>\n\t\t<ul class=\"submenu\">\n\t\t\t<li><a href=\"https://order.chaipoint.com/storelocator\">Locate a store</a></li>\n\t\t\t</ul>\n\t</li>\n\t<li class=\"more-link\">\n\t\t<a href=\"javascript:void(0)\">PACKAGED TEA & SNACKS</a>\n\t\t<span class=\"arrow\">\n\t\t\t<svg class=\"icon icon-expand-arrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-expand-arrow\"></use></svg>\n\t\t</span>\n\t\t<ul class=\"submenu llt-menu\">\n\t\t\t        <li><a href=\"garden-to-glass.html#about\">About</a></li>\n\t\t\t        <li><a href=\"garden-to-glass.html#whole-leaf-green-tea\">Whole Leaf Green Tea</a></li>\n\t\t\t        <li><a href=\"garden-to-glass.html#premium-assam-tea\">Premium Assam Tea</a></li>\n\t\t\t        <li><a href=\"garden-to-glass.html#assam-masala-tea\">Assam Masala Tea</a></li>\n\t\t\t        <li><a href=\"garden-to-glass.html#know-more\">Know More</a></li>\n\t\t\t      </ul>\n\t</li>\n\n\t<li class=\"more-link\"><a href=\"javascript:void(0)\">CHAI ON CALL</a>\n\t\t<span class=\"arrow\">\n\t\t\t<svg class=\"icon icon-expand-arrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-expand-arrow\"></use></svg>\n\t\t</span>\n\t\t<ul class=\"submenu\" style=\"display: none;\">\n\t\t\t<li><a href=\"chai-work.html\">Chai-on-call</a></li>\n\t\t\t<li><a href=\"chai-celebrations.html\">Subscribe to Chai</a></li>\n\t\t</ul>\n\t</li>\n\n\t<li class=\"more-link\"><a href=\"javascript:void(0)\">BOXC.IN</a>\n\t\t<span class=\"arrow\">\n\t\t\t<svg class=\"icon icon-expand-arrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-expand-arrow\"></use></svg>\n\t\t</span>\n\t\t<ul class=\"submenu\" style=\"display: none;\">\n\t\t\t<li><a href=\"boxc.html\">boxC.in</a></li>\n\t\t\t<li><a href=\"http://boxc.in\">CRM Dashboard</a></li>\n\t\t</ul>\n\t</li>\n\t<!-- <li><a href=\"priortea.html\">PRIORTEA</a></li> -->\n\t<li class=\"more-link\">\n\t\t<a href=\"#\">ABOUT US</a>\n\t\t<span class=\"arrow\">\n\t\t\t<svg class=\"icon icon-expand-arrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-expand-arrow\"></use></svg>\n\t\t</span>\n\t\t<ul class=\"submenu\" style=\"display: none;\">\n      <li><a href=\"about.html\"><span><span class=\"text\">About Us</span></span></a></li>\n      <li><a href=\"blog.html\"><span><span class=\"text\">Blogs</span></span></a></li>\n\t\t\t<li><a href=\"technology.html\"><span><span class=\"text\">Technology</span></span></a></li>\n\t\t\t<li><a href=\"chai.html\"><span><span class=\"text\">Academy</span></span></a></li>\n\t\t\t<li><a href=\"clean-earth.html\"><span><span class=\"text\">Clean Earth</span></span></a></li>\n\t\t\t<li><a href=\"team.html\"><span><span class=\"text\">Team</span></span></a></li>\n\t\t\t<li><a target=\"_blank\" href=\"http://careers.chaipoint.com\"><span><span class=\"text\">Careers</span></span></a></li>\n\t\t\t<li><a href=\"contact.html\"><span><span class=\"text\">Contact Us</span></span></a></li>\n\t\t</ul>\n\t</li>\n</ul>\n<div class=\"side-menu-footer\">\n\t<div class=\"play-badges\">\n\t\t<a href=\"https://play.google.com/store/apps/details?id=com.urbanpiper.chaipoint\" class=\"google-play\"><img src=\"images/google-play-badge.png\" alt=\"\"/></a>\n\t\t<a href=\"https://itunes.apple.com/in/app/chai-point/id838742149?mt=8\" class=\"apple-store\"><svg class=\"icon icon-apple-store-badge\"><use xlink:href=\"images/home-icons.svg#icon-apple-store-badge\"></use></svg></a>\n\t</div>\n\t<ul>\n\t\t<li><a href=\"https://www.facebook.com/chaipoint\"><svg class=\"icon icon-facebook\"><use xlink:href=\"images/home-icons.svg#icon-facebook\"></use></svg></a></li>\n\t\t<li><a href=\"https://twitter.com/Chai_Point\"><svg class=\"icon icon-twitter\"><use xlink:href=\"images/home-icons.svg#icon-twitter\"></use></svg></a></li>\n\t\t<li><a href=\"mailto:feedback@chaipoint.com\" class=\"mail-anchor\"><svg class=\"icon icon-message-outline\"><use xlink:href=\"images/home-icons.svg#icon-message-outline\"></use></svg></a></li>\n\t</ul>\n</div>";
var SOCIAL_LOGIN_MARKUP = "<div class=\"block_img_wrapper\">\n\t<div class=\"login-buttons nm\">\n\t\t<div class=\"button-wrapper\">\n\t\t\t<a href=\"#\" class=\"fb social-login\" data-provider=\"facebook\">\n\t\t\t<svg class=\"icon icon-facebook-icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-facebook-icon\"></use></svg>\n\t\t\t\tLog in with Facebook</a>\n\t\t</div>\n\t\t<div class=\"button-wrapper\">\n\t\t\t<a href=\"#\" class=\"google social-login\" data-provider=\"google\">\n\t\t\t<svg class=\"icon icon-google-icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"images/home-icons.svg#icon-super-g\"></use></svg>\n\t\t\t\tLog in with Google</a>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"or-block\">OR</div>";

var LOGIN_MODAL_MARKUP = "<div class=\"modal login-custom-modal\">\n\t<input class=\"modal-state\" type=\"checkbox\"  id=\"login-modal\"/>\n\t<div class=\"modal-fade-screen login-modal-fade\">\n\t\t<div class=\"block login-block modal-inner\">\n\t\t\t" + (UP_CONFIG.SOCIAL_LOGIN ? SOCIAL_LOGIN_MARKUP : '') + "\n\t\t\t<div class=\"tab-item-block login-tab-block\">\n\n\t\t\t\t<ul class=\"tab-items login-tabs\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"tab-login\" class=\"is-active tab-item-link\">Log In</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"tab-signup\" class=\"tab-item-link\">Sign Up</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"tab-item-content\">\n\t\t\t\t\t<div id=\"tab-checkphone\">\n\t\t\t\t\t\t<input type=\"text\" class=\"phone\" placeholder=\"Phone No\" value=\"\">\n\t\t\t\t\t\t<div class=\"messaging\"></div>\n\t\t\t\t\t\t<input type=\"submit\" id=\"\" value=\"Confirm\" class=\"social-confirm enabled\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"tab-login\" class=\"is-open\">\n\t\t\t\t\t\t<input type=\"text\" id=\"phone_no_1\" class=\"phone\" placeholder=\"Phone No\" value=\"\">\n\t\t\t\t\t\t<input type=\"password\" id=\"password\" class=\"password\" placeholder=\"Password\">\n\t\t\t\t\t\t<div class=\"messaging\"></div>\n\t\t\t\t\t\t<input type=\"submit\" id=\"submit\" value=\"Log In\" class=\"signin-button enabled\">\n\t\t\t\t\t\t<a href=\"#\" class=\"forgot-password nav-to-forgot\">Forgot Password ?</a>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"tab-forgot\">\n\t\t\t\t\t\t<input type=\"text\" class=\"phone\" placeholder=\"Phone No\" value=\"\">\n\t\t\t\t\t\t<div class=\"messaging\"></div>\n\t\t\t\t\t\t<input type=\"submit\" id=\"submit\" value=\"Sent OTP\" class=\"send-token enabled\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"tab-reset\">\n\t\t\t\t\t\t<input type=\"text\" class=\"phone\" value=\"\" readonly=\"true\">\n\t\t\t\t\t\t<input type=\"password\" class=\"pass1\" value=\"\" placeholder=\"New Password\">\n\t\t\t\t\t\t<input type=\"password\" class=\"pass2\" value=\"\" placeholder=\"Confirm Password\">\n\t\t\t\t\t\t<input type=\"text\" class=\"reset-token\" value=\"\" placeholder=\"Token\">\n\t\t\t\t\t\t<div class=\"messaging\"></div>\n\t\t\t\t\t\t<input type=\"submit\" id=\"submit\" value=\"Reset Password\" class=\"reset-pass-button enabled\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"tab-signup\">\n\t\t\t\t\t\t<input type=\"text\" id=\"name1\" placeholder=\"Name\">\n\t\t\t\t\t\t<input type=\"text\" id=\"phone_no_2\" placeholder=\"Phone No\">\n\t\t\t\t\t\t<input type=\"text\" id=\"email1\" placeholder=\"Email\">\n\t\t\t\t\t\t<input type=\"password\" id=\"password1\" placeholder=\"Password\">\n\t\t\t\t\t\t<input type=\"password\" id=\"password1-conf\" placeholder=\"Confirm Password\">\n\t\t\t\t\t\t<div class=\"messaging\"></div>\n\t\t\t\t\t\t<input type=\"submit\" id=\"submit-signup\" value=\"Sign Up\" class=\"signup-button enabled\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"tab-verify\">\n\t\t\t\t\t\t<input type=\"text\" id=\"phone_no_3\" placeholder=\"Phone No\">\n\t\t\t\t\t\t<input type=\"text\" id=\"otp\" placeholder=\"Enter OTP\">\n\t\t\t\t\t\t<div><a class=\"resend-otp enabled\">Resend OTP</a></div>\n\t\t\t\t\t\t<div class=\"messaging\"></div>\n\t\t\t\t\t\t<input type=\"submit\" id=\"submit-verify\" value=\"Verify\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";

var SPINNER = "<div class=\"spinner\" id=\"up_spinner\">\n\t<div class=\"spinner_cont\">\n\t\t<div class=\"spinner__item1\"></div>\n\t\t<div class=\"spinner__item2\"></div>\n\t\t<div class=\"spinner__item3\"></div>\n\t\t<div class=\"spinner__item4\"></div>\n\t</div>\n</div>";

$('body').append(SPINNER);
$('body').find('.sliding-panel-content').html(SIDEBAR_MARKUP);

if (UP_CONFIG.SOCIAL.enable) {
	var googleSignInInit = function googleSignInInit() {
		gapi.load('auth2', function () {
			// Retrieve the singleton for the GoogleAuth library and set up the client.
			auth2 = gapi.auth2.init({
				client_id: UP_CONFIG.SOCIAL.GOOGLE_CLIENT_ID,
				cookiepolicy: 'single_host_origin',
				// Request scopes in addition to 'profile' and 'email'
				scope: 'profile email'
			});
		});
	};

	var script = document.createElement("script");
	script.src = "https://apis.google.com/js/platform.js?onload=googleSignInInit";
	script.type = "text/javascript";
	document.getElementsByTagName("head")[0].appendChild(script);

	(function (d, s, id) {
		var js,
		    fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	})(document, 'script', 'facebook-jssdk');

	window.fbAsyncInit = function () {
		FB.init({
			appId: UP_CONFIG.SOCIAL.FB_APP_ID,
			cookie: true, // enable cookies to allow the server to access
			// the session
			xfbml: true, // parse social plugins on this page
			version: 'v2.8' // use graph api version 2.8
		});
	};
}
//load google map api
var script = document.createElement("script");
if (UP_CONFIG.GMAP_KEY) {
	script.src = "https://maps.googleapis.com/maps/api/js?key=" + UP_CONFIG.GMAP_KEY + "&libraries=places&callback=addGooglePlaceInput&region=IN";
} else {
	script.src = "https://maps.googleapis.com/maps/api/js?&libraries=places&callback=addGooglePlaceInput&region=IN";
}
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

(function (e, a) {
	if (!a.__SV) {
		var b = window;try {
			var c,
			    l,
			    i,
			    j = b.location,
			    g = j.hash;c = function c(a, b) {
				return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null;
			};g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search)));
		} catch (m) {}var k, h;window.mixpanel = a;a._i = [];a.init = function (b, c, f) {
			function e(b, a) {
				var c = a.split(".");2 == c.length && (b = b[c[0]], a = c[1]);b[a] = function () {
					b.push([a].concat(Array.prototype.slice.call(arguments, 0)));
				};
			}var d = a;"undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";d.people = d.people || [];d.toString = function (b) {
				var a = "mixpanel";"mixpanel" !== f && (a += "." + f);b || (a += " (stub)");return a;
			};d.people.toString = function () {
				return d.toString(1) + ".people (stub)";
			};k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
			for (h = 0; h < k.length; h++) {
				e(d, k[h]);
			}a._i.push([b, c, f]);
		};a.__SV = 1.2;b = e.createElement("script");b.type = "text/javascript";b.async = !0;b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c = e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b, c);
	}
})(document, window.mixpanel || []);

var dataLayer = [];
if (UP_CONFIG.GTM_ID) {
	(function (w, d, s, l, i) {
		w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
		    j = d.createElement(s),
		    dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
	})(window, document, 'script', 'dataLayer', UP_CONFIG.GTM_ID);
}

var MP = {
	defaultMPtrack: function defaultMPtrack() {
		try {
			mixpanel.track('page viewed', {
				'page name': document.title,
				'url': window.location.pathname
			});
		} catch (err) {
			console.log('Mixpanel error: ' + err);
		}
	},
	identify: function identify(data, authKey) {
		try {
			mixpanel.identify(authKey);
			mixpanel.people.set(data);
		} catch (err) {
			console.log('Mixpanel error: ' + err);
		}
	},
	conversion: function conversion() {
		var curr_dt = new Date();
		var curr_hr = curr_dt.getHours();

		try {
			mixpanel.track('order_placed', {
				"order_total": UP_VARS.CART.meta.total,
				"coupon_txt": UP_VARS.CART.meta.coupon ? UP_VARS.CART.meta.coupon.code : null,
				"channel": "web",
				"interval_of_day": "" + curr_hr + "-" + (curr_hr + 1)
			});

			mixpanel.people.track_charge(UP_VARS.CART.meta.total);
		} catch (err) {
			console.log('Mixpanel error');
		}
	}
};

var indexInit = function indexInit() {
	UP.localStorage.removeItem('guest');

	var renderItems = function renderItems(d) {
		for (var x in d) {
			UPDOM.spinner(true);
			var id = d[x].id;

			UPDOM.renderItems({ cat_id: id }, function (d) {

				var itemMarkup = '';

				if (d.items.objects.length == 0) {
					return;
				}
				var category_name = d.items.objects[0].category.name;
				var category_id = d.items.objects[0].category.id;
				//console.log(d)
				for (var x in d.items.objects) {

					var item = d.items.objects[x];
					var in_stock = item.current_stock == 0 ? false : true;

					var complexItem = false;

					var inCart = UP_VARS.CART.items;

					var isAdded = false;
					for (var y in inCart) {
						if (item.id == inCart[y].id) {
							isAdded = true;
							break;
						}
					}

					var dafault_price = item.item_price;

					if (item.option_groups && item.option_groups.length > 0 && item.option_groups[0].options && item.option_groups[0].options.length > 0) {
						var lastOptionPrice = item.option_groups[0].options[item.option_groups[0].options.length - 1].price;
						in_stock = true;
						var option_groupsHTML = '';
						complexItem = true;
						if (dafault_price || dafault_price == 0) {
							dafault_price = lastOptionPrice ? lastOptionPrice : 0;
						}

						var default_item_sig = [];
						var default_options = [];

						var default_optionObj = item.option_groups[0].options[item.option_groups[0].options.length - 1];
						var default_option_id = default_optionObj.id;

						if (default_optionObj) {
							default_options.push(default_optionObj);
						}

						for (var df in default_options) {
							default_item_sig.push(default_options[df].id);
						}

						default_item_sig = item.id + '_' + default_item_sig.join('_');
						//overide if options

						isAdded = false;

						for (var y in inCart) {
							if (default_item_sig == inCart[y].sig) {
								isAdded = true;
								break;
							}
						}

						var option_groups = item.option_groups;
						//console.log(option_groups)
						for (var y in option_groups) {

							var optionsHTML = '';
							for (var z in option_groups[y].options) {

								optionsHTML += "<li data-option-id=\"" + option_groups[y].options[z].id + "\" data-price=\"" + option_groups[y].options[z].price + "\" class=\"" + (z == option_groups[y].options.length - 1 ? 'selected' : '') + "\">\n\t\t\t\t\t\t\t\t\t" + option_groups[y].options[z].title + "\n\t\t\t\t\t\t\t\t</li>";
							}

							option_groupsHTML += "<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown-container\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-select\">\n\t\t\t\t\t\t\t\t\t\t\t" + optionsHTML + "\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>";
						}

						if (isAdded) {
							var cc_items = _.filter(UP_VARS.CART.items, function (e) {
								return e.sig == default_item_sig;
							});

							var quant = _.reduce(cc_items, function (s, entry) {
								return s + entry.quantity;
							}, 0);
						}
					} else {
						if (isAdded) {
							var quant = inCart[y].quantity;
						}
					}

					var item_placeholder = 'images/placeholder-chai.png';
					if (category_name == 'Combo') {
						var item_wrapper_class = 'large';
						var item_placeholder = 'images/placeholder-combos.png';
					} else if (category_name == 'Iced Chai') {
						var item_wrapper_class = 'medium height-large';
						var item_placeholder = 'images/placeholder-chillers.png';
					} else {
						var item_wrapper_class = 'medium';
					}
					var item_title_str = item.item_title.split(' ').join('_').toLowerCase();

					itemMarkup += "<li class=\"item-wrapper " + item_wrapper_class + "\">\n\t\t\t\t\t\t<div class=\"img-wrapper " + (in_stock ? '' : 'disabled') + "\">\n\t\t\t\t\t\t\t<div class=\"img-overlay\"></div>\n\t\t\t\t\t\t\t<a href=\"product-details.html#/id:" + item.id + "/" + item_title_str + "\"><img src=\"" + (item.image_url != null ? item.image_url : item_placeholder) + "\" alt=\"\"/></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"item-details-wrapper\">\n\t\t\t\t\t\t<div class=\"item\" data-item-id=\"" + item.id + "\" data-option-id=" + (default_option_id ? default_option_id : '') + ">\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<div class=\"details-inner\">\n\t\t\t\t\t\t\t\t\t<div class=\"img-title\">\n\t\t\t\t\t\t\t\t\t\t<h2>" + item.item_title + "</h2>\n\t\t\t\t\t\t\t\t\t\t<span class=\"meal-type " + (item.food_type == 2 ? 'non-veg' : 'veg') + "\">\n\t\t\t\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t" + (complexItem ? option_groupsHTML : '') + "\n\t\t\t\t\t\t\t\t\t<div class=\"price-meta\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"price\">" + dafault_price + "</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"add-to-cart-wrapper\" " + (in_stock ? '' : 'style="visibility:hidden"') + ">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\" " + (isAdded ? 'style="display: none;"' : '') + ">+ ADD</a>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"quantity-wrapper\" " + (isAdded ? 'style="display: block;"' : '') + ">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"minus\">-</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"quantity\" name=\"quantity\" readonly=\"true\" value=\"" + (quant ? quant : 1) + "\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"plus\">+</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t" + (in_stock ? '' : '<div class="out-of-stock">Sorry - sold out!</div>') + "\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>";
				}
				var item_container = $('#main .section').filter('[data-cat-id = ' + category_id + ']').find('.products');

				item_container.hide().html(itemMarkup).fadeIn();

				var findMaxHeight = [];

				item_container.find('.item-wrapper').each(function (i, d) {
					findMaxHeight.push($(d).find('.img-title').outerHeight());
				});

				var setHeight = Math.max.apply(null, findMaxHeight);
				item_container.find('.img-title').css({ height: setHeight + 'px' });
				UPDOM.spinner(false);
			}, function (err) {
				console.log(err);
				UPDOM.spinner(false);
			});
		}
	};
	var renderCategory = function renderCategory() {
		UPDOM.spinner(true);
		UPDOM.renderCategory(function (d) {
			UP_VARS.BIZ_CAT = d.objects;
			if (d.objects.length > 0) {
				var cat = _.orderBy(d.objects, ['sort_order'], ['asc']);
				var categories = '';
				var categories_item_container = '';
				for (var x in cat) {
					if (cat[x].name == 'Super value combos') {
						continue;
					}
					categories += "<li>\n\t\t\t\t\t\t<a href=\"#" + nametotag(cat[x].name) + "\"\n\t\t\t\t\t\t\tonclick=\"dataLayer.push({'event': 'GAEvent', 'eventCategory': 'ordering',\n\t\t\t\t\t\t\t'eventLabel': 'category-selected', 'eventValue': '" + cat[x].name + "'});\">\n\t\t\t\t\t\t\t" + cat[x].name + "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>";
					var additionalDesc = false;
					if (cat[x].name == 'Hot Chai') {
						var additionalDesc = "<div class=\"secondary-text\">\n\t\t\t\t\t\t\t<ul class=\"item\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"size-icon\">L</span>\n\t\t\t\t\t\t\t\t\t<span class=\"size-text\">1ltr (10 cups)</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"size-icon\">M</span>\n\t\t\t\t\t\t\t\t\t<span class=\"size-text\">500ml(5 cups)</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"size-icon\">S</span>\n\t\t\t\t\t\t\t\t\t<span class=\"size-text\">250ml(2 cups)</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>";
					}

					categories_item_container += "<div id=\"" + nametotag(cat[x].name) + "\" class=\"section\" data-cat-id=\"" + cat[x].id + "\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<div class=\"row alignCenter\">\n\t\t\t\t\t\t\t\t<h1 class=\"heading small\">" + cat[x].name + "</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"featured-text\">\n\t\t\t\t\t\t\t\t" + cat[x].description + "\n\t\t\t\t\t\t\t\t" + (additionalDesc ? additionalDesc : '') + "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<ol class=\"products\">\n\t\t\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>";
				}

				var catMarkup = "<ul class=\"products-menu\">\n\t\t\t\t\t" + categories + "\n\t\t\t\t</ul>";
			}
			$('.top-menu-inner').html(catMarkup);
			$('#main').hide().html(categories_item_container).fadeIn();
			renderItems(UP_VARS.BIZ_CAT);
		});
	};

	renderCategory();
	if (UP_MISC.selectedAddress()) {
		UPDOM.populateLocationString();
		$('#location-top-text').html(UP_MISC.selectedAddress().name);
	} else {
		UPDOM.populateLocationString(false);
		$('#location-top-text').html('Enter Location');
	}
};
var checkoutPageInit = function checkoutPageInit() {
	if (!UP_MISC.selectedAddress()) {
		alert('Session Expired!');
		UPDOM.resetCart();
		window.location = 'order';
		return false;
	}
	if (!UP.loginStatus()) {
		// not logged in
		if (UP.localStorage.getItem('guest')) {
			$('.wallet-radio-block').remove();
			$('.radio-wrapper:nth-child(1)').addClass('active');
			/*
   if(UP_VARS.CART.meta.coupon){
   	revalidateCoupon();
   }else{
   	setBillInfo();
   }*/
			renderAddress();
		}
		setBillInfo();
	} else {
		loggedIn(function () {
			renderAddress();
			if (UP_VARS.CART.meta.coupon) {
				revalidateCoupon();
			} else {
				setBillInfo();
			}
		});
	}

	renderCart();
	var el = $('#delivery-later');
	UPDOM.renderDeliveryDateTime({ el: el, date: new Date().getUTCDay() });

	if (!UPDOM.timePicker.isValidCTime()) {
		$('#delivery-now').html('Store Closed for Today');
	} else {
		var cTime = new Date(new Date().getTime() + UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time);
		var cHour = cTime.getHours();
		var cMin = cTime.getMinutes() < 10 ? '0' + cTime.getMinutes() : cTime.getMinutes();

		if (cHour == 12) {
			$('#delivery-now').find('.delivery-time').html(cHour + ":" + cMin + " PM");
		} else if (cHour > 12) {
			$('#delivery-now').find('.delivery-time').html(cHour - 12 + ":" + cMin + " PM");
		} else {
			$('#delivery-now').find('.delivery-time').html(cHour + ":" + cMin + " AM");
		}
	}

	var addressPrefill = UP.localStorage.getItem('selected_location');
	//console.log(addressPrefill)
	$('.add-edit-new-address-block').find('#location-text').val(addressPrefill.name);
	//$('.add-edit-new-address-block').find('#pin').val(addressPrefill.pin)

	dataLayer.push({
		"event": "cart",
		"items": UP_VARS.CART.items,
		"cart_total": UP_VARS.CART.meta.total,
		"quantity": UP_VARS.CART.meta.item_count,
		"prod_count": UP_VARS.CART.items.length
	});
};

var editProfilePageInit = function editProfilePageInit() {
	var editProfileInit = function editProfileInit() {
		var user = UP.localStorage.getItem('user_info').objects[0];
		var f_name = user.name.split(' ')[0];
		var l_name = user.name.split(' ')[1];

		var logged_user = UP.localStorage.getItem('logged_user');
		var email = logged_user.email;
		var phone_num = logged_user.phone_num;

		$('.edit-profile-section').find('.user-f-name').val(f_name);
		$('.edit-profile-section').find('.user-l-name').val(l_name);
		$('.edit-profile-section').find('.user-email').val(email);
		$('.edit-profile-section').find('.user-phoneno').val(phone_num);
	};

	if (UP.loginStatus()) {
		loggedIn(function () {
			editProfileInit();
		});
	} else {
		popLoginPrompt();
		return false;
	}
};

var changePassPageInit = function changePassPageInit() {

	var proceedToForgot = function proceedToForgot() {
		var data = {
			phone_num: UP.localStorage.getItem('logged_user').phone_num
		};

		UP.forgotPassword(data, function () {}, function (err) {
			if (err.responseJSON && err.responseJSON.message) {
				err = err.responseJSON.message;
			} else {
				err = UP_CONFIG.error_msg.default;
			}
			alert(err + ' Please reload page!');
		});
	};
	if (UP.loginStatus()) {
		loggedIn(function () {
			proceedToForgot();
		});
	} else {
		popLoginPrompt();
		return false;
	}
};

var myOrderPageInit = function myOrderPageInit() {
	var proceedToMyOrder = function proceedToMyOrder() {
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var payment_mode = {
			prepaid: 'Wallet',
			cash: 'Cash',
			payment_gateway: 'Payment Gateway'
		};

		var orderRowMarkup = '';
		var orderDetailMarkup = '';

		UPDOM.spinner(true);

		UP.fetchOrderHistory(function (d) {
			console.log(d);
			for (var x in d.objects) {
				var orderObj = d.objects[x];

				var dateObj = new Date(orderObj.extras.delivery_time);
				var date = dateObj.getDate();

				var monStr = months[dateObj.getMonth()];
				var timeStr = dateObj.getHours() + ':' + dateObj.getMinutes();

				orderRowMarkup += "<a href=\"javascript:void(0)\" class=\"js-vertical-tab vertical-tab tab-header-link " + (x == 0 ? "is-active" : '') + "\" data-rel=\"" + orderObj.extras.id + "\">\n\t\t\t\t\t<span class=\"date-block\">\n\t\t\t\t\t\t<span class=\"date-month\">" + monStr + "</span>\n\t\t\t\t\t\t<span class=\"date-day\">" + date + "</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"divider\"></span>\n\n\t\t\t\t\t<span class=\"order-details\">\n\t\t\t\t\t\t<span class=\"order-title\">Order ID #" + (orderObj.extras.merchant_ref_id ? orderObj.extras.merchant_ref_id : orderObj.extras.id) + "</span>\n\t\t\t\t\t\t<span class=\"order-time\">" + timeStr + "</span>\n\t\t\t\t\t</span>\n\n\t\t\t\t \t<span class=\"order-tag delivered\">" + orderObj.extras.status + "</span>\n\t\t\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + orderObj.extras.amount + "</span></span>\n\t\t\t    </a>";

				var itemMarkup = '';
				for (var y in orderObj.extras.items) {
					var itemObj = orderObj.extras.items[y];
					itemMarkup += "<div class=\"tab-item\">\n\t\t\t\t\t\t<div class=\"img-holder\">\n\t\t\t\t\t\t\t<img src=\"" + itemObj.image + "\" alt=\"\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"item-details\">\n\t\t\t\t\t\t\t<div class=\"item-title\">" + itemObj.title + "</div>\n\t\t\t\t\t\t\t<div class=\"item-quantity\">Qty : <span class=\"quantity\">" + itemObj.quantity + "</span></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"price-wrapper\">\n\t\t\t\t\t\t\t<span class=\"price\">" + itemObj.price + "</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>";
				}

				orderDetailMarkup += "<a href=\"\" class=\"js-vertical-tab-accordion-heading tab-header-link vertical-tab-accordion-heading " + (x == 0 ? 'is-active' : '') + "\" data-rel=\"" + orderObj.extras.id + "\">\n\n\t\t\t\t<span class=\"date-block\">\n\t\t\t\t\t<span class=\"date-month\">June</span>\n\t\t\t\t\t<span class=\"date-day\">16</span>\n\t\t\t\t</span>\n\t\t\t\t<span class=\"divider\"></span>\n\n\t\t\t\t<span class=\"order-details\">\n\t\t\t\t\t<span class=\"order-title\">Order ID #87377</span>\n\t\t\t\t\t<span class=\"order-time\">2:30 PM</span>\n\t\t\t\t</span>\n\n\t\t\t \t<span class=\"order-tag placed\">Placed</span>\n\t\t\t\t<span class=\"price-wrapper\"><span class=\"price\">260</span></span>\n\n\t\t\t    </a>\n\t\t\t\t<div id=\"" + orderObj.extras.id + "\" class=\"js-vertical-tab-content vertical-tab-content tab-order-details " + (x == 0 ? "is-active" : '') + "\">\n\t\t\t\t\t" + itemMarkup + "\n\t\t\t\t\t<ul class=\"order-pricing\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span class=\"label\">Delivery</span>\n\t\t\t\t\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + orderObj.extras.delivery_charge + "</span></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span class=\"label\">Tax</span>\n\t\t\t\t\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + orderObj.extras.item_tax + "</span></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<span class=\"label\">Discount</span>\n\t\t\t\t\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + orderObj.extras.discount + "</span></span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"total-row\">\n\t\t\t\t\t\t<span class=\"label\">Total</span>\n\t\t\t\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + orderObj.extras.amount + "</span></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"paid-method\">\n\t\t\t\t\t\t<span class=\"paid-icon\"><svg class=\"icon icon-ok\"><use xlink:href=\"images/home-icons.svg#icon-ok\"></use></svg></span>\n\t\t\t\t\t\t<span class=\"paid-text\">Paid by " + payment_mode[orderObj.extras.payment_mode] + "</span>\n\t\t\t\t\t</div>\n\t\t\t    </div>";
			}
			$('.orders-wrapper .order-history-row').html(orderRowMarkup);
			$('.orders-wrapper .order-details-row').html(orderDetailMarkup);
			var tabHeaderHeight = $('.vertical-tabs.tab-header').outerHeight() + 4;
			var tabContentHeight = $('.vertical-tab-content').outerHeight();
			if (tabHeaderHeight > tabContentHeight) {
				$('.vertical-tab-content-container').css('height', tabHeaderHeight);
			} else {
				$('.vertical-tab-content-container').css('height', tabContentHeight);
			}
			UPDOM.spinner(false);
		});
	};

	if (UP.loginStatus()) {
		loggedIn(function () {
			proceedToMyOrder();
		});
	} else {
		popLoginPrompt();
		return false;
	}
};

var walletPageInit = function walletPageInit() {
	if (UP.loginStatus()) {
		loggedIn();
	} else {
		popLoginPrompt();
		return false;
	}
};

var deliveryPagerenderAddress = function deliveryPagerenderAddress(data) {
	var addressMarkup = '';
	for (var x in data) {
		var addresses = data[x];
		addressMarkup += "<div class=\"address\">\n\t\t\t<div class=\"title\">" + addresses.tag + "</div>\n\t\t\t<div class=\"desc\">\n\t\t\t\t" + addresses.sub_locality + "<br>\n\t\t\t\t" + addresses.address_1 + "<br>\n\t\t\t\t" + addresses.address_2 + "<br>\n\t\t\t\t" + addresses.pin + "\n\t\t\t</div>\n\t\t\t<div class=\"action-block\" data-address-id=\"" + addresses.id + "\">\n\t\t\t\t<a href=\"#\" class=\"edit\">\n\t\t\t\t\t<svg class=\"icon icon-edit edit-address\"><use xlink:href=\"images/home-icons.svg#icon-edit\"></use></svg>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\" class=\"del\">\n\t\t\t\t\t<svg class=\"icon icon-delete delete-address\"><use xlink:href=\"images/home-icons.svg#icon-delete\"></use></svg>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>";
	}
	addressMarkup += "<div class=\"address add-new-address\">\n\t\t<span>+ Address</span>\n\t</div>";

	$('.delivery-address-wrapper-block').html(addressMarkup);
};

var deliveryAddPageInit = function deliveryAddPageInit() {
	if (UP.loginStatus()) {
		UPDOM.spinner(true);
		loggedIn(function () {
			var addresses = UP.localStorage.getItem('user_info').objects[0].addresses;
			deliveryPagerenderAddress(addresses);
			UPDOM.spinner(false);
		});
	} else {
		popLoginPrompt();
		return false;
	}
};

var successPageInit = function successPageInit() {
	var success_order_data = UP.localStorage.getItem('success_order');
	var orderId = success_order_data.d.order_id;
	var cart = success_order_data.cart;
	var order_payload = success_order_data.order_payload;
	$('#order_id').html('#' + orderId);

	var itemMarkup = '';
	var itemArray = cart.items;

	var payment_mode = {
		prepaid: 'Wallet',
		cash: 'Cash',
		payment_gateway: 'Payment Gateway',
		paytm: 'PayTM'
	};

	var itemMarkup = '';

	for (var i in itemArray) {
		var itemObj = itemArray[i];
		if (itemObj.options && itemObj.options.length > 0) {
			var optionString = [];
			for (var o in itemObj.options) {
				optionString.push(itemObj.options[o].title);
			}
			optionString = optionString.join(' - ');
		}
		if (typeof optionString == "undefined") {
			optionString = '';
		}

		itemMarkup += "<div class=\"tab-item\">\n\t\t\t<div class=\"img-holder\">\n\t\t\t\t<img src=\"" + itemObj.image_url + "\" alt=\"\"/>\n\t\t\t</div>\n\t\t\t<div class=\"item-details\">\n\t\t\t\t<div class=\"item-title\">\n\t\t\t\t\t" + itemObj.item_title + " " + (optionString ? ' - ' + optionString : '') + "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item-quantity\"><span class=\"quantity\">" + itemObj.quantity + "</span></div>\n\t\t\t</div>\n\t\t\t<span class=\"price-wrapper\">\n\t\t\t\t<span class=\"price\">\n\t\t\t\t\t" + (itemObj.item_price + (itemObj.total_options_price ? itemObj.total_options_price : 0)) + "\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</div>";
	}

	var deliveryPricingMarkup = "<ul class=\"order-pricing\">\n\t\t<li>\n\t\t\t<span class=\"label\">Subtotal</span>\n\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + order_payload.order_subtotal + "</span></span>\n\t\t</li>\n\t\t<li>\n\t\t\t<span class=\"label\">Delivery</span>\n\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + order_payload.delivery_charge + "</span></span>\n\t\t</li>\n\t\t<li>\n\t\t\t<span class=\"label\">Tax</span>\n\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + (cart.meta.coupon ? cart.meta.coupon.meta.item_taxes : cart.meta.total_tax) + "</span></span>\n\t\t</li>\n\t\t<li " + (cart.meta.coupon ? '' : 'style="display:none;"') + ">\n\t\t\t<span class=\"label\">Discount</span>\n\t\t\t<span class=\"price-wrapper\"><span class=\"price\">" + (cart.meta.coupon ? cart.meta.coupon.discount : 0) + "</span></span>\n\t\t</li>\n\t</ul>\n\t<div class=\"total-row\">\n\t\t<span class=\"label\">Total</span>\n\t\t<span class=\"price-wrapper\"><span class=\"price\">" + (cart.meta.coupon ? (order_payload.order_total - order_payload.discount_applied).toFixed(2) : order_payload.order_total.toFixed(2)) + "</span></span>\n\t</div>\n\n\t<div class=\"order-confirmation-delivery\">\n\t\t<div class=\"paid-method\">\n\t\t\t<span class=\"paid-icon\"><svg class=\"icon icon-time-span\"><use xlink:href=\"images/home-icons.svg#icon-time-span\"></use></svg></span>\n\t\t\t<span class=\"paid-text\">Expected Delivery Time : " + new Date(order_payload.delivery_datetime).getHours() + ":" + (new Date(order_payload.delivery_datetime).getMinutes() < 10 ? '0' + new Date(order_payload.delivery_datetime).getMinutes() : new Date(order_payload.delivery_datetime).getMinutes()) + "</span>\n\t\t</div>\n\n\t\t<div class=\"paid-method\">\n\t\t\t<span class=\"paid-icon\"><svg class=\"icon icon-ok\"><use xlink:href=\"images/home-icons.svg#icon-ok\"></use></svg></span>\n\t\t\t<span class=\"paid-text\">Paid by " + payment_mode[order_payload.payment_option] + "</span>\n\t\t</div>\n\t</div>";

	$('.success-order-item-detail').html(itemMarkup);
	$('.success-order-pricing').html(deliveryPricingMarkup);
};

var loginPageInit = function loginPageInit() {

	if (UP.loginStatus()) {
		window.location = "order";
	}

	if (UP_CONFIG.SOCIAL_LOGIN) {
		$('.social-login-markup-cont').html(SOCIAL_LOGIN_MARKUP);
	}
};

var productDetailPageInit = function productDetailPageInit() {
	var item_id = window.location.hash.split('id:')[1].split('/')[0];
	UPDOM.spinner(true);
	UP.getItemDetails({ id: item_id, location_id: UP.localStorage.getItem('selected_location').location_id }, function (d) {
		UPDOM.spinner(false);
		console.log(d);

		UP_VARS.BIZ_MENU = [{
			cat_id: d.category.id,
			d: {
				objects: [d]
			}
		}];
		dataLayer.push({
			"event": "product_view",
			"prod_id": d.id,
			"prod_name": d.item_title,
			"prod_url": "product-details.html#/id:" + d.id + "/" + d.slug,
			"image_url": d.image_url,
			"price": d.option_groups.length > 0 ? d.option_groups[0].options[0].price : d.item_price,
			"category": d.category.name,
			"stock_status": d.current_stock == 0 ? "Out-of-stock" : "In-stock"
		});
		renderProductDetail(d);
	}, function (err) {
		if (err.responseJSON && err.responseJSON.message) {
			err = err.responseJSON.message;
		} else {
			err = 'Something went wrong, Try Again!';
		}
		UPDOM.customPopup({ style: { 'color': 'red', 'font-weight': 'bold', 'font-size': '13px' }, HTML: err });
	});

	function renderProductDetail(d) {
		$('#product_description').html(d.item_desc);
		$('#item_image').attr('src', d.image_landscape_url);

		var item = d;
		var in_stock = item.current_stock == 0 ? false : true;

		var complexItem = false;

		var inCart = UP_VARS.CART.items;

		var isAdded = false;
		for (var y in inCart) {
			if (item.id == inCart[y].id) {
				isAdded = true;
				break;
			}
		}
		var default_price = item.item_price;

		dataLayer.push({
			'event': 'productClick',
			'ecommerce': {
				'click': {
					'actionField': { 'list': 'main catalogue' },
					'products': [{
						'name': d.item_title,
						'id': d.id,
						'price': d.item_price,
						'brand': 'Chai Point',
						'category': d.category.name
					}]
				}
			}
		});

		if (item.option_groups && item.option_groups.length > 0 && item.option_groups[0].options && item.option_groups[0].options.length > 0) {
			var option_groupsHTML = '';
			complexItem = true;
			if (default_price || default_price == 0) {
				default_price = item.option_groups[0].options.length > 0 && item.option_groups[0].options[0].price ? item.option_groups[0].options[0].price : 0;
			}

			var default_item_sig = [];
			var default_options = [];

			var default_optionObj = item.option_groups[0].options[0];

			if (default_optionObj) {
				default_options.push(default_optionObj);
			}

			for (var df in default_options) {
				default_item_sig.push(default_options[df].id);
			}

			default_item_sig = item.id + '_' + default_item_sig.join('_');
			//overide if options

			isAdded = false;
			/*
   for(var y in inCart){
   	if(default_item_sig == inCart[y].sig){
   		isAdded = true
   		break;
   	}
   }*/

			var option_groups = item.option_groups;
			//console.log(option_groups)
			for (var y in option_groups) {

				var optionsHTML = '';
				for (var z in option_groups[y].options) {

					optionsHTML += "<li data-option-id=\"" + option_groups[y].options[z].id + "\" data-price=\"" + option_groups[y].options[z].price + "\">\n\t\t\t\t\t\t" + option_groups[y].options[z].title + "\n\t\t\t\t\t</li>";
				}

				option_groupsHTML += "<div class=\"dropdown\">\n\t\t\t\t\t\t<div class=\"dropdown-container\">\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-select\">\n\t\t\t\t\t\t\t\t" + optionsHTML + "\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>";
			}

			if (isAdded) {
				var cc_items = _.filter(UP_VARS.CART.items, function (e) {
					return e.sig == default_item_sig;
				});

				var quant = _.reduce(cc_items, function (s, entry) {
					return s + entry.quantity;
				}, 0);
			}
		} else {
			if (isAdded) {
				var quant = inCart[y].quantity;
			}
		}

		var itemMarkup = "<div class=\"item\" data-item-id=\"" + item.id + "\">\n\t\t\t<div class=\"details\">\n\t\t\t\t<div class=\"details-inner\">\n\t\t\t\t\t<div class=\"img-title\">\n\t\t\t\t\t\t<h2>" + item.item_title + "</h2>\n\t\t\t\t\t\t<span class=\"meal-type " + (item.food_type == 2 ? 'non-veg' : 'veg') + "\">\n\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t" + (complexItem ? option_groupsHTML : '') + "\n\t\t\t\t\t<div class=\"price-meta\">\n\t\t\t\t\t\t<span class=\"price\">" + default_price + "</span>\n\t\t\t\t\t\t<div class=\"add-to-cart-wrapper\" " + (in_stock ? '' : 'style="visibility:hidden"') + ">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\" " + (isAdded ? 'style="display: none;"' : '') + ">+ ADD</a>\n\t\t\t\t\t\t\t<div class=\"quantity-wrapper\" " + (isAdded ? 'style="display: block;"' : '') + ">\n\t\t\t\t\t\t\t\t<span class=\"minus\">-</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"quantity\" name=\"quantity\" readonly=\"true\" value=\"" + (quant ? quant : 1) + "\">\n\t\t\t\t\t\t\t\t<span class=\"plus\">+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t" + (in_stock ? '' : '<div class="out-of-stock">Sorry - sold out!</div>') + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>";

		$('.item-details-wrapper').html(itemMarkup);
	}
};

function init() {
	(function () {
		console.log('common functions called');
		try {
			mixpanel.init(UP_CONFIG.MP_ID);
			MP.defaultMPtrack();
		} catch (err) {
			console.log('Mixpanel Error:' + err);
		}

		if (UP.loginStatus()) {
			dataLayer.push({
				'event': 'is_loggedin',
				'loggedin': 'yes',
				"device": mobilecheck() ? "mobile_web" : "web"
			});
			loggedIn();
		} else {
			dataLayer.push({
				'event': 'is_loggedin',
				'loggedin': 'no',
				"device": mobilecheck() ? "mobile_web" : "web"
			});
			$('.hide-on-login').removeClass('hide');
		}

		if (UP.localStorage.getItem('guest')) {
			$('.hide-in-guest').addClass('hide');
			$('.show-in-guest').removeClass('hide');
		}
		UP_VARS.CART = UP.getCartObj();
		$('.cart-text-no').html(UP_VARS.CART.meta.item_count);
	})();

	var app = $('body').data('app');

	if (app != 'checkout') {

		if (UP_VARS.CART.meta.item_count > 0) {
			dataLayer.push({
				"event": "cart",
				"items": UP_VARS.CART.items,
				"cart_total": UP_VARS.CART.meta.total,
				"quantity": UP_VARS.CART.meta.item_count,
				"prod_count": UP_VARS.CART.items.length
			});
		}
	}

	if (app != 'login-page') {
		if (localStorage.getItem('need_to_push_to_gtm')) {
			var _gtm_login_data = JSON.parse(localStorage.getItem('need_to_push_to_gtm'));
			console.log(_gtm_login_data);
			dataLayer.push({
				"event": _gtm_login_data.event,
				"mobile": _gtm_login_data.phone,
				"email": _gtm_login_data.email,
				"name": _gtm_login_data.name,
				"login_type": _gtm_login_data.login_type,
				"device": _gtm_login_data.device,
				"url": _gtm_login_data.url
			});

			localStorage.removeItem('need_to_push_to_gtm');
		}
	}

	if (UP.localStorage.getItem('logged_user')) {
		var logged_user = UP.localStorage.getItem('logged_user');
		dataLayer.push({
			'event': 'login_details',
			'name': logged_user.name,
			'email': logged_user.email,
			'phone': logged_user.phone,
			"device": mobilecheck() ? "mobile_web" : "web"
		});
	}

	switch (app) {
		case 'index':
			indexInit();
			break;
		case 'checkout':
			checkoutPageInit();
			break;
		case 'edit-profile':
			editProfilePageInit();
			break;
		case 'change-pass':
			changePassPageInit();
			break;
		case 'my-orders':
			myOrderPageInit();
			break;
		case 'wallet':
			walletPageInit();
			break;
		case 'delivery-address':
			deliveryAddPageInit();
			break;
		case 'store-locate':
			//storeLocate();
			break;
		case 'success-page':
			successPageInit();
			break;
		case 'login-page':
			loginPageInit();
			break;
		case 'product-details':
			productDetailPageInit();
			break;
		// add more case, based on the pages
		default:
			console.log('No case found');
	}
}

init();

$(document).ready(function () {

	$(document).on('click', '.llt-menu', function (e) {
		$('.sliding-panel-content, .sliding-panel-fade-screen').removeClass('is-visible');
		$('body').removeClass('disableScroll');
	});

	$(document).on('click touchstart', '.add-to-cart', function (e) {
		e.preventDefault();
		var data = {};
		data.add = true;
		data.el = $(this).closest('.item');

		var item_id = $(this).closest('.item').data('item-id');

		// not handeling multiple option // fix it later
		var option_id = $(this).closest('.item').data('option-id');
		var ifOptions = $(this).closest('.item').find('.dropdown-menu').length;
		if (ifOptions > 0 && !option_id) {
			alert('Select an option!');
			return false;
		}

		// first search in cart, if not found search in loaded menu
		var ItemObj = _.find(UP_VARS.CART.items, { 'id': item_id });

		if (!ItemObj) {
			ItemObj = UP.getItemObjFromBIZ_MENU(item_id);
		}

		var options = [];
		var price = 0;
		var item_sig = [];

		for (var x in ItemObj.option_groups) {
			var optionObj = _.find(ItemObj.option_groups[x].options, { 'id': option_id });
			if (optionObj) {
				options.push(optionObj);
				price += parseFloat(optionObj.price);
			}
		}

		for (x in options) {
			item_sig.push(options[x].id);
		}

		item_sig = item_id + '_' + item_sig.join('_');
		//Try not to mutate the Obj
		// var NewObj = {};
		// try{
		// 	Object.assign(NewObj, ItemObj);
		// 	data.item = NewObj;
		// 	data.item.sig = item_sig;
		// }catch(err){
		// 	console.log(err);
		// 	data.item = ItemObj;
		// }
		var NewObj = _extends({}, ItemObj);
		data.item = NewObj;
		data.item.options = options;
		data.item.total_options_price = price;
		data.item.sig = item_sig;

		dataLayer.push({
			'event': 'GAEvent',
			'eventCategory': 'ordering',
			'eventLabel': 'item-added',
			'eventValue': data.item.item_title
		});

		dataLayer.push({
			'event': 'addToCart',
			'ecommerce': {
				'currencyCode': 'INR',
				'add': { // 'add' actionFieldObject measures.
					'products': [{ //  adding a product to a shopping cart.
						'name': data.item.item_title,
						'id': data.item.id,
						'price': data.item.item_price,
						'brand': 'Chai Point',
						'category': data.item.category.name,
						'quantity': 1
					}]
				}
			}
		});

		// dataLayer.push({
		// 	"event":"add_to_cart",
		// 	"prod_id":data.item.id,
		// 	"prod_name":data.item.item_title,
		// 	"prod_url":"/product-details.html#/id:"+data.item.id+"/"+data.item.item_title.split(" ").join("_"),
		// 	"image_url":data.item.image_url,
		// 	"price":data.item.item_price,
		// 	"category":data.item.category.name,
		// 	"option": (data.item.options.length>0 ? data.item.options[0].title : ""),
		// 	"from_page":""
		// })

		PubSub.publish('cart', data);
	});

	$(document).on('click touchstart', '.quantity-wrapper .plus', function (e) {
		var quantityElem = $(this).parent().find('.quantity');
		var quantityVal = parseInt(quantityElem.val());

		e.preventDefault();

		var data = {};
		data.add = true;
		data.el = $(this).closest('.item');

		var sig = $(this).closest('.item').data('item-sig');
		var item_id = $(this).closest('.item').data('item-id');

		// not handeling multiple option // fix it later
		var option_id = $(this).closest('.item').data('option-id');

		// first search in cart, if not found search in loaded menu
		var ItemObj = _.find(UP_VARS.CART.items, { 'id': item_id });

		if (!ItemObj) {
			ItemObj = UP.getItemObjFromBIZ_MENU(item_id);
		}

		var options = [];
		var price = 0;
		var item_sig = [];

		for (var x in ItemObj.option_groups) {
			var optionObj = _.find(ItemObj.option_groups[x].options, { 'id': option_id });
			if (optionObj) {
				options.push(optionObj);
				price += parseFloat(optionObj.price);
			}
		}

		for (x in options) {
			item_sig.push(options[x].id);
		}

		item_sig = item_id + '_' + item_sig.join('_');
		//Try not to mutate the Obj
		// var NewObj = {};
		// try{
		// 	Object.assign(NewObj, ItemObj);
		// 	data.item = NewObj;
		// 	data.item.sig = (sig ? sig : item_sig);
		// }catch(err){
		// 	console.log(err);
		// 	data.item = ItemObj;
		// }

		var NewObj = _extends({}, ItemObj);
		data.item = NewObj;
		data.item.options = options;
		data.item.total_options_price = price;
		data.item.sig = sig ? sig : item_sig;

		dataLayer.push({
			'event': 'addToCart',
			'ecommerce': {
				'currencyCode': 'INR',
				'add': { // 'add' actionFieldObject measures.
					'products': [{ //  adding a product to a shopping cart.
						'name': data.item.item_title,
						'id': data.item.id,
						'price': data.item.item_price,
						'brand': 'Chai Point',
						'category': data.item.category.name,
						'quantity': 1
					}]
				}
			}
		});

		// dataLayer.push({
		// 	"event":"add_to_cart",
		// 	"prod_id":data.item.id,
		// 	"prod_name":data.item.item_title,
		// 	"prod_url":"/product-details.html#/id:"+data.item.id+"/"+data.item.item_title.split(" ").join("_"),
		// 	"image_url":data.item.image_url,
		// 	"price":data.item.item_price,
		// 	"category":data.item.category.name,
		// 	"option": (data.item.options.length>0 ? data.item.options[0].title : ""),
		// 	"from_page":""
		// })

		PubSub.publish('cart', data);
	});

	$(document).on('click touchstart', '.quantity-wrapper .minus ', function (e) {
		var quantityElem = $(this).parent().find('.quantity');
		e.preventDefault();
		var data = {};
		data.add = false;
		data.el = $(this).closest('.item');

		var sig = $(this).closest('.item').data('item-sig');
		var item_id = $(this).closest('.item').data('item-id');
		// for delete, item must be in Cart

		// not handeling multiple option // fix it later
		var option_id = $(this).closest('.item').data('option-id');

		var ItemObj = _.find(UP_VARS.CART.items, { 'id': item_id });

		if (!ItemObj) {
			ItemObj = UP.getItemObjFromBIZ_MENU(item_id);
		}

		var options = [];
		var price = 0;
		var item_sig = [];

		for (var x in ItemObj.option_groups) {
			var optionObj = _.find(ItemObj.option_groups[x].options, { 'id': option_id });

			if (optionObj) {
				options.push(optionObj);
				price += parseFloat(optionObj.price);
			}
		}

		for (x in options) {
			item_sig.push(options[x].id);
		}

		item_sig = item_id + '_' + item_sig.join('_');
		//Try not to mutate the Obj
		// var NewObj = {};
		// try{
		// 	Object.assign(NewObj, ItemObj);
		// 	data.item = NewObj;
		// 	data.item.sig = (sig ? sig : item_sig);
		// }catch(err){
		// 	console.log(err);
		// 	data.item = ItemObj;
		// }
		var NewObj = _extends({}, ItemObj);
		data.item = NewObj;
		data.item.sig = sig ? sig : item_sig;

		PubSub.publish('cart', data);

		dataLayer.push({
			'event': 'removeFromCart',
			'ecommerce': {
				'remove': { // 'remove' actionFieldObject measures.
					'products': [{ //  removing a product to a shopping cart.
						'name': data.item.item_title,
						'id': data.item.id,
						'price': data.item.item_price,
						'brand': 'Chai Point',
						'category': data.item.category.name,
						'quantity': 1
					}]
				}
			}
		});

		// var __item_price = (data.item.option_groups.length > 0 ? data.item.option_groups[0].options[0].price : data.item.item_price)
		// dataLayer.push({
		// 	"event":"remove_from_cart",
		// 	"prod_id":data.item.id,
		// 	"prod_name":data.item.item_title,
		// 	"prod_url":"/product-details.html#/id:"+data.item.id+"/"+data.item.item_title.split(" ").join("_"),
		// 	"image_url":data.item.image_url,
		// 	"price":__item_price,
		// 	"category":data.item.category.name,
		// 	"option": (data.item.options.length>0 ? data.item.options[0].title : ""),
		// 	"from_page":""
		// })
	});

	$(document).on('click', '.item-delete-all-cart', function (e) {
		e.preventDefault();
		var item_id = parseInt($(this).closest('.item').data('item-id'));
		var data = {};
		data.add = false;
		data.item = _.find(UP_VARS.CART.items, { 'id': item_id });

		var showCounterEl = null;
		data.el = showCounterEl;
		data.allDel = true;
		data.renderCart = true;

		var cart_item_row = $(this).closest('.item').find('td');

		cart_item_row.fadeOut();
		PubSub.publish('cart', data);

		dataLayer.push({
			'event': 'removeFromCart',
			'ecommerce': {
				'remove': { // 'remove' actionFieldObject measures.
					'products': [{ //  removing a product to a shopping cart.
						'name': data.item.item_title,
						'id': data.item.id,
						'price': data.item.item_price,
						'brand': 'Chai Point',
						'category': data.item.category.name,
						'quantity': 1
					}]
				}
			}
		});
		// dataLayer.push({
		// 	"event":"remove_from_cart",
		// 	"prod_id":data.item.id,
		// 	"prod_name":data.item.item_title,
		// 	"prod_url":"/product-details.html#/id:"+data.item.id+"/"+data.item.item_title.split(" ").join("_"),
		// 	"image_url":data.item.image_url,
		// 	"price":data.item.item_price,
		// 	"category":data.item.category.name,
		// 	"option": (data.item.options.length>0 ? data.item.options[0].title : ""),
		// 	"from_page":""
		// })
	});

	$(document).on('click', '.submit-promo-code', function (e) {
		e.preventDefault();
		var submit = $(this);
		var code_input = $(this).parent().find('input');
		var code = $.trim(code_input.val());

		if (!code || code == '') {
			submit.closest('.promo-code-content').find('.promo-error').hide().html('Enter valid code').fadeIn();
			return false;
		}

		submit.closest('.promo-code-content').find('.promo-error').html('Applying..');
		var orderItems = [];
		for (var x in UP_VARS.CART.items) {
			orderItems.push({
				"id": UP_VARS.CART.items[x].id,
				"item_price": UP_VARS.CART.items[x].item_price,
				"options": UP_VARS.CART.items[x].options && UP_VARS.CART.items[x].options.length > 0 ? UP_VARS.CART.items[x].options : null,
				"quantity": UP_VARS.CART.items[x].quantity
			});
		}
		var deliveryTime = new Date().getTime();
		var store = UP.localStorage.getItem('selected_location').biz_detail.store;
		var payment = $('.order-info').find('.payment-gateway select').val();
		var coupon_payload = { "code": code, "order": {
				"channel": "web",
				"order_type": UP_VARS.IS_PICKUP ? "pickup" : "delivery",
				"delivery_charge": UP_VARS.IS_PICKUP ? 0 : store.delivery_charge,
				"delivery_datetime": deliveryTime,
				"payment_option": payment,
				"biz_location_id": store.biz_location_id,
				"items": orderItems
			}
		};

		UP.processCoupon(coupon_payload, function (d) {
			submit.closest('.promo-code-content').find('.promo-msg').removeClass('promo-error').addClass('promo-success').hide().html(d.msg).fadeIn();
			setBillInfo();
		}, function (err) {
			submit.closest('.promo-code-content').find('.promo-msg').hide().addClass('promo-error').removeClass('promo-success').html(err.msg).fadeIn();
			setBillInfo();
		});
	});

	$(document).on('click', '.edit-profile-section button.enabled', function () {

		var submit = $(this);

		submit.removeClass('enabled').addClass('disabled');
		var data = {
			customer_phone: UP.localStorage.getItem('logged_user').phone_num
		};

		data.user_data = {
			first_name: $('.edit-profile-section .user-f-name').val(),
			last_name: $('.edit-profile-section .user-l-name').val(),
			email: $('.edit-profile-section .user-email').val()
		};
		UP.updateUserInfo(data, function (resp) {
			submit.addClass('enabled').removeClass('disabled');
			var user = UP.localStorage.getItem('logged_user');

			user.name = $('.edit-profile-section .user-f-name').val() + ' ' + $('.edit-profile-section .user-l-name').val();
			user.email = $('.edit-profile-section .user-email').val();

			//update localStorage
			UP.localStorage.setItem('logged_user', user);

			//update localStorage
			UP.getuserInfo(function (d) {
				UP.localStorage.setItem('user_info', d);
			});
			$('.user-name').html(user.name);
			var msg_el = $('.edit-profile-section').find('.messaging');
			UPDOM.pushMessage({ el: msg_el, msg: 'Successfully Saved!', type: 'success' });
		}, function (err) {
			if (err.responseJSON && err.responseJSON.message) {
				err = err.responseJSON.message;
			} else {
				err = 'Something went wrong, Try Again!';
			}
			submit.addClass('enabled').removeClass('disabled');
		});
	});

	$(document).on('click', '.cart', function (e) {
		if (!UP_MISC.selectedAddress()) {
			e.preventDefault();
			popLocationPrompt();
		}
	});

	$(document).on('click', '.add-money.enabled', function () {
		var reloadAmount = parseInt($('#reload_amount_input').val());

		if (UP.localStorage.getItem('user_info')) {
			var c_balance = UP.localStorage.getItem('user_info').objects[0].balance;
			if (reloadAmount + c_balance > 5000) {
				alert('Can not add more than 5000 in your wallet');
				return false;
			}
		}
		var mode = $(this).data('name');

		if (UP.intOnly(reloadAmount) && reloadAmount <= 5000 && reloadAmount >= 100) {
			reloadWallet({ amt: reloadAmount, mode: mode });
			dataLayer.push({
				'event': 'GAEvent',
				'eventCategory': 'wallet',
				'eventLabel': 'reload-init',
				'eventValue': reloadAmount
			});
		} else {
			$(this).addClass('enabled').removeClass('disabled');
			alert('Enter valid amount');
		}
	});
});

$(document).ready(function () {
	// regidtration - signup - signin - reset password //

	$('#switch-to-signup').click(function () {
		console.log($(this).is(':checked'));
		if ($(this).is(':checked')) {
			$('#tab-guest .signup-element').removeClass('hide');
			UP_VARS.FORCE_SIGNUP = true;
		} else {
			$('#tab-guest .signup-element').addClass('hide');
			UP_VARS.FORCE_SIGNUP = false;
		}
	});

	$('#tab-forgot').on('click', '.send-token.enabled', function () {
		var data = {
			event: 'forgot_pass_init',
			action_btn: $('#tab-forgot').find('.send-token'),
			msg_el: $('#tab-forgot').find('.messaging')
		};
		PubSub.publish('auth_event', data);
	});

	$('#tab-reset').on('click', '.reset-pass-button.enabled', function () {
		var data = {
			event: 'reset_password',
			action_btn: $('#tab-reset').find('.reset-pass-button'),
			msg_el: $('#tab-reset').find('.messaging')
		};
		PubSub.publish('auth_event', data);
	});

	$('#tab-login').on('click', '.signin-button.enabled', function () {
		var data = {
			event: 'login',
			action_btn: $('#tab-login').find('.signin-button'),
			msg_el: $('#tab-login').find('.messaging')
		};
		PubSub.publish('auth_event', data);
	});

	$('#tab-guest').on('click', '.guest-button.enabled', function () {
		if (UP_VARS.FORCE_SIGNUP) {
			var data = {
				event: 'signup_override',
				action_btn: $('#tab-guest').find('.guest-button'),
				msg_el: $('#tab-guest').find('.messaging')
			};
		} else {
			var data = {
				event: 'guest_checkout',
				action_btn: $('#tab-guest').find('.guest-button'),
				msg_el: $('#tab-guest').find('.messaging')
			};
		}
		PubSub.publish('auth_event', data);
	});

	$('#tab-guest').find('input[type="text"]').keypress(function (e) {
		if (e.which == '13') {
			if (UP_VARS.FORCE_SIGNUP) {
				var data = {
					event: 'signup_override',
					action_btn: $('#tab-guest').find('.guest-button'),
					msg_el: $('#tab-guest').find('.messaging')
				};
			} else {
				var data = {
					event: 'guest_checkout',
					action_btn: $('#tab-guest').find('.guest-button'),
					msg_el: $('#tab-guest').find('.messaging')
				};
			}
			PubSub.publish('auth_event', data);
		}
	});

	$('#tab-login').find('input[type="text"], input[type="password"]').keypress(function (e) {
		if (e.which == '13') {
			var data = {
				event: 'login',
				action_btn: $('#tab-login').find('.signin-button'),
				msg_el: $('#tab-login').find('.messaging')
			};
			PubSub.publish('auth_event', data);
		}
	});

	$('#tab-signup').on('click', '.signup-button.enabled', function () {
		var data = {
			event: 'signup_init',
			action_btn: $('#tab-signup').find('.signup-button'),
			msg_el: $('#tab-signup').find('.messaging')
		};
		PubSub.publish('auth_event', data);
	});

	$('#tab-signup').find('input[type="text"], input[type="password"]').keypress(function (e) {
		if (e.which == '13') {
			var data = {
				event: 'signup_init',
				action_btn: $('#tab-signup').find('.signup-button'),
				msg_el: $('#tab-signup').find('.messaging')
			};
			PubSub.publish('auth_event', data);
		}
	});

	$('#forgot').on('click', '.enabled.otp', function () {

		var data = {
			event: 'forgot_pass_init',
			action_btn: $('#forgot').find('.otp'),
			msg_el: $('#forgot').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$('#tab-signup').on('click', '.resend.enabled', function () {
		var data = {
			event: 'resend_otp',
			action_btn: $('#signup').find('.resend'),
			msg_el: $('#signup').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$('#forgot').on('click', '.resend.enabled', function () {

		var data = {
			event: 'resend_token',
			action_btn: $('#forgot').find('.resend'),
			msg_el: $('#forgot').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$('#forgot').on('click', '.enabled.reset', function () {
		var data = {
			event: 'reset_password',
			action_btn: $('#forgot').find('.resend'),
			msg_el: $('#forgot').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$('#tab-signup').on('click', '.enabled.otp', function () {
		var data = {
			event: 'signup_init',
			action_btn: $('#signup').find('.otp'),
			msg_el: $('#signup').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$('#tab-verify').on('click', '#submit-verify', function () {
		var data = {
			event: 'signup',
			action_btn: $('#tab-verify').find('#submit-verify'),
			msg_el: $('#tab-verify').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$('#tab-verify').on('click', '.resend-otp.enabled', function () {
		var data = {
			event: 'resend_otp',
			action_btn: $('#tab-verify').find('.resend-otp'),
			msg_el: $('#tab-verify').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$('#tab-checkphone').on('click', '.enabled.social-confirm', function () {
		var data = {
			event: 'check_phone',
			action_btn: $('#tab-checkphone').find('.button'),
			msg_el: $('#tab-checkphone').find('.messaging')
		};

		PubSub.publish('auth_event', data);
	});

	$(document).on('click', '.place-order.enabled', function () {

		if (!UP_MISC.selectedAddress()) {
			alert('Session Expired!');
			UPDOM.resetCart();
			window.location = 'order';
			return false;
		}

		var payment = $('.payment-wrapper').find('.radio-wrapper.active').find('input').data('name');

		if (payment == '') {
			alert('Select Payment Mode');
			return false;
		}

		if (payment == 'paytm') {
			window.payTMwin = window.open("", "_blank", "");
			$(payTMwin.document.body).html("<div style=\"text-align:center;\"><img src=\"http://" + window.location.host + "/images/ring.gif\" height=\"120\" width=\"120\" style=\"display:inline-block; margin-top:100px;\"/></div>");
		}

		if (UP.localStorage.getItem('guest')) {
			var address_el_arr = [];
			var valid = true;
			var data = {};

			$('.add-edit-new-address-block').find('input').each(function (i, d) {
				var name = $(d).data('name');
				var required = $(d).data('required');
				var inputval = $(d).val();
				data[name] = inputval;
				if (required && (!inputval || $.trim(inputval) == '')) {
					$(d).addClass('required');
					valid = false;
				} else {
					if (name == 'pin' && !UP.intOnly(inputval)) {
						$(d).addClass('required');
						valid = false;
					} else {
						$(d).removeClass('required');
					}
				}
				//address_el_arr.push(inputval);
			});

			if (valid) {
				var guest_address = data;
				proceedToOrder();
			} else {
				if (window.payTMwin) {
					payTMwin.opener.focus();
					payTMwin.close();
				}
				$("html, body").animate({
					scrollTop: 0
				}, 50);
				alert('Add delivery address');
				return false;
			}
		} else {
			var currentAddress = false;
			if ($('.delivery-address-wrapper').data('new-address') == true) {
				var currentAddress = true;
			}
			if (!UP_VARS.CART.meta.address_id || currentAddress) {
				var valid = true;
				var data = {};
				$('.add-edit-new-address-block').find('input').each(function (i, d) {
					var name = $(d).data('name');
					var required = $(d).data('required');
					var inputval = $(d).val();
					data[name] = inputval;
					if (required && (!inputval || $.trim(inputval) == '')) {
						$(d).addClass('required');
						valid = false;
					} else {
						if (name == 'pin' && !UP.intOnly(inputval)) {
							$(d).addClass('required');
							valid = false;
						} else {
							$(d).removeClass('required');
						}
					}
				});

				if (valid) {

					UPDOM.spinner(true);

					data.lat = UP.localStorage.getItem('selected_location').lat ? UP.localStorage.getItem('selected_location').lat : null;
					data.lng = UP.localStorage.getItem('selected_location').lng ? UP.localStorage.getItem('selected_location').lng : null;

					UP.saveUserAddress(data, function (d) {
						UP_VARS.CART.meta.address_id = d.address_id;
						UP.getuserInfo(function (d) {
							var user = d.objects[0];
							UP.localStorage.setItem('user_info', d);
							UPDOM.spinner(false);
							proceedToOrder();
						});
					}, function (err) {
						if (window.payTMwin) {
							payTMwin.opener.focus();
							payTMwin.close();
						}
						UPDOM.spinner(false);
						if (err.responseJSON && err.responseJSON.message) {
							err = err.responseJSON.message;
						} else {
							var err = 'Error, Try Again!';
						}
						alert('Failed to save address. Please try again.');
					});
				} else {
					if (window.payTMwin) {
						payTMwin.opener.focus();
						payTMwin.close();
					}
					$("html, body").animate({
						scrollTop: 0
					}, 1500);
					alert('Please add an address!');
				}
			} else {
				proceedToOrder();
			}
		}

		function proceedToOrder() {
			var NOW = false;
			if ($('.tab-items .is-active').data('time') == '1') {
				NOW = true;
			}
			if (!NOW) {
				if (!UP_VARS.SLOT) {
					if (!UPDOM.timePicker.isValid()) {
						if (window.payTMwin) {
							payTMwin.opener.focus();
							payTMwin.close();
						}
						var el = $('.up-timepicker');
						$("html, body").animate({
							scrollTop: 0
						}, 50);

						alert('Enter valid delivery time!');
						return false;
					}
				}
			} else {
				if (!UPDOM.timePicker.isValidCTime()) {
					if (window.payTMwin) {
						payTMwin.opener.focus();
						payTMwin.close();
					}
					//$('#delivery-now').html('Can\'t delivery now!')
					alert('Delivery not possible at this time!');
					return false;
				}
			}
			var submit = $(this);
			var orderItems = [];

			for (var x in UP_VARS.CART.items) {
				orderItems.push({
					"id": UP_VARS.CART.items[x].id,
					"item_price": UP_VARS.CART.items[x].item_price,
					"options": UP_VARS.CART.items[x].options && UP_VARS.CART.items[x].options.length > 0 ? UP_VARS.CART.items[x].options : null,
					"quantity": UP_VARS.CART.items[x].quantity,
					"title": UP_VARS.CART.items[x].item_title,
					"category_name": UP_VARS.CART.items[x].category.name
				});
			}
			var store = UP.localStorage.getItem('selected_location').biz_detail.store;
			var payment = $('.payment-wrapper').find('.radio-wrapper.active').find('input').data('name');
			if (payment == '') {
				alert('Select Payment Mode');
				return false;
			}

			var order_payload = {
				payment_option: payment,
				order_type: "delivery",
				instructions: '',
				items: orderItems,
				delivery_datetime: new Date().getTime() + UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time,
				//time_slot_start: $('.timepicker').val().split('-')[0],
				//time_slot_end: $('.timepicker').val().split('-')[1],
				delivery_charge: UP_VARS.IS_PICKUP ? 0 : UP_VARS.CART.meta.delivery_charge,
				//packaging_charge: store.packaging_charge,
				biz_location_id: store.biz_location_id,
				order_subtotal: UP_VARS.CART.meta.total,
				tax_rate: 0,
				order_total: UP.getPayableAmount(),
				channel: "web",
				total_tax: UP_VARS.CART.meta.total_tax
			};

			if (!NOW) {
				if (UP_VARS.SLOT) {
					order_payload.time_slot_start = $('#delivery_datetime').val().split('-')[0];
					order_payload.time_slot_end = $('#delivery_datetime').val().split('-')[1];
				} else {
					order_payload.delivery_datetime = UPDOM.timePicker.getDeliveryTime();
				}
			}

			if (UP.localStorage.getItem('guest')) {
				order_payload.guest_address = guest_address;
				order_payload.phone = UP.localStorage.getItem('guest').customer_phone;
			} else {
				order_payload.address_id = UP_VARS.CART.meta.address_id;
				order_payload.phone = $('.delivery-info').find('.customer-phone').val();

				if (UP_VARS.CART.meta.coupon) {
					var couponDetail = UP_VARS.CART.meta.coupon;
					var newTotalTax = couponDetail.meta.item_taxes;
					var newTotal = couponDetail.meta.order_total;

					order_payload.coupon = couponDetail.code;

					order_payload.discount_applied = couponDetail.discount;

					//this is the amount -> subtotal + delivery_charge+packaging_charge - coupon_discount
					order_payload.order_total = UP.getPayableAmount() + couponDetail.discount;
					order_payload.total_tax = newTotalTax;
				}
			}

			UPDOM.spinner(true);
			submit.removeClass('enabled');

			UP.processOrder(order_payload, function (d) {
				afterOrderComplete({ d: d, order_payload: order_payload, cart: UP_VARS.CART });
				UPDOM.spinner(false);
			}, function (err) {
				console.log(err);
				alert(err);
				submit.addClass('enabled');
				UPDOM.spinner(false);
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': 'ordering',
					'eventLabel': 'order-failed',
					'eventValue': err
				});

				dataLayer.push({
					"event": "payment_failure",
					"method": order_payload.payment_option,
					"total": order_payload.order_total
				});
			});
		}
	});

	$(document).on('click', '.address', function () {
		$('.address').find('input').attr("checked", false);
		var address_id = $(this).data('address-id');
		var input = $(this).find('input');
		input.replaceWith('<input id="delivery-tag" type="radio" name="delivery-address" checked>');
		UP_VARS.CART.meta.address_id = parseInt(address_id);
	});

	$(document).on('click', '.address .edit', function () {
		var address_id = parseInt($(this).closest('.action-block').data('address-id'));
		var address = UP.localStorage.getItem('user_info').objects[0].addresses;
		var getAddressObj = _.find(address, { 'id': address_id });

		$('[data-name=tag]').val(getAddressObj.tag);
		$('[data-name=address_1]').val(getAddressObj.address_1);
		$('[data-name=address_2]').val(getAddressObj.address_2);
		$('[data-name=sub_locality]').val(getAddressObj.sub_locality);
		$('[data-name=pin]').val(getAddressObj.pin);
		$('.delivery-address-wrapper-block').hide();
		$('.add-edit-new-address-block').data({ 'edit': true, id: address_id }).show();
	});

	$(document).on('click', '.address .del', function () {
		var address_id = parseInt($(this).closest('.action-block').data('address-id'));
		UPDOM.spinner(true);
		UP.deleteAddress({ id: address_id }, function () {
			var userAddArr = UP.localStorage.getItem('user_info').objects[0].addresses;

			for (var x in userAddArr) {
				if (userAddArr[x].id == address_id) {
					userAddArr.splice(x, 1);
					break;
				}
			}

			var newUserInfo = UP.localStorage.getItem('user_info');
			newUserInfo.objects[0].addresses = userAddArr;
			deliveryPagerenderAddress(userAddArr);

			delete UP_VARS.CART.meta.address_id;
			UP.localStorage.setItem('cart', UP_VARS.CART);
			UP.localStorage.setItem('user_info', newUserInfo);
			UPDOM.spinner(false);
		}, function (err) {
			alert(err);
			UPDOM.spinner(false);
		});
	});

	$(document).on('click', '#save_address', function () {
		var valid = true;
		var data = {};
		$('.add-edit-new-address-block').find('input').each(function (i, d) {
			var name = $(d).data('name');
			var required = $(d).data('required');
			var inputval = $(d).val();
			data[name] = inputval;
			if (required && (!inputval || $.trim(inputval) == '')) {
				$(d).addClass('required');
				valid = false;
			} else {
				if (name == 'pin' && !UP.intOnly(inputval)) {
					$(d).addClass('required');
					valid = false;
				} else {
					$(d).removeClass('required');
				}
			}
		});

		if ($('.add-edit-new-address-block').data('edit')) {
			data.id = parseInt($('.add-edit-new-address-block').data('id'));
		} else {
			delete data.id;
		}

		if (valid) {
			UPDOM.spinner(true);

			data.lat = UP.localStorage.getItem('selected_location').lat ? UP.localStorage.getItem('selected_location').lat : null;
			data.lng = UP.localStorage.getItem('selected_location').lng ? UP.localStorage.getItem('selected_location').lng : null;

			UP.saveUserAddress(data, function (d) {
				UP_VARS.CART.meta.address_id = d.address_id;
				UP.getuserInfo(function (d) {
					var user = d.objects[0];
					UP.localStorage.setItem('user_info', d);
					UPDOM.spinner(false);
					deliveryPagerenderAddress(d.objects[0].addresses);
					$('.delivery-address-wrapper-block').show();
					$('.add-edit-new-address-block').hide();
					alert('Address successfully saved!');
				});
			}, function (err) {
				UPDOM.spinner(false);
				if (err.responseJSON && err.responseJSON.message) {
					err = err.responseJSON.message;
				} else {
					var err = 'Error, Try Again!';
				}
				alert('Failed to save address. Please try again.');
			});
		}
	});

	$(document).on('click', '#update_password', function () {
		var valid = true;
		var data = {};
		$('.change-password-block').find('input').each(function (i, d) {
			var key = $(d).data('name');
			var val = $(d).val();
			data[key] = val;

			if (!val || val == '' || $.trim($(d).val()) == '') {
				$(d).addClass('required');
				valid = false;
			}
		});

		data.phone = UP.localStorage.getItem('logged_user').phone_num;

		if (valid) {
			UP.resetPassword(data, function (d) {
				UPDOM.spinner(true);
				alert(d.message);
				window.location = 'order';
			}, function (err) {
				UPDOM.spinner(false);
				if (err.responseJSON && err.responseJSON.message) {
					err = err.responseJSON.message;
				} else {
					err = UP_CONFIG.error_msg.default;
				}
				alert(err);
			});
		}
	});

	$(document).on('click', '.nav-to-forgot', function (e) {
		e.preventDefault();
		$('.tab-items li > a').removeClass('is-active');
		$('.tab-item-content > div').removeClass('is-open');
		$('#tab-forgot').addClass('is-open');
	});

	$(document).on('click', '.back-to-login', function (e) {
		e.preventDefault();
		$('.tab-item-content > div').removeClass('is-open');
		$('#tab-login').addClass('is-open');
	});
	$('.store-block').on('click', 'li', function () {
		$('.store-block li').removeClass('active');
		$(this).addClass('active');
		var lat = $(this).find('a').data('lat');
		var lng = $(this).find('a').data('lng');
		if (lat && lng) {
			var latlngObj = CreateLatLngObject(lat, lng);
			mapObject.panTo(latlngObj);
			mapObject.setZoom(11);
			var biz_location_id = parseInt($(this).find('a').data('biz-location-id'));
			var marker = _.find(STORES_OBJ.markers, { 'store_id': biz_location_id });
			google.maps.event.trigger(marker, 'click');
		}
	});

	$('.gmap_wrapper').on('click', '.search-store', function () {
		//debugger
		var filteredStores = [];
		var str = $('.store-search-str').val().toLowerCase();
		var stores = STORES_OBJ.store;
		if (str && str != '' && $.trim(str) != '') {
			for (var ss in stores) {
				var strTitle = stores[ss].name.toLowerCase();
				if (strTitle.search(str) > -1) {
					filteredStores.push(stores[ss]);
				}
			}
			if (filteredStores.length > 0) {
				drawMap(filteredStores);
			} else {
				alert('No store found');
			}
		} else {
			resetMap();
		}
	});

	$('.gmap_wrapper').on('keyup', '.store-search-str', function () {
		//debugger
		var filteredStores = [];
		var str = $('.store-search-str').val().toLowerCase();
		var stores = STORES_OBJ.store;
		if (str && str != '' && $.trim(str) != '') {
			for (var ss in stores) {
				var strTitle = stores[ss].name.toLowerCase();
				var strAdd = stores[ss].address.toLowerCase();
				if (strTitle.search(str) > -1 || strAdd.search(str) > -1) {
					filteredStores.push(stores[ss]);
				}
			}
			if (filteredStores.length > 0) {
				drawMap(filteredStores);
			}
		}
	});

	$('.gmap_wrapper').find('.store-search-str').keypress(function (e) {
		if (e.which == '13') {
			var filteredStores = [];
			var str = $('.store-search-str').val().toLowerCase();
			var stores = STORES_OBJ.store;
			if (str && str != '' && $.trim(str) != '') {
				for (var ss in stores) {
					var strTitle = stores[ss].name.toLowerCase();
					var strAdd = stores[ss].address.toLowerCase();
					if (strTitle.search(str) > -1 || strAdd.search(str) > -1) {
						filteredStores.push(stores[ss]);
					}
				}
				if (filteredStores.length > 0) {
					drawMap(filteredStores);
				} else {
					alert('No store found!');
				}
			}
		}
	});

	$(document).on('click', '.social-login', function (e) {
		e.preventDefault();
		var provider = $(this).data('provider');
		var btn = $(this);
		//btn.addClass('blink');
		UPDOM.processSocialLogin({ provider: provider }, function () {
			//	btn.removeClass('blink');
		}, function () {
			//	btn.removeClass('blink');
		});
	});

	$(document).on('click', '.contact-us-button.enabled', function (e) {
		var valid = true;
		var input_name, input_phone, input_email, input_message, input_dob;
		var form_type = $(this).data('purpose');
		var data = {};
		$('.contact-us-form > input, textarea,select,#calendar').each(function (i, d) {

			var name = $(d).data('name');
			var inputval = $(d).val();

			if ($.trim(inputval).length === 0) {
				alert('Please enter a valid value for "' + name + '"');
				$(this).focus();
				valid = false;

				return false;
			}

			// if ( name === 'name' ) {
			// 	if ( $.trim(inputval).length === 0 ) {
			// 		alert('Please enter your name');
			// 		$(this).focus();
			// 		valid = false;
			// 		return false;
			// 	}

			// 	input_name = inputval;
			// }

			// if ( name === 'phone' ) {
			// 	if ( $.trim(inputval).length === 0 ) {
			// 		alert('Please enter your phone');
			// 		$(this).focus();
			// 		valid = false;
			// 		return false;
			// 	}

			// 	input_phone = inputval;
			// }

			// if ( name === 'email' ) {
			// 	if ( !UP.emailValid($.trim(inputval)) ) {
			// 		alert('Please enter a valid email');
			// 		$(this).focus();
			// 		valid = false;
			// 		return false;
			// 	}

			// 	input_email = inputval;
			// }

			data[name] = inputval;

			// if ( $.trim(inputval).length === 0 && $(this).hasClass('reqd') ){
			// 	$(d).addClass('required');
			// 	valid = false;
			// }
		});

		switch (form_type) {
			case 'boxc':
				data['subject'] = "Contact alert - BoxC";
				break;
			case 'subscription':
				data['subject'] = "Contact alert - Subscription";
				break;
			case 'contact-us':
				data['subject'] = "Contact alert - Contact Us";
				break;
		}
		if ('message' in data) {
			data['purpose'] = 'New contact request';
			console.log("inside the contactus");

			try {
				createContact_agile(data['email'], data['name'], data['phone'], 'contactus');
			} catch (e) {
				console.error(e);
			}
		} else if ('qty' in data) {
			data['message'] = 'Bulk order request for quantity:: ' + data['qty'] + '. Expected delivery date:: ' + data['delivery_dt'];
			data['purpose'] = 'Bulk order request';
			console.log("inside the hightea");

			try {
				createContact_agile(data['email'], data['name'], data['phone'], 'hightea');
			} catch (e) {
				console.error(e);
			}
		} else if ('city' in data) {
			data['city'] = data['city'];
			data['company'] = data['company'];
			console.log("inside the boxc");
			try {
				createContact_agile(data['email'], data['name'], data['phone'], 'boxc');
			} catch (e) {
				console.error(e);
			}
		} else if ('gender' in data) {
			console.log("inside the prioritea");
			try {
				createContact_agile(data['email'], data['name'], data['phone'], 'PrioriTea');
			} catch (e) {
				console.error(e);
			}
		}

		console.log(data);

		var submit = $(this);
		if (valid) {
			UPDOM.spinner(true);
			UP.contactUs(data, function (d) {
				UPDOM.spinner(false);
				submit.removeClass('enabled').hide();
				$('.contact-us-form > input, textarea,select,#calendar').hide();

				submit.parent().append("<div class='button default enabled x-large rounded' style='font-size:14px;'>Thank you for writing to us! We check our emails on the go and we'll respond as soon as possible</div>");
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': 'contact',
					'eventLabel': data['purpose']
				});

				if (form_type == 'boxc') {
					goog_report_conversion('https://chaipoint.com/boxc.html');
				}
			}, function (err) {
				UPDOM.spinner(false);
				if (err.responseJSON) {
					err = err.responseJSON.message;
				} else {
					var err = 'Error, Try Again!';
				}
				alert(err);
				submit.addClass('enabled');
			});
		}
	});
});

function afterOrderComplete(data) {
	MP.conversion();
	UPDOM.resetCart();
	UPDOM.spinner(true);
	UP.localStorage.setItem('success_order', data);

	var order_payload = data.order_payload;
	var order_meta = {
		'id': data.d.order_id,
		'affiliation': 'UrbanPiper',
		'revenue': order_payload.order_total,
		'tax': order_payload.total_tax,
		'shipping': order_payload.delivery_charge,
		'coupon': order_payload.coupon ? order_payload.coupon.toUpperCase() : null,
		'option': order_payload.payment_option
	};

	var gtm_products = [];
	order_payload.items.forEach(function (item) {
		var itemObj = {
			'name': item.title,
			'id': item.id,
			'price': item.item_price,
			'brand': 'Chai Point',
			'category': item.category_name,
			'quantity': item.quantity
		};

		if (item.options && item.options.length > 0) {
			item.options.forEach(function (itemOpt) {
				itemObj.price += itemOpt.price;
			});
		}

		gtm_products.push(itemObj);
	});

	var __store = UP.localStorage.getItem('selected_location').biz_detail.store;
	var __phone = UP.localStorage.getItem('logged_user') ? UP.localStorage.getItem('logged_user').phone : UP.localStorage.getItem('guest').customer_phone;
	dataLayer.push({
		"event": "order_placed",
		"order_id": data.d.order_id,
		"items": order_payload.items,
		"prod_count": order_payload.items.length,
		"payment_type": order_payload.payment_option,
		"subtotal": order_payload.method,
		"taxes": data.cart.meta.total_tax,
		"delivery_fee": data.cart.meta.delivery_charge,
		"discount": data.cart.meta.delivery_charge,
		"total": order_payload.order_total,
		"store_name": __store.name,
		"store_code": __store.biz_location_id,
		"city": __store.city,
		"mobile": __phone,
		"booking_channel": "web",
		"quantity": data.cart.meta.item_count

	});

	if (order_payload.payment_method != 'cash') {
		dataLayer.push({
			"event": "payment_success",
			"method": order_payload.payment_option,
			"total": order_payload.order_total
		});
	}

	dataLayer.push({
		'event': 'purchaseComplete',
		'ecommerce': {
			'purchase': {
				'actionField': order_meta,
				'products': gtm_products
			}
		},
		'eventCallback': function eventCallback() {
			if (UP.localStorage.getItem('guest')) {
				UP.localStorage.removeItem('guest');
				window.location = '/order-confirmation.html';
			} else {
				UP.getuserInfo(function (d) {
					UP.localStorage.setItem('user_info', d);
					window.location = '/order-confirmation.html';
				});
			}
		}
	});
}

//find better implementation
function closeLoginPopup() {
	UPDOM.loginPrompt(false);
	clearLoginForm('#signup');
	clearLoginForm('#forgot');
	clearLoginForm('#signup');
	$('.modal-sections').hide();
	$('#signup').show();
	$('body').removeClass('up-modal-added');
}
function clearLoginForm(parentEl) {
	$('#login').find('#guest_checkout').data('status', 1);
	$(parentEl).find('input[type="text"], input[type="email"], input[type="password"]').val('');
	$(parentEl).find('.messaging').hide();

	var submit = $(parentEl).find('.button');

	if (parentEl == '#signup') {
		$('#signup').find('.signup-section').show();
		$('#signup').find('.verify-section').hide();
		submit.removeClass('blink verify').addClass('enabled otp').html('Signup');

		$('#signup').find('.resend-token').addClass('enabled');;
		$('#signup').find('.otp-wait').removeClass('h-load');;
	}

	if (parentEl == '#forgot') {
		submit.removeClass('reset').addClass('otp');
		$('#forgot').find('.reset-section').hide();
		$('#forgot').find('.resend-token').addClass('enabled');
		$('#forgot').find('.otp-wait').removeClass('h-load');;
	}
}
function addGooglePlaceInput() {
	var google_location_input = GOOGLE_LOCATION_INPUT;
	var resetLocationInput = function resetLocationInput() {
		for (var x in google_location_input) {
			$(google_location_input[x]).val('');
		}
	};

	for (var x in google_location_input) {
		var input = $(google_location_input[x]);

		if (input.length > 0) {
			UPDOM.addGooglePlaceApi({ el: input }, function (d) {
				UPDOM.setLocation(d, function () {}, function () {
					resetLocationInput();
				});
			}, function () {
				alert('Address not found!');
			});
		}
	}

	if ($('body').data('app') == 'store-locate') {
		resetMap();
	}
}

var drawMap = function drawMap(data) {
	$(".sliding-panel-content,.store-block").mCustomScrollbar('destroy');

	var storeMarkup = '';

	for (var s in data) {
		var tempStore = data[s];
		storeMarkup += "<li class=\"" + (s == 0 ? 'active' : '') + "\">\n\t\t\t<a href=\"javascript:void(0);\" class=\"loc_link\" data-biz-location-id=\"" + tempStore.biz_location_id + "\" data-lat=\"" + tempStore.lat + "\" data-lng=\"" + tempStore.lng + "\" data-title=\"" + tempStore.name + "\">\n\t\t\t\t<svg class=\"icon icon-marker\"><use xlink:href=\"images/home-icons.svg#icon-marker\"></use></svg>\n\t\t\t\t<span class=\"content-block\">\n\t\t\t\t\t<span class=\"title\">" + tempStore.name + "</span>\n\t\t\t\t\t<span class=\"address\">\n\t\t\t\t\t\t" + tempStore.address + "\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\n\t\t\t</a>\n\t\t</li>";
	}
	$('.store-block').html(storeMarkup);

	$(".sliding-panel-content,.store-block").mCustomScrollbar({
		theme: "minimal"
	});
	createMap(data);
};
function resetMap() {
	UPDOM.spinner(true);
	UP.fetchStores('null', function (d) {
		STORES_OBJ.store = d.stores;
		drawMap(d.stores);
		UPDOM.spinner(false);
	});
}
function renderCart() {
	if (UP_VARS.CART.items.length > 0) {
		var cartMarkup = '';
		for (var x in UP_VARS.CART.items) {
			var item = UP_VARS.CART.items[x];
			var optionString = false;
			if (UP_VARS.CART.items[x].options && UP_VARS.CART.items[x].options.length > 0) {
				optionString = [];
				for (var o in UP_VARS.CART.items[x].options) {
					optionString.push(UP_VARS.CART.items[x].options[o].title);
				}
				optionString = optionString.join(' - ');
			}
			cartMarkup += "<tr class=\"item\" data-item-id=\"" + item.id + "\" data-item-sig=\"" + item.sig + "\" data-option-id=\"" + (UP_VARS.CART.items[x].options[0] ? UP_VARS.CART.items[x].options[0].id : "") + "\">\n\t\t\t\t<td class=\"img-wrapper\">\n\t\t\t\t\t<span class=\"img-wrapper-block\">\n\t\t\t\t\t\t<span class=\"img-overlay\"></span>\n\t\t\t\t\t\t<img src=\"" + item.image_url + "\" alt=\"\" style=\"border-radius: 3px\"/>\n\t\t\t\t\t</span>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"title-wrapper\">\n\t\t\t\t\t<span class=\"title\">" + item.item_title + " " + (optionString ? ' - ' + optionString : '') + "</span>\n\t\t\t\t\t<span class=\"price-wrapper\">\n\t\t\t\t\t\t<span class=\"price\">\n\t\t\t\t\t\t\t" + (UP_VARS.CART.items[x].item_price + (UP_VARS.CART.items[x].total_options_price ? UP_VARS.CART.items[x].total_options_price : 0)) + "\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"quantity-wrapper\">\n\t\t\t\t\t<span class=\"cart-quantity-wrapper\">\n\t\t\t\t\t\t<input type=\"text\" value=\"" + item.quantity + "\" class=\"quantity\" readonly=\"readonly\">\n\t\t\t\t\t\t<span class=\"plus\"></span>\n\t\t\t\t\t\t<span class=\"minus\"></span>\n\t\t\t\t\t\t<span class=\"cart-quantity-overlay\"></span>\n\t\t\t\t\t</span>\n\t\t\t\t</td>\n\t\t\t\t<td class=\"action-wrapper\">\n\t\t\t\t\t<a href=\"#\" class=\"del item-delete-all-cart\">\n\t\t\t\t\t<svg class=\"icon icon-delete\"><use xlink:href=\"images/home-icons.svg#icon-delete\"></use></svg>\n\t\t\t\t\t</a>\n\t\t\t\t</td>\n\t\t\t</tr>";
		}
	} else {
		var cartMarkup = '<div class="bold text-center padding-10">No item in your cart!</div>';
	}

	$('.review-table').html(cartMarkup);
}
//misc functions
function nametotag(str) {
	var hash_tag = str.toLowerCase().split(' ').join('-');
	return hash_tag;
}
function setBillInfo() {

	var total = UP_VARS.CART.meta.total;
	var storeChargeDetail = UP.localStorage.getItem('selected_location').biz_detail.store;
	var packaging_charge = storeChargeDetail.packaging_charge;
	var delivery_charge = storeChargeDetail.delivery_charge;
	UP_VARS.CART.meta.delivery_charge = delivery_charge;
	var total_tax = UP_VARS.CART.meta.total_tax;
	UP.preProcessOrder(getOrderPayload(), function (d) {
		//console.log(d)
		delivery_charge = d.order.delivery_charge;
		UP_VARS.CART.meta.total_tax = d.order.item_taxes;
		total_tax = UP_VARS.CART.meta.total_tax;
		$('.delivery-cont').removeClass('blink');
		if (delivery_charge > 0) {
			$('.billing-section .delivery-charge').html(delivery_charge);
		} else {
			$('.delivery-cont').hide();
		}
		UP_VARS.CART.meta.delivery_charge = delivery_charge;
		preProcesscb(delivery_charge);
	}, function (err) {
		$('.delivery-cont').removeClass('blink');
		if (delivery_charge > 0) {
			$('.billing-section .delivery-charge').html(delivery_charge);
		} else {
			$('.delivery-cont').hide();
		}
		preProcesscb(delivery_charge);
	});

	function preProcesscb(dc) {
		var total_after_added_tax = (total_tax + UP_VARS.CART.meta.total + dc + packaging_charge).toFixed(2);
		var discount = UP_VARS.CART.meta.coupon ? UP_VARS.CART.meta.coupon.discount : false;

		if (UP_VARS.CART.meta.item_count > 0) {
			$('.billing-section .subtotal').html(total);
			$('.billing-section .tax').html(total_tax);
			$('.billing-section .total-price').html(total_after_added_tax);

			if (discount) {
				var couponDetail = UP_VARS.CART.meta.coupon;
				var newTotalTax = couponDetail.meta.item_taxes;
				var newTotal = couponDetail.meta.order_total;
				var delivery_charge = couponDetail.meta.delivery_charge;
				UP_VARS.CART.meta.delivery_charge = delivery_charge;

				$('.billing-section .delivery-charge').html(delivery_charge);
				$('.billing-section .tax').html(newTotalTax);
				$('.billing-section .discount').html(discount);
				$('.billing-section .total-price').html(newTotal);
				$('.discount-cont').show();

				$('.promo-code-content').show();
				$('.promo-code-text').hide();
			} else {
				$('.discount-cont').hide();
				//$('.promo-code-content').hide();
				//$('.promo-code-text').show();
			}
		} else {
			$('.billing-section').html('<div class="bold">No item in your cart</div>');
		}
	}
}
function revalidateCoupon() {
	var code = UP_VARS.CART.meta.coupon.code;
	$('.promo-code-content').find('input').val(code);
	var bill_amount = UP_VARS.CART.meta.total;
	var el = $('.promo-code-content').find('.promo-msg');
	el.html('Revalidating..');
	var orderItems = [];
	for (var x in UP_VARS.CART.items) {
		orderItems.push({
			"id": UP_VARS.CART.items[x].id,
			"item_price": UP_VARS.CART.items[x].item_price,
			"options": UP_VARS.CART.items[x].options && UP_VARS.CART.items[x].options.length > 0 ? UP_VARS.CART.items[x].options : null,
			"quantity": UP_VARS.CART.items[x].quantity
		});
	}

	var deliveryTime = new Date().getTime();
	var store = UP.localStorage.getItem('selected_location').biz_detail.store;
	//var payment = $('.payment-options-container>div.selected').data('value');
	var coupon_payload = { "code": code, "order": {
			"channel": "web",
			"order_type": UP_VARS.IS_PICKUP ? "pickup" : "delivery",
			"delivery_charge": UP_VARS.IS_PICKUP ? 0 : UP_VARS.CART.meta.delivery_charge,
			"delivery_datetime": deliveryTime,
			"payment_option": '',
			"biz_location_id": store.biz_location_id,
			"items": orderItems
		}
	};
	UP.processCoupon(coupon_payload, function (d) {
		//el.html(d.msg);
		el.removeClass('promo-error').addClass('promo-success').hide().html(d.msg).fadeIn();
		setBillInfo();
	}, function (err) {
		//el.html(err.msg);
		el.removeClass('promo-error').addClass('promo-success').hide().html(err.msg).fadeIn();
		setBillInfo();
	});
}
function renderAddress() {
	var fillAddress = function fillAddress(user) {
		var addresses = user.addresses;
		var addressMarkup = '';

		if (addresses.length > 0) {
			UP_VARS.CART.meta.address_id = addresses[0].id;
			for (var x in addresses) {
				addressMarkup += "<div class=\"address\" data-address-id=\"" + addresses[x].id + "\">\n\t\t\t\t\t<span class=\"radio-wrapper\">\n\t\t\t\t\t\t<input id=\"delivery-" + addresses[x].tag + "\" type=\"radio\" " + (x == 0 ? "checked" : '') + " name=\"delivery-address\"/>\n\t\t\t\t\t\t<label for=\"delivery-" + addresses[x].tag + "\"><span></span></label>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class=\"title\">" + addresses[x].tag + "</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t" + addresses[x].sub_locality + "<br>\n\t\t\t\t\t\t" + addresses[x].address_1 + "<br>\n\t\t\t\t\t\t" + addresses[x].address_2 + "<br>\n\t\t\t\t\t\t" + addresses[x].city + "<br>\n\t\t\t\t\t\t" + addresses[x].pin + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
			}
		}

		addressMarkup += "<div class=\"address add-new-address\">\n\t\t\t<span>+ Address</span>\n\t\t</div>";

		$('.delivery-address-wrapper-block').html(addressMarkup);

		if (addresses.length == 0) {
			$('.delivery-address-wrapper').data('new-address', true);
			$('.delivery-address-wrapper-block').hide();
			$('.add-edit-new-address-block').data('edit', false).fadeIn();
			$('.delivery-address-wrapper').prev().html('Add Delivery Address');
		}
	};
	if (UP.localStorage.getItem('guest')) {
		$('.delivery-address-wrapper').data('new-address', true);
		$('.delivery-address-wrapper-block').hide();
		$('.add-edit-new-address-block').data('edit', false).fadeIn();
		$('.delivery-address-wrapper').prev().html('Add Delivery Address');
	} else {
		if (UP.localStorage.getItem('user_info')) {
			fillAddress(UP.localStorage.getItem('user_info').objects[0]);
		} else {
			UP.getuserInfo(function (d) {
				var user = d.objects[0];
				UP.localStorage.setItem('user_info', d);
				fillAddress(user);
			});
		}
	}
}
function loggedIn(cb) {
	var user = UP.localStorage.getItem('logged_user');
	var auth = user.auth;
	UP_CONFIG.AUTH_USER = auth;
	$('.login-required').removeClass('hide');
	$('.hide-on-login').addClass('hide');

	var fillInfo = function fillInfo(data) {
		$('.wallet-price').html(data.balance);
		$('.user-name').html(data.name);
		$('.user-phoneno').html(UP.localStorage.getItem('logged_user').phone_num);
	};
	// if(UP.localStorage.getItem('user_info')){
	// 	var user = UP.localStorage.getItem('user_info').objects[0];
	// 	fillInfo(user);
	//
	// 	MP.identify(user, UP.localStorage.getItem('logged_user').authKey);
	//
	// 	if(cb){
	// 		cb();
	// 	}
	// }else{
	// 	UP.getuserInfo(function(d){
	// 		var user = d.objects[0];
	// 		UP.localStorage.setItem('user_info', d);
	// 		fillInfo(user);
	//
	// 		MP.identify(user, UP.localStorage.getItem('logged_user').authKey);
	//
	// 		if(cb){
	// 			cb();
	// 		}
	// 	})
	// }
	UP.getuserInfo(function (d) {
		var user = d.objects[0];
		UP.localStorage.setItem('user_info', d);
		fillInfo(user);

		MP.identify(user, UP.localStorage.getItem('logged_user').authKey);

		if (cb) {
			cb();
		}
	});
}

PubSub.subscribe('cart', function (t, data) {
	if (!UP_MISC.selectedAddress()) {
		popLocationPrompt();
		UPDOM.resetCart();
		$('.quantity-wrapper').hide();
		$('.add-to-cart').show();
		return false;
	}

	UP.processCart(data);

	var item_count = UP.getCartObj().meta.item_count;

	// do all dom manipulation / and events when item added / deleted
	$('.cart-text-no').html(item_count);

	var el = data.el;
	var item_sig = data.item.sig;
	var cart_items = UP.getCartObj().items;
	var ifAdded = _.filter(cart_items, { 'sig': item_sig });

	var quant = 0;
	if (el) {
		if (ifAdded && ifAdded.length > 0) {
			var quant = _.reduce(ifAdded, function (s, entry) {
				return s + entry.quantity;
			}, 0);

			el.find('.add-to-cart').hide();
			el.find('.quantity-wrapper').show();

			el.find('.quantity').val(quant);
		} else {
			el.find('.quantity-wrapper').hide();
			el.find('.add-to-cart').show();
		}
	}

	if ($('body').data('app') == 'checkout') {
		if (item_count == 0) {
			UPDOM.spinner(true);
			window.location = 'order';
			return false;
		}
		if (quant == 0 || data.renderCart) {
			renderCart();
		}

		if (UP_VARS.CART.meta.coupon) {
			revalidateCoupon();
		} else {
			setBillInfo();
		}
	}

	// dataLayer.push({
	// 	"event": "cart",
	// 	"items": UP_VARS.CART.items,
	// 	"cart_total": UP_VARS.CART.meta.total,
	// 	"quantity": UP_VARS.CART.meta.item_count,
	// 	"prod_count": UP_VARS.CART.items.length
	// })
});
PubSub.subscribe('auth_event', function (t, data) {
	var action_btn = data.action_btn;
	var msg_el = data.msg_el;
	msg_el.hide();

	switch (data.event) {
		case 'login':
			processLogin();
			break;
		case 'signup_init':
			signupInit();
			break;
		case 'resend_otp':
			resendOtp();
			break;
		case 'signup':
			signup();
			break;
		case 'forgot_pass_init':
			initForgotPass();
			break;
		case 'resend_token':
			resendToken();
			break;
		case 'reset_password':
			resetPassword();
			break;
		case 'check_phone':
			checkPhone();
			break;
		case 'guest_checkout':
			guestCheckout();
			break;
		case 'signup_override':
			signupInitFromGuest();
			break;
		default:
			console.log('auth_event not fired properly!');
	}

	function guestCheckout() {
		var phone = $('#tab-guest').find('.phone').val();
		var name = $('#tab-guest').find('.name').val();

		if (!name || $.trim(name) == '') {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter Valid Name.', type: 'error' });
			return false;
		}
		if (!UP.phonenoValid(phone)) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid 10 digit phone no.', type: 'error' });
			return false;
		}

		var phone = UP_CONFIG.COUNTRY_CODE + phone;
		var data = {
			"customer_name": name,
			"customer_phone": phone
		};

		UP.enableGuest(data, function () {
			UP.localStorage.setItem('guest', data);

			// dataLayer.push({
			// 	"event":"guest_checkout",
			// 	"name":name,
			// 	"mobile":phone,
			// 	"eventCallback":function(){
			// 		location.reload(true);
			// 	}
			// })
			var _guest_checkout_data = {
				event: "guest_checkout",
				phone: data.customer_phone,
				email: "",
				name: data.customer_name,
				login_type: "",
				device: mobilecheck() ? "mobile_web" : "web",
				url: ""
			};
			localStorage.setItem('need_to_push_to_gtm', JSON.stringify(_guest_checkout_data));
			location.reload(true);
			// dataLayer.push({
			// 	"event":"guest_checkout",
			// 	//"email":signup_detail_gtm.email,
			// 	"device":(mobilecheck() ? "mobile_web" : "web"),
			// 	"name":data.customer_name,
			// 	"mobile":data.customer_phone,
			// 	"eventCallback":function(){
			// 		location.reload(true);
			// 	}
			// })
		});
	}

	function checkPhone() {
		var phone = $('#tab-checkphone').find('.phone').val();

		if (!UP.phonenoValid(phone)) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Invalid Phone Number', type: 'error' });
			return false;
		}

		UP_VARS.SOCIAL_LOGIN.data.phone = phone;
		phone = UP_CONFIG.COUNTRY_CODE + phone;

		action_btn.removeClass('enabled').addClass('disabled');
		var data = {
			provider: UP_VARS.SOCIAL_LOGIN.data.provider,
			token: UP_VARS.SOCIAL_LOGIN.data.token,
			email: UP_VARS.SOCIAL_LOGIN.data.email,
			phone: phone
		};
		UP.socialLogin.checkPhone(data, function (d) {
			console.log(d);
			switch (d.message) {
				case 'new_registration_required':
					var signupData = {
						"customer_name": UP_VARS.SOCIAL_LOGIN.data.name,
						"customer_phone": phone,
						"email": data.email,
						"password": new Date().getTime()
					};

					UP.createAccount(signupData, function (d) {
						try {
							createContact_agile(signupData.email, signupData.customer_name, signupData.customer_phone, 'signup-SOCIAL');
						} catch (e) {
							console.error(e);
						}
						if (!d.success) {
							alert(d.message);
							action_btn.addClass('enabled').removeClass('disabled');
						} else {

							UPDOM.clearForm('#tab-signup');
							UPDOM.clearForm('#tab-login');
							if (phone.indexOf('91') >= 0) {
								var phone_clean = phone.split('91')[1];
							}

							$('#verify-code-modal').find('.verify-phone-no').html(phone_clean);
							$('#tab-verify').find('#phone_no_3').val(phone_clean);
							//$('#tab-login').removeClass('is-open');
							//$('#tab-signup').removeClass('is-open');
							//$('#tab-verify').addClass('is-open');
							//$('#tab-checkphone').removeClass('is-open');
							$('#phone-verify-modal').prop("checked", false).change();
							$('#verify-code-modal').prop("checked", true).change();
							action_btn.addClass('enabled').removeClass('disabled');

							UP_VARS.SOCIAL_LOGIN.state = true;
						}
					}, function (err) {
						if (err.responseJSON && err.responseJSON.message) {
							err = err.responseJSON.message;
						} else {
							err = UP_CONFIG.error_msg.default;
						}
						alert(err);
						action_btn.addClass('enabled').removeClass('disabled');
					});
					break;
				case 'otp_sent':
					UP_VARS.SOCIAL_LOGIN.state = true;
					UP_VARS.SOCIAL_LOGIN.otp = true;
					UPDOM.clearForm('#tab-signup');
					UPDOM.clearForm('#tab-login');
					if (phone.indexOf('91') >= 0) {
						var phone_clean = phone.split('91')[1];
					}
					$('#tab-verify').find('.verify-phone-no').html(phone_clean);
					$('#tab-verify').find('#phone_no_3').val(phone_clean);
					//$('#tab-login').removeClass('is-open');
					//$('#tab-signup').removeClass('is-open');
					//$('#tab-verify').addClass('is-open');
					//$('#tab-checkphone').removeClass('is-open');
					$('#phone-verify-modal').prop("checked", false).change();
					$('#verify-code-modal').prop("checked", true).change();
					action_btn.addClass('enabled').removeClass('disabled');
					break;
				default:

			}
		}, function (err) {
			console.log(err);
		});
	}

	function processLogin() {

		var error = false;
		var phone = $('#tab-login').find('.phone').val();

		if (!UP.phonenoValid(phone)) {
			$('#tab-login').find('.phone').addClass('required');
			var error = true;
		}

		phone = UP_CONFIG.COUNTRY_CODE + phone;
		var pass = $('#tab-login').find('.password').val();
		if (!pass || pass == '') {
			$('#tab-login').find('.password').addClass('required');
			var error = true;
		}

		if (error) {
			return false;
		}
		action_btn.removeClass('enabled').addClass('disabled');
		var email1 = "";
		try {
			createContact_agile_login(phone, email1, 'agile-loginUser');
		} catch (e) {
			console.error(e);
		}
		UP.loginUser({ phone_num: phone, password: pass }, function (d) {
			loggedIn();
			action_btn.addClass('enabled').removeClass('disabled');
			localStorage.setItem('need_to_push_to_gtm', JSON.stringify(_extends({}, d, { event: "logged_in", login_type: "Number", device: mobilecheck() ? "mobile_web" : "web", url: window.location.href })));
			// dataLayer.push({
			// 	"event":"logged_in",
			// 	"mobile":d.phone,
			// 	"email":d.email,
			// 	"name":d.name,
			// 	"login_type":"Number",
			// 	"device":(mobilecheck() ? "mobile" : "desktop"),
			// 	"url":window.location.href
			// })

			/*
   var href = window.location.href;
   var page = href.split('/')[href.split('/').length - 1].split('#')[0];
   	if(page == 'login.html'){
   	window.location = '/';
   }else{
   	location.reload(true);
   }
   */

			dataLayer.push({
				'event': 'GAEvent',
				'eventCategory': 'user',
				'eventLabel': 'login-success',
				'eventCallback': function eventCallback() {
					var url_param = window.location.href.split('?')[1];
					if (url_param) {
						var param_frag_key = url_param.split('=')[0];
						var param_frag_val = url_param.split('=')[1].split('#')[0];

						if (param_frag_key == 'redirect' && param_frag_val == 'checkout') {
							window.location = '/cart';
						} else {
							location.reload(true);
						}
					} else {
						location.reload(true);
					}
				}
			});
		}, function (err) {
			if (err.responseJSON && err.responseJSON.message) {
				err = err.responseJSON.message;
			} else {
				err = UP_CONFIG.error_msg.login;
			}
			action_btn.addClass('enabled').removeClass('disabled');
			UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
			dataLayer.push({
				'event': 'GAEvent',
				'eventCategory': 'user',
				'eventLabel': 'login-failed'
			});
		});
	}

	function initForgotPass() {

		var phone = $('#tab-forgot').find('.phone').val();

		if (UP.phonenoValid(phone)) {
			action_btn.removeClass('enabled').addClass('disabled');
			UP.forgotPassword({ phone_num: UP_CONFIG.COUNTRY_CODE + phone }, function () {

				$('#tab-reset').find('.phone').val(phone);
				$('#tab-login').removeClass('is-open');
				$('#tab-signup').removeClass('is-open');
				$('#tab-verify').removeClass('is-open');
				$('#tab-forgot').removeClass('is-open');
				$('#tab-reset').addClass('is-open');

				action_btn.addClass('enabled').removeClass('disabled');
			}, function (err) {

				if (err.responseJSON && err.responseJSON.message) {
					err = err.responseJSON.message;
				} else {
					err = UP_CONFIG.error_msg.default;
				}
				UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
				action_btn.addClass('enabled').removeClass('disabled');
			});
		} else {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid mobile no', type: 'error' });
		}
	}
	function resendOtp() {

		if (UP_VARS.SOCIAL_LOGIN.state) {
			var phone = UP_VARS.SOCIAL_LOGIN.data.phone;
			var data = {
				customer_phone: UP_CONFIG.COUNTRY_CODE + phone,
				email: UP_VARS.SOCIAL_LOGIN.data.email
			};
		} else {
			var phone = $('#signup').find('.phone').val();
			var email = $('#signup').find('.email').val();

			var data = {
				customer_phone: UP_CONFIG.COUNTRY_CODE + phone,
				email: email
			};
		}

		if (UP.phonenoValid(phone)) {

			action_btn.removeClass('enabled').addClass('disabled');
			//action_btn.parent().find('.otp-wait ').addClass('h-load');

			UP.resendOTP(data, function () {
				// do nothing
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': 'user',
					'eventLabel': 'resend-otp'
				});
			}, function (err) {
				action_btn.addClass('enabled').removeClass('disabled');
				//action_btn.parent().find('.otp-wait ').hide().removeClass('h-load');

				if (err.responseJSON && err.responseJSON.message) {
					err = err.responseJSON.message;
				} else {
					err = UP_CONFIG.error_msg.default;
				}
				UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
			});

			setTimeout(function () {
				action_btn.addClass('enabled').removeClass('disabled');
				//action_btn.parent().find('.otp-wait ').show().removeClass('h-load');
			}, UP_CONFIG.OTP_WAIT_TIME);
		} else {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid mobile no', error: 'type' });
		}
	}
	function resendToken() {

		var phone = $('#forgot').find('.phone').val();
		if (UP.phonenoValid(phone)) {

			action_btn.removeClass('enabled');
			action_btn.parent().find('.otp-wait ').addClass('h-load');

			UP.forgotPassword({ phone_num: UP_CONFIG.COUNTRY_CODE + phone }, function () {
				// do nothing
			}, function (err) {
				action_btn.addClass('enabled');
				action_btn.parent().find('.otp-wait ').hide().removeClass('h-load');

				if (err.responseJSON && err.responseJSON.message) {
					err = err.responseJSON.message;
				} else {
					err = UP_CONFIG.error_msg.default;;
				}
				UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
			});

			setTimeout(function () {
				action_btn.addClass('enabled');
				action_btn.parent().find('.otp-wait ').removeClass('h-load');
			}, UP_CONFIG.OTP_WAIT_TIME);
		} else {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid mobile no', type: 'error' });
		}
	}
	function resetPassword() {

		var phone = $('#tab-reset').find('.phone').val();
		var token = $('#tab-reset').find('.reset-token').val();
		var pass1 = $('#tab-reset').find('.pass1').val();
		var pass2 = $('#tab-reset').find('.pass2').val();

		if (pass1 != pass2 || pass1.length < 6) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid password (Min 6 character )', type: 'error' });
			return false;
		}
		if (UP.phonenoValid(phone)) {

			var data = {
				"phone": UP_CONFIG.COUNTRY_CODE + phone,
				"new_password1": pass1,
				"token": token,
				"new_password2": pass2
			};
			action_btn.removeClass('enabled').addClass('disabled');

			UP.resetPassword(data, function (d) {

				$('#tab-login').find('.phone').val(phone);
				$('#tab-login').addClass('is-open');
				$('#tab-signup').removeClass('is-open');
				$('#tab-verify').removeClass('is-open');
				$('#tab-forgot').removeClass('is-open');
				$('#tab-reset').removeClass('is-open');

				action_btn.removeClass('disabled').addClass('enabled');
				$('#tab-reset').find('.messaging').hide();
				alert('Password reset successful');
			}, function (err) {
				if (err.responseJSON && err.responseJSON.message) {
					err = err.responseJSON.message;
				} else {
					err = UP_CONFIG.error_msg.default;
				}
				UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
				action_btn.removeClass('disabled').addClass('enabled');
			});
		} else {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid mobile no', type: 'error' });
		}
	}

	function signupInit() {
		var valid = true;
		$('#tab-signup').find('input[type="text"],input[type="email"],input[type="password"]').each(function (i, d) {
			if (!$(d).val() || $(d).val() == '') {
				$(d).addClass('required');
				valid = false;
			}
		});

		if (!valid) {
			return false;
		}

		var phone = $('#tab-signup').find('#phone_no_2').val();
		var email = $('#tab-signup').find('#email1').val();
		var pass1 = $('#tab-signup').find('#password1').val();
		var pass2 = $('#tab-signup').find('#password1-conf').val();
		var name = $('#tab-signup').find('#name1').val();

		if (!UP.phonenoValid(phone)) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid mobile no', type: 'error' });
			return false;
		}

		if (!UP.emailValid(email)) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid email no', type: 'error' });
			return false;
		}

		if (pass1 != pass2 || pass1.length < 6) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid password (Min 6 character )', type: 'error' });
			return false;
		}

		var data = {
			"customer_name": name,
			"customer_phone": UP_CONFIG.COUNTRY_CODE + phone,
			"email": email,
			"password": pass1
		};

		window.signup_detail_gtm = data;

		action_btn.removeClass('enabled').addClass('disabled');

		UP.createAccount(data, function (d) {
			console.log(data);
			try {
				createContact_agile(data.email, data.customer_name, data.customer_phone, 'social-signup');
			} catch (e) {
				console.error(e);
			}
			action_btn.addClass('enabled').removeClass('disabled');

			if (!d.success) {
				UPDOM.pushMessage({ el: msg_el, msg: d.message, type: 'error' });
				//alert(d.message)
				return false;
			} else {
				//verify account
				$('#tab-verify').find('.verify-phone-no').html(phone);
				$('#tab-verify').find('#phone_no_3').val(phone);
				$('#phone-verify-modal').prop("checked", false).change();
				$('#verify-code-modal').prop("checked", true).change();
			}
		}, function (err) {
			if (err.responseJSON && err.responseJSON.message) {
				err = err.responseJSON.message;
			} else {
				err = UP_CONFIG.error_msg.default;
			}

			UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
			action_btn.addClass('enabled').removeClass('disabled');
		});
	}
	function signupInitFromGuest() {
		var valid = true;
		$('#tab-guest').find('input[type="text"],input[type="email"],input[type="password"]').each(function (i, d) {
			if (!$(d).val() || $(d).val() == '') {
				$(d).addClass('required');
				valid = false;
			}
		});

		if (!valid) {
			return false;
		}

		var phone = $('#tab-guest').find('#guest_phone_no').val();
		var email = $('#tab-guest').find('#g_email1').val();
		var pass1 = $('#tab-guest').find('#g_password1').val();
		var pass2 = $('#tab-guest').find('#g_password1-conf').val();
		var name = $('#tab-guest').find('#guest_name').val();

		if (!UP.phonenoValid(phone)) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid mobile no', type: 'error' });
			return false;
		}

		if (!UP.emailValid(email)) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid email no', type: 'error' });
			return false;
		}

		if (pass1 != pass2 || pass1.length < 6) {
			UPDOM.pushMessage({ el: msg_el, msg: 'Enter valid password (Min 6 character )', type: 'error' });
			return false;
		}

		var data = {
			"customer_name": name,
			"customer_phone": UP_CONFIG.COUNTRY_CODE + phone,
			"email": email,
			"password": pass1
		};
		window.signup_detail_gtm = data;
		console.log(data);

		action_btn.removeClass('enabled').addClass('disabled');

		UP.createAccount(data, function (d) {
			console.log(data);
			try {
				createContact_agile(data.email, data.customer_name, data.customer_phone, 'social-signup');
			} catch (e) {
				console.error(e);
			}
			action_btn.addClass('enabled').removeClass('disabled');

			if (!d.success) {
				UPDOM.pushMessage({ el: msg_el, msg: d.message, type: 'error' });
				//alert(d.message)
				return false;
			} else {
				//verify account
				$('#tab-verify').find('.verify-phone-no').html(phone);
				$('#tab-verify').find('#phone_no_3').val(phone);
				$('#phone-verify-modal').prop("checked", false).change();
				$('#verify-code-modal').prop("checked", true).change();
			}
		}, function (err) {
			if (err.responseJSON && err.responseJSON.message) {
				err = err.responseJSON.message;
			} else {
				err = UP_CONFIG.error_msg.default;
			}

			UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
			action_btn.addClass('enabled').removeClass('disabled');
		});
	}
	function signup() {
		var phone = $('#tab-verify').find('#phone_no_3').val();
		var token = $('#tab-verify').find('#otp').val();

		if (!UP.phonenoValid(phone)) {
			UPDOM.pushMessage({ el: $('#tab-verify').find('.messaging'), msg: 'Enter valid mobile no', type: 'error' });
			return false;
		}

		var data = {
			"customer_phone": UP_CONFIG.COUNTRY_CODE + phone,
			"pin": token
		};

		action_btn.removeClass('enabled').addClass('disabled');

		UP.verifyAccount(data, function (d) {
			if (!d.success) {
				UPDOM.pushMessage({ el: msg_el, msg: d.message, type: 'error' });
				action_btn.addClass('enabled').removeClass('disabled');
			} else {
				if (UP_VARS.SOCIAL_LOGIN.state) {
					var prefetchedData = {
						prefetch: true,
						access_token: UP_VARS.SOCIAL_LOGIN.data.token,
						email: UP_VARS.SOCIAL_LOGIN.data.email,
						name: UP_VARS.SOCIAL_LOGIN.data.name,
						provider: UP_VARS.SOCIAL_LOGIN.data.provider
					};

					UPDOM.spinner(true);
					UPDOM.processSocialLogin(prefetchedData, function (d) {
						console.log('Logging in..');
						UPDOM.spinner(false);
						action_btn.addClass('enabled').removeClass('disabled');
					}, function (err) {
						console.log(err);
						UPDOM.spinner(false);
						action_btn.addClass('enabled').removeClass('disabled');
					});
				} else {
					alert('Successfully Registered!');
					UPDOM.clearForm('#tab-signup');
					UPDOM.clearForm('#tab-login');

					$('#tab-login').find('#phone_no_1').val(phone);
					$('#tab-login').addClass('is-open');
					$('#tab-signup').removeClass('is-open');
					//$('#tab-verify').removeClass('is-open');
					$('#phone-verify-modal').prop("checked", false).change();
					$('#verify-code-modal').prop("checked", false).change();
					action_btn.addClass('enabled').removeClass('disabled');

					dataLayer.push({
						"event": "signup",
						"email": signup_detail_gtm.email,
						"device": mobilecheck() ? "mobile_web" : "web",
						"name": signup_detail_gtm.customer_name,
						"mobile": signup_detail_gtm.customer_phone
					});
				}
			}
		}, function (err) {
			if (err.responseJSON && err.responseJSON.message) {
				err = err.responseJSON.message;
			} else {
				err = UP_CONFIG.error_msg.default;
			}

			UPDOM.pushMessage({ el: msg_el, msg: err, type: 'error' });
			action_btn.addClass('enabled').removeClass('disabled');
		});
	}
});

function reloadWallet(data) {
	//var {amt,mode} = data
	UPDOM.spinner(true);
	$('.add-money').removeClass('enabled').addClass('disabled');
	UP.processWalletReload(data, function () {
		var amt = data.amt;
		UP.getuserInfo(function (d) {
			UPDOM.spinner(false);
			UP.localStorage.setItem('user_info', d);
			var newBalance = d.objects[0].balance;
			$('.wallet-price').hide().html(newBalance).fadeIn();
			$('.add-money').addClass('enabled').removeClass('disabled');
			alert('Wallet successfully realoaded!');
			dataLayer.push({
				'event': 'GAEvent',
				'eventCategory': 'wallet',
				'eventLabel': 'reload-success',
				'eventValue': amt
			});

			dataLayer.push({
				"event": "wallet",
				"amount": amt,
				"balance": newBalance,
				"device": mobilecheck() ? "mobile_web" : "web",
				"transaction_type": "add"
			});
		});
	}, function (err) {
		alert(err);
		$('.add-money').addClass('enabled').removeClass('disabled');
		UPDOM.spinner(false);
		dataLayer.push({
			'event': 'GAEvent',
			'eventCategory': 'wallet',
			'eventLabel': 'reload-failed',
			'eventValue': amt
		});
	});
}
var STORES_OBJ = {
	store: null,
	markers: []
};
var mapObject;
function CreateLatLngObject(Latitude, Longitude) {
	var latlng = new google.maps.LatLng(parseFloat(Latitude), parseFloat(Longitude));
	return latlng;
}
function createMap(stores) {
	var bounds = new google.maps.LatLngBounds();

	//this is basically a hack
	mapObject = null;
	STORES_OBJ.markers = [];
	if (!mapObject) {
		var myOptions = {
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#ffce43"
				}, {
					"saturation": 10
				}, {
					"lightness": 76
				}]
			}]
		};

		mapObject = new google.maps.Map(document.getElementById("gmap"), myOptions);
		var infoWindow = new google.maps.InfoWindow({ maxWidth: 200 });
		for (var x in stores) {
			if (stores[x].lat && stores[x].lng) {
				var pos = CreateLatLngObject(stores[x].lat, stores[x].lng);
				bounds.extend(pos);
				var marker = new google.maps.Marker({
					position: pos,
					map: mapObject,
					title: stores[x].name,
					store_id: stores[x].biz_location_id
				});
				google.maps.event.addListener(marker, 'click', function (marker, x) {
					return function () {
						infoWindow.setContent(stores[x].name + '<br>' + stores[x].address);
						infoWindow.open(mapObject, marker);
					};
				}(marker, x));
			} else {
				console.log('lat lng not found for ' + stores[x].biz_location_id);
			}

			STORES_OBJ.markers.push(marker);
		}
		mapObject.fitBounds(bounds);
	}
}

function getOrderPayload() {
	var orderItems = [];
	for (var x in UP_VARS.CART.items) {
		orderItems.push({
			"id": UP_VARS.CART.items[x].id,
			"item_price": UP_VARS.CART.items[x].item_price,
			"options": UP_VARS.CART.items[x].options && UP_VARS.CART.items[x].options.length > 0 ? UP_VARS.CART.items[x].options : null,
			"quantity": UP_VARS.CART.items[x].quantity
		});
	}
	var store = UP.localStorage.getItem('selected_location').biz_detail.store;
	var order_payload = {
		payment_option: "cash", //default is set to cash
		order_type: "delivery", //default is set to delivery
		instructions: '',
		items: orderItems,
		//delivery_datetime: new Date().getTime()+UP.localStorage.getItem('selected_location').biz_detail.biz.delivery_min_offset_time,
		//time_slot_start: $('.timepicker').val().split('-')[0],
		//time_slot_end: $('.timepicker').val().split('-')[1],
		delivery_charge: UP_VARS.IS_PICKUP ? 0 : UP_VARS.CART.meta.delivery_charge,
		//packaging_charge: store.packaging_charge,
		biz_location_id: store.biz_location_id,
		order_subtotal: UP_VARS.CART.meta.total,
		tax_rate: 0,
		order_total: UP.getPayableAmount(),
		channel: "web"
	};

	return order_payload;
}

// commenting out intentionally
//document.write("<script id=\"_agile_min_js\" async type=\"text\/javascript\" src=\"https:\/\/chaipoint.agilecrm.com\/stats\/min\/agile-min.js\"> <\/script> <script type=\"text\/javascript\" > var Agile_API = Agile_API || {}; Agile_API.on_after_load = function(){ _agile.set_account('7s8jbqutqrqmmtda6fjclfhdvm', 'chaipoint'); _agile.track_page_view(); _agile_execute_web_rules();}; <\/script>");
$(document).on('click', '.up-locateme-set-location', function () {
	UP.locateMe(function (d) {
		//creating a pseudo google place obj
		var place = {
			formatted_address: d.name,
			geometry: {
				location: {
					lat: function lat() {
						return d.lat;
					},
					lng: function lng() {
						return d.lng;
					}
				}
			}
		};

		UPDOM.setLocation(place, function () {}, function () {
			resetLocationInput();
		});
	}, function (err) {
		//console.log(err)
		//UPDOM.customPopup({ style: { 'color': 'red', 'font-weight': 'bold', 'font-size': '13px' }, HTML: err });
		alert(err);
	});
});