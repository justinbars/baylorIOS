
	        var applaunchCount = window.localStorage.getItem('launchCount');

//Check if it already exists or not
if(applaunchCount){
   //This is a second time launch, and count = applaunchCount
}else{
  //Local storage is not set, hence first time launch. set the local storage item
  window.localStorage.setItem('launchCount',1);

  //Do the other stuff related to first time launch
}
http://stackoverflow.com/questions/14988264/iphone-detect-first-time-launch-with-phonegap
  