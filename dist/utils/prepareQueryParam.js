export default function prepareQueryParam(queryParam) {
    return Object.entries(queryParam).reduce((obj, [key, val]) => ({
        ...obj,
        [key]: Array.isArray(val) ? val.join(',') : val,
    }), {});
}
