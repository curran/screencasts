var ViewModel = function () {
  var firstName = ko.observable("John"),
      lastName = ko.observable("Doe"),
      fullName = ko.computed(function () {
        return firstName() + lastName();
      });
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName
  };
};
ko.applyBindings(ViewModel());
