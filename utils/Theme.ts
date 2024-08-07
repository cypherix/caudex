import * as monaco from 'monaco-editor'


const theme:monaco.editor.IStandaloneThemeData = {
        base:'vs-dark',
        inherit: true,
        rules: [
            {
                token: "emphasis",
                fontStyle: "italic"
            },
            {
                token: "strong",
                fontStyle: "bold"
            },
            {
                token: "header",
                foreground: "#BD93F9"
            },
            {
                token: "source",
                foreground: "#F8F8F2"
            },
            {
                token: "meta.diff",
                foreground: "#6272A4"
            },
            {
                token: "meta.diff.header",
                foreground: "#6272A4"
            },
            {
                token: "markup.inserted",
                foreground: "#50FA7B"
            },
            {
                token: "markup.deleted",
                foreground: "#FF5555"
            },
            {
                token: "markup.changed",
                foreground: "#FFB86C"
            },
            {
                token: "invalid",
                foreground: "#FF5555",
                fontStyle: "underline italic"
            },
            {
                token: "invalid.deprecated",
                foreground: "#F8F8F2",
                fontStyle: "underline italic"
            },
            {
                token: "entity.name.filename",
                foreground: "#F1FA8C"
            },
            {
                token: "markup.error",
                foreground: "#FF5555"
            },
            {
                token: "markup.underline",
                fontStyle: "underline"
            },
            {
                token: "markup.bold",
                fontStyle: "bold",
                foreground: "#FFB86C"
            },
            {
                token: "markup.heading",
                fontStyle: "bold",
                foreground: "#BD93F9"
            },
            {
                token: "markup.italic",
                foreground: "#F1FA8C",
                fontStyle: "italic"
            },
            {
                token: "beginning.punctuation.definition.list.markdown",
                foreground: "#8BE9FD"
            },
            {
                token: "beginning.punctuation.definition.quote.markdown",
                foreground: "#8BE9FD"
            },
            {
                token: "punctuation.definition.link.restructuredtext",
                foreground: "#8BE9FD"
            },
            {
                token: "markup.inline.raw",
                foreground: "#50FA7B"
            },
            {
                token: "markup.raw.restructuredtext",
                foreground: "#50FA7B"
            },
            {
                token: "markup.underline.link",
                foreground: "#8BE9FD"
            },
            {
                token: "markup.underline.link.image",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.link.reference.def.restructuredtext",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.definition.directive.restructuredtext",
                foreground: "#FF79C6"
            },
            {
                token: "string.other.link.description",
                foreground: "#FF79C6"
            },
            {
                token: "string.other.link.title",
                foreground: "#FF79C6"
            },
            {
                token: "entity.name.directive.restructuredtext",
                foreground: "#F1FA8C",
                fontStyle: "italic"
            },
            {
                token: "markup.quote",
                foreground: "#F1FA8C",
                fontStyle: "italic"
            },
            {
                token: "meta.separator.markdown",
                foreground: "#6272A4"
            },
            {
                token: "fenced_code.block.language",
                foreground: "#50FA7B"
            },
            {
                token: "markup.raw.inner.restructuredtext",
                foreground: "#50FA7B"
            },
            {
                token: "markup.fenced_code.block.markdown punctuation.definition.markdown",
                foreground: "#50FA7B"
            },
            {
                token: "punctuation.definition.constant.restructuredtext",
                foreground: "#BD93F9"
            },
            {
                token: "markup.heading.markdown punctuation.definition.string.begin",
                foreground: "#BD93F9"
            },
            {
                token: "markup.heading.markdown punctuation.definition.string.end",
                foreground: "#BD93F9"
            },
            {
                token: "meta.paragraph.markdown punctuation.definition.string.begin",
                foreground: "#F8F8F2"
            },
            {
                token: "meta.paragraph.markdown punctuation.definition.string.end",
                foreground: "#F8F8F2"
            },
            {
                token: "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
                foreground: "#F1FA8C"
            },
            {
                token: "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end",
                foreground: "#F1FA8C"
            },
            {
                token: "entity.name.type.class",
                foreground: "#8BE9FD",
                fontStyle: "normal"
            },
            {
                token: "entity.name.class",
                foreground: "#8BE9FD",
                fontStyle: "normal"
            },
            {
                token: "keyword.expressions-and-types.swift",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "keyword.other.this",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "variable.language",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "variable.language punctuation.definition.variable.php",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "variable.other.readwrite.instance.ruby",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "variable.parameter.function.language.special",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "entity.other.inherited-class",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "comment",
                foreground: "#6272A4"
            },
            {
                token: "punctuation.definition.comment",
                foreground: "#6272A4"
            },
            {
                token: "unused.comment",
                foreground: "#6272A4"
            },
            {
                token: "wildcard.comment",
                foreground: "#6272A4"
            },
            {
                token: "comment keyword.codetag.notation",
                foreground: "#FF79C6"
            },
            {
                token: "comment.block.documentation keyword",
                foreground: "#FF79C6"
            },
            {
                token: "comment.block.documentation storage.type.class",
                foreground: "#FF79C6"
            },
            {
                token: "comment.block.documentation entity.name.type",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "comment.block.documentation entity.name.type punctuation.definition.bracket",
                foreground: "#8BE9FD"
            },
            {
                token: "comment.block.documentation variable",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "comment.block.documentation variable punctuation.definition.bracket",
                foreground: "#8BE9FD"
            },
            {
                token: "constant",
                foreground: "#BD93F9"
            },
            {
                token: "constant.numeric",
                foreground: "#BD93F9"
            },
            {
                token: "constant.character",
                foreground: "#BD93F9"
            },
            {
                token: "constant.character.escape",
                foreground: "#FF79C6"
            },
            {
                token: "constant.other.color",
                foreground: "#BD93F9"
            },
            {
                token: "punctuation.definition.constant",
                foreground: "#BD93F9"
            },
            {
                token: "variable.other.constant",
                foreground: "#BD93F9"
            },
            {
                token: "constant.character.entity",
                foreground: "#BD93F9"
            },
            {
                token: "constant.language",
                foreground: "#BD93F9",
                fontStyle: "normal"
            },
            {
                token: "keyword.other.unit",
                foreground: "#BD93F9"
            },
            {
                token: "punctuation.definition.constant.markdown",
                foreground: "#BD93F9"
            },
            {
                token: "constant.language.boolean",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "constant.language.null",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "constant.language.undefined",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "keyword.other.null",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "keyword.other.undef",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "invalid.illegal.unrecognized-tag.html",
                foreground: "#F1FA8C"
            },
            {
                token: "invalid.deprecated.entity.other.attribute-name.html",
                foreground: "#BD93F9",
                fontStyle: "italic underline"
            },
            {
                token: "keyword",
                foreground: "#FF79C6",
                fontStyle: "normal"
            },
            {
                token: "keyword.control",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator",
                foreground: "#FF79C6",
                fontStyle: "normal"
            },
            {
                token: "keyword.other.template",
                foreground: "#FF79C6",
                fontStyle: "normal"
            },
            {
                token: "keyword.other.substitution",
                foreground: "#FF79C6",
                fontStyle: "normal"
            },
            {
                token: "storage",
                foreground: "#FF79C6"
            },
            {
                token: "storage.type",
                foreground: "#FF79C6"
            },
            {
                token: "storage.modifier",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.declaration",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.other.import",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.other.package",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.other.export",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.control.from",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.control.as",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.control.default",
                foreground: "#FF79C6"
            },
            {
                token: "meta.import",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.control.export",
                foreground: "#FF79C6"
            },
            {
                token: "meta.export",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.word",
                foreground: "#FF79C6",
                fontStyle: "italic"
            },
            {
                token: "keyword.operator.expression.import",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.in",
                foreground: "#FF79C6",
                fontStyle: "italic"
            },
            {
                token: "keyword.operator.expression.of",
                foreground: "#FF79C6",
                fontStyle: "italic"
            },
            {
                token: "keyword.operator.logical",
                foreground: "#FF79C6",
                fontStyle: "italic"
            },
            {
                token: "keyword.operator.logical.python",
                foreground: "#FF79C6",
                fontStyle: "italic"
            },
            {
                token: "keyword.operator.existential",
                foreground: "#FF79C6",
                fontStyle: "italic"
            },
            {
                token: "keyword.operator.arithmetic",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.bitwise",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.comparison",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.dereference",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.optional",
                foreground: "#FF79C6",
                fontStyle: "italic"
            },
            {
                token: "keyword.operator.assignment",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.decrement",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.increment",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.ternary",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.spread",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.arrow",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.type.annotation",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.key-value",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.rest",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.comparison.java",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.comparison.ts",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.comparison.tsx",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.comparison.jsx",
                foreground: "#FF79C6"
            },
            {
                token: "meta.operator",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.typeof",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.delete",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.of",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.in",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.void",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.instanceof",
                foreground: "#FF79C6"
            },
            {
                token: "keyword.operator.expression.delete",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.accessor",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.section.embedded",
                foreground: "#FFB86C"
            },
            {
                token: "punctuation.section.embedded.begin",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.section.embedded.end",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.separator",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.separator.continuation",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.terminator",
                foreground: "#FF79C6"
            },
            {
                token: "meta.brace",
                foreground: "#F8F8F2"
            },
            {
                token: "meta.tag",
                foreground: "#FF79C6"
            },
            {
                token: "meta.tag.preprocessor",
                foreground: "#FF79C6"
            },
            {
                token: "meta.tag.sgml",
                foreground: "#FF79C6"
            },
            {
                token: "entity.name.tag",
                foreground: "#FF79C6",
                fontStyle: "normal"
            },
            {
                token: "entity.name.tag support.class.component",
                foreground: "#FF79C6"
            },
            {
                token: "entity.other.attribute-name",
                foreground: "#50FA7B",
                fontStyle: "normal"
            },
            {
                token: "punctuation.definition.tag",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.definition.tag.begin",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.definition.tag.end",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.definition.tag.begin.html",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.definition.tag.end.html",
                foreground: "#FF79C6"
            },
            {
                token: "meta.preprocessor",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.definition.preprocessor",
                foreground: "#FF79C6"
            },
            {
                token: "meta.tag.preprocessor.keyword",
                foreground: "#FF79C6"
            },
            {
                token: "meta.tag.preprocessor entity.name.tag",
                foreground: "#FF79C6"
            },
            {
                token: "meta.selector",
                foreground: "#FF79C6"
            },
            {
                token: "punctuation.definition.entity",
                foreground: "#BD93F9"
            },
            {
                token: "entity.name",
                foreground: "#F8F8F2",
                fontStyle: "italic"
            },
            {
                token: "entity.other.inherited-class",
                foreground: "#8BE9FD"
            },
            {
                token: "variable.parameter",
                foreground: "#F8F8F2",
                fontStyle: "italic"
            },
            {
                token: "meta.object-literal.key",
                foreground: "#FFB86C",
                fontStyle: "normal"
            },
            {
                token: "support.type",
                foreground: "#8BE9FD",
                fontStyle: "normal"
            },
            {
                token: "support.class",
                foreground: "#8BE9FD",
                fontStyle: "normal"
            },
            {
                token: "support.constant",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "support.variable",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "support.other.namespace",
                foreground: "#8BE9FD",
                fontStyle: "normal"
            },
            {
                token: "support.type.sys-types",
                foreground: "#8BE9FD",
                fontStyle: "normal"
            },
            {
                token: "support.constant.sys-types",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "support.function",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "support.function.magic",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "support.function.dom",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "entity.name.module",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "support.other.module",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "support.type.object.module",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "entity.other.attribute-name.module.js",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "entity.name.section.markdown",
                foreground: "#BD93F9",
                fontStyle: "italic"
            },
            {
                token: "entity.name.type.namespace",
                foreground: "#8BE9FD"
            },
            {
                token: "support.type.namespace",
                foreground: "#8BE9FD"
            },
            {
                token: "entity.other.attribute-name.pseudo-class",
                foreground: "#50FA7B",
                fontStyle: "normal"
            },
            {
                token: "entity.other.attribute-name.pseudo-element",
                foreground: "#50FA7B",
                fontStyle: "normal"
            },
            {
                token: "meta.class entity.name.type",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.struct.entity.name.type",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.type.entity.name.type",
                foreground: "#8BE9FD"
            },
            {
                token: "support.type.vendored.property-name",
                foreground: "#F1FA8C"
            },
            {
                token: "entity.name.type",
                foreground: "#8BE9FD"
            },
            {
                token: "entity.name.type.module",
                foreground: "#8BE9FD"
            },
            {
                token: "entity.name.namespace",
                foreground: "#8BE9FD"
            },
            {
                token: "support.constant.property-value",
                foreground: "#8BE9FD"
            },
            {
                token: "entity.name.type.function",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "support.function.basic",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "support.function.vendored",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "support.constant.color",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "support.constant.color.extended",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "support.constant.font-name",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "entity.other.attribute-name.property-name",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "variable.parameter.register",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.diff.header.from-file",
                foreground: "#FF79C6"
            },
            {
                token: "meta.diff.header.to-file",
                foreground: "#FF79C6"
            },
            {
                token: "markup.inserted.diff",
                foreground: "#50FA7B"
            },
            {
                token: "markup.deleted.diff",
                foreground: "#FF5555"
            },
            {
                token: "markup.changed.diff",
                foreground: "#FFB86C"
            },
            {
                token: "punctuation.definition.changed.diff",
                foreground: "#FFB86C"
            },
            {
                token: "punctuation.definition.inserted.diff",
                foreground: "#50FA7B"
            },
            {
                token: "punctuation.definition.deleted.diff",
                foreground: "#FF5555"
            },
            {
                token: "meta.diff.range",
                foreground: "#6272A4"
            },
            {
                token: "meta.diff.header",
                foreground: "#6272A4"
            },
            {
                token: "meta.diff.index",
                foreground: "#6272A4"
            },
            {
                token: "constant.other.reference.link",
                foreground: "#FF79C6"
            },
            {
                token: "variable.other.readwrite.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.constant.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.constant.object.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.constant.property.object.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.constant.property.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.object.property.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.global",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.global.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.object.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.property.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.property.object.alias",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.object",
                foreground: "#50FA7B"
            },
            {
                token: "variable.other.readwrite.property",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.round.js",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.square.js",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.curly.js",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.round.ts",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.square.ts",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.curly.ts",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.round.tsx",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.square.tsx",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.curly.tsx",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.round.jsx",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.square.jsx",
                foreground: "#50FA7B"
            },
            {
                token: "meta.brace.curly.jsx",
                foreground: "#50FA7B"
            },
            {
                token: "support.constant.property-value.css",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "entity.other.attribute-name.css",
                foreground: "#50FA7B",
                fontStyle: "normal"
            },
            {
                token: "entity.other.attribute-name.id",
                foreground: "#50FA7B"
            },
            {
                token: "entity.other.attribute-name.class.css",
                foreground: "#50FA7B"
            },
            {
                token: "meta.selector.css",
                foreground: "#50FA7B"
            },
            {
                token: "meta.property-name.css",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.property-name.id",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.property-name.support",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.property-value",
                foreground: "#50FA7B"
            },
            {
                token: "support.constant.color.w3c-standard",
                foreground: "#50FA7B"
            },
            {
                token: "support.constant.color.w3c-functional",
                foreground: "#50FA7B"
            },
            {
                token: "support.constant.color.w3c-extended",
                foreground: "#50FA7B"
            },
            {
                token: "support.constant.color.w3c-named",
                foreground: "#50FA7B"
            },
            {
                token: "meta.tag.sgml.doctype",
                foreground: "#50FA7B",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.style",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.html",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.head",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.body",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.footer",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.header",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.section",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.article",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.nav",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.address",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.dialog",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.menu",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.details",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.main",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.mark",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.time",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.figure",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.figcaption",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.hgroup",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.summar",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.output",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.embed",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.video",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.audio",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.source",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.track",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.object",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.param",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.frame",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.iframe",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.noscript",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.script",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.template",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.data",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.wbr",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.fieldset",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.legend",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.datalist",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.optgroup",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.option",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.label",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.textarea",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.input",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.select",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.button",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.optgroup",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.select",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.textarea",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.keygen",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.progress",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.meter",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.template",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.data",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.time",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.output",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.wbr",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.fieldset",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.legend",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.datalist",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.optgroup",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.option",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.label",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.input",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.button",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.select",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.textarea",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.keygen",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.progress",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "meta.tag.sgml.meter",
                foreground: "#8BE9FD",
                fontStyle: "italic"
            },
            {
                token: "punctuation.definition.tag.begin.html",
                foreground: "#8BE9FD"
            },
            {
                token: "punctuation.definition.tag.end.html",
                foreground: "#8BE9FD"
            },
            {
                token: "punctuation.definition.tag.html",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.script.html",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.style.html",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.html",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.head",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.body",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.footer",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.header",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.section",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.article",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.nav",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.address",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.dialog",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.menu",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.details",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.main",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.mark",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.time",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.figure",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.figcaption",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.hgroup",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.summar",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.output",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.embed",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.video",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.audio",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.source",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.track",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.object",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.param",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.frame",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.iframe",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.noscript",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.script",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.template",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.data",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.sgml.wbr",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.block.div",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.block.p",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.block.blockquote",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.block.ul",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.block.ol",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.block.li",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.a",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.span",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.strong",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.em",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.b",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.i",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.img",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.code",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.q",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.kbd",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.samp",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.var",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.abbr",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.cite",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.dfn",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.sub",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.sup",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.bdo",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.mark",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.ruby",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.rt",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.rp",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.del",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.ins",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.iframe",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.script",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.noscript",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.data",
                foreground: "#8BE9FD"
            },
            {
                token: "meta.tag.inline.wbr",
                foreground: "#8BE9FD"
            }
        ],
        colors: {
            "editor.background": "#000000",
            "editor.foreground": "#F8F8F2",
            "editorIndentGuide.activeBackground": "#6272A4",
            "editorIndentGuide.background": "#44475A",
            "editorLineNumber.activeForeground": "#F8F8F2",
            "editorLineNumber.foreground": "#6272A4",
            "editor.selectionBackground": "#44475A",
            "editor.inactiveSelectionBackground": "#44475A",
            "editor.selectionHighlightBackground": "#44475A",
            "editor.selectionHighlightBorder": "#44475A",
            "editor.wordHighlightBackground": "#6272A4",
            "editor.wordHighlightStrongBackground": "#6272A4",
            "editor.findMatchBackground": "#50FA7B",
            "editor.findMatchBorder": "#50FA7B",
            "editor.findMatchHighlightBackground": "#50FA7B",
            "editor.findMatchHighlightBorder": "#50FA7B",
            "editor.hoverHighlightBackground": "#44475A",
            "editor.lineHighlightBackground": "#44475A",
            "editor.rangeHighlightBackground": "#44475A",
            "editorLink.activeForeground": "#8BE9FD",
            "editorLink.foreground": "#8BE9FD",
            "editorWhitespace.foreground": "#6272A4",
            "editorBracketMatch.border": "#50FA7B",
            "editorBracketMatch.background": "#50FA7B",
            "editorBracketHighlight.foreground1": "#FF79C6",
            "editorBracketHighlight.foreground2": "#FFB86C",
            "editorBracketHighlight.foreground3": "#FF5555",
            "editorBracketHighlight.foreground4": "#8BE9FD",
            "editorBracketHighlight.foreground5": "#50FA7B",
            "editorBracketHighlight.foreground6": "#BD93F9"
        }
    }
    
export default theme;
