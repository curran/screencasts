var viewModel = {
  firstName: ko.observable("John"),
  lastName: ko.observable("Doe"),

  // Breaks because the function is evaluated before viewModel is defined
  fullName: ko.computed(function () {
    return viewModel.firstName() + viewModel.lastName();
  })
};
ko.applyBindings(viewModel);
