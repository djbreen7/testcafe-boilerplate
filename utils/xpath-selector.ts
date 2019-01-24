import { Selector } from 'testcafe';

const elementByXPath: Selector = Selector(xpath => {
    const iterator: XPathResult = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items: Array<Node> = [];

    let item: Node = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});

export default function (xpath: string): Selector {
    return Selector(elementByXPath(xpath));
}