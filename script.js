	 var me = 22;
    var sister = 30;
    document.getElementById("me").innerHTML = me;  
    document.getElementById("sister").innerHTML = sister; 

    function result(){
	var myAge = document.getElementById('myAge').value;
	var my = parseInt(myAge);
	var sisterAge = document.getElementById('sisterAge').value;
	var sis = parseInt(sisterAge);
	if (my == sis) {
	document.getElementById('result').innerHTML= " Me and my sister are the same age!";
		} else if (my<sis) {
		var younger = sis-my;
		document.getElementById('result').innerHTML= "I am " +younger+ " years younger than my sister!";
		} else  if ( my>sis){
		var older = my-sis;
		document.getElementById('result').innerHTML= "I am " +older+ " years older than my sister!";
		} else {
			document.getElementById('result').innerHTML= "Please provide correct details";
			}
		}



		