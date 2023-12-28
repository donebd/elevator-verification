const { exec } = require('child_process');

const smvFileName = 'elevator_lab3.smv';
const nuXmvPath = '..\\nuXmv-2.0.0-win64\\bin\\nuXmv.exe';

const commands = [
    "reset",
    `read_model -i ${smvFileName}`,
    "go",
    "check_ltlspec"
];

// Запуск nuXmv в интерактивном режиме
const nuxmvProcess = exec(`${nuXmvPath} -int`, (error, stdout, stderr) => {
   if (error) {
      console.error(`Error: ${error.message}`);
      return;
   }
   console.log(`stdout: ${stdout}`);
   console.warn(`warn: ${stdout}`);
   console.error(`stderr: ${stderr}`);
});

// Ввод команд в интерактивную консоль nuXmv
for (const command of commands) {
    nuxmvProcess.stdin.write(command + "\n");
}

nuxmvProcess.stdin.end();
