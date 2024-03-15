function toStepTwo () {
	dName = document.querySelector ("input#name") ;
	dEmail = document.querySelector ("input#email") ;
	dNumber = document.querySelector ("input#number") ;
	
	msg1 = document.querySelector ("div.label span.m1") ;
	msg2 = document.querySelector ("div.label span.m2") ;
	msg3 = document.querySelector ("div.label span.m3") ;
	

	if (dName.value.length > 0) {
		if (dEmail.value.length > 0) {
			if (dNumber.value.length > 0) {
				document.write ("good")
			} else {}
		} else {}
	} else {}
	
	
	requiredField (dName, msg1) ;
	requiredField (dEmail, msg2) ;
	requiredField (dNumber, msg3) ;
}


function requiredField (a, b) {
	if (a.value.length === 0) {
		b.style.display = "block" ;
		a.style.border = "1.5px solid var(--strawberryRed)" ;
	} else{}
}



function inputFocus (a, b) {
	a.style.display = "none" ;
	b.style.border = "1.5px solid var(--purplishBlue)" ;
	
	b.addEventListener ('blur', function(){
		b.style.border = "1.5px solid var(--lightGray)" ;
	});
	
}
