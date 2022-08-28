// Покрывает кейсы с цикличными ссылками
function makeObjectDeepCopy(obj) {
    const clone = (value, map = new Map()) => {
        if (typeof value !== "object" || value === null) {
            return value;
        }

        if (map.has(value)) {
            return map.get(value);
        }

        const newObj = Array.isArray(value) ? [] : {};
        map.set(value, newObj);
        const keys = Reflect.ownKeys(value);

        for (let key of keys) {
            newObj[key] = clone(value[key], map);
        }

        return newObj;
    }

    return clone(obj)
}

// Не покрывает кейсы с цикличными ссылками
// function makeObjectDeepCopy2(value) {
//     if (typeof value !== "object" || value === null) {
//         return value;
//     }
//
//     const result = Array.isArray(value) ? [] : {};
//
//     return Reflect.ownKeys(value).reduce((acc, key) => {
//         acc[key] = makeObjectDeepCopy(value[key]);
//         return acc;
//     }, result);
// }
