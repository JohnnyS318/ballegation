import elementResizeDetectorMaker from "element-resize-detector"

//elementResizeDetector for speed and convenience
const detector = elementResizeDetectorMaker({ strategy: "scroll" })

//watchResize attaches a resize listener to the given element which notifies the handler if the size of the element changes.
export function watchResize(element: HTMLElement, handler: (element: HTMLElement) => void): { destroy(): void, update(handler: (element: HTMLElement) => void): void } {
    //attach resize listener
    detector.listenTo(element, handler)
    const currentHandler = handler;

    return {
        //remove listener (cleanup)
        destroy() {
            detector.removeListener(element, currentHandler)
        },
        update(newHandler: (element: HTMLElement) => void) {
            detector.removeListener(element, currentHandler);
            detector.listenTo(element, newHandler);
        }
    }
}