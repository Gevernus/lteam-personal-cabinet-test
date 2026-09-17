import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const roots = ['tests', 'e2e', 'mutation-tests']
const forbiddenPatterns = [
  { pattern: /\bfireEvent\b/, reason: 'use realistic userEvent or Playwright input' },
  { pattern: /getByTestId/, reason: 'query by accessible role instead of implementation id' },
  { pattern: /expect\(true\)/, reason: 'constant expectations are vacuous' },
  { pattern: /assert\.equal\(true,\s*true\)/, reason: 'constant assertions are vacuous' },
  { pattern: /\.toBeTruthy\(\)/, reason: 'replace weak truthy assertions with an exact contract' },
  { pattern: /\.innerHTML/, reason: 'full HTML assertions mirror implementation details' },
  { pattern: /waitForTimeout|setTimeout\s*\(/, reason: 'tests must not depend on sleeps' },
]
const failures = []

const collectJavaScript = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name)
      if (entry.isDirectory()) return collectJavaScript(path)
      return /\.(test|spec)\.js$/.test(entry.name) ? [path] : []
    }),
  )
  return nested.flat()
}

const testFiles = (await Promise.all(roots.map(collectJavaScript))).flat()

for (const testFile of testFiles) {
  const source = await readFile(testFile, 'utf8')
  const expectationCount = (source.match(/\bexpect\(|\bassert\./g) ?? []).length

  if (expectationCount === 0) failures.push(`${testFile}: contains no assertion`)
  for (const { pattern, reason } of forbiddenPatterns) {
    if (pattern.test(source)) failures.push(`${testFile}: ${reason}`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Test-quality checks passed for ${testFiles.length} files.`)
