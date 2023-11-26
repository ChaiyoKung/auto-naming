const fs = require('node:fs/promises');
const path = require('node:path');
const wait = require('./wait');
const uniqueFile = require('./unique-file');

const DEFAULT_OPTIONS_DRY_RUN = false;
const DONE_LOG = 'Done!';

async function renameAllFile(
  directoryPath,
  options = {
    dryRun: DEFAULT_OPTIONS_DRY_RUN,
  }
) {
  console.time(DONE_LOG);

  console.log(`Read all file in '${directoryPath}' directory`);
  const files = await fs.readdir(directoryPath);

  for (const file of files) {
    const newFile = uniqueFile(file);

    const oldPath = path.join(directoryPath, file);
    const newPath = path.join(directoryPath, newFile);

    console.log(`Rename '${file}' to '${newFile}'`);
    if (!options?.dryRun ?? DEFAULT_OPTIONS_DRY_RUN) {
      await fs.rename(oldPath, newPath);
    }

    await wait(1);
  }

  console.timeEnd(DONE_LOG);
}

renameAllFile('C:/Users/ChaiyoKung/Desktop/Test');
