function main() {
    // Constant PI
    const PI = Math.PI;

    // Read radius from stdin
    let r = parseFloat(readLine());

    // Calculate area and perimeter
    let area = PI * r * r;
    let perimeter = 2 * PI * r;

    // Print results
    console.log(area);
    console.log(perimeter);
}
