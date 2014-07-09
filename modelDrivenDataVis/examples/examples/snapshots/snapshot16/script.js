var ViewModel = function () {
  this.firstName = ko.observable("John");
  this.lastName = ko.observable("Doe");
  this.fullName = ko.computed(function () {
   
    // breaks because "this" is not bound properly
    return this.firstName() + this.lastName();
  });
};
ko.applyBindings(new ViewModel());
