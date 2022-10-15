const { exec } = require('child_process');
// const path = require('path');
const processFile = require('./profile')

for(let i = 0;i<processFile.processCwd.length;i++){
    let processShellStr = []
    // 在当前特定的文件夹下执行命令
   let  processShellArr = Object.assign({},processFile.processCwd[i].processShell,processFile.commonAttribute )|| '';
   for(let k in processShellArr ){
       console.log(k)
       console.log(processShellArr);
       processShellStr.push(` --${k}=${processShellArr[k]}`);
        
   }
   console.log(`live-server ${processShellStr.join(" ")}`)
   console.log(processFile.processCwd[i].fileUrl)
    exec(`live-server ${processShellStr.join(" ")}`, { cwd: processFile.processCwd[i].fileUrl }, (err, stdout, stderr) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}