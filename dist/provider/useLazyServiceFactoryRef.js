"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLazyServiceFactoryRef = useLazyServiceFactoryRef;
const react_1 = require("react");
function useLazyServiceFactoryRef(serviceFactory, storage, update) {
    const ref = (0, react_1.useRef)();
    if (typeof ref.current === "undefined") {
        ref.current = serviceFactory(storage, update);
    }
    return ref;
}
//# sourceMappingURL=useLazyServiceFactoryRef.js.map