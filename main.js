'use strict'; 

const container = document.querySelector('.place'); 
const input = document.querySelector('.input');

const triangleBtn = document.querySelector('.triangle');
const squareBtn = document.querySelector('.square');
const circleBtn = document.querySelector('.circle');



const drawSquare = ` 
  <div class="addSquare"></div>
`;

const drawTriangle = `
  <div class="addTriangle"></div>
`;

const drawCircle = `
  <div class="addCircle"></div>
`;

function generateRandomNumber(min, max) { /// базовая генерация рандомного числа 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateInRandomSize() { /// для генерации рандомного размера
  return {
    width: generateRandomNumber(50, 200),
    height: generateRandomNumber(40, 150),
    left: generateRandomNumber(50,1400),
    top: generateRandomNumber(100,600),
  }
}

function generateRandomSizeEvenly() { /// равноразмерная генерация
  const size = generateRandomNumber(50, 200);
  
  return {
    width: size,
    height: size,
    left: size,
    top: size,
  }
}


container.addEventListener('click', e => {  /// удаление shape-а (фигуры)
  const {target} = e;

  if (!target.classList.contains('shape')) return;

  target.remove();
})



squareBtn.addEventListener('click', (e) => { /// для квадратов
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');

    const {width, height} = generateRandomSizeEvenly();
    const {left,top} = generateInRandomSize();

    s.classList.add('addSquare', 'shape');
    s.style.width = `${width}px`;
    s.style.height = `${height}px`; 
    
    s.style.position = 'absolute';
    
    s.style.left = `${left}px`;
    s.style.top = `${top}px`;

  container.appendChild(s);
}
})

triangleBtn.addEventListener('click', (e) => { /// для треугольников
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    const t = document.createElement('div');
    
    const {width, height,left,top} = generateInRandomSize();

    t.classList.add('addTriangle', 'shape');
    t.style.width = `${width}px`;
    t.style.height = `${height}px`;

    t.style.position = 'absolute';

    t.style.left = `${left}px`;
    t.style.top = `${top}px`;

    container.appendChild(t);
  }
})


circleBtn.addEventListener('click', (e) => { /// для кругов
  const count = Number(input.value);

  if (!count) return;

  for (let i = 0; i < count; i++) {
    const crcl = document.createElement('div');

    const {width, height} = generateRandomSizeEvenly();
    const {left,top} = generateInRandomSize();

    crcl.classList.add('addCircle', 'shape');
    crcl.style.width = `${width}px`;
    crcl.style.height = `${height}px`;
    
    crcl.style.position = 'absolute';

    crcl.style.left = `${left}px`;
    crcl.style.top = `${top}px`;

    container.appendChild(crcl);
  }
})

