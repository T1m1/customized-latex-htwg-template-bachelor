var arr = [
	"hello",
	"world",
	3
];

/* loop */
for(var i = 0; i < arr.length; i++){
	if(typeof arr[i] != "string"){
		throw "foo";
	}
}
