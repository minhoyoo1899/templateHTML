//console.log('a');

const fs = require('fs');
const nunjucks = require('nunjucks');
// console.log(nunjucks);
// console.log(fs);
// console.log('====================================================================================================================================================================================');
// console.log(fs.writeFile);
// console.dir(fs.writeFile);

const resHTML = nunjucks.render('./a.html');
//console.log(resHTML);
const respHTML = nunjucks.render('./a.html', { Name: "<script>const data = '';</script>" });
console.log(respHTML);

const respoHTML = nunjucks.renderString('hello{{Name}}', { Name: "<script>const data = '';</script>" });
// console.log(respoHTML);

const template = nunjucks.compile('Hello  {{Name}}', "" ,'b.html');
template.render({ Name: 'Steve Rodgers' });
//console.log(template.render({ Name: 'Steve Rodgers' }));

nunjucks.configure('views');
console.log(nunjucks.configure('views'));

// if in the browser, you probably want to use an absolute URL
nunjucks.configure('/views');
console.log(nunjucks.configure('/views'));

nunjucks.configure({ autoescape: true });

nunjucks.configure('views', {
    autoescape: true,        
});

const env = nunjucks.configure('views');
// do stuff with env
//console.log(env);

function writeFileFS(String) {
  fs.writeFile("./newfile.html", String, (err) => {
    if (err === null) {
      console.log("sucess!");
    } else {
      console.log(`fail to : ${err}`);
    }
  });
}

const htmlDOC = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>  
</body>
</html>
`;