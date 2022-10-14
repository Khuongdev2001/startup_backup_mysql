require('dotenv').config();
const { exec } = require('child_process');

function mysqlBackup({ host, port, user, password, database, table }) {
    return new Promise((resolve, reject) => {
        exec(`${process.env.PATH_MYSQLDUMP} --host=${host} --port=${port} --user=${user} --password=${password} ${database}`, { maxBuffer: 1024 **10 }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve(stdout);
        });
    })
}

module.exports = mysqlBackup;