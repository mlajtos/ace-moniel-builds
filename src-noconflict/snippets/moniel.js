ace.define("ace/snippets/moniel",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "snippet Chain\n\
	Chain(block = ${1:Block}, length = ${2:10})\n\
\n\
snippet List\n\
	List(block = ${1:Block}, length = ${2:10})\n\
\n\
snippet BlockDefinition\n\
	+${1:Block}(${2:attribute = 3x3}){\n\
		Input -> Identity -> Output\n\
	}\n\
\n\
snippet Block\n\
	/${1:blockName}{\n\
		in:In\n\
		out:Out\n\
\n\
		in -> out\n\
	}";
exports.scope = "moniel";

});
