var myApp = angular.module('myApp', ['ngMaterial']);

(function (){
	// CONFIG THE CURRENCY AND DECIMAL NUMBERS #BRAZIL#
	angular.module("ngLocale", [], ["$provide", function($provide) {
		var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
			$provide.value("$locale", {
				"NUMBER_FORMATS": {
				"DECIMAL_SEP": ",",
				"GROUP_SEP": ".",
				"PATTERNS": [
					{
						"gSize": 3,
						"lgSize": 3,
						"maxFrac": 3,
						"minFrac": 0,
						"minInt": 1,
						"negPre": "-",
						"negSuf": "",
						"posPre": "",
						"posSuf": ""
					},
					{
						"gSize": 3,
						"lgSize": 3,
						"maxFrac": 2,
						"minFrac": 2,
						"minInt": 1,
						"negPre": "-\u00a4",
						"negSuf": "",
						"posPre": "\u00a4",
						"posSuf": ""
					}
				]
			},
			"id": "pt-br",
			"localeID": "pt_BR",
			"pluralCat": function(n, opt_precision) {
				if (n >= 0 && n <= 2 && n != 2) {
					return PLURAL_CATEGORY.ONE;
				} return PLURAL_CATEGORY.OTHER;
			}
		});
	}]);
}());