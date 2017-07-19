//create object Multiplyer
//create method that multiplies number by 1
//create method that takes that number and multiplies it by itself
//create method that gets the number from the last value entered
var Multiplier = {
	sum: 1,
	multiply: function(Number){
		this.sum = Number * this.sum
	},
	getValue: function(){
		//return this.sum
		console.log(this.sum)
	}
}

Multiplier.multiply(2)
Multiplier.getValue()
Multiplier.multiply(6)
Multiplier.getValue()
Multiplier.multiply(4)
Multiplier.getValue()
///////////////////////////////////////////////////////////////////////
//create an object to represent Photos
//create an array to store multiple photos
function gallery(name){
	this.name=name
	this.gallery=[]
}
//Album object constructor
function album(album, albumName){
	this.album = [],
	this.albumName = albumName
}
gallery.prototype = Object.create(album.prototype)
//Photos constructor
function photo(name, location){
      this.name=name,
      this.location=location 
	}
//Make photos a prototype of Album
album.prototype = Object.create(photo.prototype);
//this should allow photos to be pushed into the album 
//photos array
album.prototype.addPhoto= function(photo){
		this.album.unshift(photo);
	}
//list photos
album.prototype.listPhotos = function(){
	var len = this.album.length
	for(x=0; x<len; x++){
		console.log(this.album[x])
	}
}
//access photo
album.prototype.getPhoto = function(index){
	var i = this.album[index]
	console.log(i)
}
//add albums to gallery
gallery.prototype.addAlbum = function(album){
	this.gallery.unshift(album)
}
var main = new gallery('Main Gallery')
var selfies = new album(selfies, 'selfies')
var vacation = new album(vacation, 'vacation')
var beach = new photo('Beach', 'Brighton Beach')
var city = new photo('Odaiba', 'Tokyo')
var selfie1 = new photo('#nofilter', 'Bedroom')
var selfie2 = new photo('#iwokeuplikethis', 'Bathroom')
//
selfies.addPhoto(selfie1)
selfies.addPhoto(selfie2)
vacation.addPhoto(city)
vacation.addPhoto(beach)
vacation.listPhotos();
// console.log(vacation)
// console.log(selfies)
vacation.getPhoto(0)
main.addAlbum(vacation)
main.addAlbum(selfies)
// console.log(main)

//have gallery show all albums
//onclick show all photos in that gallery
//and have gallery view disapear
var body = document.querySelector('body');

function showGallery(){
	var gallery = document.createElement('div');
	gallery.setAttribute('id', 'gallery')
	len = main.gallery.length
	for(var x=0; x<len; x++){
		var albums = document.createElement('div');
		albums.innerHTML = '<h1>' + main.gallery[x].albumName + '</h1>'
		albums.setAttribute('class', 'albums');
		gallery.appendChild(albums)
	}
	body.appendChild(gallery);
}

showGallery();

function listen(){ 
	for(var x=0; x<main.gallery.length; x++){
		document.getElementsByClassName('albums')[x].addEventListener('click', function(){
			showPhotos();
		})
	}
};



function showPhotos(){
	document.getElementById('gallery').style.display = 'none';
	var album = document.getElementsByClassName('albums');
	len = album.length
	for(var x=0; x<len; x++){
		var photos = document.createElement('div');
		photos.innerHTML = '<h1>' + album.photo[x].name + '</h1>';
		photos.setAttribute('class', 'photos');
		body.appendChild(photos)
		}
		body.appendChild(photos)
	}

listen();









//Maybe create a function that allows new photos to be added
//directly into an album?

//////////////////////////////////////////////////////////////////////
function person(hasArms, hasLegs){
	this.hasArms=hasArms
	this.hasLegs=hasLegs
}
//teacher prototype of person
function teacher(hasArms, hasLegs, isMean, mood, name){
	this.isMean=isMean
	this.mood=mood
	person.call(this, hasLegs, hasArms);

}
teacher.prototype = Object.create(person.prototype);

//student prototype of person
function student(hasArms, hasLegs, isLazy, hasHomework, hasDetention){
	this.isLazy=isLazy,
	this.hasDetention,
	this.hasHomework,
	teacher.call(this,hasLegs, hasArms)
	delete this.mood
	delete this.isMean
}
student.prototype = Object.create(person.prototype);
//checks if student has homework
student.prototype.homework = function(){
	if(this.hasHomework==true){
		console.log('You have work to do')
	} else {
	console.log('You have nothing to do')
}}
//students harrass teacher
student.prototype.makeTeacherSad=function(teacher, feeling){
	if(teacher.isMean==true){
		this.hasDetention=true;
		teacher.mood='drunk with power';
	}else{
	teacher.mood=feeling;
}}
//assigns a student homework
teacher.prototype.giveHomework = function(work, student){
	student.hasHomework=work
}
//school
function school(name){
	this.name=name
	teachers=[],
	students=[]
}

school.prototype = Object.create(student.prototype, teacher.prototype);
//adds teacher and students to schools
school.prototype.addPeople=function(arrayName, personName){
	arrayName.unshift(personName);
}
//new objects
var newSchool = new school('clownSchool')
var mrMean = new teacher(false, false, true);
var jessica = new student(true, true, true)
//function tests
mrMean.giveHomework(true, jessica);
jessica.makeTeacherSad(mrMean, 'sad')
jessica.homework();
newSchool.addPeople(teachers, mrMean);
newSchool.addPeople(students, jessica)

console.log(jessica);
console.log(mrMean);
console.log(newSchool);













