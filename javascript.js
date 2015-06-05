console.log('##############');
console.log('Start 001 ####');
var Person = function(fname, lname, age, gender) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.gender = gender;
};
var fnames = ['Maria','Pesho','Gosho','Gania','Lili','Iveta','Stamat','Blagoi','Marin'];
var lnames = ['Ivanova','Ivanov','Petrov','Karadjova','Bue','Stamatova','Nikolaef','Blagoev','Iliev'];
var genders = [true,false,false,true,true,true,false,false,false];
var persons = [];
for (var i = fnames.length - 1; i >= 0; i--) {
	persons[i] = new Person(fnames[i], lnames[i] , (i % 2 === 0 ? (14+i) : (20+i*2)), genders[i]);
};
console.log(persons);
console.log('End 001 ######');
console.log('##############');

console.log('##############');
console.log('Start 002 ####');
var checkArrByAge = function(personArr) {
	function bigEnough(person, index, arr){
		return !!(person.age > 18);
	}
	var result = personArr.every(bigEnough);
	return result;
};
console.log('`(using every()) Are all people over 18!? \n Answer: '+checkArrByAge(persons));
console.log('End 002 ######');
console.log('##############');

console.log('##############');
console.log('Start 003 ####');
// again using the persons array for this task
var underAge = function(personArr) {
	function under18(person, index, arr) {
		if (person.age < 18) {
			return person;
		}	
	}
	return personArr.map(under18);
};
var underAge2 = function(personArr) {
	function allUnder(person, index, arr) {
		if (person.age < 18) {
			return person;
		}
	}
	return personArr.filter(allUnder);
};
var underAge3 = function(personArr) {
	function allUnder(person, index, arr) {
		if (person.age < 18) {
			console.log(person);
		}
	}
	return personArr.forEach(allUnder);
};
console.log('All under 18 (using map): '); 
var allUnder = underAge(persons);
for (var i = allUnder.length - 1; i >= 0; i--) {
	if (allUnder[i] !== undefined) {
		console.log(allUnder[i]);
	}
}
console.log('All under 18 (using filter): ');
console.log(underAge2(persons));
console.log('All under 18 (using foreach): ');
underAge3(persons);
console.log('End 003 ######');
console.log('##############');

console.log('##############');
console.log('Start 004 ####');
var averageAge = function(personArr) {
	function allFemalesAges (person) {
		if (person.gender) {
			return person;
		}
	}
	var females = personArr.filter(allFemalesAges); // filters all females
	console.log(females);
	function sumAges(females, person) {
		return females + person.age;
	}
	var sum = females.reduce(sumAges, 0); // sum all ages in the array
    return (sum / females.length); // return average
};
console.log('Average age of all women: '+averageAge(persons));
console.log('End 004 ######');
console.log('##############');

console.log('##############');
console.log('Start 005 ####');
var findYongest = function(personArr) {
	function sortByAge(fPerson, sPerson) {
		return fPerson.age - sPerson.age;
	}
	personArr = personArr.sort(sortByAge); // SAME AS :  function (a, b) {return a.age - b.age;}
	return personArr[0].fname + ' ' + personArr[0].lname;
};
console.log('The yongest is : ');
console.log(findYongest(persons));
console.log('End 005 ######');
console.log('##############');

console.log('##############');
console.log('Start 006 ####');
var groupPeople = function(personArr) {
	personArr = personArr.sort( 
		function(a, b) {
			return a.fname.toLowerCase().localeCompare(b.fname.toLowerCase());
		}
	);
	function groupedBy(group, person) {
		var fnameLetter = person.fname[0].toLowerCase();
		if (!group.hasOwnProperty(fnameLetter)) {
			group[fnameLetter] = [];
		}
		group[fnameLetter].push(person);
		return group;
	}
	function sortFname(fPerson, sPerson) {
		return fPerson.fname[0] - sPerson.fname[0];
	}
	return personArr.reduce(groupedBy, {});
};
var result = groupPeople(persons);
console.log(result);
console.log('End 006 ######');
console.log('##############');