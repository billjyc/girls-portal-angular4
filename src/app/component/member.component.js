/**
 * Created by billjyc on 2017/1/25.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require('rxjs/Rx');
var MembersComponent = (function () {
    function MembersComponent(memberService, router) {
        this.memberService = memberService;
        this.router = router;
        this.msgs = [];
    }
    MembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rows = 20;
        this.page = 1;
        this.memberService.getAllActiveMembers(this.page, this.rows)
            .then(function (data) {
            _this.members = data.rows;
            _this.total = data.total;
        });
    };
    MembersComponent.prototype.paginate = function (event) {
        this.getMembers2(event.page + 1, event.rows);
    };
    MembersComponent.prototype.getMembers2 = function (page, rows) {
        var _this = this;
        this.rows = rows;
        this.page = page;
        this.memberService.getAllActiveMembers(page, rows)
            .then(function (result) {
            _this.members = result.rows;
            _this.total = result.total;
        });
    };
    MembersComponent.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedMember.id]);
    };
    MembersComponent.prototype.onSelect = function (event) {
        this.goToDetail();
    };
    MembersComponent = __decorate([
        core_1.Component({
            selector: 'member-list',
            moduleId: module.id,
            templateUrl: 'member.component.html',
        })
    ], MembersComponent);
    return MembersComponent;
}());
exports.MembersComponent = MembersComponent;
