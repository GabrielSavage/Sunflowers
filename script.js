document.addEventListener("DOMContentLoaded", function () {
    const center = document.querySelector('.center');
    const colors = [
        'rgb(156, 70, 156)',  // Color 1
        'rgb(73, 73, 198)',   // Color 2
        'rgb(176, 119, 157)', // Color 3
        'rgb(77, 194, 100)'   // Color 4
    ];

    const numPetals = 24;  // Double the number of petals

    // Loop to create petals
    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        // Randomly assign one of the four colors to each petal
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        petal.style.backgroundColor = randomColor;

        // Set the rotation angle for each petal
        const rotationAngle = (360 / numPetals) * i;
        petal.style.setProperty('--rotation', `${rotationAngle}deg`);

        // Append the petal to the body
        document.body.appendChild(petal);
    }
});
