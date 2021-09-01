export function create (type, attributes, children) {
    let newElement = document.createElement(type);

    for (let key in attributes) {
        if (String(key) == 'style' && typeof attributes[key] == 'object') {
            for (let y in attributes[key]) {
                newElement.setAttribute('style', `${y}:${attributes[key][y]}`)
            }
            continue;
        }
        newElement.setAttribute(key, attributes[key])
    }

    if (children == undefined) {
        return newElement;
    }

    if (children instanceof HTMLElement) {
        return [newElement, children];
    } else if (children instanceof Array) {
        return [newElement, ...children];
    }
    return newElement;
}

export function mount (element, selector) {
    if (selector instanceof HTMLElement) {
        selector.appendChild(element);
        return selector;
    }

    let entryPoint = document.querySelectorAll(selector)[0];
    entryPoint.appendChild(element);
    return entryPoint;
}

export function createDiv (attributes, children) {
    create('div', attributes, children)
}

export function createP (attributes, children) {
    create('p', attributes, children)
}

export function createSpan (attributes, children) {
    create('span', attributes, children)
}

export function createArticle (attributes, children) {
    create('article', attributes, children)
}