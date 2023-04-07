export default class Porta{
    #id:number
    #hasGift:boolean
    #selected:boolean
    #opened:boolean


    constructor(id:number, selected = false, opened = false, hasGift = false) {
        this.#id = id
        this.#hasGift = hasGift
        this.#selected = selected
        this.#opened = opened
    }

    get id() {
        return this.#id
    }
    get hasGift() {
        return this.#hasGift
    }
    get selected() {
        return this.#selected
    }
    get opened() {
        return this.#opened
    }
    
    changeSelected() {
        const selected = !this.selected
    }
}