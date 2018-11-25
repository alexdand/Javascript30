// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500 = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
console.log('List of inventors for those who were born in the 1500\'s:');
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsNamesAndLastnames = inventors.map(inv => `${inv.first} ${inv.last}`);
console.log('Inventors\' first and last names:');
console.table(inventorsNamesAndLastnames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByAgeDesc = inventors.sort((inv1, inv2) => inv1.year - inv2.year);
console.log('Inventors by birthdate, oldest to youngest:');
console.table(inventorsByAgeDesc);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalInventorsAge = inventors.reduce((accum, inv) => (accum + (inv.passed - inv.year)), 0);
console.log(`Total inventor's age: ${totalInventorsAge}`);

// 5. Sort the inventors by years lived
const inventorsByYearsLived = inventors.sort((inv1, inv2) => (inv1.passed - inv1.year) - (inv2.passed - inv2.year));
console.log('Inventors by years lived:');
console.table(inventorsByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
const categories = document.querySelector('.mw-category');
const links = categories.querySelectorAll('a');
const boulebards = Array.from(links).map(boul => boul.textContent).filter(name => name.includes('de'));
console.table(boulebards);

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
                'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony',
                'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
                'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
                'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh',
                'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleByLastname = people.sort((p1, p2) => {
    const [p1Last, p1First] = p1.split(", ");
    const [p2Last, p2First] = p1.split(", ");
    return p1Last - p2Last;
});
console.log('People by last name:');
console.table(peopleByLastname);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const instancesSum = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.table(instancesSum);