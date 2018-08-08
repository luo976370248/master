import BaseScrollView from "./BaseScrollView";
const {ccclass, property} = cc._decorator;
@ccclass
export default class RankScrollView extends BaseScrollView {

    /** 继承父类的方法 */
    initUI() {
        let list: number[] = [];
        for (let i = 0; i < 100; i++) {
            list.push(i);
        }
        this.initCellDataList(list);
        this.createCellList();
    }

}
