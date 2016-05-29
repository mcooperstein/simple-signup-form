//declare variable 'app' and set equal to angular module called 'myApp', link to it in index.html using ng-app in <html> tag
var app = angular.module('myApp', []);

//custom directive, camel-cased 'optIn' links to <opt-in> tag in index.html
app.directive('optIn', function () {
    return {
        restrict: 'EA',

        //<opt-in> tag in index.html should load signin-template.html template
        templateUrl: 'signin-template.html',
        //template: '<div class="opt-in"><span ng-transclude></span><form><div class="nameInfo"><input type="text" id="fName" name="firstName" placeholder="First Name"><input type="text" id="lName" name="lastName" placeholder="Last Name"></div><input type="text" id="email" name="email" placeholder="Email Address"><input type="submit" id="submit" name="submit" value="Give us your Infoz"></form></div>',

        //set transclude property to true so that
        //adding ng-transclude in the opt-in.html template's span tag pulls in the template
        transclude: true
            //replace: true
    }
});
