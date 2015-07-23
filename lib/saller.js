'use strict';

var gp = require("./gp.js");
var config = require("./config.js");

//define
var saller = module.exports;

//config
saller.config = config;

saller.init = function(argv){
  var cmd = argv[2];

  if(argv.length == 1 || !cmd){
    //makesure arguments length
    saller.help();
  }
  //init
  else if(cmd == "init"){

  }
  //build for develop
  else if(cmd == "build"){
    console.log("build success");
  }
  //deploy
  else if(cmd == "deploy"){
    console.log("deploy success");
  }
  //clean cache option
  else if(cmd == "clean"){
    saller.clean();
  }
  //help option
  else if(cmd == "-h" || cmd == "-help"){
    saller.help();
  }
  //version
  else if(cmd == "-v"){
    var package = require('../package.json');
    console.log(package.version);
  }
  //other
  else{
    console.log('saller error [saller.init] invalid option: ' + cmd + ' \rType "saller -h" for usage.');
  }
}

//help
saller.help = function(){
  var content = [];
  content = content.concat([
      '',
      '  Usage: Saller <Command>',
      '',
      '  Command:',
      '',
      '    install      install init dir, demo',
      '    init         project directory init',
      '    build        build project',
      '    deploy       deploy project',
      '',
      ' ',
      '  Extra commands:',
      '',
      '    clean        clean cache folder',
      '    -h           get help information',
      '    -v           get the version number',
      ''
  ]);
  console.log(content.join('\n'));
}
