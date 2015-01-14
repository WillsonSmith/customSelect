var customSelect = function customSelect(element, cssClass) {

  //assign given values to a variable
  var _element = element,
    _class = cssClass;

  //create a my varaible that sets up a couple things, and is used for its unique items
  var my = {

    //create a clone of the supplied element
    //if we were to just append the element - it would disappear from the dom and we
    //wouldn't have anywhere to append the new wrapped element
    element: _element.cloneNode(true),
    cssClass: _class,
    //create a wrapper object for the select
    wrapper: document.createElement("div")

  };

  function wrap(element, child) {

    element.appendChild(child);

  }

  function setDataOption(value) {
    //set the data attribute used by CSS to show the value on your custom select
    my.wrapper.setAttribute("data-option", value);

  }

  function getOptionContent(select) {
    //get the index of the current selected value
    var currentIndex = select.options.selectedIndex,
    //get the option element of that index
              option = select.options[currentIndex],
              value;
    //if that option exists, set the value to it's text content or false
      value = option ? option.textContent : false;

      return value;


  }

  function changeHandler() {

    setDataOption(getOptionContent(this));

  }

  (function init() {
    //add the class provided to your wrapper
    my.wrapper.classList.add(my.cssClass);
    //wrap the select element in the new div
    wrap(my.wrapper, my.element);

    setDataOption(getOptionContent(my.element));

    my.element.addEventListener("change", changeHandler);



  })();


  return {

    initiate: function() {
      //use the original element (why we made a clone) and insert the new wrapper with select before it
      _element.parentNode.insertBefore(my.wrapper, _element);
      //remove the original element so we don't have duplicates
      _element.parentNode.removeChild(_element);
     },
     getCurrentValue: function() {

        return getOptionContent(my.element);

     }

  };

};
