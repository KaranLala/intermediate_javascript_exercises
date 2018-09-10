var expect = chai.expect;

let str, arr;
beforeEach(function(){
  str = "changeIsComing";
  arr = [1,2,3];
});

describe("replace", function() {
	it("replaces the character", function() {
		expect(replaceWith(str, "h", "q")).equal("cqangeIsComing");
	});
	it("replaces all instances of the character", function() {
		expect(replaceWith(str, "g", "q")).equal("chanqeIsCominq");
	});
	it("is case sensitive", function() {
		expect(replaceWith(str, "c", "b")).equal("bhangeIsComing");
		expect(replaceWith(str, "C", "a")).equal("changeIsaoming");
	});
	it("removes characters if the replaceWith character is empty", function() {
		expect(replaceWith(str, "c", "")).equal("hangeIsComing");
	});
	it("returns the same string is the two parameters are the same", function() {
		expect(replaceWith(str, "c", "c")).equal("changeIsComing");
	});
});

describe("expand", function() {
	it("expands the array", function() {
		expect(expand(arr, 2)).eql([1,2,3,1,2,3]);
	});
	it("returns empty array if zero or negative", function() {
		expect(expand(arr, 0)).eql([]);
		expect(expand(arr, -1)).eql([]);
	});
	it("returns the array if num is one", function() {
		expect(expand(arr, 1)).eql([1,2,3]);
	});
});

describe("acceptNumbersOnly", function() {
	it("returns true if all inputs are numbers", function() {
		expect(acceptNumbersOnly(1,2,3,4,5)).equal(true);
	});
	it("returns false if any input is not a number", function() {
		expect(acceptNumbersOnly(1,2,3,"4")).equal(false);
		expect(acceptNumbersOnly("test")).equal(false);
		expect(acceptNumbersOnly(true)).equal(false);
		expect(acceptNumbersOnly(null)).equal(false);
		expect(acceptNumbersOnly(undefined)).equal(false);
	});
	it("returns false if any input is NAN", function() {
		expect(acceptNumbersOnly(1,2,NaN)).equal(false);
	});
});

describe("mergeArrays", function() {
	it ("concatenates and sorts two arrays", function() {
		expect(mergeArrays([1,2], [4,3])).eql([1,2,3,4]);
		expect(mergeArrays([4,3], [1,2])).eql([1,2,3,4]);
	});
});

describe("mergeObjects", function() {
	var obj1= {
	    name: "Foo",
	    num: 33
	}
	var obj2 = {
	    test: "thing",
	    num: 55
	}
	var merged = {
		name: "Foo",
	    num: 55,
	    test: "thing"
	}
	it("merges objects and overwrites existing properties", function() {
		expect(mergeObjects(obj1, obj2)).eql({name: "Foo", num: 55, test: "thing"});
		expect(mergeObjects(obj2, obj1)).eql({name: "Foo", num: 33, test: "thing"});
	});
})


