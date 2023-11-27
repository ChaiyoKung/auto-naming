const renameAllFile = require('./rename-all-file');

async function main() {
  try {
    await renameAllFile('C:/Users/YourName/Desktop/TargetDir');
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
  }
}

main();
