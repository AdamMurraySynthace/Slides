
let MyModule = {

  /**
   * My Function
   * 
   * @sideeffects
   * Calls the API
   * 
   * @returns {string}
   */
  _myFunction() {
    // Call API
    return "test";
  },

  /**
   * My Pure Function
   * 
   * @pure
   * 
   * @returns {string}
   */
  _myPureFunction() {
    return "test";
  }

};