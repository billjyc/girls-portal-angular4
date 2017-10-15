"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by billjyc on 2017/2/1.
 */
var core_1 = require("@angular/core");
var MemberDetailComponent = (function () {
    function MemberDetailComponent(memberService, route) {
        this.memberService = memberService;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.memberService.getMember(+params['id']); })
            .subscribe(function (member) { return _this.member = member; });
        this.route.params
            .switchMap(function (params) { return _this.memberService.getWeiboData(+params['id']); })
            .subscribe(function (memberWeiboData) { return _this.memberWeiboData = memberWeiboData; });
    };
    MemberDetailComponent.prototype.formatDate = function (date2) {
        return new Date(date2);
    };
    __decorate([
        core_1.Input()
    ], MemberDetailComponent.prototype, "member", void 0);
    MemberDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'member-detail',
            template: "\n    <div *ngIf=\"member\">\n      <ul>\n          <li>\u59D3\u540D\uFF1A{{member.name}}</li>\n          <li>\u6635\u79F0\uFF1A{{member.nickName}}</li>\n          <li>\u8EAB\u9AD8\uFF1A{{member.height}}</li>\n          <li>\u751F\u65E5\uFF1A{{formatDate(member.birthday) | date: 'yyyy-MM-dd'}}</li>\n          <li>\u8840\u578B\uFF1A{{member.bloodType}}</li>\n          <li>\u6240\u5C5E\u961F\u4F0D\uFF1A{{member.team}}</li>\n          <li>\u671F\u6B21\uFF1A{{member.batch}}</li>\n          <li>\u52A0\u5165\u65F6\u95F4\uFF1A{{formatDate(member.joinTime) | date: 'yyyy-MM-dd'}}</li>\n          <li>\u7231\u597D\uFF1A{{member.hobby}}</li>\n          <li>\u5907\u6CE8\uFF1A{{member.description}}</li>\n          <li>\u94FE\u63A5\uFF1A<a [href]=\"member.link\">{{member.link}}</a></li>\n          <li>\n            <img [src]=\"member.imageLink\" [alt]=\"member.name\"/>\n          </li>\n      </ul>\n      \n    </div>\n    \n    <div *ngIf=\"memberWeiboData\">\n      <ul>\n        <li>\u7C89\u4E1D\u6570\uFF1A{{memberWeiboData.weiboFollowerCount}}</li>\n        <li>\u5173\u6CE8\uFF1A{{memberWeiboData.weiboFriendsCount}}</li>\n        <li>\u5FAE\u535A\u6570\uFF1A{{memberWeiboData.weiboStatuesCount}}</li>\n      </ul>\n    </div>\n  "
        })
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());
exports.MemberDetailComponent = MemberDetailComponent;
