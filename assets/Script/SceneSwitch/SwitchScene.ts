export default class SwitchScene{
    public switchScene(beforeNode: cc.Node, after: cc.Node, fun: Function) {
        var fade = cc.fadeOut(2).easing(cc.easeBackIn());
        var callBack = cc.callFunc(()=> {

        }, this);
    }
}