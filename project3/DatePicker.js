'use strict';

function DatePicker(elementId, callback) {
    this.elementId = elementId;
    this.callback = callback;
}

DatePicker.prototype.render = function(date) {
    console.log("render date picker", date);
    var element = document.getElementById(this.elementId);
    var datePickerElement = document.createElement('div');
    datePickerElement.innerHTML = 'Pick date';
    
    datePickerElement.setAttribute('class', 'datepicker');

    var dateElement = document.createElement('ul');
    
    for(var i = 1; i <= 31; i++) {
        var option = document.createElement('li');
        option.setAttribute('data-value', i);
        option.innerHTML = i;

        dateElement.appendChild(option);
    }

    datePickerElement.appendChild(dateElement);

    var monthElement = document.createElement('ul');

    for(var i = 1; i <= 12; i++) {
        var option = document.createElement('li');
        option.setAttribute('data-value', i);
        option.innerHTML = i;

        monthElement.appendChild(option);
    }

    datePickerElement.appendChild(monthElement);


    var yearElement = document.createElement('ul');

    for(var i = 1900; i <= 2018; i++) {
        var option = document.createElement('li');
        option.setAttribute('data-value', i);
        option.innerHTML = i;

        yearElement.appendChild(option);
    }

    datePickerElement.appendChild(yearElement);

    element.appendChild(datePickerElement);

    datePickerElement.addEventListener('click', function() {
        Array.from(datePickerElement.getElementsByTagName('ul')).forEach(function(ul) {
            ul.style.display = 'flex';
        })

    })

    datePickerElement.addEventListener('blur', function() {
        Array.from(datePickerElement.getElementsByTagName('ul')).forEach(function(ul) {
            ul.style.display = 'none';
        })

    })
}