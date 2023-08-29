export function arrayToObject<T extends { id: string | number }>(array: T[]): { [key: string]: T } {
    return array.reduce((object: { [key: string]: T }, item: T) => {
        object[item.id] = item;
        return object;
    }, {});
}