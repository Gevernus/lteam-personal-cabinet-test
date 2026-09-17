import { readdir, readFile } from 'node:fs/promises'
import { basename, join } from 'node:path'

const componentDirectory = new URL('../src/components/', import.meta.url)
const componentNames = (await readdir(componentDirectory)).filter((name) => name.endsWith('.vue'))
const failures = []

const countMatches = (source, pattern) => source.match(pattern)?.length ?? 0

for (const componentName of componentNames) {
  const componentPath = join(componentDirectory.pathname, componentName)
  const source = await readFile(componentPath, 'utf8')
  const lines = source.split('\n').length

  if (!/^personal_cabinet_[a-z0-9_]+\.vue$/.test(basename(componentName))) {
    failures.push(`${componentName}: component filename must use the domain prefix`)
  }
  if (lines > 300) {
    failures.push(`${componentName}: ${lines} lines exceeds the 300-line limit`)
  }
  if (countMatches(source, /^<template>$/gm) !== 1) {
    failures.push(`${componentName}: must contain exactly one top-level component template`)
  }
  if (/<script(?! setup>)/.test(source)) {
    failures.push(`${componentName}: scripts must use <script setup>`)
  }
  if (/\sstyle\s*=/.test(source)) {
    failures.push(`${componentName}: inline style attributes are forbidden`)
  }
  if (/\son[a-z]+\s*=/.test(source)) {
    failures.push(`${componentName}: native inline event handlers are forbidden`)
  }
  if (/v-html\s*=/.test(source)) {
    failures.push(`${componentName}: v-html is forbidden for this static UI`)
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`Quality checks passed for ${componentNames.length} Vue components.`)
