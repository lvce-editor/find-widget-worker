import { execa } from 'execa'
import { root } from './root.js'

const main = async () => {
  execa(`npm`, ['run', 'build:watch'], {
    cwd: root,
    stdio: 'inherit',
  })
  execa('npm', ['run', 'dev', '--workspace=packages/server'], {
    cwd: root,
    stdio: 'inherit',
  })
}

main()
