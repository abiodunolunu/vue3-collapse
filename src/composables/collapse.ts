import { ComputedRef, onBeforeUnmount, onMounted, watch } from "vue";

function useCollapser(element: ComputedRef<HTMLElement | undefined>, state: ComputedRef<boolean>, withOpacity: ComputedRef<boolean>) {

    function adjustMaxheight(_element: typeof element.value, _currentState: typeof state.value) {
        if (!_element) return
        if (_currentState) {
            _element.style.maxHeight = _element.scrollHeight + 'px'
            if (withOpacity.value) {
                _element.style.opacity = '1'
            }
        } else {
            _element.style.maxHeight = '0px'
            if (withOpacity.value) {
                _element.style.opacity = '0'
            }
        }
    }

    watch((() => [state.value, element.value] as const), ([currentState, currentElement]) => {
        if (!currentElement) return
        adjustMaxheight(currentElement, currentState)
    })

    let observer: MutationObserver | undefined

    function listener() {
        adjustMaxheight(element.value, state.value)
    }

    onMounted(() => {
        if (!element.value) return
        observer = new MutationObserver(() => {
            adjustMaxheight(element.value, state.value)
        })

        observer.observe(element.value, {
            attributes: true, childList: true, characterData: true, subtree: true,
        })

        window.addEventListener('resize', listener)
    })


    onBeforeUnmount(() => {
        if (observer) {
            observer.disconnect()
        }
        window.removeEventListener('resize', listener)
    })
}

export default useCollapser