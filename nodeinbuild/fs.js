var fs = require('fs')
/*
fs.writeFile('MyCode.txt',"My NodeJs Code",function(err){
    if(err) throw err;
    console.log("File Created")
})

// fs.watchFile()
*/

// fs.readFile('db.json','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)

// })

/*fs.rename('MyCode.txt','First.txt',function(err){
    if(err) throw err;
    console.log('File renamed')
})*/

fs.unlink("First.txt",function(err){
    if(err) throw err;
    console.log('File renamed')
})