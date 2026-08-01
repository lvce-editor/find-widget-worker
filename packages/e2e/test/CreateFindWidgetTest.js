/** @typedef {import('@lvce-editor/test-with-playwright').Test} Test */

/**
 * @typedef {object} FindOptions
 * @property {string} content
 * @property {boolean} [matchCase]
 * @property {number} matchCount
 * @property {{ direction: 'next' | 'previous', steps: number }} [navigation]
 * @property {string} query
 * @property {boolean} [wholeWord]
 */

/**
 * @typedef {object} ReplaceAllOptions
 * @property {string} content
 * @property {string} expectedText
 * @property {string} query
 * @property {string} replacement
 */

/**
 * @param {number} index
 * @param {number} count
 * @returns {string}
 */
const getMatchCountText = (index, count) => {
  return count === 0 ? 'No Results' : `${index} of ${count}`
}

/**
 * @param {'next' | 'previous'} direction
 * @param {number} steps
 * @param {number} count
 * @returns {number}
 */
const getNavigationIndex = (direction, steps, count) => {
  const offset = direction === 'next' ? steps : -steps
  return (((offset % count) + count) % count) + 1
}

/**
 * @param {FindOptions} options
 * @returns {Test}
 */
export const createFindTest = (options) => {
  return async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
    const tmpDir = await FileSystem.getTmpDir()
    await FileSystem.writeFile(`${tmpDir}/file1.txt`, options.content)
    await Workspace.setPath(tmpDir)
    await Main.openUri(`${tmpDir}/file1.txt`)
    await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
    await Editor.openFindWidget()

    if (options.matchCase) {
      await FindWidget.toggleMatchCase()
    }
    if (options.wholeWord) {
      await FindWidget.toggleMatchWholeWord()
    }
    await FindWidget.setValue(options.query)

    const matchCount = Locator('.FindWidgetMatchCount')
    await expect(matchCount).toBeVisible()
    await expect(matchCount).toHaveText(getMatchCountText(1, options.matchCount))

    if (options.navigation) {
      for (let i = 0; i < options.navigation.steps; i++) {
        if (options.navigation.direction === 'next') {
          await FindWidget.focusNext()
        } else {
          await FindWidget.focusPrevious()
        }
      }
      const index = getNavigationIndex(options.navigation.direction, options.navigation.steps, options.matchCount)
      await expect(matchCount).toHaveText(getMatchCountText(index, options.matchCount))
    }
  }
}

/**
 * @param {ReplaceAllOptions} options
 * @returns {Test}
 */
export const createReplaceAllTest = (options) => {
  return async ({ FileSystem, Workspace, Main, Editor, Locator, expect, FindWidget }) => {
    const tmpDir = await FileSystem.getTmpDir()
    await FileSystem.writeFile(`${tmpDir}/file1.txt`, options.content)
    await Workspace.setPath(tmpDir)
    await Main.openUri(`${tmpDir}/file1.txt`)
    await Editor.setSelections(new Uint32Array([0, 0, 0, 0]))
    await Editor.openFindWidget()
    await FindWidget.setValue(options.query)
    await FindWidget.toggleReplace()
    await FindWidget.setReplaceValue(options.replacement)

    await FindWidget.replaceAll()

    await Editor.shouldHaveText(options.expectedText)
    const matchCount = Locator('.FindWidgetMatchCount')
    await expect(matchCount).toHaveText('No Results')
  }
}
