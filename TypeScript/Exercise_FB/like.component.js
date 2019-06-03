"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    // likesCount: number;
    // isSelected: boolean;
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
        // this.likesCount = likeCount;
        // this.isSelected = isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        // if (this.isSelected){
        //     this.likeCount--;
        //     this.isSelected = false;
        // } else {
        //     this.likeCount++;
        //     this.isSelected = true;
        // }
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
