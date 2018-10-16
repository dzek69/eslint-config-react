/* eslint-disable max-lines, no-magic-numbers */

"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

module.exports = {
    rules: {
        // Code style specific rules
        "react/boolean-prop-naming": [ERROR, {
            propTypeNames: ["bool"],
            rule: "^(is|has)[A-Z]",
            // message: "It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})",
        }],
        "react/button-has-type": OFF,
        "react/default-props-match-prop-types": [ERROR, {
            allowRequiredDefaults: false,
        }],
        "react/destructuring-assignment": OFF,
        "react/display-name": OFF,
        "react/forbid-component-props": OFF,
        "react/forbid-dom-props": OFF,
        "react/forbid-elements": OFF,
        "react/forbid-prop-types": OFF,
        "react/forbid-foreign-prop-types": ERROR,
        "react/no-access-state-in-setstate": ERROR,
        "react/no-array-index-key": WARN,
        "react/no-children-prop": WARN,
        "react/no-danger": OFF,
        "react/no-danger-with-children": ERROR,
        "react/no-deprecated": WARN,
        "react/no-did-mount-set-state": [ERROR, {
            "disallow-in-func": true,
        }],
        "react/no-did-update-set-state": [ERROR, {
            "disallow-in-func": true,
        }],
        "react/no-direct-mutation-state": ERROR,
        "react/no-find-dom-node": WARN,
        "react/no-is-mounted": ERROR,
        "react/no-multi-comp": WARN,
        "react/no-redundant-should-component-update": ERROR,
        "react/no-render-return-value": ERROR,
        "react/no-set-state": OFF,
        "react/no-typos": ERROR,
        "react/no-string-refs": ERROR,
        "react/no-this-in-sfc": ERROR,
        "react/no-unescaped-entities": [ERROR, {
            // forbid: ['>', '"', '\'', '}']
        }],
        "react/no-unknown-property": WARN, // @todo verify this, set to error if ok
        "react/no-unsafe": OFF,
        "react/no-unused-prop-types": [WARN, {
            // customValidator: [],
            skipShapeProps: true,
        }],
        "react/no-unused-state": ERROR,
        "react/no-will-update-set-state": ERROR,
        "react/prefer-es6-class": [ERROR, "always"],
        "react/prefer-stateless-function": [ERROR, {
            "ignorePureComponents": true,
        }],
        "react/prop-types": [ERROR, {
            // ignore: [],
            // customValidators: [],
            skipUndeclared: false,
        }],
        "react/react-in-jsx-scope": ERROR,
        "react/require-default-props": [ERROR, {
            forbidDefaultForRequired: true,
        }],
        "react/require-optimization": OFF,
        "react/require-render-return": ERROR,
        "react/self-closing-comp": [ERROR, {
            component: true,
            html: true,
        }],
        "react/sort-comp": [ERROR, {
            // order: [],
            // groups: {}
        }],
        "react/sort-prop-types": [ERROR, {
            ignoreCase: true,
            callbacksLast: true,
            requiredFirst: true,
            sortShapeProp: true,
            noSortAlphabetically: false,
        }],
        "react/style-prop-object": ERROR,
        "react/void-dom-elements-no-children": ERROR,

        // JSX specific rules
        "react/jsx-boolean-value": [ERROR, "always"],
        "react/jsx-child-element-spacing": OFF,
        "react/jsx-closing-bracket-location": [ERROR, {
            location: "tag-aligned",
        }],
        "react/jsx-closing-tag-location": ERROR,
        "react/jsx-curly-spacing": [ERROR, {
            when: "never",
            allowMultiline: true, // @todo verify and consider false here
            // spacing: {}
        }],
        "react/jsx-filename-extension": OFF,
        "react/jsx-first-prop-new-line": [ERROR, "multiline"],
        "react/jsx-handler-names": [ERROR, {
            eventHandlerPrefix: "(handle|_handle)",
            eventHandlerPropPrefix: "on",
        }],
        "react/jsx-indent": [ERROR, 4],
        "react/jsx-indent-props": [ERROR, 4],
        "react/jsx-key": ERROR,
        "react/jsx-max-depth": [WARN, {
            max: 10, //
        }],
        "react/jsx-max-props-per-line": [ERROR, {
            when: "multiline",
            maximum: 1,
        }],
        "react/jsx-no-bind": [ERROR, {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: false,
            allowBind: false,
        }],
        "react/jsx-no-comment-textnodes": OFF,
        "react/jsx-no-duplicate-props": [ERROR, {
            ignoreCase: false,
        }],
        "react/jsx-no-literals": OFF,
        "react/jsx-no-target-blank": [ERROR, {
            enforceDynamicLinks: "always",
        }],
        "react/jsx-no-undef": [ERROR, {
            allowGlobals: false,
        }],
        "react/jsx-one-expression-per-line": [ERROR, {
            allow: "single-child",
        }],
        "react/jsx-curly-brace-presence": [ERROR, {
            props: "always",
            children: "ignore",
        }],
        "react/jsx-pascal-case": [ERROR, {
            allowAllCaps: true,
            // ignore: [],
        }],
        "react/jsx-props-no-multi-spaces": ERROR,
        "react/jsx-sort-default-props": [ERROR, {
            ignoreCase: true,
        }],
        "react/jsx-sort-props": OFF,
        "react/jsx-tag-spacing": [ERROR, {
            closingSlash: "never",
            beforeSelfClosing: "always",
            afterOpening: "never",
            beforeClosing: "never",
        }],
        "react/jsx-uses-react": ERROR,
        "react/jsx-uses-vars": ERROR,
        "react/jsx-wrap-multilines": [ERROR, {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line",
        }],
    },
};
