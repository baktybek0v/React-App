document.onmouseover = event => {
    let target = event.target;
    if (!target.dataset.tooltip) return '';
  
    let tooltipMsg = target.dataset.tooltip;
    let tooltip = document.createElement('span');
    tooltip.innerHTML = tooltipMsg;
    tooltip.className = 'tooltip';
  
    target.append(tooltip);
  
    let targetCoord = event.target.getBoundingClientRect();
    // *** тонкий момень *** // wrap ---> это родитель за пределы которого tooltip не должен выйти
    let wrap = document.querySelector('.model');
    let wrapMetrics = {
      left: wrap.getBoundingClientRect().left,
      pdLeft: parseFloat(getComputedStyle(wrap).paddingLeft),
      border: wrap.clientLeft
    };
  
    // если отступ слева больше чем 1/2 часть ширины tooltip, то tooltip центировать, иначе показать на одном уровне по X
    if (event.clientX - wrapMetrics.left - wrapMetrics.border - wrapMetrics.pdLeft > tooltip.offsetWidth / 2) {
      tooltip.style.left = targetCoord.left + (target.offsetWidth - tooltip.offsetWidth) / 2 + 'px';
    }
    else tooltip.style.left = targetCoord.left + 'px';
  
    if (!(wrap.offsetWidth - (event.clientX - wrapMetrics.left) > tooltip.offsetWidth)) {
      tooltip.style.left = wrapMetrics.width + 'px';
    }
  
    if (targetCoord.top < tooltip.offsetHeight + 5)
    tooltip.style.top = 5+targetCoord.bottom + 5 + 'px';
  
    else if (targetCoord.top > tooltip.offsetHeight + 5)
    tooltip.style.top = 5+targetCoord.top - tooltip.offsetHeight - 5 + 'px';
  }
  
  document.onmouseout = () => {
    let tooltip = document.querySelector('.tooltip');
    if (tooltip) tooltip.remove();
  }
  

  
