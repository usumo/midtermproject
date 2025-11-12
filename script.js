document.addEventListener('DOMContentLoaded', () => {

    const drawButton = document.getElementById('draw-button');
    const bojackCanvas = document.getElementById('bojackCanvas'); 

    if (drawButton && bojackCanvas) {
        let isCanvasVisible = false;

        drawButton.addEventListener('click', () => {
            isCanvasVisible = !isCanvasVisible;
            if (isCanvasVisible) {
                bojackCanvas.style.display = 'block';
                drawButton.textContent = 'Hide Drawing';
                drawBojackSkyline(); 
            } else {
                bojackCanvas.style.display = 'none';
                drawButton.textContent = 'I drew this';
            }
        });
    }

    function drawBojackSkyline() {
        const canvas = bojackCanvas; 
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        const skyGradient = ctx.createLinearGradient(0, 0, 0, height * 0.7);
        skyGradient.addColorStop(0, '#23325A');
        skyGradient.addColorStop(0.4, '#E85B43');
        skyGradient.addColorStop(0.7, '#4A4C62');
        ctx.fillStyle = skyGradient;
        ctx.fillRect(0, 0, width, height);

        ctx.beginPath();
        ctx.arc(width * 0.2, height * 0.3, 50, 0, Math.PI * 2, false);
        ctx.fillStyle = '#F9E79F';
        ctx.shadowColor = '#F9E79F';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        const buildingColor = '#1A1A1A'; 
        const horizonY = height * 0.5;
        const buildingBaseHeight = height * 0.5;

        const b1_x = 250;
        const b1_width = 80;
        const b1_height = 120;
        const b1_y = horizonY - b1_height;
        ctx.fillStyle = buildingColor;
        ctx.fillRect(b1_x, b1_y, b1_width, b1_height + buildingBaseHeight);

        const b2_x = 350;
        const b2_width = 100;
        const b2_height = 180;
        const b2_y = horizonY - b2_height;
        ctx.fillStyle = buildingColor;
        ctx.fillRect(b2_x, b2_y, b2_width, b2_height + buildingBaseHeight);

        const b3_x = 500;
        const b3_width = 70;
        const b3_height = 100;
        const b3_y = horizonY - b3_height;
        ctx.fillStyle = buildingColor;
        ctx.fillRect(b3_x, b3_y, b3_width, b3_height + buildingBaseHeight);

        const b4_x = 600;
        const b4_width = 120;
        const b4_height = 200;
        const b4_y = horizonY - b4_height;
        ctx.fillStyle = buildingColor;
        ctx.fillRect(b4_x, b4_y, b4_width, b4_height + buildingBaseHeight);

        const windowColor = '#F39C12';
        const windowSizeW = 5; 
        const windowSizeH = 7; 
        ctx.fillStyle = windowColor;
        ctx.shadowColor = windowColor;
        ctx.shadowBlur = 6;

        ctx.fillRect(b1_x + 20, b1_y + 30, windowSizeW, windowSizeH);
        ctx.fillRect(b1_x + 50, b1_y + 30, windowSizeW, windowSizeH);
        ctx.fillRect(b1_x + 35, b1_y + 60, windowSizeW, windowSizeH);
        ctx.fillRect(b1_x + 20, horizonY + 20, windowSizeW, windowSizeH);

        ctx.fillRect(b2_x + 30, b2_y + 40, windowSizeW, windowSizeH);
        ctx.fillRect(b2_x + 60, b2_y + 40, windowSizeW, windowSizeH);
        ctx.fillRect(b2_x + 30, b2_y + 80, windowSizeW, windowSizeH);
        ctx.fillRect(b2_x + 60, b2_y + 80, windowSizeW, windowSizeH);
        ctx.fillRect(b2_x + 45, b2_y + 120, windowSizeW, windowSizeH);
        ctx.fillRect(b2_x + 45, horizonY + 50, windowSizeW, windowSizeH);

        ctx.fillRect(b3_x + 15, b3_y + 20, windowSizeW, windowSizeH);
        ctx.fillRect(b3_x + 45, b3_y + 20, windowSizeW, windowSizeH);
        ctx.fillRect(b3_x + 30, b3_y + 50, windowSizeW, windowSizeH);

        ctx.fillRect(b4_x + 20, b4_y + 30, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 50, b4_y + 30, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 80, b4_y + 30, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 20, b4_y + 70, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 80, b4_y + 70, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 50, b4_y + 110, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 20, b4_y + 150, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 80, b4_y + 150, windowSizeW, windowSizeH);
        ctx.fillRect(b4_x + 50, horizonY + 60, windowSizeW, windowSizeH);

        ctx.shadowBlur = 0;
        
        const poolHeight = height * 0.3;
        const poolY = height - poolHeight;
        
        const poolGradient = ctx.createLinearGradient(0, poolY, 0, height);
        poolGradient.addColorStop(0, '#00BFFF');
        poolGradient.addColorStop(1, '#1E90FF');
        ctx.fillStyle = poolGradient;
        ctx.fillRect(0, poolY, width, poolHeight);

        const deckHeight = 20;
        ctx.fillStyle = '#101010';
        ctx.fillRect(0, poolY - (deckHeight / 2), width, deckHeight);
    }

    const table = document.getElementById('mainTable');
    if (table) {
        const btnWidth200 = document.getElementById('setWidth200');
        const btnWidth500 = document.getElementById('setWidth500');
        const btnBorder1 = document.getElementById('setBorder1');
        const btnBorder10 = document.getElementById('setBorder10');
        const btnBorder20 = document.getElementById('setBorder20');
        const colorButtons = document.querySelectorAll('.tablestyler-container .color-swatch');
        const btnReset = document.getElementById('resetButton');

        btnWidth200.addEventListener('click', () => table.style.width = '200px');
        btnWidth500.addEventListener('click', () => table.style.width = '500px');
        btnBorder1.addEventListener('click', () => {
            table.style.borderWidth = '1px';
            table.style.borderSpacing = '1px';
        });
        btnBorder10.addEventListener('click', () => {
            table.style.borderWidth = '10px';
            table.style.borderSpacing = '10px';
        });
        btnBorder20.addEventListener('click', () => {
            table.style.borderWidth = '20px';
            table.style.borderSpacing = '20px';
        });

        colorButtons.forEach(button => {
            button.addEventListener('click', () => {
                const newColor = button.dataset.color;
                table.style.borderColor = newColor;
                const cells = table.querySelectorAll('td');
                cells.forEach(cell => cell.style.backgroundColor = newColor);
            });
        });

        btnReset.addEventListener('click', () => {
            table.style.width = null;
            table.style.borderWidth = null;
            table.style.borderSpacing = null;
            table.style.borderColor = null;
            const dataCells = table.querySelectorAll('td');
            dataCells.forEach(cell => cell.style.backgroundColor = null);
        });
    }

    const polaroid = document.getElementById('polaroid');
    if (polaroid) {
        const images = [
            { src: "images/fedor_gorst_main.jpg", caption: "Image 1 of 4" },
            { src: "images/kaci_gorst.jpg", caption: "Image 2 of 4" },
            { src: "images/gorst_biado.jpg", caption: "Image 3 of 4" },
            { src: "images/filler_gorst.jpg", caption: "Image 4 of 4" }
        ];
        let currentIndex = 0;

        const polaroidImage = document.getElementById('polaroid-image');
        const polaroidCaption = document.getElementById('polaroid-caption');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        function updateImage() {
            polaroidImage.src = images[currentIndex].src;
            polaroidCaption.textContent = images[currentIndex].caption;
        }

        prevButton.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            updateImage();
        });

        nextButton.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            updateImage();
        });
        
        updateImage(); 
    }

});