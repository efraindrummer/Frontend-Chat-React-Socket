import { animateScroll} from 'react-scroll';

export const scrollToButton = ( id ) => {
    
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    });

}

export const scrollToButtonAnimated = ( id ) => {
    
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    });

}