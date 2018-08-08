import BaseCell from "./BaseCell";
const {ccclass, property} = cc._decorator;
@ccclass
export default class Ranktem extends BaseCell {
    @property(cc.Label)
    lable: cc.Label = null;

    updateView(idx: number, data: any) {
        this.lable.string = (data as number).toString();
    }
}
