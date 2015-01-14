var customSelect = function customSelect(element, cssClass) {

  var _element = element,
    _class = cssClass;

  var my = {

    element: _element.cloneNode(true),
    cssClass: _class,
    wrapper: document.createElement("div")

  };

  function wrap(element, child) {

    element.appendChild(child);

  }

  function setDataOption(value) {

    my.wrapper.setAttribute("data-option", value);

  }

  function getOptionContent(select) {

    var currentIndex = select.options.selectedIndex,
              option = select.options[currentIndex],
               value;
      value = option ? option.textContent : false;

      return value;


  }

  function changeHandler() {

    setDataOption(getOptionContent(this));

  }

  (function init() {

    my.wrapper.classList.add(my.cssClass);
    wrap(my.wrapper, my.element);

    setDataOption(getOptionContent(my.element));

    my.element.addEventListener("change", changeHandler);



  })();


  return {

    initiate: function() {
      _element.parentNode.insertBefore(my.wrapper, _element);
      _element.parentNode.removeChild(_element);
     },
     getCurrentValue: function() {

        return getOptionContent(my.element);

     }

  };

};
