FunctionalUtils = {};
FunctionalUtils.add = function (a, b){
  return a + b;
};
FunctionalUtils.reduce = function (list, iteratee, memo){
  list.forEach(function (item){
    memo = iteratee(item, memo);
  });
  return memo;
};
FunctionalUtils.sum = function (list){
  return FunctionalUtils.reduce(list, FunctionalUtils.add, 0);
};
