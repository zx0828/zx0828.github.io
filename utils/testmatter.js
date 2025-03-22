const yamltojs =require('yamljs')
const fs = require('fs')
const path = require('path')
const chalk =require('chalk');
const matter = require('gray-matter')
const json2yaml =require('json2yaml')

const configPath = path.join(__dirname, 'config.yml')
const config = yamltojs.load(configPath)

const rootPath = path.join(__dirname, '..', config.path[0])
console.log(rootPath);

function readFileList(dir = rootPath,fileList = [] ){
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath=path.join(dir,file);
        const filestat = fs.statSync(filePath);
        if(filestat.isDirectory()){
            readFileList(path.join(dir,file),fileList)
        }else{
            const fileNameArr = file.split(".");
            if(fileNameArr.length < 2 || fileNameArr.length > 3){
                log(chalk.yellow(`warning: 该文件 "${filePath}" 没有按照约定命名，将忽略生成相应数据。`))
                return ;
            }
            let [name,type] =  fileNameArr.slice(-2);
            fileList.push({name,filePath})
        }
    })
    return fileList;
}


const fileList = readFileList(rootPath)
fileList.forEach((file)=>{
    const matterData = matter( fs.readFileSync(file.filePath,'utf8'));
    const final = Object.assign(matterData.data,config.data);
    console.log(json2yaml.stringify(final).replace('/\r\n/g',''))
})
