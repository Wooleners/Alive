//define
var saller = module.exports;

saller.init = function(argv){
  var cmd = argv[2];
  //init
  if(cmd == "init"){
    console.log("init finish");
  }
  //build for develop
  else if(cmd == "build"){
    console.log("build success");
  }
  //deploy
  else if(cmd == "deploy"){
    console.log("deploy success");
  }
  //help option
  else if(cmd == "-h" && cmd == "-help"){
    console.log("help");
  }
  //other
  else{
    console.log('saller error [saller.init] invalid option: ' + cmd + ' \rType "saller -h" for usage.');
  }
}
