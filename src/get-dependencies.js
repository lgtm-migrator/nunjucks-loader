import nunjucks from 'nunjucks';

export function getDependencies(source) {
    const nodes = nunjucks.parser.parse(source);
    const extendsNodes = nodes.findAll(nunjucks.nodes.Extends);
    const includeNodes = nodes.findAll(nunjucks.nodes.Include);
    const importNodes = nodes.findAll(nunjucks.nodes.Import);
    const fromImportNodes = nodes.findAll(nunjucks.nodes.FromImport);

    return [
        ...extendsNodes,
        ...includeNodes,
        ...importNodes,
        ...fromImportNodes
    ].map((node) => node.template.value);
}
