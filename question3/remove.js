const fs = require('fs');
const path = require('path');


const removeLogFiles = () => {
    const logsDir = path.join(process.cwd(), 'Logs');

    // checks if log directory exists
    if (fs.existsSync(logsDir)) {
        console.log('Removing Logs directory...');
        
        // read the logs filees
        const files = fs.readdirSync(logsDir);
        
        // delete each file and output the name
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`delete files...${file}`);
            fs.unlinkSync(filePath);
        });
        
  // remove log directory
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed successfully!');
    } else {
        console.log('Logs directory does not exist.');
    }
};

// test
removeLogFiles();

module.exports = removeLogFiles;