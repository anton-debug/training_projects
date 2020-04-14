//Получаем форму и записываем ее в переменную form

const form = $('#price-form');

// Сериализуем форму с помощью бибилиотеки serializeJSON,
// Получаем объект с значениями формы
// записываем этот объект в переменную formData

let formData = form.serializeJSON();

// Выводим в консоль объект formData

console.log(formData);
// Отслеживаем данные из формы в объекте formData
form.on('keyup change paste', 'input, select, textarea', function(){
 
  // console.log('Chenget');
  
// Обновляем данные из формы в объекте formData
  formData = form.serializeJSON();
  console.log(formData);

//Рассчитываем стоимость

  let totalPrice = 0;

  totalPrice = 
    formData['pages-unique'] * 4000 + 
    formData['pages-general'] * 2500 +
    formData['carousel'] * 1200 +
    formData['modals'] * 900 +
    formData['forms'] * 1500;

  // Расчет мультипликатора стоимости мобильной версии
     
  let multiplicatorMobile = 1;

  if (formData['mobile-number'] == 2) {
    multiplicatorMobile = 1.3;
  } else if (formData['mobile-number'] == 3) {
    multiplicatorMobile = 1.5;
  }

  // PixelPerfect мультипликатор 

  let mPixelPerfect = 1;
  if (formData['pixelPerfect'] == 'on') {
    mPixelPerfect = 1.2;
  }

    // retinaReady мультипликатор 

    let mRetinaReady = 1;
    if (formData['retinaReady'] == 'on') {
      mRetinaReady = 1.2;
    }
  
    // googlePageSpeed мультипликатор 
    let mGooglePageSpeed = 1;
    if (formData['googlePageSpeed'] == 'on') {
      mGooglePageSpeed = 1.2;
    }

    // urgentOrder мультипликатор 
    let mUrgentOrder = 1;
    if (formData['urgentOrder'] == 'on') {
      mUrgentOrder = 1.5;
    }
    
    // Пересчет цены с учетом мультипликаторов

  totalPrice = 
    totalPrice * multiplicatorMobile * 
    mPixelPerfect * mRetinaReady * 
    mGooglePageSpeed * mUrgentOrder;

  // console.log( totalPrice );
  
  $('#total-price').text(totalPrice);
})