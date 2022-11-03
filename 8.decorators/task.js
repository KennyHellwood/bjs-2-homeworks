function cachingDecoratorNew(func) {
    let cache = [];
    return (...args) => {
        const hash = args.join(",");
        const objectInCache = cache.find(item => item.hash === hash);
        if (objectInCache !== undefined) {
            console.log("Из кэша: " + objectInCache.value);
            return "Из кэша: " + objectInCache.value;
        }

        const result = func(...args);
        cache.push({ hash: hash, value: result });
        if (cache.length > 5) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
}


function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
        wrapper.allCount++;
        if (timeoutId) {
            clearTimeout(timeoutId);
        } else {
            wrapper.count++;
            func(...args);
        }
        timeoutId = setTimeout(() => {
            timeoutId = null;
            func(...args);
            wrapper.count++;
        }, delay);
    }
    wrapper.count = 0;
    wrapper.allCount = 0;

    return wrapper;
}
