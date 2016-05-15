/**
 * @fileoverview Tests for object-curly-newline rule.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/object-curly-newline"),
    Ruvarester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruvarester = new Ruvarester();

ruvarester.run("object-curly-newline", rule, {
    valid: [

        // "always" ------------------------------------------------------------
        {
            code: [
                "var a = {",
                "};"
            ].join("\n"),
            options: ["always"]
        },
        {
            code: [
                "var b = {",
                "    a: 1",
                "};"
            ].join("\n"),
            options: ["always"]
        },
        {
            code: [
                "var c = {",
                "    a: 1, b: 2",
                "};"
            ].join("\n"),
            options: ["always"]
        },
        {
            code: [
                "var d = {",
                "    a: 1,",
                "    b: 2",
                "};"
            ].join("\n"),
            options: ["always"]
        },
        {
            code: [
                "var e = {",
                "    a: function foo() {",
                "        dosomething();",
                "    }",
                "};"
            ].join("\n"),
            options: ["always"]
        },

        // "never" -------------------------------------------------------------
        {
            code: [
                "var a = {};"
            ].join("\n"),
            options: ["never"]
        },
        {
            code: [
                "var b = {a: 1};"
            ].join("\n"),
            options: ["never"]
        },
        {
            code: [
                "var c = {a: 1, b: 2};"
            ].join("\n"),
            options: ["never"]
        },
        {
            code: [
                "var d = {a: 1,",
                "    b: 2};"
            ].join("\n"),
            options: ["never"]
        },
        {
            code: [
                "var e = {a: function foo() {",
                "    dosomething();",
                "}};"
            ].join("\n"),
            options: ["never"]
        },

        // "multiline" ---------------------------------------------------------
        {
            code: [
                "var a = {};"
            ].join("\n"),
            options: [{multiline: true}]
        },
        {
            code: [
                "var b = {a: 1};"
            ].join("\n"),
            options: [{multiline: true}]
        },
        {
            code: [
                "var c = {a: 1, b: 2};"
            ].join("\n"),
            options: [{multiline: true}]
        },
        {
            code: [
                "var d = {",
                "    a: 1,",
                "    b: 2",
                "};"
            ].join("\n"),
            options: [{multiline: true}]
        },
        {
            code: [
                "var e = {",
                "    a: function foo() {",
                "        dosomething();",
                "    }",
                "};"
            ].join("\n"),
            options: [{multiline: true}]
        },

        // "minItems" ----------------------------------------------------------
        {
            code: [
                "var a = {};"
            ].join("\n"),
            options: [{minItems: 2}]
        },
        {
            code: [
                "var b = {a: 1};"
            ].join("\n"),
            options: [{minItems: 2}]
        },
        {
            code: [
                "var c = {",
                "    a: 1, b: 2",
                "};"
            ].join("\n"),
            options: [{minItems: 2}]
        },
        {
            code: [
                "var d = {",
                "    a: 1,",
                "    b: 2",
                "};"
            ].join("\n"),
            options: [{minItems: 2}]
        },
        {
            code: [
                "var e = {a: function foo() {",
                "    dosomething();",
                "}};"
            ].join("\n"),
            options: [{minItems: 2}]
        },

        // "multiline" and "minItems" ------------------------------------------
        {
            code: [
                "var a = {};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}]
        },
        {
            code: [
                "var b = {a: 1};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}]
        },
        {
            code: [
                "var c = {",
                "    a: 1, b: 2",
                "};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}]
        },
        {
            code: [
                "var d = {",
                "    a: 1, ",
                "    b: 2",
                "};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}]
        },
        {
            code: [
                "var e = {",
                "    a: function foo() {",
                "        dosomething();",
                "    }",
                "};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}]
        },

        // "literal" and "pattern" ---------------------------------------------
        {
            code: [
                "let {a, b} = {",
                "    a: 1, b: 2",
                "};"
            ].join("\n"),
            options: [{literal: "always", pattern: "never"}],
            parserOptions: {ecmaVersion: 6}
        }
    ],
    invalid: [

        // "always" ------------------------------------------------------------
        {
            code: [
                "var a = {};"
            ].join("\n"),
            output: [
                "var a = {",
                "};"
            ].join("\n"),
            options: ["always"],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 1, column: 10, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var b = {a: 1};"
            ].join("\n"),
            output: [
                "var b = {",
                "a: 1",
                "};"
            ].join("\n"),
            options: ["always"],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 1, column: 14, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var c = {a: 1, b: 2};"
            ].join("\n"),
            output: [
                "var c = {",
                "a: 1, b: 2",
                "};"
            ].join("\n"),
            options: ["always"],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 1, column: 20, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var d = {a: 1,",
                "    b: 2};"
            ].join("\n"),
            output: [
                "var d = {",
                "a: 1,",
                "    b: 2",
                "};"
            ].join("\n"),
            options: ["always"],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 2, column: 9, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var e = {a: function foo() {",
                "    dosomething();",
                "}};"
            ].join("\n"),
            output: [
                "var e = {",
                "a: function foo() {",
                "    dosomething();",
                "}",
                "};"
            ].join("\n"),
            options: ["always"],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 3, column: 2, message: "Expected a line break before this close brace."}
            ]
        },

        // "never" ------------------------------------------------------------
        {
            code: [
                "var a = {",
                "};"
            ].join("\n"),
            output: [
                "var a = {};"
            ].join("\n"),
            options: ["never"],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 2, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var b = {",
                "    a: 1",
                "};"
            ].join("\n"),
            output: [
                "var b = {a: 1};"
            ].join("\n"),
            options: ["never"],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 3, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var c = {",
                "    a: 1, b: 2",
                "};"
            ].join("\n"),
            output: [
                "var c = {a: 1, b: 2};"
            ].join("\n"),
            options: ["never"],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 3, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var d = {",
                "    a: 1,",
                "    b: 2",
                "};"
            ].join("\n"),
            output: [
                "var d = {a: 1,",
                "    b: 2};"
            ].join("\n"),
            options: ["never"],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 4, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var e = {",
                "    a: function foo() {",
                "        dosomething();",
                "    }",
                "};"
            ].join("\n"),
            output: [
                "var e = {a: function foo() {",
                "        dosomething();",
                "    }};"
            ].join("\n"),
            options: ["never"],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 5, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },

        // "multiline" ---------------------------------------------------------
        {
            code: [
                "var a = {",
                "};"
            ].join("\n"),
            output: [
                "var a = {};"
            ].join("\n"),
            options: [{multiline: true}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 2, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var b = {",
                "    a: 1",
                "};"
            ].join("\n"),
            output: [
                "var b = {a: 1};"
            ].join("\n"),
            options: [{multiline: true}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 3, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var c = {",
                "    a: 1, b: 2",
                "};"
            ].join("\n"),
            output: [
                "var c = {a: 1, b: 2};"
            ].join("\n"),
            options: [{multiline: true}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 3, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var d = {a: 1,",
                "    b: 2};"
            ].join("\n"),
            output: [
                "var d = {",
                "a: 1,",
                "    b: 2",
                "};"
            ].join("\n"),
            options: [{multiline: true}],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 2, column: 9, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var e = {a: function foo() {",
                "    dosomething();",
                "}};"
            ].join("\n"),
            output: [
                "var e = {",
                "a: function foo() {",
                "    dosomething();",
                "}",
                "};"
            ].join("\n"),
            options: [{multiline: true}],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 3, column: 2, message: "Expected a line break before this close brace."}
            ]
        },

        // "minItems" ----------------------------------------------------------
        {
            code: [
                "var a = {",
                "};"
            ].join("\n"),
            output: [
                "var a = {};"
            ].join("\n"),
            options: [{minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 2, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var b = {",
                "    a: 1",
                "};"
            ].join("\n"),
            output: [
                "var b = {a: 1};"
            ].join("\n"),
            options: [{minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 3, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var c = {a: 1, b: 2};"
            ].join("\n"),
            output: [
                "var c = {",
                "a: 1, b: 2",
                "};"
            ].join("\n"),
            options: [{minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 1, column: 20, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var d = {a: 1,",
                "    b: 2};"
            ].join("\n"),
            output: [
                "var d = {",
                "a: 1,",
                "    b: 2",
                "};"
            ].join("\n"),
            options: [{minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 2, column: 9, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var e = {",
                "    a: function foo() {",
                "        dosomething();",
                "    }",
                "};"
            ].join("\n"),
            output: [
                "var e = {a: function foo() {",
                "        dosomething();",
                "    }};"
            ].join("\n"),
            options: [{minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 5, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },

        // "multiline" and "minItems" ------------------------------------------
        {
            code: [
                "var a = {",
                "};"
            ].join("\n"),
            output: [
                "var a = {};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 2, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var b = {",
                "    a: 1",
                "};"
            ].join("\n"),
            output: [
                "var b = {a: 1};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Unexpected a line break after this open brace."},
                {line: 3, column: 1, message: "Unexpected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var c = {a: 1, b: 2};"
            ].join("\n"),
            output: [
                "var c = {",
                "a: 1, b: 2",
                "};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 1, column: 20, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var d = {a: 1, ",
                "    b: 2};"
            ].join("\n"),
            output: [
                "var d = {",
                "a: 1, ",
                "    b: 2",
                "};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 2, column: 9, message: "Expected a line break before this close brace."}
            ]
        },
        {
            code: [
                "var e = {a: function foo() {",
                "    dosomething();",
                "}};"
            ].join("\n"),
            output: [
                "var e = {",
                "a: function foo() {",
                "    dosomething();",
                "}",
                "};"
            ].join("\n"),
            options: [{multiline: true, minItems: 2}],
            errors: [
                {line: 1, column: 9, message: "Expected a line break after this open brace."},
                {line: 3, column: 2, message: "Expected a line break before this close brace."}
            ]
        },

        // "literal" and "pattern" ---------------------------------------------
        {
            code: [
                "let {",
                "    a, b",
                "} = {a: 1, b: 2};"
            ].join("\n"),
            output: [
                "let {a, b} = {",
                "a: 1, b: 2",
                "};"
            ].join("\n"),
            options: [{literal: "always", pattern: "never"}],
            parserOptions: {ecmaVersion: 6},
            errors: [
                {line: 1, column: 5, message: "Unexpected a line break after this open brace."},
                {line: 3, column: 1, message: "Unexpected a line break before this close brace."},
                {line: 3, column: 5, message: "Expected a line break after this open brace."},
                {line: 3, column: 16, message: "Expected a line break before this close brace."}
            ]
        }
    ]
});
