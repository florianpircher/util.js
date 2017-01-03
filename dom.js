'use strict'

window.util = typeof util === 'undefined' ? {} : util

/**
 * Selects the first element matching `selectors`. Uses `querySelector`.
 * 
 * - parameter selectors String: `querySelector` selection pattern.
 * - parameter baseElement Element? = `document`: Selection root.
 * - returns Element: First matching element.
 */
util.get = (selectors, baseElement = document) => {
  return baseElement.querySelector(selectors)
}

/**
 * Selects all elements matching `selectors` as array. Uses `querySelectorAll`.
 * 
 * - parameter selectors String: `querySelectorAll` selection pattern.
 * - parameter baseElement Element? = `document`: Selection root.
 * - returns Array<Element>: All matching elements.
 */
util.getAll = (selectors, baseElement = document) => {
  return Array.from(baseElement.querySelectorAll(selectors))
}

/**
 * Inserts the specified node after the reference node as a child of the
 * reference node’s parent node.
 *
 * - parameter referenceNode Node: The node after which `node` is inserted.
 * - parameter node Node: The node to be inserted after `referenceNode`.
 * - returns Node: The inserted node.
 */
util.insertAfter = (referenceNode, node) => {
  return referenceNode.parentNode.insertBefore(node, referenceNode.nextSibling)
}

/**
 * Adds a node to the beginning of the list of children of a specified
 * reference node. If the given child is a reference to an existing node in the
 * document, `prependChild` moves it from its current position to the new
 * position.
 *
 * - parameter referenceNode Node: The node inside of which `node` is inserted.
 * - parameter node Node: The node to be inserted in `referenceNode`.
 * - returns Node: The inserted node.
 */
util.prependChild = (referenceNode, node) => {
  return referenceNode.insertBefore(node, referenceNode.firstChild)
}
