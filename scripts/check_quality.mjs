import { readdir, readFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const sourceDirectory = fileURLToPath(new URL('../src/', import.meta.url))
const failures = []

const collectVueFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name)
      if (entry.isDirectory()) return collectVueFiles(path)
      return entry.isFile() && entry.name.endsWith('.vue') ? [path] : []
    }),
  )
  return nested.flat()
}

const componentPaths = await collectVueFiles(sourceDirectory)
const countMatches = (source, pattern) => source.match(pattern)?.length ?? 0
const countPhysicalLines = (source) => {
  const normalized = source.replaceAll('\r\n', '\n').replace(/\n$/, '')
  return normalized.length === 0 ? 0 : normalized.split('\n').length
}

for (const componentPath of componentPaths) {
  const componentName = basename(componentPath)
  const source = await readFile(componentPath, 'utf8')
  const lines = countPhysicalLines(source)

  if (
    componentName !== 'App.vue' &&
    !/^personal_cabinet_[a-z0-9_]+\.vue$/.test(componentName)
  ) {
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

console.log(`Quality checks passed for ${componentPaths.length} Vue components.`)
