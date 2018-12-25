function ShiptorTildaIntegration (params){
    var add2BasketSelector = '[href^="#shiptor_widget_"]',
        styles, widgetKey,
        addStyles = function(container){
            if(!container || !styles) return false;
            for(var style in styles){
                if(styles.hasOwnProperty(style)){
                    container.style[style] = styles[style];
                }
            }
        },
        populateButton = function(){
            var btns = document.querySelectorAll(add2BasketSelector), sku;
            if(btns.length > 0){
                for(var i = 0; i < btns.length; i++){
                    sku = btns[i].getAttribute('href').replace('#shiptor_widget_','');
                    if(!btns[i].querySelector('td')){
                        continue;
                    }
                    btns[i].setAttribute('data-id',sku);
                    btns[i].setAttribute('data-q',1);
                    btns[i].setAttribute('data-role','shiptor_widget_add_basket');
                    addStyles(btns[i]);
                    var textBtn = btns[i].querySelector('td').innerText;
                    btns[i].innerHTML = textBtn;
                }
            }else{
                console.warn('Не найдена кнопка добавления в корзину!');
            }
        },
        createWidget = function(){
            var widgetContainer = document.createElement('div');
            widgetContainer.id = 'shiptor_widget';
            widgetContainer.setAttribute('class', '_shiptor_widget');
            widgetContainer.setAttribute('data-wk', widgetKey);
            document.body.appendChild(widgetContainer);
            var widgetScript = document.createElement('script');
            widgetScript.type = "text/javascript";
            widgetScript.src = "https://evgeniyvorobev.github.io/vogmann/shiptor%20widget/order.js";
            document.body.appendChild(widgetScript);
        };
    if(!!params.styles){
        styles = params.styles;
    }
    if(!!params.widgetkey){
        widgetKey = params.widgetkey;
        populateButton();
        createWidget();
    }else{
        console.warn('Не задан ключ виджета!');
    }
};