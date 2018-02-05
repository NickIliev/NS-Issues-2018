
/**
 * Item Class
 */
export class Item {

    private _name: string;
    private _shortDesc: string;

    private constructor(name: string, shortDesc: string) {
        this._name = name;
        this._shortDesc = shortDesc;
    }

    public static getDefault(shortDesc: string): Item {
        return new Item("Item", shortDesc);
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get shortDesc(): string {
        return this._shortDesc;
    }
}


export class Data {

    private _name: string;
    private _itemList: any[];

    constructor() {
        this._name = "Data";
        this.initItemList();
    }

    private initItemList() {
        this._itemList = [
            Item.getDefault("0000"),
            Item.getDefault("1111"),
            Item.getDefault("2222"),
            Item.getDefault("3333")
        ];
    }

    set name(newName: string) {
        this._name = newName;
    }

    get name(): string {
        return this._name;
    }

    get itemList(): any[] {
        return this._itemList;
    }

}

