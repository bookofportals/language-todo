// This applies the todo grammar as an injection in all nodes labeled
// as comments. If there is another node where it should be applied,
// the relevant grammar can add it manually.

exports.activate = function () {
  atom.packages.onDidActivateInitialPackages(() => {
    let treeGrammars = atom.grammars.treeSitterGrammarsById
    for (grammar of Object.values(treeGrammars)) {
      grammar.addInjectionPoint({
        type: "comment",
        language: (comment) => "todo",
        content: (comment) => comment,
      })
      atom.grammars.grammarAddedOrUpdated(grammar)
    }
  })
}
