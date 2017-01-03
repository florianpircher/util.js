'use strict'

window.util = typeof util === 'undefined' ? {} : util

/**
 * Registers the specified listener on `target` and removes the listener after
 * the first time the event was fired. Uses `addEventListener`.
 * 
 * - parameter target EventTarget: The target of the event.
 * - parameter type String: The type of the event.
 * - parameter listener Function: The object that receives a notification (an
 *                                object that implements the Event interface)
 *                                when an event of the specified type occurs.
 *              - parameter event Event: The event that was fired.
 *              - returns Object: Object to return to `addEventListener`.
 * - parameter options Object|Boolean: Options for `addEventListener`.
 */
util.addEventListenerOnce = (target, type, listener, options) => {
  const once = function (event) {
    target.removeEventListener(type, once, options)
    return listener.apply(this, [event])
  }
  
  target.addEventListener(type, once, options)
}
