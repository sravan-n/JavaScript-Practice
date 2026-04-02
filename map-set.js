const favPlaces = new Map();
favPlaces.set('sravan', 'hawaii');
favPlaces.set('kinnera', 'mimai');

console.log(favPlaces); // Map(2) { 'sravan' => 'hawaii', 'kinnera' => 'mimai' }
console.log(favPlaces.get('sravan'));

const places = ['hawaii', 'miami', 'miami', 'denver', 'hawaii'];
const uniquePlaces = new Set(places);
console.log(uniquePlaces); // Set(3) { 'hawaii', 'miami', 'denver' }
console.log([...uniquePlaces]); // [ 'hawaii', 'miami', 'denver' ]