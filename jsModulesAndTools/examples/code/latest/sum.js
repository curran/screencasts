define(["./reduce", "./add"], function (reduce, add){
	return function sum(list){
		return reduce(list, add, 0);
	};
});
