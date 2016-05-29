//Testing that it transcludes the content appearing between the element tags

describe('optIn', function () {
    //declare the variables needed for testing
    var scope,
        element,
        compiled,
        html,
        brandLogo,
        brandImage;
    //before each test, require the 'myApp' module
    beforeEach(module('myApp'));
    //before each test, require the template partial
    beforeEach(module('signin-template.html'));
    //compile the directive and link to HTML
    beforeEach(inject(function ($rootScope, $compile) {
        //setting scope equal to a new instance of rootScope to compile the directive in
        scope = $rootScope.$new();
        //brandLogo = "<div class='brand-logo'></div>";
        brandLogo = "brand-logo";
        brandImage = "<div class='" + brandLogo + "'></div>";
        //html = "<opt-in>" + brandLogo + "</opt-in>";
        html = "<opt-in>" + brandImage + "</opt-in>";
        //use compile to compile a view for HTML
        compiled = $compile(html);
        //link compiled view w/ the scope
        element = compiled(scope);
        //call digest to have angular look through all the changes
        scope.$digest();
    }));
    it('should render the element and contain logo image', function () {
        //expect the html element to contain brandLogo var, which tells us html was compiled as expected
        expect(element.html()).toContain(brandLogo);
    })
});
