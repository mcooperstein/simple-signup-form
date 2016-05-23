var app = angular.module('myApp', []);

app.directive('optIn', function () {
    return {
        restrict: 'EA',
        //templateUrl: 'signin-template.html',
        template: '<div class="opt-in"><span ng-transclude></span><form><div class="nameInfo"><input type="text" id="fName" name="firstName" placeholder="First Name"><input type="text" id="lName" name="lastName" placeholder="Last Name"></div><input type="text" id="email" name="email" placeholder="Email Address"><input type="submit" id="submit" name="submit" value="Give us your Infoz"></form></div>',
        transclude: true,
        replace: true
    }
});
