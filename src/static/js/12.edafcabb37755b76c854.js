(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "0f13": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("Valr"),
                o = n("K9Ia"),
                r = n("ny24"),
                a = n("TYT/"),
                c = n("EVov"),
                s = n("JofH"),
                l = n("mCBl"),
                p = n("pdEt"),
                u = n("VG2x"),
                b = n("o8Qb"),
                d = n("QoS3");

            function g(t, e) {
                1 & t && (a.Rb(0), a.Rc(1, "- "), a.Qb())
            }

            function f(t, e) {
                if (1 & t && (a.Tb(0, "tr", 8), a.Tb(1, "td", 9), a.Tb(2, "span"), a.Rc(3), a.nc(4, "date"), a.Sb(), a.Tb(5, "span"), a.Rc(6), a.nc(7, "date"), a.Sb(), a.Sb(), a.Tb(8, "td"), a.Tb(9, "span"), a.Rc(10), a.Sb(), a.Sb(), a.Tb(11, "td", 10), a.Pc(12, g, 2, 0, "ng-container", 4), a.Rc(13), a.nc(14, "displayCurrency"), a.Pb(15, "span", 11), a.Sb(), a.Tb(16, "td", 12), a.Rc(17), a.Sb(), a.Sb()), 2 & t) {
                    var n = e.$implicit,
                        i = a.mc(2).ngIf;
                    a.Bb(3), a.Tc(" ", a.pc(4, 10, n.attributes.date, "dd.MM.yyyy"), " "), a.Bb(3), a.Tc(" ", a.pc(7, 13, n.attributes.date, "HH:mm"), " "), a.Bb(2), a.Db("type ", n.attributes.type.key, ""), a.Bb(2), a.Sc(n.attributes.type.name), a.Bb(2), a.uc("ngIf", "withdrawal_balance" === n.attributes.type.key || "charge" === n.attributes.type.key), a.Bb(1), a.Tc(" ", a.oc(14, 16, n.attributes.amount.price), "\xa0 "), a.Bb(2), a.uc("currencyCode", i.key), a.Bb(2), a.Tc(" ", n.attributes.status.key, " ")
                }
            }

            function m(t, e) {
                if (1 & t && (a.Rb(0), a.Pc(1, f, 18, 18, "tr", 7), a.Qb()), 2 & t) {
                    var n = e.ngIf,
                        i = a.mc(2);
                    a.Bb(1), a.uc("ngForOf", n)("ngForTrackBy", i.trackByFn)
                }
            }

            function h(t, e) {
                if (1 & t && (a.Rb(0), a.Pc(1, m, 2, 2, "ng-container", 6), a.nc(2, "async"), a.Qb()), 2 & t) {
                    var n = a.mc(),
                        i = a.Ec(20);
                    a.Bb(1), a.uc("ngIf", a.oc(2, 2, n.paymentsFacadeService.history$))("ngIfElse", i)
                }
            }

            function _(t, e) {
                1 & t && (a.Tb(0, "td", 16), a.Pb(1, "div", 17), a.Sb())
            }

            function v(t, e) {
                if (1 & t && (a.Tb(0, "tr", 14), a.Pc(1, _, 2, 0, "td", 15), a.Sb()), 2 & t) {
                    var n = e.$implicit;
                    a.Bb(1), a.uc("ngForOf", n)
                }
            }

            function O(t, e) {
                if (1 & t && a.Pc(0, v, 2, 1, "tr", 13), 2 & t) {
                    var n = a.mc();
                    a.uc("ngForOf", n.mockHistory)
                }
            }
            var P, y = function() {
                    function t(t, e, n, i) {
                        this.globalAuthFacadeService = t, this.paymentsFacadeService = e, this.sseService = n, this.scrollingContentService = i, this.componentIsAlive$ = new o.a, this.mockHistory = new Array(10).fill(new Array(4))
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this;
                        this.paymentsFacadeService.loadHistory(), this.sseService.sseCheckoutEvents.pipe(Object(r.a)(this.componentIsAlive$)).subscribe((function(e) {
                            t.paymentsFacadeService.updatePaymentOrCreateIfNotExist(e)
                        })), this.scrollingContentService.scrolledDown$.pipe(Object(r.a)(this.componentIsAlive$)).subscribe((function() {
                            t.paymentsFacadeService.loadNextHistoryChunkIfAvailable()
                        })), this.paymentsFacadeService.history$.pipe(Object(r.a)(this.componentIsAlive$)).subscribe((function() {
                            t.scrollingContentService.contentChanged()
                        }))
                    }, t.prototype.ngOnDestroy = function() {
                        this.componentIsAlive$.next(), this.paymentsFacadeService.clearHistory()
                    }, t.prototype.trackByFn = function(t, e) {
                        return e.id && e.attributes.status.key
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.Ob(c.a), a.Ob(s.a), a.Ob(l.a), a.Ob(p.a))
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-history"]
                        ],
                        decls: 21,
                        vars: 15,
                        consts: [
                            [1, "history"],
                            ["id", "table"],
                            ["width", "160"],
                            ["width", "auto"],
                            [4, "ngIf"],
                            ["historyPreloader", ""],
                            [4, "ngIf", "ngIfElse"],
                            ["class", "row", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                            [1, "row"],
                            [1, "date"],
                            [1, "amount"],
                            ["appCurrencySymbol", "", 3, "currencyCode"],
                            ["data-header", "\u0421\u0442\u0430\u0442\u0443\u0441", 1, "status"],
                            ["class", "row preloader", 4, "ngFor", "ngForOf"],
                            [1, "row", "preloader"],
                            ["class", "preloader-col", 4, "ngFor", "ngForOf"],
                            [1, "preloader-col"],
                            [1, "mock", "es-preloader"]
                        ],
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div", 0), a.Tb(1, "table", 1), a.Tb(2, "thead"), a.Tb(3, "tr"), a.Tb(4, "th", 2), a.Rc(5), a.nc(6, "translate"), a.Sb(), a.Tb(7, "th", 3), a.Rc(8), a.nc(9, "translate"), a.Sb(), a.Tb(10, "th", 2), a.Rc(11), a.nc(12, "translate"), a.Sb(), a.Tb(13, "th", 2), a.Rc(14), a.nc(15, "translate"), a.Sb(), a.Sb(), a.Sb(), a.Tb(16, "tbody"), a.Pc(17, h, 3, 4, "ng-container", 4), a.nc(18, "async"), a.Pc(19, O, 1, 1, "ng-template", null, 5, a.Qc), a.Sb(), a.Sb(), a.Sb()), 2 & t && (a.Bb(5), a.Sc(a.oc(6, 5, "history.date")), a.Bb(3), a.Sc(a.oc(9, 7, "history.operation")), a.Bb(3), a.Sc(a.oc(12, 9, "history.sum")), a.Bb(3), a.Sc(a.oc(15, 11, "history.status")), a.Bb(3), a.uc("ngIf", a.oc(18, 13, e.globalAuthFacadeService.currentCurrency$)))
                        },
                        directives: [i.t, i.s, u.a],
                        pipes: [b.e, i.b, i.f, d.a],
                        styles: [".es-preloader[_ngcontent-%COMP%]{background:linear-gradient(90deg,#30333a,#373b44,#30333a);border-radius:3px;background-size:200%;-webkit-animation:preloader 2s ease-in-out infinite;animation:preloader 2s ease-in-out infinite}.es-preloader-no-animation[_ngcontent-%COMP%], .stop-animation[_ngcontent-%COMP%]   .es-preloader[_ngcontent-%COMP%]{-webkit-animation:none;animation:none;background-size:100%}@-webkit-keyframes preloader{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}@keyframes preloader{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-spacing:0;border-collapse:collapse;border:0}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0;border:0}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#1c2024;border-bottom:2px solid #14171b}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:23px 8px 4px;font-family:Roboto;font-style:normal;font-weight:700;font-size:12px;line-height:15px;text-transform:uppercase;color:hsla(0,0%,58.8%,.4);text-align:left}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:37px}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#30333a}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#1c2024}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-child){border-bottom:2px solid #14171b}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px 16px}.history[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:last-child){border-right:2px solid #14171b}.history[_ngcontent-%COMP%]   .mock[_ngcontent-%COMP%]{height:20px}"]
                    }), t
                }(),
                C = n("mrSG"),
                M = n("26FU"),
                x = n("t9fZ"),
                S = n("VnD/"),
                w = n("xMyE"),
                k = n("Ys2+"),
                T = n("yrzP"),
                I = n("pV1z"),
                q = n("FgVP"),
                B = n("DUip"),
                F = n("ngAm"),
                R = n("2iRz"),
                A = function() {
                    return ["average"]
                },
                $ = function() {
                    function t(t, e, n, i, r, a, c, s, l) {
                        this.windowEventsService = t, this.globalAuthFacade = e, this.inventoryFacade = n, this.inventoryService = i, this.itemsActionsService = r, this.sseService = a, this.router = c, this.seoService = s, this.translate = l, this._componentIsAlive$ = new o.a, this.needToClear$ = new M.a(!1), this._updateAsset$ = new o.a, this.updateAssets$ = this._updateAsset$.asObservable(), this.componentIsAlive$ = new o.a
                    }
                    return t.prototype.ngOnInit = function() {
                        this.initGame(), this.subscribeToSseEvents(), this.initSeo()
                    }, t.prototype.ngOnDestroy = function() {
                        this.inventoryFacade.setItems(null), this.inventoryFacade.setFilters([]), this.inventoryFacade.setActivatedFilters([]), this._componentIsAlive$.next(), this.needToClear$.complete()
                    }, t.prototype.initGame = function(t) {
                        void 0 === t && (t = !1), this.needToClear$.next(t), this.inventoryFacade.setItemsFrom(0), this.inventoryFacade.loadItemsForAllGames()
                    }, t.prototype.subscribeToSseEvents = function() {
                        var t = this;
                        this.sseService.sseInventoryEvents.pipe(Object(r.a)(this.componentIsAlive$)).subscribe((function(e) {
                            "sold" === e.data.attributes.status || "moved_to_steam" === e.data.attributes.status ? (console.log("sold"), t.inventoryFacade.addItemsFrom(-1), t.inventoryFacade.addTotalItemsAmount(-1), t._updateAsset$.next({
                                assetId: e.data.asset_id,
                                asset: null
                            })) : (console.log("another event"), t._updateAsset$.next({
                                assetId: e.data.asset_id,
                                asset: {
                                    id: e.data.asset_id,
                                    attributes: Object(C.a)({}, e.data.attributes)
                                }
                            }))
                        })), this.sseService.sseAssetTransfer.pipe(Object(r.a)(this.componentIsAlive$)).subscribe((function(e) {
                            console.log("sseAssetTransfer"), "finished" === e.data.attributes.action && (t.inventoryFacade.addItemsFrom(-1), t.inventoryFacade.addTotalItemsAmount(-1), t._updateAsset$.next({
                                assetId: e.data.asset_id,
                                asset: null
                            }))
                        })), this.sseService.sseNotificationEvent.pipe(Object(r.a)(this.componentIsAlive$)).subscribe((function(e) {
                            console.log("sseNotificationEvent"), ["absent_in_market", "waiting_for_buyer", "market_search", "trade_created", "time_limit_end"].includes(e.data.action_type) && t._updateAsset$.next({
                                assetId: e.data.asset.id,
                                asset: {
                                    id: e.data.asset.id,
                                    attributes: Object(C.a)({}, e.data.asset.attributes)
                                }
                            })
                        }))
                    }, t.prototype.onItemAction = function(t) {
                        var e = this;
                        console.log("action"), this.itemsActionsService.performAction(t.asset, t.action, t.price, t.currency).pipe(Object(x.a)(1), Object(S.a)((function(t) {
                            return !!t
                        })), Object(w.a)((function(t) {
                            var n, i;
                            (null === (i = null === (n = t) || void 0 === n ? void 0 : n.body) || void 0 === i ? void 0 : i.reload) && e.initGame(!0)
                        }))).subscribe()
                    }, t.prototype.onScrollChange = function() {
                        this.inventoryFacade.loadNextItemsChunkIfAvailable(!1)
                    }, t.prototype.onRefreshInventory = function() {
                        this.inventoryService.updateCurrentUserInventory("").subscribe()
                    }, t.prototype.goToCases = function() {
                        this.router.navigate(["cases"])
                    }, t.prototype.initSeo = function() {
                        this.seoService.setTitle(this.translate.instant("seo.profile.inventory.title"))
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.Ob(k.a), a.Ob(c.a), a.Ob(T.a), a.Ob(I.a), a.Ob(q.a), a.Ob(l.a), a.Ob(B.c), a.Ob(F.a), a.Ob(b.f))
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-inventory"]
                        ],
                        decls: 4,
                        vars: 13,
                        consts: [
                            [1, "inventory"],
                            [3, "displayProcessingWrapper", "items$", "needToClear$", "totalItemsAmount", "updateAsset$", "dontShowPrices", "currentCurrency", "deviceStatusClassList$", "itemAction", "itemsScroll", "refreshInventory", "goToCases"]
                        ],
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div", 0), a.Tb(1, "escrow-items-list", 1), a.ic("itemAction", (function(t) {
                                return e.onItemAction(t)
                            }))("itemsScroll", (function() {
                                return e.onScrollChange()
                            }))("refreshInventory", (function() {
                                return e.onRefreshInventory()
                            }))("goToCases", (function() {
                                return e.goToCases()
                            })), a.nc(2, "async"), a.nc(3, "async"), a.Sb(), a.Sb()), 2 & t && (a.Bb(1), a.uc("displayProcessingWrapper", !0)("items$", e.inventoryFacade.items$)("needToClear$", e.needToClear$)("totalItemsAmount", a.oc(2, 8, e.inventoryFacade.totalItemsAmount$))("updateAsset$", e.updateAssets$)("dontShowPrices", a.xc(12, A))("currentCurrency", a.oc(3, 10, e.globalAuthFacade.currentCurrency$))("deviceStatusClassList$", e.windowEventsService.deviceStatusClassList$))
                        },
                        directives: [R.a],
                        pipes: [i.b],
                        styles: [".inventory[_ngcontent-%COMP%]{position:relative;height:100%}.inventory__empty[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.inventory__empty[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:20px;line-height:23px;text-align:center;color:#fff;margin-bottom:26px}.inventory__empty[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{height:37px;padding:0 30px}"],
                        changeDetection: 0
                    }), t
                }(),
                L = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t.\u0275fac = function(e) {
                        return new(e || t)
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-partnership"]
                        ],
                        decls: 2,
                        vars: 0,
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div"), a.Rc(1, " partnership\n"), a.Sb())
                        },
                        styles: [""],
                        changeDetection: 0
                    }), t
                }(),
                j = n("YZbJ"),
                z = n("XfkC"),
                Q = n("QJY3"),
                H = n("F/XL"),
                E = n("9Z1F"),
                D = n("wYHs"),
                U = n("VG2l"),
                N = n("eaEI"),
                V = ["tradeLinkInput"],
                G = ["saveButtonRef"];

            function J(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.lc(), a.kc(), a.Tb(0, "div", 24), a.Tb(1, "div", 25), a.Tb(2, "span"), a.Rc(3), a.nc(4, "translate"), a.Sb(), a.Tb(5, "span"), a.Rc(6), a.nc(7, "translate"), a.Sb(), a.Sb(), a.Tb(8, "div", 26), a.Tb(9, "span"), a.Rc(10), a.nc(11, "displayCurrency"), a.Pb(12, "span", 27), a.Sb(), a.Tb(13, "span", 28), a.lc(), a.Tb(14, "svg", 29), a.Pb(15, "path", 30), a.Pb(16, "path", 31), a.Pb(17, "path", 32), a.Pb(18, "path", 33), a.Sb(), a.Rc(19), a.nc(20, "displayCurrency"), a.Sb(), a.Sb(), a.kc(), a.Tb(21, "div", 34), a.Tb(22, "button", 35), a.ic("click", (function() {
                        return a.Hc(n), a.mc(2).openReplenishPopup()
                    })), a.Rc(23), a.nc(24, "translate"), a.Sb(), a.Sb(), a.Sb()
                }
                if (2 & t) {
                    var i = e.ngIf,
                        o = a.mc().ngIf;
                    a.Bb(3), a.Sc(a.oc(4, 6, "profile.balance")), a.Bb(3), a.Sc(a.oc(7, 8, "profile.gold")), a.Bb(4), a.Tc(" ", a.oc(11, 10, o.attributes.billing.wallets.real_money.amount), " \xa0 "), a.Bb(2), a.uc("currencyCode", i.key), a.Bb(7), a.Tc(" \xa0 ", a.oc(20, 12, o.attributes.billing.wallets.bonus_money.amount), " "), a.Bb(4), a.Tc(" ", a.oc(24, 14, "profile.add_money"), " ")
                }
            }

            function Y(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Tb(0, "button", 35), a.ic("click", (function() {
                        return a.Hc(n), a.mc(2).setEditTradeLinkMode()
                    })), a.Rc(1), a.nc(2, "translate"), a.Sb()
                }
                2 & t && (a.Bb(1), a.Tc(" ", a.oc(2, 1, "profile.edit"), " "))
            }

            function X(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Tb(0, "button", 36, 37), a.ic("click", (function() {
                        return a.Hc(n), a.mc(2).changeTradeLink()
                    })), a.Rc(2), a.nc(3, "translate"), a.Sb()
                }
                if (2 & t) {
                    var i = a.mc(2);
                    a.uc("disabled", i.form.invalid), a.Bb(2), a.Tc(" ", a.oc(3, 2, "profile.trade_save"), " ")
                }
            }

            function Z(t, e) {
                1 & t && (a.Tb(0, "div", 38), a.Tb(1, "span"), a.Rc(2), a.nc(3, "translate"), a.Sb(), a.Sb()), 2 & t && (a.Bb(2), a.Sc(a.oc(3, 1, "profile.trade_error")))
            }

            function K(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Tb(0, "div", 1), a.Tb(1, "div", 2), a.Tb(2, "a", 3), a.ic("click", (function(t) {
                        return a.Hc(n), a.mc().logout(t)
                    })), a.Tb(3, "span"), a.Rc(4), a.nc(5, "translate"), a.Sb(), a.lc(), a.Tb(6, "svg", 4), a.Pb(7, "path", 5), a.Sb(), a.Sb(), a.kc(), a.Tb(8, "div", 6), a.Pb(9, "img", 7), a.Sb(), a.Sb(), a.Tb(10, "div", 8), a.Tb(11, "div"), a.Rc(12), a.nc(13, "translate"), a.Sb(), a.Tb(14, "div"), a.Tb(15, "span"), a.Rc(16), a.Sb(), a.Rc(17, " \xa0 "), a.lc(), a.Tb(18, "svg", 9), a.Pb(19, "path", 10), a.Sb(), a.Sb(), a.Sb(), a.Pc(20, J, 25, 16, "div", 11), a.nc(21, "async"), a.kc(), a.Tb(22, "div", 12), a.Tb(23, "label", 13), a.Rc(24), a.nc(25, "translate"), a.Sb(), a.Tb(26, "div", 14), a.Tb(27, "form", 15), a.Tb(28, "div", 16), a.Pb(29, "input", 17, 18), a.nc(31, "translate"), a.Pc(32, Y, 3, 3, "button", 19), a.Pc(33, X, 4, 4, "ng-template", null, 20, a.Qc), a.Sb(), a.Pc(35, Z, 4, 3, "div", 21), a.Sb(), a.Sb(), a.Tb(36, "div", 22), a.Tb(37, "a", 23), a.Xb(38, P), a.nc(39, "translate"), a.Sb(), a.Sb(), a.Sb(), a.Sb()
                }
                if (2 & t) {
                    var i = e.ngIf,
                        o = a.Ec(34),
                        r = a.mc();
                    a.Bb(4), a.Sc(a.oc(5, 14, "exit")), a.Bb(5), a.uc("src", i.attributes.avatar, a.Ic), a.Bb(3), a.Tc("", a.oc(13, 16, "nickname"), " "), a.Bb(4), a.Sc(i.attributes.name), a.Bb(4), a.uc("ngIf", a.oc(21, 18, r.globalAuthFacade.currentCurrency$)), a.Bb(4), a.Sc(a.oc(25, 20, "profile.trade_url")), a.Bb(3), a.uc("formGroup", r.form), a.Bb(2), a.vc("placeholder", a.oc(31, 22, "profile.trade_add")), a.uc("readOnly", i.attributes.trade_link && !r.editTradeLinkMode), a.Bb(3), a.uc("ngIf", i.attributes.trade_link && !r.editTradeLinkMode)("ngIfElse", o), a.Bb(3), a.uc("ngIf", r.form.get("tradeLink").touched && r.form.get("tradeLink").errors), a.Bb(2), a.wc("href", "https://steamcommunity.com/profiles/", i.attributes.uuid, "/tradeoffers/privacy#trade_offer_access_url", a.Ic), a.Bb(2), a.bc(a.oc(39, 24, "profile.trade_link")), a.Yb(38)
                }
            }
            P = $localize(W || (W = Object(C.f)([":\u241f60efcde998faa73f6d39004121cd6b4cb2915797\u241f4363706613380375409:", ":INTERPOLATION:"], [":\u241f60efcde998faa73f6d39004121cd6b4cb2915797\u241f4363706613380375409:", ":INTERPOLATION:"])), "\ufffd0\ufffd");
            var W, tt = function() {
                    function t(t, e, n, i, r, a, c, s, l) {
                        this.popupService = t, this.globalAuthFacade = e, this.authFacade = n, this.api = i, this.formBuilder = r, this.router = a, this.ref = c, this.renderer2 = s, this.localization = l, this.editTradeLinkMode = !1, this.componentIsAlive$ = new o.a, this.form = this.formBuilder.group({
                            tradeLink: ["", Q.H.required]
                        })
                    }
                    return t.prototype.ngOnInit = function() {
                        this._initTradeLink()
                    }, t.prototype.ngOnDestroy = function() {
                        this.componentIsAlive$.next()
                    }, t.prototype.logout = function(t) {
                        t.preventDefault(), this.authFacade.logout(), this.router.navigate(this.localization.translateRoute([""]))
                    }, t.prototype.openReplenishPopup = function() {
                        this.popupService.openDialog("replenish", null, {
                            maxWidth: "63rem",
                            width: "90%",
                            maxHeight: "90%",
                            height: "auto"
                        }).subscribe()
                    }, t.prototype.changeTradeLink = function() {
                        var t = this;
                        this.form.valid && (this.form.setErrors({
                            pending: !0
                        }), this.api.putObject([this.api.API_URLS.userInfo], {
                            data: {
                                type: "user-info",
                                attributes: {
                                    trade_link: this.form.get("tradeLink").value
                                }
                            }
                        }).pipe(Object(E.a)((function(t) {
                            return Object(H.a)(t)
                        }))).subscribe((function(e) {
                            200 === e.status ? (t.authFacade.updateCurrentUser(e.body.data), t.editTradeLinkMode = !1) : (t.form.get("tradeLink").setErrors({
                                invalid: !0
                            }), t.form.get("tradeLink").markAsTouched(), t.ref.markForCheck()), t.form.setErrors(null)
                        })))
                    }, t.prototype._initTradeLink = function() {
                        var t = this;
                        this.authFacade.authUser$.pipe(Object(r.a)(this.componentIsAlive$)).subscribe((function(e) {
                            e.attributes.trade_link && !t.form.get("tradeLink").value && t.form.get("tradeLink").setValue(e.attributes.trade_link)
                        }))
                    }, t.prototype.onTradeLinkInputBlur = function(t) {
                        t.stopPropagation(), t.stopImmediatePropagation()
                    }, t.prototype.setEditTradeLinkMode = function() {
                        var t = this;
                        this.editTradeLinkMode = !0, this.tradeLinkInput.nativeElement.select();
                        var e = this.renderer2.listen("document", "mousedown", (function(n) {
                            console.log("listen");
                            var i = n.target;
                            i !== t.saveButton.nativeElement ? i !== t.tradeLinkInput.nativeElement && (t.authFacade.authUser$.pipe(Object(x.a)(1)).subscribe((function(e) {
                                e.attributes.trade_link && (t.form.patchValue({
                                    tradeLink: e.attributes.trade_link
                                }), t.editTradeLinkMode = !1)
                            })), e()) : e()
                        }))
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.Ob(D.a), a.Ob(c.a), a.Ob(j.a), a.Ob(U.a), a.Ob(Q.g), a.Ob(B.c), a.Ob(a.h), a.Ob(a.E), a.Ob(N.a))
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-profile-sidebar"]
                        ],
                        viewQuery: function(t, e) {
                            var n;
                            1 & t && (a.Vc(V, !0), a.Vc(G, !0)), 2 & t && (a.Dc(n = a.jc()) && (e.tradeLinkInput = n.first), a.Dc(n = a.jc()) && (e.saveButton = n.first))
                        },
                        decls: 2,
                        vars: 3,
                        consts: [
                            ["class", "profile-sidebar", 4, "ngIf"],
                            [1, "profile-sidebar"],
                            [1, "profile-sidebar__avatar"],
                            ["href", "/", 3, "click"],
                            ["width", "14", "height", "14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                            ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M4.67 7.58h6.17L8.92 9.5l.83.83L13.07 7 9.75 3.67l-.83.83 1.92 1.92H4.67v1.16zm-2.34 4.67h5.25v-1.17H2.33V2.92h5.25V1.75H2.33c-.64 0-1.16.52-1.16 1.17v8.16c0 .65.52 1.17 1.16 1.17z", "fill", "#85888B"],
                            [1, "avatar-wrapper"],
                            ["alt", "Avatar", 3, "src"],
                            [1, "profile-sidebar__nickname"],
                            ["width", "18", "height", "18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                            ["d", "M8.98 0A9 9 0 000 8.28l4.83 2c.41-.29.9-.45 1.44-.45h.14l2.15-3.1v-.05a3.4 3.4 0 113.4 3.4h-.08l-3.06 2.18v.12a2.55 2.55 0 01-5.05.5L.31 11.45A9.02 9.02 0 0018 9a9 9 0 00-9.02-9zM5.65 13.66l-1.1-.46a1.91 1.91 0 101.04-2.62l1.15.48a1.4 1.4 0 11-1.1 2.6zm8.58-6.98a2.27 2.27 0 10-4.54.01 2.27 2.27 0 004.54-.01zm-3.97 0a1.7 1.7 0 113.4 0 1.7 1.7 0 01-3.4 0z", "fill", "#FAFAFA"],
                            ["class", "profile-sidebar__balance", 4, "ngIf"],
                            [1, "profile-sidebar__trade-link"],
                            ["for", "trade-link-input", 1, "profile-sidebar__trade-link-title"],
                            [1, "profile-sidebar__trade-link-form"],
                            [3, "formGroup"],
                            [1, "form-control"],
                            ["type", "text", "id", "trade-link-input", "formControlName", "tradeLink", 1, "input", 3, "readOnly", "placeholder"],
                            ["tradeLinkInput", ""],
                            ["class", "button button-fountain-blue", 3, "click", 4, "ngIf", "ngIfElse"],
                            ["saveButton", ""],
                            ["class", "error", 4, "ngIf"],
                            [1, "profile-sidebar__trade-link-help"],
                            ["target", "_blank", 3, "href"],
                            [1, "profile-sidebar__balance"],
                            [1, "profile-sidebar__balance-header"],
                            [1, "profile-sidebar__balance-values"],
                            ["appCurrencySymbol", "", 1, "currency", 3, "currencyCode"],
                            [2, "color", "#E47C38"],
                            ["width", "16", "height", "16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                            ["d", "M8 0a8 8 0 000 16A8 8 0 008 0z", "fill", "#FDBF00"],
                            ["d", "M8 16V0a8 8 0 010 16z", "fill", "#FF9100"],
                            ["d", "M9.9 2.34l-4.06.01a.47.47 0 00-.33.14L2.48 5.53a.47.47 0 00-.14.33l.01 4.3c0 .12.05.24.14.33l3.04 3.03c.09.09.2.14.33.14l4.05-.01.93-.5.94-.94.54-1.2.4.26.8-.8c.09-.09.14-.2.14-.33l-.01-4.3a.47.47 0 00-.14-.33l-.8-.79-.46.22-.47-1.15-.94-.94-.93-.5z", "fill", "#FFDE46"],
                            ["d", "M13.66 10.14l-.01-4.3a.47.47 0 00-.14-.33l-.8-.79-1.87-1.87-.37-.37a.47.47 0 00-.33-.14H8v11.31h2.15c.13 0 .25-.05.34-.14l.35-.36 1.88-1.88.8-.8c.09-.09.14-.2.14-.33z", "fill", "#FDBF00"],
                            [1, "profile-sidebar__balance-button"],
                            [1, "button", "button-fountain-blue", 3, "click"],
                            [1, "button", "button-fountain-blue", 3, "disabled", "click"],
                            ["saveButtonRef", ""],
                            [1, "error"]
                        ],
                        template: function(t, e) {
                            1 & t && (a.Pc(0, K, 40, 26, "div", 0), a.nc(1, "async")), 2 & t && a.uc("ngIf", a.oc(1, 1, e.authFacade.authUser$))
                        },
                        directives: [i.t, Q.J, Q.u, Q.l, Q.d, Q.t, Q.j, u.a],
                        pipes: [i.b, b.e, d.a],
                        styles: ['.profile-sidebar[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:calc(5rem + 42px);display:flex;flex-direction:column;padding:16px;background-color:#1c2024}.profile-sidebar__avatar[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;padding-top:10px;padding-bottom:10px;margin-bottom:15px}.profile-sidebar__avatar[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;align-items:center;position:absolute;right:0;top:0}.profile-sidebar__avatar[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:5px}.profile-sidebar__avatar[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]{width:144px;height:144px;border-radius:50%;border:2px solid #7b8693;margin-top:15px}.profile-sidebar__avatar[_ngcontent-%COMP%]   .avatar-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.profile-sidebar__nickname[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:35px}.profile-sidebar__nickname[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{font-family:Roboto;font-style:normal;font-weight:400;font-size:12px;line-height:14px;color:#85888b;margin-bottom:5px}.profile-sidebar__nickname[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){display:flex;align-items:center;font-family:Roboto;font-style:normal;font-weight:700;font-size:20px;line-height:23px;color:#fff;margin-bottom:12px}.profile-sidebar__nickname[_ngcontent-%COMP%]:after{content:"";height:1px;width:100%;background-image:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff 50%,hsla(0,0%,100%,0))}.profile-sidebar__balance[_ngcontent-%COMP%]{margin-bottom:35px}.profile-sidebar__balance-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:6px}.profile-sidebar__balance-header[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:12px;text-transform:uppercase;color:#969696;padding-left:10px}.profile-sidebar__balance-values[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-bottom:12px}.profile-sidebar__balance-values[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;height:42px;padding:0 16px;background-color:#30333a;font-family:Roboto;font-style:normal;font-weight:700;font-size:13px;line-height:15px}.profile-sidebar__balance-button[_ngcontent-%COMP%]{display:flex;height:42px}.profile-sidebar__balance-button[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%}.profile-sidebar__trade-link[_ngcontent-%COMP%]{display:flex;flex-direction:column}.profile-sidebar__trade-link-title[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:12px;line-height:15px;text-transform:uppercase;color:#969696;padding-left:6px;margin-bottom:8px}.profile-sidebar__trade-link-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:12px}.profile-sidebar__trade-link-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .profile-sidebar__trade-link-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:42px}.profile-sidebar__trade-link-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{display:flex;width:100%}.profile-sidebar__trade-link-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.profile-sidebar__trade-link-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:100px}.profile-sidebar__trade-link-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:12px;line-height:15px;color:#ff4e4e;margin-top:5px}.profile-sidebar__trade-link-help[_ngcontent-%COMP%]{margin-top:8px;text-align:right}.profile-sidebar__trade-link-help[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:12px;line-height:15px;text-decoration:none;color:#969696}']
                    }), t
                }(),
                et = n("QirU");

            function nt(t, e) {
                if (1 & t && (a.Tb(0, "li"), a.Tb(1, "a", 6), a.nc(2, "translateRoute"), a.Rc(3), a.nc(4, "translate"), a.Sb(), a.Sb()), 2 & t) {
                    var n = e.$implicit;
                    a.Bb(1), a.uc("routerLink", a.oc(2, 2, n.path)), a.Bb(2), a.Tc(" ", a.oc(4, 4, n.label), " ")
                }
            }
            var it = function() {
                    function t(t, e, n, i) {
                        this.auth = t, this.windowEventsService = e, this.router = n, this.breadcrumbsService = i, this.navLinks = [{
                            path: "/profile-new/inventory",
                            label: "navigation.inventory"
                        }, {
                            path: "/profile-new/history",
                            label: "navigation.payment_history"
                        }, {
                            path: "/profile-new/quests",
                            label: "navigation.gold"
                        }, {
                            path: "/profile-new/support",
                            label: "navigation.support"
                        }]
                    }
                    return t.prototype.ngOnInit = function() {
                        this.breadcrumbsService.setBreadcrumbs([{
                            label: "breadcrumbs.profile",
                            path: this.router.url
                        }])
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.Ob(j.a), a.Ob(k.a), a.Ob(B.c), a.Ob(z.a))
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-profile"]
                        ],
                        decls: 9,
                        vars: 4,
                        consts: [
                            [1, "container"],
                            [1, "sidebar"],
                            [1, "nav"],
                            [1, "profile-nav"],
                            [4, "ngFor", "ngForOf"],
                            [1, "content", 3, "ngClass"],
                            ["routerLinkActive", "active", 1, "link", 3, "routerLink"]
                        ],
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div", 0), a.Tb(1, "div", 1), a.Pb(2, "app-profile-sidebar"), a.Sb(), a.Tb(3, "div", 2), a.Tb(4, "ul", 3), a.Pc(5, nt, 5, 6, "li", 4), a.Sb(), a.Sb(), a.Tb(6, "div", 5), a.nc(7, "async"), a.Pb(8, "router-outlet"), a.Sb(), a.Sb()), 2 & t && (a.Bb(5), a.uc("ngForOf", e.navLinks), a.Bb(1), a.uc("ngClass", a.oc(7, 2, e.windowEventsService.deviceStatusClassList$)))
                        },
                        directives: [tt, i.s, i.q, B.h, B.f, B.e],
                        pipes: [i.b, et.a, b.e],
                        styles: ['.container[_ngcontent-%COMP%]{display:grid;gap:20px 20px;min-height:calc(100vh - 80px - 2rem);padding:0 20px}@media screen and (max-width:768px){.container[_ngcontent-%COMP%]{display:block}}@media screen and (min-width:769px){.container[_ngcontent-%COMP%]{grid-template-columns:295px 1fr;grid-template-rows:42px 1fr;grid-template-areas:"sidebar nav" "sidebar content"}}.sidebar[_ngcontent-%COMP%]{grid-area:sidebar;position:relative}@media screen and (max-width:768px){.sidebar[_ngcontent-%COMP%]{display:none}}@media screen and (min-width:769px){.sidebar[_ngcontent-%COMP%]{display:block}}.nav[_ngcontent-%COMP%]{grid-area:nav}@media screen and (max-width:768px){.nav[_ngcontent-%COMP%]{display:none}}@media screen and (min-width:769px){.nav[_ngcontent-%COMP%]{display:block}}.content[_ngcontent-%COMP%]{grid-area:content}.content.handset[_ngcontent-%COMP%]{margin-top:1rem}.profile-sidebar[_ngcontent-%COMP%]{background-color:#1c2024;padding:16px}.profile-nav[_ngcontent-%COMP%]{height:100%;display:flex;list-style:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom:2px solid #525559}.profile-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:1;display:flex;align-items:flex-end}.profile-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:4px}.profile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:100%;flex:1;position:relative;display:flex;align-items:center;justify-content:center;text-align:center;margin-bottom:-2px;font-family:Roboto;font-style:normal;font-weight:500;font-size:14px;line-height:16px;text-transform:uppercase;color:hsla(0,0%,100%,.4);transition:color .3s ease}.profile-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;right:0;height:3px;background-color:#828588;transition:background-color .3s ease}.profile-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff}.profile-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after{background-color:#fff}']
                    }), t
                }(),
                ot = n("67Y/"),
                rt = n("15JJ"),
                at = n("/PH2"),
                ct = function() {
                    function t(t) {
                        this.apiConnectorService = t
                    }
                    return t.prototype.getQuests = function() {
                        return this.apiConnectorService.getObject([this.apiConnectorService.API_URLS.quests])
                    }, t.prototype.doQuest = function(t, e, n) {
                        var i;
                        return this.apiConnectorService.postObject([this.apiConnectorService.API_URLS.quests, t], {
                            data: {
                                attributes: (i = {
                                    type: e
                                }, i[e] = n, i)
                            }
                        })
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.ec(U.a))
                    }, t.\u0275prov = a.Kb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                }(),
                st = n("89M5");

            function lt(t, e) {
                1 & t && (a.lc(), a.Tb(0, "svg", 9), a.Pb(1, "path", 10), a.Pb(2, "path", 11), a.Pb(3, "path", 12), a.Pb(4, "path", 13), a.Sb())
            }

            function pt(t, e) {
                if (1 & t && (a.Tb(0, "span", 7), a.Tb(1, "b"), a.Rc(2), a.Sb(), a.Rc(3, "\xa0 "), a.Pc(4, lt, 5, 0, "svg", 8), a.Sb()), 2 & t) {
                    var n = a.mc();
                    a.Bb(2), a.Sc(n.quest.attributes.benefit.gold), a.Bb(2), a.uc("ngIf", n.quest.attributes.benefit.gold)
                }
            }

            function ut(t, e) {
                if (1 & t && (a.Tb(0, "span", 7), a.Tb(1, "b"), a.Rc(2), a.Sb(), a.Tb(3, "i", 14), a.Rc(4, "money"), a.Sb(), a.Sb()), 2 & t) {
                    var n = a.mc();
                    a.Bb(2), a.Sc(n.quest.attributes.benefit.money)
                }
            }

            function bt(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Tb(0, "div", 15), a.Tb(1, "button", 16), a.ic("click", (function() {
                        return a.Hc(n), a.mc().onDoAttachQuest()
                    })), a.Rc(2), a.nc(3, "translate"), a.Sb(), a.Sb()
                }
                if (2 & t) {
                    var i = a.mc();
                    a.Bb(1), a.uc("disabled", "pending" === i.quest.attributes.completed), a.Bb(1), a.Tc(" ", a.oc(3, 2, "quest.popup.send"), " ")
                }
            }
            var dt = function() {
                function t() {
                    this.doAttachQuest = new a.n
                }
                return t.prototype.onDoAttachQuest = function() {
                    this.doAttachQuest.emit(this.quest.id)
                }, t.\u0275fac = function(e) {
                    return new(e || t)
                }, t.\u0275cmp = a.Ib({
                    type: t,
                    selectors: [
                        ["app-general-quest-component"]
                    ],
                    inputs: {
                        quest: "quest"
                    },
                    outputs: {
                        doAttachQuest: "doAttachQuest"
                    },
                    decls: 12,
                    vars: 8,
                    consts: [
                        [1, "quest"],
                        [1, "quest__img"],
                        ["alt", "Icon", 3, "src"],
                        [1, "quest__title"],
                        [1, "quest__description"],
                        ["class", "quest__reward", 4, "ngIf"],
                        ["class", "quest__action", 4, "ngIf"],
                        [1, "quest__reward"],
                        ["width", "16", "height", "16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"],
                        ["width", "16", "height", "16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                        ["d", "M8 0a8 8 0 000 16A8 8 0 008 0z", "fill", "#FDBF00"],
                        ["d", "M8 16V0a8 8 0 010 16z", "fill", "#FF9100"],
                        ["d", "M9.9 2.34l-4.06.01a.47.47 0 00-.33.14L2.48 5.53a.47.47 0 00-.14.33l.01 4.3c0 .12.05.24.14.33l3.04 3.03c.09.09.2.14.33.14l4.05-.01.93-.5.94-.94.54-1.2.4.26.8-.8c.09-.09.14-.2.14-.33l-.01-4.3a.47.47 0 00-.14-.33l-.8-.79-.46.22-.47-1.15-.94-.94-.93-.5z", "fill", "#FFDE46"],
                        ["d", "M13.66 10.14l-.01-4.3a.47.47 0 00-.14-.33l-.8-.79-1.87-1.87-.37-.37a.47.47 0 00-.33-.14H8v11.31h2.15c.13 0 .25-.05.34-.14l.35-.36 1.88-1.88.8-.8c.09-.09.14-.2.14-.33z", "fill", "#FDBF00"],
                        [1, "material-icons"],
                        [1, "quest__action"],
                        [1, "button", "button-fountain-blue", 3, "disabled", "click"]
                    ],
                    template: function(t, e) {
                        1 & t && (a.Tb(0, "div", 0), a.Tb(1, "div", 1), a.Pb(2, "img", 2), a.Sb(), a.Tb(3, "div", 3), a.Rc(4), a.Sb(), a.Tb(5, "div", 4), a.Tb(6, "span"), a.Rc(7), a.nc(8, "translate"), a.Sb(), a.Pc(9, pt, 5, 2, "span", 5), a.Pc(10, ut, 5, 1, "span", 5), a.Sb(), a.Pc(11, bt, 4, 4, "div", 6), a.Sb()), 2 & t && (a.Bb(2), a.uc("src", e.quest.attributes.icon, a.Ic), a.Bb(2), a.Tc(" ", e.quest.attributes.title, " "), a.Bb(3), a.Tc(" ", a.oc(8, 6, "quest.amount"), " "), a.Bb(2), a.uc("ngIf", e.quest.attributes.benefit.gold), a.Bb(1), a.uc("ngIf", e.quest.attributes.benefit.money), a.Bb(1), a.uc("ngIf", "completed" !== e.quest.attributes.completed))
                    },
                    directives: [i.t],
                    pipes: [b.e],
                    styles: ['.quest[_ngcontent-%COMP%]{background-color:#1c2024;padding:16px;display:grid}@media screen and (max-width:768px){.quest[_ngcontent-%COMP%]{grid-template-columns:50px 1fr;gap:12px;grid-template-areas:"img title" "img description" "action action"}}@media screen and (min-width:769px){.quest[_ngcontent-%COMP%]{grid-template-columns:80px 1fr 130px;grid-template-rows:1fr 1fr;gap:12px 17px;grid-template-areas:"img title action" "img description action";padding-right:40px}}.quest__img[_ngcontent-%COMP%]{grid-area:img;display:flex}@media screen and (max-width:768px){.quest__img[_ngcontent-%COMP%]{width:50px;height:50px}}@media screen and (min-width:769px){.quest__img[_ngcontent-%COMP%]{width:80px;height:80px}}.quest__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.quest__title[_ngcontent-%COMP%]{grid-area:title;align-self:end;font-weight:500;font-size:18px;line-height:21px}.quest__description[_ngcontent-%COMP%], .quest__title[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;color:#fff}.quest__description[_ngcontent-%COMP%]{grid-area:description;align-self:start;font-weight:400;font-size:14px;line-height:16px}.quest__reward[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:8px}.quest__reward[_ngcontent-%COMP%]:last-child{margin-right:0}.quest__reward[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.quest__action[_ngcontent-%COMP%]{grid-area:action;align-self:center}.quest__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:42px;width:100%}']
                }), t
            }();

            function gt(t, e) {
                1 & t && (a.lc(), a.Tb(0, "svg", 10), a.Pb(1, "path", 11), a.Pb(2, "path", 12), a.Pb(3, "path", 13), a.Pb(4, "path", 14), a.Sb())
            }

            function ft(t, e) {
                if (1 & t && (a.Tb(0, "span", 8), a.Tb(1, "b"), a.Rc(2), a.Sb(), a.Rc(3, "\xa0 "), a.Pc(4, gt, 5, 0, "svg", 9), a.Sb()), 2 & t) {
                    var n = a.mc(2);
                    a.Bb(2), a.Sc(n.quest.attributes.benefit.gold), a.Bb(2), a.uc("ngIf", n.quest.attributes.benefit.gold)
                }
            }

            function mt(t, e) {
                if (1 & t && (a.Tb(0, "span", 8), a.Tb(1, "b"), a.Rc(2), a.Sb(), a.Tb(3, "i", 15), a.Rc(4, "money"), a.Sb(), a.Sb()), 2 & t) {
                    var n = a.mc(2);
                    a.Bb(2), a.Sc(n.quest.attributes.benefit.money)
                }
            }

            function ht(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Tb(0, "div", 16), a.Tb(1, "button", 17), a.ic("click", (function() {
                        return a.Hc(n), a.mc(2).isStarted = !0
                    })), a.Rc(2), a.nc(3, "translate"), a.Sb(), a.Sb()
                }
                if (2 & t) {
                    var i = a.mc(2);
                    a.Bb(1), a.uc("disabled", "pending" === i.quest.attributes.completed), a.Bb(1), a.Tc(" ", a.oc(3, 2, "quest.popup.send"), " ")
                }
            }

            function _t(t, e) {
                if (1 & t && (a.Rb(0), a.Tb(1, "div", 4), a.Rc(2), a.Sb(), a.Tb(3, "div", 5), a.Tb(4, "span"), a.Rc(5), a.nc(6, "translate"), a.Sb(), a.Pc(7, ft, 5, 2, "span", 6), a.Pc(8, mt, 5, 1, "span", 6), a.Sb(), a.Pc(9, ht, 4, 4, "div", 7), a.Qb()), 2 & t) {
                    var n = a.mc();
                    a.Bb(2), a.Tc(" ", n.quest.attributes.title, " "), a.Bb(3), a.Tc(" ", a.oc(6, 5, "quest.amount"), ": "), a.Bb(2), a.uc("ngIf", n.quest.attributes.benefit.gold), a.Bb(1), a.uc("ngIf", n.quest.attributes.benefit.money), a.Bb(1), a.uc("ngIf", "completed" !== n.quest.attributes.completed)
                }
            }

            function vt(t, e) {
                1 & t && (a.Tb(0, "div", 26), a.Tb(1, "span"), a.Rc(2), a.nc(3, "translate"), a.Sb(), a.Sb()), 2 & t && (a.Bb(2), a.Sc(a.oc(3, 1, "quest.email_error")))
            }

            function Ot(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Rb(0), a.Tb(1, "div", 18), a.Tb(2, "div", 19), a.Rc(3), a.nc(4, "translate"), a.Sb(), a.Tb(5, "div", 20), a.Tb(6, "form", 21), a.ic("ngSubmit", (function() {
                        return a.Hc(n), a.mc().onSubmit()
                    })), a.Tb(7, "div", 22), a.Pb(8, "input", 23), a.nc(9, "translate"), a.Pc(10, vt, 4, 3, "div", 24), a.Tb(11, "button", 25), a.Rc(12), a.nc(13, "translate"), a.Sb(), a.Sb(), a.Sb(), a.Sb(), a.Sb(), a.Qb()
                }
                if (2 & t) {
                    var i = a.mc();
                    a.Bb(3), a.Sc(a.oc(4, 6, "quest.email")), a.Bb(3), a.uc("formGroup", i.form), a.Bb(2), a.vc("placeholder", a.oc(9, 8, "quest.email")), a.Bb(2), a.uc("ngIf", i.form.get("email").touched && i.form.get("email").errors), a.Bb(1), a.uc("disabled", i.form.invalid), a.Bb(1), a.Tc(" ", a.oc(13, 10, "quest.email_btn"), " ")
                }
            }
            var Pt = function() {
                    function t(t) {
                        this.formBuilder = t, this.doFormQuest = new a.n, this.isStarted = !1, this.form = this.formBuilder.group({
                            email: ["", Q.H.required]
                        })
                    }
                    return t.prototype.onSubmit = function() {
                        this.form.valid && (this.doFormQuest.emit(this.form.get("email").value), this.isStarted = !1, this.quest = Object(C.a)(Object(C.a)({}, this.quest), {
                            attributes: Object(C.a)(Object(C.a)({}, this.quest.attributes), {
                                completed: "pending"
                            })
                        }), this.form.reset())
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.Ob(Q.g))
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-email-quest-component"]
                        ],
                        inputs: {
                            quest: "quest"
                        },
                        outputs: {
                            doFormQuest: "doFormQuest"
                        },
                        decls: 5,
                        vars: 5,
                        consts: [
                            [1, "quest"],
                            [1, "quest__img"],
                            ["alt", "Icon", 3, "src"],
                            [4, "ngIf"],
                            [1, "quest__title"],
                            [1, "quest__description"],
                            ["class", "quest__reward", 4, "ngIf"],
                            ["class", "quest__action", 4, "ngIf"],
                            [1, "quest__reward"],
                            ["width", "16", "height", "16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"],
                            ["width", "16", "height", "16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"],
                            ["d", "M8 0a8 8 0 000 16A8 8 0 008 0z", "fill", "#FDBF00"],
                            ["d", "M8 16V0a8 8 0 010 16z", "fill", "#FF9100"],
                            ["d", "M9.9 2.34l-4.06.01a.47.47 0 00-.33.14L2.48 5.53a.47.47 0 00-.14.33l.01 4.3c0 .12.05.24.14.33l3.04 3.03c.09.09.2.14.33.14l4.05-.01.93-.5.94-.94.54-1.2.4.26.8-.8c.09-.09.14-.2.14-.33l-.01-4.3a.47.47 0 00-.14-.33l-.8-.79-.46.22-.47-1.15-.94-.94-.93-.5z", "fill", "#FFDE46"],
                            ["d", "M13.66 10.14l-.01-4.3a.47.47 0 00-.14-.33l-.8-.79-1.87-1.87-.37-.37a.47.47 0 00-.33-.14H8v11.31h2.15c.13 0 .25-.05.34-.14l.35-.36 1.88-1.88.8-.8c.09-.09.14-.2.14-.33z", "fill", "#FDBF00"],
                            [1, "material-icons"],
                            [1, "quest__action"],
                            [1, "button", "button-fountain-blue", 3, "disabled", "click"],
                            [1, "quest-in-progress"],
                            [1, "quest__form-title"],
                            [1, "quest__form"],
                            [3, "formGroup", "ngSubmit"],
                            [1, "form-control"],
                            ["type", "text", "formControlName", "email", 1, "input", 3, "placeholder"],
                            ["class", "error", 4, "ngIf"],
                            [1, "button", "button-fountain-blue", 3, "disabled"],
                            [1, "error"]
                        ],
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div", 0), a.Tb(1, "div", 1), a.Pb(2, "img", 2), a.Sb(), a.Pc(3, _t, 10, 7, "ng-container", 3), a.Pc(4, Ot, 14, 12, "ng-container", 3), a.Sb()), 2 & t && (a.Fb("in-progress", e.isStarted), a.Bb(2), a.uc("src", e.quest.attributes.icon, a.Ic), a.Bb(1), a.uc("ngIf", !e.isStarted), a.Bb(1), a.uc("ngIf", e.isStarted))
                        },
                        directives: [i.t, Q.J, Q.u, Q.l, Q.d, Q.t, Q.j],
                        pipes: [b.e],
                        styles: ['.quest[_ngcontent-%COMP%]{background-color:#1c2024;padding:16px;display:grid}@media screen and (max-width:768px){.quest[_ngcontent-%COMP%]{grid-template-columns:50px 1fr;gap:12px;grid-template-areas:"img title" "img description" "action action"}}@media screen and (min-width:769px){.quest[_ngcontent-%COMP%]{grid-template-columns:80px 1fr 130px;grid-template-rows:1fr 1fr;gap:12px 17px;grid-template-areas:"img title action" "img description action";padding-right:40px}}.quest.done[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{opacity:.5}@media screen and (max-width:768px){.quest.in-progress[_ngcontent-%COMP%]{grid-template-columns:50px 1fr;gap:12px}}@media screen and (min-width:769px){.quest.in-progress[_ngcontent-%COMP%]{padding:18px 40px 22px 16px;grid-template-columns:80px 1fr;grid-template-rows:15px 1fr;gap:8px 17px;grid-template-areas:"img form" "img form"}}@media screen and (min-width:769px){.quest.in-progress[_ngcontent-%COMP%]   .quest__description[_ngcontent-%COMP%], .quest.in-progress[_ngcontent-%COMP%]   .quest__title[_ngcontent-%COMP%]{display:none}}.quest__img[_ngcontent-%COMP%]{grid-area:img;display:flex}@media screen and (max-width:768px){.quest__img[_ngcontent-%COMP%]{width:50px;height:50px}}@media screen and (min-width:769px){.quest__img[_ngcontent-%COMP%]{width:80px;height:80px}}.quest__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .quest__img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%}.quest__title[_ngcontent-%COMP%]{grid-area:title;align-self:end;font-weight:500;font-size:18px;line-height:21px}.quest__description[_ngcontent-%COMP%], .quest__title[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;color:#fff}.quest__description[_ngcontent-%COMP%]{grid-area:description;align-self:start;font-weight:400;font-size:14px;line-height:16px}.quest__reward[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:8px}.quest__reward[_ngcontent-%COMP%]:last-child{margin-right:0}.quest__reward[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:700}.quest__action[_ngcontent-%COMP%]{grid-area:action;align-self:center}.quest__action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:42px;width:100%}.quest__form-title[_ngcontent-%COMP%]{grid-area:form-title;align-self:end;padding-left:6px;font-family:Roboto;font-style:normal;font-weight:500;font-size:12px;line-height:15px;text-transform:uppercase;color:#969696}.quest__form[_ngcontent-%COMP%]{grid-area:form}.quest__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:12px}.quest__form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .quest__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:42px}.quest__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{display:flex;width:100%}@media screen and (max-width:768px){.quest__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{flex-direction:column}.quest__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:8px}}.quest__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1}.quest__form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:160px}.quest__form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:12px;line-height:15px;color:#ff4e4e;margin-top:5px}.quest__form[_ngcontent-%COMP%]{position:relative}.quest__form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{bottom:0;transform:translateY(100%);position:absolute}@media screen and (max-width:768px){.quest__form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{position:static;transform:translateY(-50%)}}'],
                        changeDetection: 0
                    }), t
                }(),
                yt = function() {
                    function t() {}
                    return t.prototype.transform = function(t, e) {
                        if (t) return t.filter((function(t) {
                            return e.some((function(e) {
                                return e === t.attributes.completed
                            }))
                        }))
                    }, t.\u0275fac = function(e) {
                        return new(e || t)
                    }, t.\u0275pipe = a.Nb({
                        name: "filterQuests",
                        type: t,
                        pure: !0
                    }), t
                }();

            function Ct(t, e) {
                if (1 & t && (a.Tb(0, "div", 7), a.Pb(1, "app-label-separator", 8), a.Sb()), 2 & t) {
                    var n = a.mc(3).$implicit;
                    a.Bb(1), a.uc("label", n.label)
                }
            }

            function Mt(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Rb(0), a.Tb(1, "app-general-quest-component", 11), a.ic("doAttachQuest", (function(t) {
                        a.Hc(n);
                        var e = a.mc().$implicit;
                        return a.mc(4).doAttachQuest(t, e.attributes.type)
                    })), a.Sb(), a.Qb()
                }
                if (2 & t) {
                    var i = a.mc().$implicit;
                    a.Bb(1), a.uc("quest", i)
                }
            }

            function xt(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Rb(0), a.Tb(1, "app-email-quest-component", 12), a.ic("doFormQuest", (function(t) {
                        a.Hc(n);
                        var e = a.mc().$implicit;
                        return a.mc(4).doFormQuest(t, e.attributes.type, e.id)
                    })), a.Sb(), a.Qb()
                }
                if (2 & t) {
                    var i = a.mc().$implicit;
                    a.Bb(1), a.uc("quest", i)
                }
            }

            function St(t, e) {
                if (1 & t && (a.Rb(0), a.Rb(1, 9), a.Pc(2, Mt, 2, 1, "ng-container", 10), a.Pc(3, xt, 2, 1, "ng-container", 10), a.Qb(), a.Qb()), 2 & t) {
                    var n = e.$implicit;
                    a.Bb(1), a.uc("ngSwitch", n.attributes.type), a.Bb(1), a.uc("ngSwitchCase", "attach"), a.Bb(1), a.uc("ngSwitchCase", "form")
                }
            }

            function wt(t, e) {
                if (1 & t && (a.Tb(0, "div", 5), a.Pc(1, Ct, 2, 1, "div", 6), a.Pc(2, St, 4, 3, "ng-container", 2), a.Sb()), 2 & t) {
                    var n = a.mc().ngIf,
                        i = a.mc().$implicit;
                    a.Bb(1), a.uc("ngIf", i.label), a.Bb(1), a.uc("ngForOf", n)
                }
            }

            function kt(t, e) {
                if (1 & t && (a.Rb(0), a.Pc(1, wt, 3, 2, "div", 4), a.Qb()), 2 & t) {
                    var n = e.ngIf;
                    a.Bb(1), a.uc("ngIf", n.length)
                }
            }
            var Tt = function(t) {
                return [t]
            };

            function It(t, e) {
                if (1 & t && (a.Rb(0), a.Pc(1, kt, 2, 1, "ng-container", 3), a.nc(2, "filterQuests"), a.nc(3, "async"), a.Qb()), 2 & t) {
                    var n = e.$implicit,
                        i = a.mc();
                    a.Bb(1), a.uc("ngIf", a.pc(2, 1, a.oc(3, 4, i.quests$), a.yc(6, Tt, n.type)))
                }
            }
            var qt, Bt = function() {
                    function t(t, e) {
                        this.newProfileService = t, this.popupService = e, this.questsCategories = [{
                            type: "new"
                        }, {
                            type: "pending",
                            label: "\u041d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435"
                        }, {
                            type: "completed",
                            label: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"
                        }], this.quests$ = new M.a(null), this.componentIsAlive$ = new o.a
                    }
                    return t.prototype.ngOnInit = function() {
                        var t = this;
                        this.newProfileService.getQuests().pipe(Object(r.a)(this.componentIsAlive$), Object(ot.a)((function(t) {
                            return t.body.data
                        }))).subscribe((function(e) {
                            return t.quests$.next(e)
                        }))
                    }, t.prototype.doAttachQuest = function(t, e) {
                        var n = this;
                        this.popupService.openDialog("attachQuest").pipe(Object(x.a)(1), Object(S.a)((function(t) {
                            return !!t
                        })), Object(rt.a)((function(i) {
                            return n.newProfileService.doQuest(t, e, i)
                        })), Object(at.a)(this.quests$)).subscribe((function(e) {
                            var i = Object(C.g)(e, 2),
                                o = i[0],
                                r = i[1],
                                a = r.findIndex((function(e) {
                                    return e.id === t
                                }));
                            r[a] = o.body.data, n.quests$.next(Object(C.h)(r))
                        }))
                    }, t.prototype.doFormQuest = function(t, e, n) {
                        this.newProfileService.doQuest(n, e, t).pipe(Object(x.a)(1)).subscribe()
                    }, t.prototype.ngOnDestroy = function() {
                        this.componentIsAlive$.next(), this.componentIsAlive$.complete()
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.Ob(ct), a.Ob(D.a))
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-quests"]
                        ],
                        decls: 5,
                        vars: 4,
                        consts: [
                            [1, "quests"],
                            [1, "quests__description"],
                            [4, "ngFor", "ngForOf"],
                            [4, "ngIf"],
                            ["class", "quests__list", 4, "ngIf"],
                            [1, "quests__list"],
                            ["class", "separator", 4, "ngIf"],
                            [1, "separator"],
                            [3, "label"],
                            [3, "ngSwitch"],
                            [4, "ngSwitchCase"],
                            [3, "quest", "doAttachQuest"],
                            [3, "quest", "doFormQuest"]
                        ],
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div", 0), a.Tb(1, "div", 1), a.Rc(2), a.nc(3, "translate"), a.Sb(), a.Pc(4, It, 4, 8, "ng-container", 2), a.Sb()), 2 & t && (a.Bb(2), a.Tc(" ", a.oc(3, 2, "quest.header"), " "), a.Bb(2), a.uc("ngForOf", e.questsCategories))
                        },
                        directives: [i.s, i.t, st.a, i.x, i.y, dt, Pt],
                        pipes: [b.e, yt, i.b],
                        styles: ['.quests__description[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:15px;line-height:18px;color:#7f8284;padding-left:15px;margin-top:30px;margin-bottom:15px}.quests__list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.quests__list[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:16px}.quests__done-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.quests__done-list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-top:30px}.quests__done-list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .quests__done-list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center}.quests__done-list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{z-index:2;padding:6px 12px;background-color:#14171b;font-family:Roboto;font-style:normal;font-weight:700;font-size:18px;line-height:23px;text-align:center;color:#f0f0f0}.quests__done-list[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{content:"";z-index:1;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;height:1px;width:100%;background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff 50%,hsla(0,0%,100%,0))}.quests__done-list[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child){margin-bottom:16px}.separator[_ngcontent-%COMP%]{margin:20px 0}'],
                        changeDetection: 0
                    }), t
                }(),
                Ft = function() {
                    function t() {}
                    return t.prototype.ngOnInit = function() {}, t.\u0275fac = function(e) {
                        return new(e || t)
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-settings"]
                        ],
                        decls: 2,
                        vars: 0,
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div"), a.Rc(1, " settings\n"), a.Sb())
                        },
                        styles: [""],
                        changeDetection: 0
                    }), t
                }(),
                Rt = n("PCNd"),
                At = n("ZqfJ"),
                $t = n("1LMx"),
                Lt = function() {
                    function t(t) {
                        this.apiConnectorService = t
                    }
                    return t.prototype.getTicket = function() {
                        return this.apiConnectorService.getObject([this.apiConnectorService.API_URLS.ticket]).pipe(Object(E.a)((function() {
                            return Object(H.a)(null)
                        })))
                    }, t.prototype.createTicket = function(t) {
                        return this.apiConnectorService.postObject([this.apiConnectorService.API_URLS.ticket], {
                            data: t
                        })
                    }, t.prototype.sendNewMessage = function(t) {
                        return this.apiConnectorService.putObject([this.apiConnectorService.API_URLS.ticket], {
                            data: t
                        })
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(a.ec(U.a))
                    }, t.\u0275prov = a.Kb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                }(),
                jt = function() {
                    function t() {}
                    return t.\u0275mod = a.Mb({
                        type: t
                    }), t.\u0275inj = a.Lb({
                        factory: function(e) {
                            return new(e || t)
                        },
                        providers: [Lt],
                        imports: [
                            [Rt.a]
                        ]
                    }), t
                }(),
                zt = n("ZjaF"),
                Qt = n("bhAU"),
                Ht = function() {
                    function t() {}
                    return t.\u0275fac = function(e) {
                        return new(e || t)
                    }, t.\u0275cmp = a.Ib({
                        type: t,
                        selectors: [
                            ["app-message"]
                        ],
                        inputs: {
                            message: "message"
                        },
                        decls: 12,
                        vars: 8,
                        consts: [
                            [1, "message-wrapper", 3, "ngClass"],
                            [1, "avatar"],
                            ["alt", "avatar", 3, "src"],
                            [1, "message"],
                            [1, "message-info"],
                            [1, "name"],
                            [1, "date"]
                        ],
                        template: function(t, e) {
                            1 & t && (a.Tb(0, "div", 0), a.Tb(1, "div", 1), a.Pb(2, "img", 2), a.Sb(), a.Tb(3, "div", 3), a.Tb(4, "div", 4), a.Tb(5, "span", 5), a.Rc(6), a.Sb(), a.Tb(7, "span", 6), a.Rc(8), a.nc(9, "date"), a.Sb(), a.Sb(), a.Tb(10, "p"), a.Rc(11), a.Sb(), a.Sb(), a.Sb()), 2 & t && (a.uc("ngClass", e.message.type), a.Bb(2), a.uc("src", (null == e.message ? null : e.message.avatar) || "assets/images/no-image.jpg", a.Ic), a.Bb(4), a.Sc(e.message.user_name), a.Bb(2), a.Sc(a.pc(9, 5, e.message.date, "dd.MM.yyyy, HH:mm")), a.Bb(3), a.Sc(e.message.message))
                        },
                        directives: [i.q],
                        pipes: [i.f],
                        styles: [".message-wrapper[_ngcontent-%COMP%]{margin:.7rem 0;display:flex}.message-wrapper.user[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{margin-right:1rem}.message-wrapper.admin[_ngcontent-%COMP%]{flex-direction:row-reverse}.message-wrapper.admin[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{margin-left:1rem}.message-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{flex-shrink:0;display:flex;flex-direction:row;justify-content:center;align-items:center;width:35px;height:35px;border-radius:50%;border:2px solid #7b8693}.message-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:50%}.message-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{background:#30333a;padding:.8rem;border-radius:10px;max-width:90%}.message-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%]{padding-bottom:.5rem;margin-bottom:.5rem;border-bottom:1px dashed hsla(0,0%,100%,.3);display:flex;flex-direction:row;justify-content:space-between;align-items:center}.message-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-right:1rem}.message-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;overflow:hidden}"],
                        changeDetection: 0
                    }), t
                }();

            function Et(t, e) {
                1 & t && a.Pb(0, "app-message", 10), 2 & t && a.uc("message", e.$implicit)
            }

            function Dt(t, e) {
                1 & t && a.Pb(0, "app-invalid-input-alert", 10), 2 & t && a.uc("message", "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")
            }

            function Ut(t, e) {
                1 & t && a.Pb(0, "app-invalid-input-alert", 10), 2 & t && a.uc("message", "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 " + e.ngIf.requiredLength + " \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")
            }

            function Nt(t, e) {
                if (1 & t && (a.Tb(0, "div", 11), a.Pc(1, Dt, 1, 1, "app-invalid-input-alert", 12), a.Pc(2, Ut, 1, 1, "app-invalid-input-alert", 12), a.Sb()), 2 & t) {
                    var n = e.ngIf;
                    a.Bb(1), a.uc("ngIf", n.required), a.Bb(1), a.uc("ngIf", n.maxlength)
                }
            }
            qt = $localize(Vt || (Vt = Object(C.f)([":\u241f63272194c0c817bfd712ad8821f1d2c95f02be41\u241f5496747411175799489:\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"], [":\u241f63272194c0c817bfd712ad8821f1d2c95f02be41\u241f5496747411175799489:\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"])));
            var Vt, Gt, Jt = function() {
                function t(t) {
                    this.submitted = new a.n, this.form = t.group({
                        message: ["", [Q.H.required, Q.H.maxLength(5e3)]]
                    })
                }
                return t.prototype.trackBy = function(t, e) {
                    return e.date
                }, t.prototype.sendMessage = function() {
                    this.form.valid && (this.submitted.emit(this.form.get("message").value), this.form.reset())
                }, t.\u0275fac = function(e) {
                    return new(e || t)(a.Ob(Q.g))
                }, t.\u0275cmp = a.Ib({
                    type: t,
                    selectors: [
                        ["app-active-ticket"]
                    ],
                    inputs: {
                        ticket: "ticket"
                    },
                    outputs: {
                        submitted: "submitted"
                    },
                    decls: 11,
                    vars: 5,
                    consts: [
                        [1, "active-ticket-wrapper"],
                        [1, "messages-wrapper"],
                        [3, "message", 4, "ngFor", "ngForOf", "ngForTrackBy"],
                        [1, "form-wrapper", 3, "formGroup", "submit"],
                        [1, "form-control", "message"],
                        ["for", "new-message"],
                        ["formControlName", "message", "id", "new-message", 1, "input"],
                        ["class", "error-message", 4, "ngIf"],
                        [1, "form-control", "button-wrapper"],
                        [1, "button", "button-fountain-blue", 3, "disabled"],
                        [3, "message"],
                        [1, "error-message"],
                        [3, "message", 4, "ngIf"]
                    ],
                    template: function(t, e) {
                        1 & t && (a.Tb(0, "div", 0), a.Tb(1, "div", 1), a.Pc(2, Et, 1, 1, "app-message", 2), a.Sb(), a.Tb(3, "form", 3), a.ic("submit", (function() {
                            return e.sendMessage()
                        })), a.Tb(4, "div", 4), a.Pb(5, "label", 5), a.Pb(6, "textarea", 6), a.Pc(7, Nt, 3, 2, "div", 7), a.Sb(), a.Tb(8, "div", 8), a.Tb(9, "button", 9), a.Xb(10, qt), a.Sb(), a.Sb(), a.Sb(), a.Sb()), 2 & t && (a.Bb(2), a.uc("ngForOf", e.ticket.attributes.messages)("ngForTrackBy", e.trackBy), a.Bb(1), a.uc("formGroup", e.form), a.Bb(4), a.uc("ngIf", e.form.get("message").touched && e.form.get("message").errors), a.Bb(2), a.uc("disabled", e.form.invalid))
                    },
                    directives: [i.s, Q.J, Q.u, Q.l, Q.d, Q.t, Q.j, i.t, Ht, zt.a],
                    styles: [".active-ticket-wrapper[_ngcontent-%COMP%]{background-color:#1c2024;padding:2rem}.error-message[_ngcontent-%COMP%]{position:static;margin:0}.form-wrapper[_ngcontent-%COMP%]   textarea.input[_ngcontent-%COMP%]{width:100%;min-height:130px;resize:none}.form-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin:1rem 0}.form-wrapper[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form-wrapper[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{padding:10px 40px}"],
                    changeDetection: 0
                }), t
            }();

            function Yt(t, e) {
                if (1 & t && (a.Tb(0, "option", 15), a.Rc(1), a.nc(2, "translate"), a.Sb()), 2 & t) {
                    var n = e.$implicit;
                    a.uc("value", n), a.Bb(1), a.Sc(a.oc(2, 2, "support.form.category." + n))
                }
            }

            function Xt(t, e) {
                if (1 & t && (a.Tb(0, "option", 15), a.Rc(1), a.nc(2, "translate"), a.Sb()), 2 & t) {
                    var n = e.$implicit;
                    a.uc("value", n), a.Bb(1), a.Sc(a.oc(2, 2, "support.form.game." + n))
                }
            }

            function Zt(t, e) {
                1 & t && a.Pb(0, "app-invalid-input-alert", 18), 2 & t && a.uc("message", "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")
            }

            function Kt(t, e) {
                1 & t && a.Pb(0, "app-invalid-input-alert", 18), 2 & t && a.uc("message", "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 " + e.ngIf.requiredLength + " \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")
            }

            function Wt(t, e) {
                if (1 & t && (a.Tb(0, "div", 16), a.Pc(1, Zt, 1, 1, "app-invalid-input-alert", 17), a.Pc(2, Kt, 1, 1, "app-invalid-input-alert", 17), a.Sb()), 2 & t) {
                    var n = e.ngIf;
                    a.Bb(1), a.uc("ngIf", n.required), a.Bb(1), a.uc("ngIf", n.maxlength)
                }
            }

            function te(t, e) {
                1 & t && a.Pb(0, "app-invalid-input-alert", 18), 2 & t && a.uc("message", "\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")
            }

            function ee(t, e) {
                1 & t && a.Pb(0, "app-invalid-input-alert", 18), 2 & t && a.uc("message", "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 " + e.ngIf.requiredLength + " \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")
            }

            function ne(t, e) {
                if (1 & t && (a.Tb(0, "div", 16), a.Pc(1, te, 1, 1, "app-invalid-input-alert", 17), a.Pc(2, ee, 1, 1, "app-invalid-input-alert", 17), a.Sb()), 2 & t) {
                    var n = e.ngIf;
                    a.Bb(1), a.uc("ngIf", n.required), a.Bb(1), a.uc("ngIf", n.maxlength)
                }
            }

            function ie(t, e) {
                if (1 & t && (a.Tb(0, "div", 5), a.Pb(1, "textarea", 19), a.nc(2, "translate"), a.Pc(3, ne, 3, 2, "div", 10), a.Sb()), 2 & t) {
                    var n = a.mc(2);
                    a.Bb(1), a.vc("placeholder", a.oc(2, 2, "support.form.text")), a.Bb(2), a.uc("ngIf", n.textFormControl.touched && n.textFormControl.errors)
                }
            }

            function oe(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Tb(0, "div", 20), a.Tb(1, "app-attach-image", 21), a.ic("imageSelected", (function(t) {
                        return a.Hc(n), a.mc(2).imageSelected(t)
                    })), a.Sb(), a.Sb()
                }
                if (2 & t) {
                    var i = a.mc(2);
                    a.Bb(1), a.uc("imageUrl", i.imageFormControl.value)("readonly", null == i.ticket ? null : null == i.ticket.attributes ? null : i.ticket.attributes.attachment)
                }
            }

            function re(t, e) {
                if (1 & t && (a.Tb(0, "div", 22), a.Tb(1, "button", 23), a.Xb(2, Gt), a.Sb(), a.Sb()), 2 & t) {
                    var n = a.mc(2),
                        i = a.Ec(1);
                    a.Bb(1), a.uc("disabled", i.submitted && n.form.invalid || n.formSubmitted)
                }
            }

            function ae(t, e) {
                if (1 & t && (a.Tb(0, "div", 4), a.Tb(1, "div", 5), a.Tb(2, "select", 6), a.Pc(3, Yt, 3, 4, "option", 7), a.Sb(), a.Sb(), a.Tb(4, "div", 5), a.Tb(5, "select", 8), a.Pc(6, Xt, 3, 4, "option", 7), a.Sb(), a.Sb(), a.Tb(7, "div", 5), a.Pb(8, "input", 9), a.nc(9, "translate"), a.Pc(10, Wt, 3, 2, "div", 10), a.Sb(), a.Pc(11, ie, 4, 4, "div", 11), a.Tb(12, "div", 12), a.Pc(13, oe, 2, 2, "div", 13), a.Pc(14, re, 3, 1, "div", 14), a.Sb(), a.Sb()), 2 & t) {
                    var n = a.mc();
                    a.Bb(2), a.Fb("disabled", !!n.ticket), a.Bb(1), a.uc("ngForOf", n.categoryList), a.Bb(2), a.Fb("disabled", !!n.ticket), a.Bb(1), a.uc("ngForOf", n.gameList), a.Bb(2), a.Fb("disabled", !!n.ticket), a.vc("placeholder", a.oc(9, 13, "support.form.title")), a.Bb(2), a.uc("ngIf", n.titleFormControl.touched && n.titleFormControl.errors), a.Bb(1), a.uc("ngIf", !n.ticket), a.Bb(2), a.uc("ngIf", !n.ticket || (null == n.ticket ? null : null == n.ticket.attributes ? null : n.ticket.attributes.attachment)), a.Bb(1), a.uc("ngIf", !n.ticket)
                }
            }

            function ce(t, e) {
                if (1 & t) {
                    var n = a.Ub();
                    a.Tb(0, "app-active-ticket", 24), a.ic("submitted", (function(t) {
                        return a.Hc(n), a.mc().sendMessage(t)
                    })), a.Sb()
                }
                if (2 & t) {
                    var i = a.mc();
                    a.uc("ticket", i.ticket)
                }
            }
            Gt = $localize(se || (se = Object(C.f)([":\u241fb33fc98124746144a274019e9ef6fc7a51a23219\u241f9031584173150505976:\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0438\u043a\u0435\u0442"], [":\u241fb33fc98124746144a274019e9ef6fc7a51a23219\u241f9031584173150505976:\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0438\u043a\u0435\u0442"])));
            var se, le = function() {
                function t(t, e, n) {
                    this.supportService = t, this.cd = e, this.categoryList = ["tech", "bug", "payment", "withdraw", "partner", "other"], this.gameList = ["cs", "dota2", "none"], this.loading = !0, this.formSubmitted = !1, this.triggerUpdate$ = new M.a(null), this.componentIsAlive$ = new o.a, this.form = n.group({
                        title: ["", [Q.H.required, Q.H.maxLength(255)]],
                        game: [this.gameList[0]],
                        category: [this.categoryList[0]],
                        text: ["", [Q.H.required, Q.H.maxLength(5e3)]],
                        img: [""]
                    })
                }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.triggerUpdate$.pipe(Object(r.a)(this.componentIsAlive$), Object(rt.a)((function() {
                        return t.supportService.getTicket()
                    })), Object(w.a)((function() {
                        return t.loading = !1
                    }))).subscribe((function(e) {
                        var n, i;
                        return t.setTicket(null === (i = null === (n = e) || void 0 === n ? void 0 : n.body) || void 0 === i ? void 0 : i.data)
                    }))
                }, t.prototype.imageSelected = function(t) {
                    this.form.patchValue({
                        img: t
                    })
                }, Object.defineProperty(t.prototype, "imageFormControl", {
                    get: function() {
                        return this.form.get("img")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "titleFormControl", {
                    get: function() {
                        return this.form.get("title")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "textFormControl", {
                    get: function() {
                        return this.form.get("text")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.createTicket = function() {
                    var t = this;
                    if (this.form.valid) {
                        this.formSubmitted = !0;
                        var e = {
                            category: this.form.get("category").value,
                            message: this.textFormControl.value,
                            title: this.titleFormControl.value,
                            attach: this.form.get("img").value,
                            game: this.form.get("game").value
                        };
                        this.supportService.createTicket(e).pipe(Object(x.a)(1)).subscribe((function(e) {
                            t.setTicket(e.body.data), t.formSubmitted = !1
                        }), (function() {
                            return t.formSubmitted = !1
                        }))
                    } else this.form.markAllAsTouched()
                }, t.prototype.sendMessage = function(t) {
                    var e = this;
                    this.supportService.sendNewMessage({
                        message: t
                    }).pipe(Object(x.a)(1)).subscribe((function(t) {
                        e.setTicket(t.body.data)
                    }))
                }, t.prototype.setTicket = function(t) {
                    this.ticket = t, t && this.form.patchValue({
                        title: t.attributes.title,
                        category: t.attributes.category,
                        game: t.attributes.game,
                        img: t.attributes.attachment
                    }), this.cd.markForCheck()
                }, t.prototype.ngOnDestroy = function() {
                    this.componentIsAlive$.next(), this.componentIsAlive$.complete()
                }, t.\u0275fac = function(e) {
                    return new(e || t)(a.Ob(Lt), a.Ob(a.h), a.Ob(Q.g))
                }, t.\u0275cmp = a.Ib({
                    type: t,
                    selectors: [
                        ["app-ssupport"]
                    ],
                    decls: 4,
                    vars: 3,
                    consts: [
                        [3, "formGroup", "submit"],
                        ["formRef", "ngForm"],
                        ["class", "create-ticket", 4, "ngIf"],
                        [3, "ticket", "submitted", 4, "ngIf"],
                        [1, "create-ticket"],
                        [1, "py10"],
                        ["id", "form_category", "formControlName", "category", 1, "input"],
                        [3, "value", 4, "ngFor", "ngForOf"],
                        ["id", "form_game", "formControlName", "game", 1, "input"],
                        ["type", "text", "id", "form_title", "name", "form_title", "formControlName", "title", 1, "input", 3, "placeholder"],
                        ["class", "error-message", 4, "ngIf"],
                        ["class", "py10", 4, "ngIf"],
                        [1, "form-footer"],
                        ["class", "image-select-wrapper", 4, "ngIf"],
                        ["class", "form-footer-btn", 4, "ngIf"],
                        [3, "value"],
                        [1, "error-message"],
                        [3, "message", 4, "ngIf"],
                        [3, "message"],
                        ["formControlName", "text", 1, "input", 3, "placeholder"],
                        [1, "image-select-wrapper"],
                        [3, "imageUrl", "readonly", "imageSelected"],
                        [1, "form-footer-btn"],
                        [1, "button", "button-fountain-blue", 3, "disabled"],
                        [3, "ticket", "submitted"]
                    ],
                    template: function(t, e) {
                        1 & t && (a.Tb(0, "form", 0, 1), a.ic("submit", (function() {
                            return e.createTicket()
                        })), a.Pc(2, ae, 15, 15, "div", 2), a.Sb(), a.Pc(3, ce, 1, 1, "app-active-ticket", 3)), 2 & t && (a.uc("formGroup", e.form), a.Bb(2), a.uc("ngIf", !e.loading), a.Bb(1), a.uc("ngIf", e.ticket))
                    },
                    directives: [Q.J, Q.u, Q.l, i.t, Q.F, Q.t, Q.j, i.s, Q.d, Q.y, Q.I, zt.a, Qt.a, Jt],
                    pipes: [b.e],
                    styles: [".py10[_ngcontent-%COMP%]{padding-top:.7rem}.error-message[_ngcontent-%COMP%]{position:static;margin:0}.create-ticket[_ngcontent-%COMP%]{background-color:#1c2024;padding:2rem}.create-ticket[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:100%}.create-ticket[_ngcontent-%COMP%]   .input.disabled[_ngcontent-%COMP%]{pointer-events:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.create-ticket[_ngcontent-%COMP%]   .input.disabled[_ngcontent-%COMP%]::-ms-expand{display:none}.create-ticket[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background-color:#30333a;color:inherit;width:100%!important}.create-ticket[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:130px;resize:none}.create-ticket[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.create-ticket[_ngcontent-%COMP%]   .form-footer[_ngcontent-%COMP%]   .form-footer-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 40px}.image-select-wrapper[_ngcontent-%COMP%]{min-width:200px;max-width:300px}"],
                    changeDetection: 0
                }), t
            }();
            n.d(e, "ProfileNewModule", (function() {
                return ue
            }));
            var pe = [{
                    path: "",
                    component: it,
                    children: [{
                        path: "inventory",
                        component: $
                    }, {
                        path: "history",
                        component: y
                    }, {
                        path: "quests",
                        component: Bt
                    }, {
                        path: "partnership",
                        component: L
                    }, {
                        path: "settings",
                        component: Ft
                    }, {
                        path: "support",
                        component: le
                    }, {
                        path: "",
                        pathMatch: "full",
                        redirectTo: "inventory"
                    }]
                }],
                ue = function() {
                    function t() {}
                    return t.\u0275mod = a.Mb({
                        type: t,
                        bootstrap: [$t.a]
                    }), t.\u0275inj = a.Lb({
                        factory: function(e) {
                            return new(e || t)
                        },
                        imports: [
                            [i.c, Q.D, Rt.a, B.g.forChild(pe), At.a, jt], B.g
                        ]
                    }), t
                }()
        }
    }
]);