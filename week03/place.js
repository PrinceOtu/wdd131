// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ... (footer updates from previous response)

    const temperature = 20; // Static value for Cape Town
    const windSpeed = 8;   // Static value for Cape Town

    document.getElementById('temperature').textContent = temperature;
    document.getElementById('wind-speed').textContent = windSpeed;

    const windChillElement = document.getElementById('wind-chill');

    function calculateWindChill(temp, wind) {
        return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill.toFixed(2) + "°C";
    } else {
        windChillElement.textContent = "N/A";
    }
});