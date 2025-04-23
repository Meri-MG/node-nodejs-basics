import fs from 'node:fs'

const content = 'I am fresh and young'
const filePath = './src/fs/files/fresh.txt'

const create = async () => {
  if (fs.existsSync(filePath)) throw new Error('FS operation failed')

  fs.writeFile(filePath, content, err => {
    if (err) throw err
  })
}

await create();