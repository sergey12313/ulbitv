const processObject = (c: object): string => {
    const result: Array<string> = [];
    Object.entries(c).forEach(([key, value]) => {
        if (typeof value === 'string') {
            result.push(key);
        } else {
            if (value) {
                result.push(key);
            }
        }
    });
    return result.join(' ');
};

export const cn = (...classes: Array<any>): string => {
    const result: Array<string> = [];
    classes.forEach((el) => {
        if (typeof el === 'string') {
            if (el === '') {
                return;
            }
            result.push(el);
        } else if (typeof el === 'function') {
            return;
        } else if (typeof el === 'symbol') {
            return;
        } else if (typeof el === 'bigint') {
            return;
        } else if (!el) {
            return;
        } else if (typeof el === 'number') {
            if (el === 0) {
                return;
            }
            result.push(el.toString());
        } else if (Array.isArray(el)) {
            result.push(cn(...el));
        } else if (typeof el === 'object') {

            result.push(processObject(el));
        }
    });
    const _result =  result.join(' ').trim();

    if (_result.length === 0) {
        return undefined
    }
    return _result
};
