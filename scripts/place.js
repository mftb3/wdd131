function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const temp = 10; // Static value
    const windSpeed = 5; // Static value
    document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);

    // Dynamic Last Modified
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleString();
});
