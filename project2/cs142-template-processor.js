'use strict';

function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(data) {
    var pattern = /{{([a-z,A-Z, _, 0-9]+)}}/;

    var proccessed = this.template;
    var match = null;

    while((match = proccessed.match(pattern)) !== null) {
        proccessed = proccessed.replace(match[0], data[match[1]]);
    }

    return proccessed;
};