const createAnalytics = (): object => {
    let counter = 0;
    let destroyed: boolean = true;

    const listener = (): number => counter++;

    console.log("test")
    document.addEventListener("click", listener)

    return {
        destroy() {
            document.removeEventListener("click", listener)
            destroyed = true;
        },

        getClicks() {
            return counter
        }

    }
}

window['analytics'] = createAnalytics()