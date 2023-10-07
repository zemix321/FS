const creditInput = document.getElementById("credit");
  const creditColorIndicator = document.getElementById("color-indicator");

  creditInput.addEventListener("input", () => {
    const value = creditInput.value;
    const max = creditInput.max;
    const percentage = (value / max) * 100;

    if (value <= max / 2) {
      // Если значение ползунка меньше или равно половине максимального значения,
      // то заполняем синим слева и цветом #CBDEEF справа
      creditColorIndicator.style.background = `linear-gradient(to right, blue ${percentage}%, #CBDEEF ${percentage}%)`;
    } else {
      // Если значение ползунка больше половины максимального значения,
      // то заполняем синим слева и цветом #CBDEEF справа
      const percentageRemaining = 100 - percentage;
      creditColorIndicator.style.background = `linear-gradient(to left, #CBDEEF ${percentageRemaining}%, blue ${percentageRemaining}%)`;
    }
  });

  const dateInput = document.getElementById("date");
  const colorIndicator = document.getElementById("color-indicator-date");

  dateInput.addEventListener("input", () => {
    const value = dateInput.value;
    const max = parseInt(dateInput.max, 10); // Преобразование в число
    const percentage = (value / max) * 100;

    if (value <= max / 2) {
      // Если значение ползунка меньше или равно половине максимального значения,
      // то заполняем синим слева и цветом #CBDEEF справа
      colorIndicator.style.background = `linear-gradient(to right, blue ${percentage}%, #CBDEEF ${percentage}%)`;
    } else {
      // Если значение ползунка больше половины максимального значения,
      // то заполняем синим слева и цветом #CBDEEF справа
      const percentageRemaining = 100 - percentage;
      colorIndicator.style.background = `linear-gradient(to left, #CBDEEF ${percentageRemaining}%, blue ${percentageRemaining}%)`;
    }
  });

  // Инициализация цвета при загрузке страницы
  const initialValue = dateInput.value;
  const max = parseInt(dateInput.max, 10); // Преобразование в число
  const initialPercentage = (initialValue / max) * 100;
  colorIndicator.style.background = `linear-gradient(to right, blue ${initialPercentage}%, #CBDEEF ${initialPercentage}%)`;