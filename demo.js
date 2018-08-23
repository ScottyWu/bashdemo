#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2] // 你传的参数是从第2个开始的

fs.stat('dirName', function(err, stat){

    if(stat&&stat.isFile()) {
	    console.log('文件存在');
    }
    else {
	    fs.mkdirSync("./" + dirName)  // mkdir $1
        process.chdir("./" + dirName) // cd $1
        fs.mkdirSync('css') // mkdir css
        fs.mkdirSync('js') // mkdir js

        fs.writeFileSync("./index.html", "")
        fs.writeFileSync("css/style.css", "") // ./ 可以不写，已经在当前目录
        fs.writeFileSync("./js/main.js", "")

        process.exit(0);
    }
})
