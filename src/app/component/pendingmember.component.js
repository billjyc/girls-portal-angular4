/**
 * Created by billjyc on 2017/2/1.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PendingMemberComponent = (function () {
    function PendingMemberComponent(memberService, router) {
        this.memberService = memberService;
        this.router = router;
    }
    PendingMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getPendingMembers().then(function (members) { return _this.pendingMembers = members; });
    };
    PendingMemberComponent.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedMember.id]);
    };
    PendingMemberComponent.prototype.onSelect = function (selectMember) {
        this.selectedMember = selectMember;
        this.goToDetail();
    };
    PendingMemberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pending-members',
            template: "\n    <p-dataTable [value]=\"pendingMembers\" [paginator]=\"true\" *ngIf=\"pendingMembers\">\n      <p-column [field]=\"name\" header=\"name\"></p-column>\n    </p-dataTable>\n   <!-- <table class=\"table\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>\u59D3\u540D</th>\n          <th>\u6240\u5C5E\u961F\u4F0D</th>\n          <th>#</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let member of pendingMembers\" (click)=\"onSelect(member)\"\n            [class.selected]=\"member === selectedMember\">\n          <td>{{member.name}}</td>\n          <td>{{member.team}}</td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>-->\n  "
        })
    ], PendingMemberComponent);
    return PendingMemberComponent;
}());
exports.PendingMemberComponent = PendingMemberComponent;
