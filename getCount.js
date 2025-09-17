function getCount(objects) {
    let count = 0;
    for (const o of objects) {
        if (o.x == o.y) {
            count++;
        }
    }
    return count;
}