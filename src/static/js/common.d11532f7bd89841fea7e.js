(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        FgVP: function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return f
            }));
            var i = a("VnD/"),
                n = a("xMyE"),
                o = a("t9fZ"),
                c = a("6V3w"),
                s = a("F/XL"),
                r = a("TYT/"),
                p = a("VG2l"),
                u = a("wYHs"),
                d = a("YZbJ"),
                l = a("/yY+"),
                b = a("yrzP"),
                f = function() {
                    function t(t, e, a, i, n) {
                        this.api = t, this.popupService = e, this.auth = a, this.analyticsService = i, this.inventoryFacade = n
                    }
                    return t.prototype.performAction = function(t, e, a, s) {
                        var r = this;
                        return "sell_immediately" === e ? this.openConfirmationDialog(t.asset_id, "sellImmediately", e, {
                            data: t.price.now
                        }, a, s).pipe(Object(i.a)((function(t) {
                            return !!t
                        })), Object(n.a)((function() {
                            return r.analyticsService.assetSoldImmediately(t, e)
                        }))) : "to_steam" === e ? this.auth.authUser$.pipe(Object(o.a)(1), Object(c.a)((function(a) {
                            return a.attributes.trade_link ? a.attributes.is_steam_move_accepted ? r.openConfirmationDialog(t.asset_id, "toSteam", e).pipe(Object(i.a)((function(t) {
                                return !!t
                            })), Object(n.a)((function(a) {
                                a.body.data && r.inventoryFacade.updateAsset({
                                    assetId: a.body.data.id,
                                    asset: {
                                        id: a.body.data.id,
                                        attributes: a.body.data.attributes
                                    }
                                }), r.analyticsService.assetRequestedToSteamWithdraw(t, e)
                            }))) : r.openConfirmationDialog(t.asset_id, "toSteamRules", e).pipe(Object(i.a)((function(t) {
                                return !!t
                            })), Object(n.a)((function() {
                                return r.analyticsService.assetRequestedToSteamWithdraw(t, e)
                            }))) : r.popupService.openDialog("tradeLinkPropose")
                        }))) : "exchange_asset" === e ? this.popupService.openDialog("toSteamExchange", {
                            data: {
                                item: t
                            }
                        }, {
                            width: "60rem"
                        }) : "take_away" === e ? this.openConfirmationDialog(t.asset_id, "takeAway", e).pipe(Object(i.a)((function(t) {
                            return !!t
                        })), Object(n.a)((function() {
                            return r.analyticsService.assetRequestedToTakeAway(t, e)
                        }))) : this.api.postObject([this.api.API_URLS.callAssetAction], {
                            data: {
                                asset_id: t.asset_id,
                                action: e
                            }
                        }).pipe(Object(i.a)((function(t) {
                            return !!t
                        })), Object(n.a)((function() {
                            return r.analyticsService.assetWithdrawn(t, e)
                        })))
                    }, t.prototype.openConfirmationDialog = function(t, e, a, i, n, r) {
                        var p = this;
                        return this.popupService.openDialog(e, i).pipe(Object(o.a)(1), Object(c.a)((function(e) {
                            return e ? p.api.postObject([p.api.API_URLS.callAssetAction], {
                                data: {
                                    asset_id: t,
                                    action: a,
                                    price: n,
                                    currency: r
                                }
                            }) : Object(s.a)(null)
                        })))
                    }, t.\u0275fac = function(e) {
                        return new(e || t)(r.ec(p.a), r.ec(u.a), r.ec(d.a), r.ec(l.a), r.ec(b.a))
                    }, t.\u0275prov = r.Kb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                }()
        }
    }
]);