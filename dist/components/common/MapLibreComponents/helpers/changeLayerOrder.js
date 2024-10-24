export default function changeLayerOrder(map, newOrder) {
    const currentOrder = map.style._order;
    const mapLayerOrder = currentOrder.filter(item => newOrder.includes(item));
    let beforeId = null;
    let id = null;
    newOrder.forEach((item, idx) => {
        if (id)
            return;
        if (mapLayerOrder[idx] !== item) {
            id = item;
            beforeId = newOrder[idx + 1];
        }
    });
    if (!id)
        return;
    map.moveLayer(id, beforeId);
}
