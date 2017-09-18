'use strict';

var cs142MakeMultiFilter = function(originalArray) {

    var currentArray = originalArray.slice();

    return function arrayFilterer(filterCriteria, callback) {
       
        if(!filterCriteria) {
            return currentArray;
        }

        currentArray = currentArray.filter(filterCriteria);
        
        if(callback) {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    };
};