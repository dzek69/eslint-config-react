/* eslint-disable max-lines, no-magic-numbers */

"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

const codeStyle = {
    "react/boolean-prop-naming": OFF,
    "react/button-has-type": OFF,
    "react/default-props-match-prop-types": [ERROR, {
        allowRequiredDefaults: false,
    }],
    "react/destructuring-assignment": OFF,
    "react/display-name": [ERROR, {
        ignoreTranspilerName: false,
        // checkContextObjects: true, // not released yet
    }],
    "react/forbid-component-props": OFF,
    "react/forbid-dom-props": OFF,
    "react/forbid-elements": OFF,
    "react/forbid-foreign-prop-types": [ERROR, { allowInPropTypes: false }],
    "react/forbid-prop-types": OFF,
    "react/function-component-definition": [
        ERROR,
        {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function"
        }
    ],
    "react/hook-use-state": OFF,
    "react/iframe-missing-sandbox": ERROR,
    "react/no-access-state-in-setstate": ERROR,
    "react/no-adjacent-inline-elements": OFF,
    "react/no-array-index-key": WARN,
    "react/no-arrow-function-lifecycle": ERROR,
    "react/no-children-prop": [
        WARN, { allowFunctions: true },
    ],
    "react/no-danger-with-children": ERROR,
    "react/no-danger": OFF,
    "react/no-deprecated": WARN,
    "react/no-did-mount-set-state": [ERROR, "disallow-in-func"],
    "react/no-did-update-set-state": [ERROR, "disallow-in-func"],
    "react/no-direct-mutation-state": ERROR,
    "react/no-find-dom-node": ERROR,
    "react/no-invalid-html-attribute": [ERROR, ["rel"]],
    "react/no-is-mounted": ERROR,
    "react/no-multi-comp": [WARN, { ignoreStateless: false }],
    "react/no-namespace": ERROR,
    "react/no-object-type-as-default-prop": ERROR,
    "react/no-redundant-should-component-update": ERROR,
    "react/no-render-return-value": ERROR,
    "react/no-set-state": OFF,
    "react/no-string-refs": [ERROR, {
        noTemplateLiterals: true,
    }],
    "react/no-this-in-sfc": ERROR, // @TODO disable on typescript in flat config
    "react/no-typos": ERROR,
    "react/no-unescaped-entities": OFF,
    "react/no-unknown-property": [ERROR, { ignore: [] }],
    "react/no-unsafe": [ERROR, {
        "checkAliases": true,
    }],
    "react/no-unstable-nested-components": [ERROR, {
        allowAsProps: false,
        customValidators: [],
    }],
    "react/no-unused-class-component-methods": [ERROR],
    "react/no-unused-prop-types": [WARN, {
        ignore: [],
        customValidators: [],
        skipShapeProps: true,
    }],
    "react/no-unused-state": ERROR,
    "react/no-will-update-set-state": ERROR,
    "react/prefer-es6-class": [ERROR, "always"],
    "react/prefer-exact-props": OFF,
    "react/prefer-read-only-props": OFF, // flow only
    "react/prefer-stateless-function": [ERROR, {
        "ignorePureComponents": false,
    }],
    "react/prop-types": [ERROR, { // @TODO disable with TS with flat config
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
    }],
    "react/react-in-jsx-scope": ERROR, // TODO allow to disable with flat config
    "react/require-default-props": OFF,
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
    "react/sort-default-props": [ERROR, {
        ignoreCase: true,
    }],
    "react/sort-prop-types": [ERROR, {
        ignoreCase: true,
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
    }],
    "react/state-in-constructor": OFF,
    "react/static-property-placement": [ERROR, "property assignment"],
    "react/style-prop-object": ERROR,
    "react/void-dom-elements-no-children": ERROR,
};

const jsx = {
    "react/jsx-boolean-value": [ERROR, "always"],
    "react/jsx-child-element-spacing": OFF,
    "react/jsx-closing-bracket-location": [ERROR, {
        location: "tag-aligned",
    }],
    "react/jsx-closing-tag-location": ERROR,
    "react/jsx-curly-brace-presence": [ERROR, {
        props: "always",
        children: "ignore",
    }],
    "react/jsx-curly-newline": [ERROR, "never"],
    "react/jsx-curly-spacing": [ERROR, {
        when: "never",
        allowMultiline: true,
        "spacing": {
            "objectLiterals": "never"
        },
    }],
    "react/jsx-equals-spacing": [ERROR, "never"],
    "react/jsx-filename-extension": OFF,
    "react/jsx-first-prop-new-line": [ERROR, "multiline"],
    "react/jsx-fragments": [ERROR, "syntax"],
    "react/jsx-handler-names": [OFF],
    "react/jsx-indent": [ERROR, 4, {
        checkAttributes: true,
        indentLogicalExpressions: true,
    }],
    "react/jsx-indent-props": [ERROR, {
        indentMode: 4,
        ignoreTernaryOperator: false,
    }],
    "react/jsx-key": [ERROR, {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
    }],
    "react/jsx-max-depth": [WARN, {
        max: 10, //
    }],
    "react/jsx-max-props-per-line": [ERROR, {
        when: "multiline",
        maximum: 1,
    }],
    "react/jsx-newline": OFF,
    "react/jsx-no-bind": [ERROR, {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
    }],
    "react/jsx-no-comment-textnodes": OFF,
    "react/jsx-no-constructed-context-values": ERROR,
    "react/jsx-no-duplicate-props": [ERROR, {
        ignoreCase: false,
    }],
    "react/jsx-no-leaked-render": [ERROR, {
        validStrategies: ["coerce", "ternary"]
    }],
    "react/jsx-no-literals": OFF,
    "react/jsx-no-script-url": ERROR, // default config left out here - too noisy, default it good
    "react/jsx-no-target-blank": [ERROR, {
        allowReferrer: false,
        enforceDynamicLinks: "always",
        warnOnSpreadAttributes: false,
        links: true,
        forms: true,
    }],
    "react/jsx-no-undef": OFF, // [ERROR, { allowGlobals: false }], TODO - that when no typescript - when flat config is ready
    "react/jsx-no-useless-fragment": OFF,
    "react/jsx-one-expression-per-line": [OFF], // too annoying as it won't even allow `Count: {this.state.count}`
    "react/jsx-pascal-case": [ERROR, {
        allowAllCaps: true,
        allowLeadingUnderscore: false,
        allowNamespace: false,
        ignore: [],
    }],
    "react/jsx-props-no-multi-spaces": OFF, // If you have enabled the core rule no-multi-spaces with eslint >= 3, you don't need this rule.
    "react/jsx-props-no-spreading": OFF,
    "react/jsx-sort-default-props": OFF, // deprecated, use react/sort-default-props
    "react/jsx-sort-props": OFF,
    "react/jsx-space-before-closing": OFF, // deprecated, use react/jsx-tag-spacing
    "react/jsx-tag-spacing": [ERROR, {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
    }],
    "react/jsx-uses-react": ERROR, // TODO disable when new jsx transform via flat config
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
};

module.exports = {
    rules: {
        ...codeStyle,
        ...jsx,
    },
};
