const fs = require('fs');
const path = require('path');


const createLogFiles = () => {
    const logsDir = path.join(process.cwd(), 'Logs');
    
    // create logs directory if it doesnt ecxists
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created!');
    }
    
    
    process.chdir(logsDir);
    console.log(`Current working directory: ${process.cwd()}`);
    
    // Create 10 log files 
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        const content = `This is log file #${i}`;
     
        fs.writeFileSync(fileName, content);
        console.log(`log${i}.txt`);
    }
    
    console.log('10 log files created successfully!');
};

// test
createLogFiles();

module.exports = createLogFiles;