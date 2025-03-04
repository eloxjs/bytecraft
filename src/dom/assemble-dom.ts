import {append} from "./append";

type ElementGroup = [Element, ...ElementChild[]] | Element[];
type ElementChild = Element | ElementGroup;

export function assembleDOM(root:Element): (...children: [Element, ...ElementChild[]]) => void {
    return (...children) => {
        recursivelyAppend(root, children as ElementChild);
    }


    function recursivelyAppend(parent:Element, children:ElementChild) {
        if(Array.isArray(children)) {
            children.forEach((child, index) => {
                if(Array.isArray(child)) {
                    let subParent = getParentOf(index);
                    if(!subParent) return void 0;
                    recursivelyAppend(subParent, child);
                }else {
                    recursivelyAppend(parent, child);
                }
            });
        }else {
            append(parent, children);
        }

        function getParentOf(index:number) {
            if(index < 0 || !Array.isArray(children)) return null;
            let parent = children[index - 1];
            if(Array.isArray(parent)) return getParentOf(index - 1);
            return parent;
        }
    }
}