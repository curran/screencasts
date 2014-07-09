var ViewModel = function () {
  this.firstName = ko.observable("John");
  this.lastName = ko.observable("Doe");
  this.fullName = ko.computed(function () {
    return this.firstName() + this.lastName();
  }, this);
};
ko.applyBindings(new ViewModel());
