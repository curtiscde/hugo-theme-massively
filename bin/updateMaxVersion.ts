import toml from 'toml';
import fs from 'fs';

const newMaxVersion = process.argv[2];

const updateMaxVersion = async (newMaxVersion: string) => {
  console.log('newMaxVersion', newMaxVersion)
  try {
    const configDoc = fs.readFileSync('./config.toml', 'utf8');
    const e2eWorkflowDoc = fs.readFileSync('./.github/workflows/e2e.yml', 'utf8');
    
    const currentMax = toml.parse(configDoc).module.hugoVersion.max

    await fs.writeFileSync('./config.toml', configDoc.replace(currentMax, newMaxVersion))
    await fs.writeFileSync('./.github/workflows/e2e.yml', e2eWorkflowDoc.replace(currentMax, newMaxVersion))
  } catch (e) {
    console.error(e)
  }
}

updateMaxVersion(newMaxVersion)