// Точный тип объекта
function type(object) {
    return Object.prototype.toString.call(object);
}

// получения рандомного числа [min; max)
function rand(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
}

// функция для более удобной и быстрой создание элементов 
function createElement(tag, props, ...children) {
  let element = document.createElement(tag);

  for (let [key, value] of Object.entries(props))
  element[key] = value;

  children.forEach(function(item) {
    if (typeof item === 'string') {
        let textNode = document.createTextNode(item);
        element.appendChild(textNode);
    }
    else element.appendChild(item);
  });

  return element;
}

// для тегов <a></a> предотвратить переход по ссылке
function preventDefault() {
    document.addEventListener('DOMContentLoaded', () => {
        let a = document.querySelectorAll("a[data-event='prevent'");
        a.forEach( (item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
            }, false)
        })
    }, false)
}


export {type, rand, createElement, preventDefault}; // список экспортируемых переменных

